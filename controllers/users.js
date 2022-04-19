<<<<<<< HEAD
const bcrypt = require("bcrypt");
const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
=======
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Post = require('../models/post')


const UsersController = {
  New: (req, res) => {
    console.log(req.session.user)
    res.render('users/new', {});
>>>>>>> main
  },

  Create: async (req, res) => {
    const user = new User(req.body);

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // Redirect to the same page when fields are empty.
    if (!user.username || !user.email || !user.password) {
      req.session.message = {
        type: "danger",
        message: "Empty fields! Please insert all the information.",
      };
      res.redirect("/users/new");
    } else {
      const usernameAlreadyExists = await User.findOne({
        username: req.body.username,
      });

      const emailAlreadyExists = await User.findOne({
        email: req.body.email,
      });

      if (emailAlreadyExists) {
        req.session.message = {
          type: "danger",
          message: "This email already exists! Would you like to sign in?",
        };
        res.redirect("/users/new");
      } else if (usernameAlreadyExists) {
        req.session.message = {
          type: "danger",
          message:
            "This username is already taken! Please choose another username.",
        };
        res.redirect("/users/new");
      } else {
        req.session.message = {
          type: "success",
          message: "You are now registered! Please sign in.",
        };
        console.log("creating a new user");
        console.log(`User information: ${user}`);
        user.save((err) => {
          if (err) {
            throw err;
          }
          res.status(201).redirect("/sessions/new");
        });
      }
    }
  },
  Profile: (req, res) => {
    const user = req.session.user.username
    Post.find({'author.username': user}, (err, posts) => {   
    res.render("users/profile", {posts: posts});
  }) 
 },

};

module.exports = UsersController;
