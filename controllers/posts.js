const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }

      res.render("posts/index", { posts: posts });
    });
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.user_id = req.session.user;
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },
  Like: (req, res) => {
    const action = req.body.action;
    const user_id = req.session.user;
    Post.updateOne(
      { _id: req.params.id },
      { $push: { likes: "ha" } },
      {},
      (err, numberAffected) => {
        res.send('hi');
      }
    );
  },
};

module.exports = PostsController;
