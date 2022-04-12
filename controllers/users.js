const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    console.log("creating a new user");
    console.log(req.body);
    const user = new await User(req.body);
    const duplicate = User.exists({ name: req.body.email });
    
    console.log(duplicate);

    // console.log(user);
    user.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
