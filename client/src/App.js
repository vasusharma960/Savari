import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Bookcar from './components/Bookcar/bookcar';
import './App.css';
import Login from './components/Login/login';
import Register from './components/Register/register';
import BookingCar from './components/BookingCar/bookingCar';
import Bookings from './components/Bookings/bookings';
import AddCar from './components/Edit/addCar';
import EditCar from './components/Edit/editCar';
import ChangeCar from './components/Edit/changeCar';
import Dashboard from './components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/dashboard' element={<ProtectedRoute to={ <Dashboard /> } />} />
          <Route exact path='/bookcar' element={<ProtectedRoute to={ <Bookcar />} />} />
          <Route exact path='/bookcar/:carid' element={<ProtectedRoute to={<BookingCar />} />} />
          <Route exact path='/bookings' element={<ProtectedRoute to={<Bookings />} />} />
          <Route exact path='/addcar' element={<ProtectedRoute to={<AddCar />} />} />
          <Route exact path='/editcar' element={<ProtectedRoute to={<EditCar />} />} />
          <Route exact path='/editcar/:carid' element={<ProtectedRoute to={<ChangeCar />} />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if (!sessionStorage.getItem('id')) {
    return <Navigate to='/' replace />
  } else {
    return props.to;
  }
}
