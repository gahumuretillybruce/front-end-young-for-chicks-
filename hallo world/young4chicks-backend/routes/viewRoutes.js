const express = require('express');
const router = express.Router();

// Static page views
router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));
router.get('/chickrequest', (req, res) => res.render('chickrequest'));

// Dashboards
router.get('/manager-dashboard', (req, res) => res.render('dashboard-manager'));
router.get('/sales-dashboard', (req, res) => res.render('dashboard-sales'));

module.exports = router;
