const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A car should have a name']
    },
    image: {
        type: String,
        required: [true, 'Enter car image url']
    },
    fuel: {
        type: String,
        required: [true, 'Fuel type is necessary']
    },
    rent: {
        type: Number,
        required: [true, 'Rent per day is required']
    },
    owner_id: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Cars = mongoose.model('car', carSchema);

module.exports = Cars;