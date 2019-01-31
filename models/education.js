const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const EducationSchema = new Schema({
  userId: { type: String, required: true },
  location: { type: String, required: false },
  school: { type: String, required: false },
  degree: { type: String, required: false },
  gradyear: { type: Number, required: false },
  otheredu: { type: String, required: false },
  awards: { type: String, required: false },
  skills: { type: Array, required: false },
  publicId: { type: String, required: false },
  job: { type: String, required: false },
  jobtitle: { type: String, required: false },
  timewith: { type: Number, required: false },
  duties: { type: String, required: false },
  links: { type: Array, required: false }
});
const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;
