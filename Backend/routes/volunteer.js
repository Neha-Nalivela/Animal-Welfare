const express = require("express");
const Volunteer = require("../models/Volunteer");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newVolunteer = new Volunteer({ name, email, message });
    await newVolunteer.save();

    res.status(201).json({ message: "Volunteer form submitted" });
  } catch (err) {
    console.error(err);
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
