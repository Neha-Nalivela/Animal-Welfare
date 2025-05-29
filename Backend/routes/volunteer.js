const express = require('express');
const Volunteer = require('../models/Volunteer');
const router = express.Router();

router.post('/', async (req, res) => {
  const newVolunteer = new Volunteer(req.body);
  await newVolunteer.save();
  res.json({ msg: 'Volunteer registered successfully' });
});

module.exports = router;
