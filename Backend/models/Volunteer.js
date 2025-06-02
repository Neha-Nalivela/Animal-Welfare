const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },  // Changed from areaOfInterest/phone to message
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);
