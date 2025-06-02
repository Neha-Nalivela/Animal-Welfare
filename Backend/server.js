import express from 'express'
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/auth');
const volunteerRoutes = require('./routes/volunteer');
const feedbackRoutes = require('./routes/feedback');
const hospitalRoutes = require('./routes/hospital');

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:5501'
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/volunteer', volunteerRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/hospitals', hospitalRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
