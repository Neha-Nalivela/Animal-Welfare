const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  website: String,
});

module.exports = mongoose.model("Hospital", HospitalSchema);
