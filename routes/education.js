const express = require("express");
const router = express.Router();
const axios = require("axios");
const Education = require("../models/education");
const User = require("../models/user");

router.post("/", (req, res) => {
  console.log("route hit" + req.body);
  const dbEDU = req.body;
  // res.json(req.body);

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@\n" + dbEDU);
  console.log("BodyMovin" + req.userId);
  User.findOneAndUpdate(
    {
      _id: dbEDU.userId
    },
    {
      education: dbEDU
    },
    {
      returnNewDocument: true
    },
    (err, stuff) => {
      console.log("profile_cb", stuff);
    }
  )
    .then(function(data) {
      console.log("this" + data);
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
