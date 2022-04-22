const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  coverPhoto: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  livesIn: {
    type: String,
  },
  worksAt: {
    type: String,
  },
  hobbies: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
