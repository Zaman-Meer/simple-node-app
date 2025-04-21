const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Info endpoint
app.get("/info", (req, res) => {
  res.status(200).json({
    service: "simple-node-app",
    version: "1.0.0",
    nodeVersion: process.version,
    platform: process.platform,
    // hostname: os.hostname(),
    // uptime: process.uptime(),
    // memoryUsage: process.memoryUsage(),
    // cpus: os.cpus().length,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
