const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const carRouter = require('./routes/carRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const bookingRouter = require('./routes/bookingRoutes.js');

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

app.use('/api/v1/cars', carRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/bookings', bookingRouter);

module.exports = app;