// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../contrllers/authcontrol');
const { validateRegistration, validateLogin } = require('../utils/validation'); // Assuming validation.js has these
const router = express.Router();

router.post('/register', validateRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;
