const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  address: String,
  message: String,
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
