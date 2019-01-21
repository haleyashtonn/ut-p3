const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const jobRoutes = require("./jobs");

// API Routes
router.use("/api", apiRoutes);

// Job Routes
router.use("/jobs", jobRoutes);

// User Routes
router.use("/user", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
