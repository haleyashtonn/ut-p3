const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const jobRoutes = require("./jobs");
const educationRoutes = require("./education");
router.use("/education", educationRoutes);
// Job Routes
router.use("/jobs", jobRoutes);

// User Routes
router.use("/user", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
