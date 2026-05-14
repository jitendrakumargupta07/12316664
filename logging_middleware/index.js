const express = require("express");
require("dotenv").config();

const Log = require("./logger");

const app = express();

app.get("/", async (req, res) => {
  await Log("backend", "info", "route", "Root route called");

  res.json({
    success: true,
    message: "Logging middleware working",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await Log("backend", "info", "server", `Server started on port ${PORT}`);

  console.log(`Server running on port ${PORT}`);
});