const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: String,
  location: String,
  contact: String,
});

module.exports = mongoose.model('Hospital', hospitalSchema);
