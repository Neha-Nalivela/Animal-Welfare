const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
//app.use(express.static("public")); // serve frontend files

const data = {
  hospitals: [
    {
      name: "Apollo Hospital",
      address: "Hyderabad",
      contact: "+91-4223554959",
      distance: "23km"
    },
    {
      name: "Raghavendra Hospital",
      address: "Hyderabad",
      contact: "+91-44-22854999",
      distance: "15km"
    }
  ],
  organizations: ["Animal Aid", "Blue Cross", "Stray Care"],
  donation: ["UPI: animal@upi", "Bank: 123456789"],
  adoption: ["Dog - Bruno", "Cat - Whiskers"],
  volunteers: ["John", "Ayesha", "Mark"],
  feedback: ["Great work!", "Add more shelters nearby."]
};

app.get("/api/:type", (req, res) => {
  const type = req.params.type;
  if (data[type]) {
    res.json(data[type]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
