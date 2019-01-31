const express = require("express");
const router = express.Router();
const axios = require("axios");
const Education = require("../models/education");
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log("Post profile route hit" + req.body);
  // res.json(req.body);

  User.findOneAndUpdate(
    {
      _id: req.body.userId
    },
    {
      education: req.body.education
    },
    {
      returnNewDocument: true
    },
    (err, stuff) => {
      console.log("profile_cb", stuff);
    }
  )
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});
router.get("/", function(req, res) {
  User.find({
    _id: req.params.id
  })
    //   .populate("education")
    .then(function(dbEDU) {
      console.log(dbEDU);
      res.json(dbEDU);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
