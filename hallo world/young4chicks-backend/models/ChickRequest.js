const mongoose = require('mongoose');

const chickRequestSchema = new mongoose.Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'YoungFarmer', required: true },
  numberOfChicks: { type: Number, required: true },
  chickType: { type: String, enum: ['broiler', 'layer'], required: true },
  breed: { type: String, required: true }, // local/exotic
  farmerType: { type: String, enum: ['starter', 'returning'], required: true },
  status: { type: String, enum: ['pending', 'approved', 'completed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('ChickRequest', chickRequestSchema);
