const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  education: { type: Array, required: false },
  date: { type: Date, default: Date.now },
  email: { type: String, required: false },
  photoUrl: { type: String, required: false },
  fullname: { type: String, required: false },
  location: { type: String, required: false },
  publicId: { type: String, required: false },
  url: { type: String, required: false },

  job: { type: String, required: false },
  jobtitle: { type: String, required: false },
  timewith: { type: Number, required: false },
  duties: { type: String, required: false },

  school: { type: String, required: false },
  degree: { type: String, required: false },
  gradyear: { type: Number, required: false },
  otheredu: { type: String, required: false },
  awards: { type: String, required: false },
  skills: { type: Array, required: false },
  Links: { type: Array, required: false }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
