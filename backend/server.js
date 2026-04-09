const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy compatibility API (F08 needs this)
app.get("/api/compatibility/:candidateId/:jobId", (req, res) => {
  res.json({ score: 84 }); // you can change value
});

// Start server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});