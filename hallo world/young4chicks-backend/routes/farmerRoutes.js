const express = require('express');
const router = express.Router();
const { registerFarmer } = require('../controllers/FarmerController');

// Route to register a farmer
router.post('/signup', registerFarmer);

module.exports = router;
