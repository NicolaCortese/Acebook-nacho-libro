const bcrypt = require("bcrypt");
const User = require("../models/user");

const SessionsController = {
  New: (req, res) => {
    res.render("sessions/new", {});
  },

  Create: (req, res) => {
    const email = req.body.email;
    const plainTextPassword = req.body.password;

    User.findOne({ email: email }).then((user) => {
      if (!user) {
        res.redirect("/sessions/new");
      } else {
        const hashedPassword = user.password;
        bcrypt.compare(plainTextPassword, hashedPassword, (err, result) => {
          if (result) {
            req.session.message = {
              type: "success",
              message: "Successfully logged in!",
            };
            req.session.user = user;
            res.redirect("/posts");
          } else {
            req.session.message = {
              type: "danger",
              message:
                "Unsuccessful login! Please check your email or password.",
            };
            res.redirect("/sessions/new");
          }
        });
      }
    });
  },

  Destroy: (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    res.redirect("/sessions/new");
  },
};

module.exports = SessionsController;
