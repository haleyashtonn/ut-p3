const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res, next) => {
  console.log("===== jobs!!======");

  let search = `https://jobs.github.com/positions.json?title=${
    req.query.job
  }&location=${req.query.where}`;
  axios.get(search).then(response => {
    console.log("jobs.js: sending JSON response");
    console.log(response.data);
    res.json(response.data);
  });
});

module.exports = router;
