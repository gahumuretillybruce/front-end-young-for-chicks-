const bcrypt = require('bcryptjs');
const YoungFarmer = require('../models/YoungFarmer');

exports.registerFarmer = async (req, res) => {
  try {
    const { name, age, gender, contact, recommenderName, recommenderNIN, farmerNIN, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFarmer = new YoungFarmer({
      name,
      age,
      gender,
      contact,
      recommenderName,
      recommenderNIN,
      farmerNIN,
      email,
      password: hashedPassword,
    });

    await newFarmer.save();
    res.status(201).json({ message: 'Farmer registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
