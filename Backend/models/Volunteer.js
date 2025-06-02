const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  areaOfInterest: String,
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
