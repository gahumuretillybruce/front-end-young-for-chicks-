const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Young4ChickS' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// More routes to be added here (contact, login, signup, dashboard, etc.)

module.exports = router;
