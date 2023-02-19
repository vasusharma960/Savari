import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import BookingCar from './pages/bookingCar';
import Bookings from './pages/bookings';
import AddCar from './pages/addCar';
import EditCar from './pages/editCar';
import ChangeCar from './pages/changeCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/home' element={<ProtectedRoute to={ <Home />} />} />
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
