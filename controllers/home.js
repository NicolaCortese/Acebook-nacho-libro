const Post = require("../models/post");

const HomeController = {
  Index: (req, res) => {
    Post.find((posts) => {
      res.render("home/index", { title: "Acebook", posts: "ha" + posts });
    });
  },
};

module.exports = HomeController;
