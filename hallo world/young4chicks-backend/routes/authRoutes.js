const express = require('express');
const router = express.Router();
const { loginFarmer } = require('../controllers/authController');

// POST /api/auth/login
router.post('/login', loginFarmer);

module.exports = router;
