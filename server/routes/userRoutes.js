const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router
    .route('/login')
    .post(userController.getUser);
    

router
    .route('/register')
    .post(userController.registerUser);

module.exports = router;