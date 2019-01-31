const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const JobsSchema = new Schema({
  userId: { type: String, required: true },
  company: { type: String, required: false },
  title: { type: String, required: false },
  link: { type: String, required: false }
});
const Jobs = mongoose.model("Job", JobsSchema);
module.exports = Jobs;
