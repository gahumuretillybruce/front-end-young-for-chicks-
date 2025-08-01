const mongoose = require('mongoose');

const youngFarmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18, max: 30, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  contact: { type: String, required: true },
  recommenderName: { type: String, required: true },
  recommenderNIN: { type: String, required: true },
  farmerNIN: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('YoungFarmer', youngFarmerSchema);
