const bcrypt = require('bcryptjs');
const YoungFarmer = require('../models/YoungFarmer');

// Login controller
const loginFarmer = async (req, res) => {
  const { email, password } = req.body;

  try {
    //  1. Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // 2. Normalize email
    const farmer = await YoungFarmer.findOne({ email: email.toLowerCase() });
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    //  3. Compare password
    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    //  4. Return basic info (no password)
    const { name, contact, age, gender, farmerNIN } = farmer;
    res.status(200).json({
      message: 'Login successful',
      farmer: { name, email: farmer.email, contact, age, gender, farmerNIN }
    });
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginFarmer };
