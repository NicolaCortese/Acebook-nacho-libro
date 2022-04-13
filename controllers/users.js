const User = require('../models/user');

const UsersController = {
  New: (req, res) => {
    res.render('users/new', {});
  },

  Create: async (req, res) => {
    // console.log(req.body);
    const user = new User(req.body);

    // Return when the fields are empty
    if (user.username === '' || user.email === '' || user.password === '') {
      console.log('Enter the name or password.');
      res.redirect('/users/new');
    } else {
      const userAlreadyExists = await User.find({
        $or: [{ email: req.body.email }, { username: req.body.username }],
      });

      console.log(userAlreadyExists);
      if (userAlreadyExists) {
        console.log('This user already exists');
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
