const Cars = require('../models/carsModel.js');

exports.getAllCars = (async (req, res) => {
    try{
        const cars = await Cars.find();
        res.send(cars);
    }catch(err){
        return res.status(404).json(err);
    }
});

exports.addNewCar = async (req, res) => {
    try {
        const newCar = new Cars(req.body);
        await newCar.save();
        res.status(200).send('New Car Added Successfully');
    } catch (err) {
        return res.status(400).json("Error Occured Please Try Again Later");
    }
}


exports.editCar = async (req, res) => {
    const { _id, name, image, fuel, rent } = req.body;
    try {
        await Cars.findByIdAndUpdate(_id, { name, image, fuel, rent });
        return res.status(200).send("Car Details Updated Successfully");
    } catch (err) {
        return res.status(400).send('Error Occurred In Updating Details');
    }
}

exports.deleteCar = async (req, res) => {
    const { car_id } = req.params;
    
    try {
        await Cars.findByIdAndDelete(car_id);
        return res.status(200).send('Car Deleted Successfully')
    } catch (err) {
        return res.status(400).send('Error Occurred In Updating Details');
    }
}