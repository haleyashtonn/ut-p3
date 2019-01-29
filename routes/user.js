const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("../passport");

router.post("/", (req, res) => {
  console.log("user signup");
  console.log(req.body);
  const { username, password, fullname, email } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      console.log("creating new user");
      const newUser = new User({
        username: username,
        password: password,
        email: email,
        fullname: fullname
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    console.log("routes/user.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("logged in", req.user);

    var userInfo = {
      // username: req.user.username
      ...req.user
    };
    res.send(userInfo);
  }
);

router.post("/logout", (req, res) => {
  console.log("logging out, printing req.user:");
  console.log(req.user);
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
    // User.findOne({ _id: req.user._id })
    // .populate("education").then(function(data){

    //   console.log("edu"+data)
    //   res.json(user)
    // })
  } else {
    res.json({ user: null });
  }
});

router.get("/user/:id", (req, res) => {
  console.log("route user id hit");
  console.log(req);
});

module.exports = router;
