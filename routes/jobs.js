const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res, next) => {
  console.log("===== jobs!!======");
  axios
    .get(
      "https://jobs.github.com/positions.json?description=python&location=new+york"
    )
    .then(response => {
      console.log("sending JSON response");
      console.log(response.data);
      res.json(response.data);
    });
});

module.exports = router;
