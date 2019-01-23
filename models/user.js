const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  
  date: { type: Date, default: Date.now },
  email: { type: String, required: true },
  photoUrl:{type: String, required: false},
  fullName:{type: String, required: false},
  location:{type: String, required: false},
  publicId:{type: String, required: false},
  url:{type:String, required: false},

  job:{type:String, required: false},
  jobtitle:{type:String, required: false},
  timewith:{type:Number, required: false},
  duties:{type:String, required: false},

  school:{type:String, required: false},
  degree:{type:String, required: false},
  gradyear:{type:Number, required: false},
  otheredu:{type:String, required: false},
  awards:{type:String, required: false},
  skills:{type:Array, required: false},
  Links:{type:Array, required: false},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
