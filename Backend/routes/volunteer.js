const express = require("express");
const Volunteer = require("../models/Volunteer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer form submitted" });
  } catch (err) {
    res.status(500).json({ message: "Error submitting volunteer form" });
  }
});

router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching volunteers" });
  }
});

module.exports = router;
