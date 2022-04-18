const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const Post = require("../../models/post");

const seedDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1/acebook_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await User.deleteMany({});
  await Post.deleteMany({});

  const batman = new User({
    email: "batman@example.com",
    password: "password",
    username: "batman",
    profilePic: "https://picsum.photos/200"
  });

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  batman.password = await bcrypt.hash(batman.password, salt);

  await batman.save();

  const joker = new User({
    email: "joker@example.com",
    password: "password",
    username: "joker",
    profilePic: "https://picsum.photos/200"
  });

  // Hash the password
  joker.password = await bcrypt.hash(joker.password, salt);

  await joker.save();

  const post1 = new Post({
    message:
      "It's not who you are underneath, it's what you do that defines you.",
    image_url: "https://picsum.photos/536/354",
    author: batman,
  });

  await post1.save();

  const post2 = new Post({
    message:
      "Sometimes the truth isn’t good enough, sometimes people deserve more.",
    image_url: "https://picsum.photos/536/354",
    author: batman,
  });

  await post2.save();

  const post3 = new Post({
    message: "Why so serious?",
    image_url: "https://picsum.photos/536/354",
    author: joker,
  });

  await post3.save();

  await mongoose.connection.close();
};

seedDB();
