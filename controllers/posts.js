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
    const user = req.session.user;
    post.author = { username: user.username, profilePic: user.profilePic };
    post.save((err) => {
      if (err) {
        throw err;
      }

      res.status(201).redirect("/posts");
    });
  },

  Like: (req, res) => {
    const post_id = req.body.post_id;
    const user = req.session.user;

    Post.updateOne(
      { _id: post_id },
      { $push: { likes: user.username } },
      () => {
        res.send("Like went through to the server");
      }
    );
  },

  Unlike: (req, res) => {
    const post_id = req.body.post_id;
    const user = req.session.user;

    Post.updateOne(
      { _id: post_id },
      { $pull: { likes: user.username } },
      () => {
        res.send("User was removed from the likes");
      }
    );
  },
};

module.exports = PostsController;
