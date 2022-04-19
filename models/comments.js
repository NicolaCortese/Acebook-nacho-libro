const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
      author: String,
      message: String,
      timestamp: Date,
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;