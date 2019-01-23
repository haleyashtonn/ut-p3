const router = require("express").Router();
const bookRoutes = require("./user");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
