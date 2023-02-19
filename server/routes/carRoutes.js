const express = require('express');
const carController = require('../controllers/carController.js');

const router = express.Router();

router
    .route('/')
    .get(carController.getAllCars)
    .post(carController.addNewCar);

router
    .route('/editcar')
    .patch(carController.editCar);

router
    .route(`/editcar/:car_id`)
    .delete(carController.deleteCar);

module.exports = router;