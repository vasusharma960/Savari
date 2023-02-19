const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    car_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Bookings = mongoose.model('booking', bookingSchema);

module.exports = Bookings;