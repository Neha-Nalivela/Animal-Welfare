const express = require('express');
const Hospital = require('../models/Hospital');
const router = express.Router();

// Add hospital
router.post('/', async (req, res) => {
  const newHospital = new Hospital(req.body);
  await newHospital.save();
  res.json({ msg: 'Hospital added successfully' });
});

// Get all hospitals
router.get('/', async (req, res) => {
  const hospitals = await Hospital.find();
  res.json(hospitals);
});

module.exports = router;
