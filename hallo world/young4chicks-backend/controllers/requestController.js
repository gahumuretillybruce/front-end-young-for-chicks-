const ChickRequest = require('../models/ChickRequest');
const YoungFarmer = require('../models/YoungFarmer');

// POST /api/requests/new
exports.createRequest = async (req, res) => {
  const { email, numberOfChicks, chickType, breed, farmerType } = req.body;

  try {
    // 1. Validate input
    if (!email || !numberOfChicks || !chickType || !breed || !farmerType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 2. Find the farmer using email
    const farmer = await YoungFarmer.findOne({ email: email.toLowerCase() });
    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found. Make sure you signed up first.' });
    }

    // 3. Create and save the request
    const request = new ChickRequest({
      farmer: farmer._id,
      numberOfChicks,
      chickType,
      breed,
      farmerType,
    });

    await request.save();
    res.status(201).json({ message: 'Chick request submitted successfully' });

  } catch (err) {
    console.error('Error creating chick request:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
