const express = require("express");
const Hospital = require("../models/Hospital");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: "Error fetching hospitals" });
  }
});

module.exports = router;
