const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/profile/", (req, res) => {
  console.log("route hit");
  User.findByIdAndUpdate(
    { _id: req.params._id },
    {
      school: req.params.school,
      degree: req.params.degree,
      graduated: req.params.graduated,
      otherEdu: req.params.otherEdu,
      awards: req.params.awards,
      skills: req.params.skills,
      job: req.params.job,
      jobtitle: req.params.jobtitle,
      timewith: req.params.timewith,
      duties: req.params.duties,
      links: req.params.links,
      publicId: req.params.publicId,
      location: req.params.location
    },
    { new: true },
    (err, user) => {
      console.log("route hit");
      console.log(user);
    }
  );
});
module.exports = router;
