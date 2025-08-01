const mongoose = require('mongoose');

const chickStockSchema = new mongoose.Schema({
  type: { type: String, enum: ['broiler', 'layer'], required: true },
  breed: { type: String, required: true }, // local/exotic
  quantity: { type: Number, required: true },
  ageInDays: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('ChickStock', chickStockSchema);
