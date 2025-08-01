const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.send('Stock route working');
});

module.exports = router;
