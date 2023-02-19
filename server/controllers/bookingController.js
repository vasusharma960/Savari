const Booking = require('../models/bookingsModel.js');
const Cars = require('../models/carsModel.js');
const Car = require('../models/carsModel.js');

exports.bookCar = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();

        res.status(200).send('Car Booked Successfully');
    } catch (err) {
        return res.status(400).json(err);
    }
}

exports.getBookings = async (req, res) => {
    const { user_id } = req.body;
    try {
        const bookings = await Booking.find({ user_id });
        const cars = await Cars.find();

        let userBookings = [];

        for (let i = 0; i < bookings.length; i++){
            for (let j = 0; j < cars.length; j++){
                if (bookings[i].car_id === cars[j].id) {
                    userBookings.push({...cars[j]._doc, booking_id: bookings[i].id, from: bookings[i].from, to: bookings[i].to});
                }
            }
        }
        res.status(200).send(userBookings);
    } catch (err) {
        return res.status(404).json(err);
    }
}

exports.getBooking = async (req, res) => {
    const { carid } = req.params;

    try {
        const bookings = await Booking.find({car_id: carid});

        if (bookings) {
            res.status(200).send(bookings);
        } else {
            return res.status(404).send("No Bookings Available");
        }
    } catch (err) {
        return res.status(400).send("An Error Occurred");
    }
}