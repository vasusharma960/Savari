const express = require('express');
const bookingController = require('../controllers/bookingController.js');

const router = express.Router();

router
    .route('/')
    .post(bookingController.getBookings);

router
    .route('/bookCar')
    .post(bookingController.bookCar);

router
    .route('/:carid')
    .get(bookingController.getBooking);

module.exports = router;