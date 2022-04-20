const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
  image_url: String,
  timestamp: { type : Date, default: Date.now },
  author: Object,
  likes: Array,
  comments: [{
    message: String,
    author: String,
    timestamp: { type : Date, default: Date.now }
  }]
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
