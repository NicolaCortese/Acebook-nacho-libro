const mongoose = require("mongoose");
// const User = require("../models/user");

const clearDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1/acebook_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await mongoose.connection.collections.users.drop();
  await mongoose.connection.close();
};

clearDB();

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.on("open", function () {
//   done();
// });
