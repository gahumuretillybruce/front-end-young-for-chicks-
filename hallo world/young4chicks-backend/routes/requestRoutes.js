const express = require('express');
const router = express.Router();
const { createRequest } = require('../controllers/requestController');

// Create a new chick request
router.post('/new', createRequest);

// Test route
router.get('/', (req, res) => {
  res.send('Request route working');
});

module.exports = router;
