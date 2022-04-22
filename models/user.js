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
  profilePic: String,
  coverPhoto: String,
  birthday: Date,
  livesIn: String,
  worksAt: String,
  hobbies: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
