const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/user");

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

router.post("/", (req, res) => {
  console.log("SavedPost profile route hit" + req.body);
  console.log("ID" + req.body._id);
  res.json(req.body);

  User.findOneAndUpdate(
    {
      _id: req.body.userId
    },
    {
      jobs: {
        company: req.body.company,
        title: req.body.title,
        link: req.body.href
      }
    },
    (err, stuff) => {}
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
