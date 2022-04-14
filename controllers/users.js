const User = require('../models/user');

const UsersController = {
  New: (req, res) => {
    res.render('users/new', {});
  },

  Create: async (req, res) => {
    // console.log(req.body);
    const user = new User(req.body);

    // Stay on the same page when fields are empty.
    if (!user.username || !user.email || !user.password) {
      console.log('Please fill in all fields.');
      res.redirect('/users/new');
    } else {
      const usernameAlreadyExists = await User.findOne({
        username: req.body.username,
      });

      const emailAlreadyExists = await User.findOne({
        email: req.body.email,
      });

      // const userAlreadyExists = await User.find({
      //   $or: [{ email: req.body.email }, { username: req.body.username }],
      // });

      if (emailAlreadyExists) {
        console.log('This email already exists. Would you like to sign in?');
        res.redirect('/users/new');
      } else if (usernameAlreadyExists) {
        console.log('This username is already taken.');
        res.redirect('/users/new');
      } else {
        console.log('creating a new user');
        console.log(`User information: ${user}`);
        user.save((err) => {
          if (err) {
            throw err;
          }
          res.status(201).redirect('/posts');
        });
      }
    }
  },
};

module.exports = UsersController;
