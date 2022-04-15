const bcrypt = require('bcrypt');
const User = require('../models/user');

const SessionsController = {
  New: (req, res) => {
    res.render('sessions/new', {});
  },

  Create: (req, res) => {
    console.log('trying to log in');
    const email = req.body.email;
    const plainTextPassword = req.body.password;

    User.findOne({ email: email }).then((user) => {
      //move this line inside of the else below or it will break when it doesn't find a user
      const hashedPassword = user.password;

      if (!user) {
        res.redirect('/sessions/new');
        console.log('Unsuccessful login!');
      } else {
        bcrypt.compare(plainTextPassword, hashedPassword, (err, result) => {
          if (result) {
            console.log('Successfully logged in!');
            req.session.user = user;
            res.redirect('/posts');
          } else {
            console.log(err);
            res.redirect('/sessions/new');
            console.log('Unsuccessful login!');
          }
        });
      }

      // if (!user) {
      //   res.redirect('/sessions/new');
      //   console.log('Unsuccessful login!');
      // } else if (user.password != plainTextPassword) {
      //   res.redirect('/sessions/new');
      // } else {
      //   console.log('Successfully logged in!');
      //   req.session.user = user;
      //   res.redirect('/posts');
      // }
    });
  },

  Destroy: (req, res) => {
    console.log('logging out');
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
    }
    res.redirect('/sessions/new');
  },
};

module.exports = SessionsController;
