const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

router.post('/', async (req, res) => {
  const newFeedback = new Feedback(req.body);
  await newFeedback.save();
  res.json({ msg: 'Feedback submitted successfully' });
});

module.exports = router;
