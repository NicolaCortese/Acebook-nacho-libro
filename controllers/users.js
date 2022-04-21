const bcrypt = require("bcrypt");
const User = require("../models/user");
const Post = require("../models/post");

const UsersController = {
  New: (req, res) => {
    console.log(req.session.user);
    res.render("users/new", {});
  },

  Create: async (req, res) => {
    // console.log(req.body);
    const user = new User(req.body);

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // Stay on the same page when fields are empty.
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
          message: "You are now registered! Please edit your profile.",
        };
        console.log(`User information: ${user}`);
        user.save((err) => {
          if (err) {
            throw err;
          }
          res.status(201).redirect(`/users/${user.username}/settings`);
        });
      }
    }
  },
  Profile: (req, res) => {
    const username = req.params.username;
    User.findOne({ username: username }, (err, user) => {
      if (user) {
        Post.find({ "author.username": username }, (err, posts) => {
          res.render("users/profile", { profile: {posts: posts, user: user} });
        });
      } else {
        //user not found
        const error = {
          status: `The user "${username}" has not been found`,
        };
        res.render("error", { error: error });
      }
    });
  },

  Settings: (req, res) => {
    console.log("User settings running...");
    const username = req.params.username;

    res.render("users/settings", { username: username });
  },

  Update: (req, res) => {
    const username = req.params.username;
    const userInfo = req.body;
    console.log(userInfo);
    User.updateOne(
      { username: username },
      {
        $set: {
          profilePic: userInfo.profilePic,
          coverPhoto: userInfo.coverPhoto,
          birthday: userInfo.birthday,
          livesIn: userInfo.livesIn,
          worksAt: userInfo.worksAt,
          hobbies: userInfo.hobbies,
        },
      },
      () => {
        req.session.message = {
          type: "success",
          message: "Thanks for adding the info! Please sign in.",
        };
        console.log("Update is running...");
        res.redirect("/sessions/new");
      }
    );
  },
};

module.exports = UsersController;
