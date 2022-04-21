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

  Edit: (req, res) => {
    const post_id = req.params.id;
    Post.find({_id: post_id}, (err, post) => {
      if (err) {
        throw err;
      }

      res.render("posts/edit", { post: post[0] });
    });
  },

  Save: (req, res) => {
    const post_id = req.params.id;
    const post = req.body;
    Post.updateOne(
      { _id: post_id },
      { $set: { message: post.message, image_url: post.image } },
      () => {
        res.redirect("..");
      }
    );
  },

  Delete: (req, res) => {
    const post_id = req.params.id
    console.log(post_id)
    Post.deleteOne({ _id: post_id }, () => {
      res.redirect("..");
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
  Comment: async (req, res) => {
    const post_id = req.body.post_id;
    const text = req.body.text
    const user = req.session.user;
   
    let result = await Post.findOneAndUpdate(
      { _id: post_id },
      { $push: { comments: {author: user.username, message: text}} },
      {
        new: true,
      }
    );
    res.send(result);
  }
};

module.exports = PostsController;
