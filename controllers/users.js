const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: async (req, res) => {
    console.log("creating a new user");
    console.log(req.body);
    const user = new User(req.body);
    const duplicate = await User.exists({ email: req.body.email });

    if (duplicate) {
      console.log("this email already exists");
      res.redirect("/users/new");
    } else {
      // console.log(user);
      user.save((err) => {
        if (err) {
          throw err;
        }
        res.status(201).redirect("/posts");
      });
    }
  },
};

module.exports = UsersController;
