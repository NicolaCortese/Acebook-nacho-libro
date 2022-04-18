const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      email: "batman@example.com",
      password: "password",
      username: "batman"
    });
    expect(user.email).toEqual("batman@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "robin@example.com",
      password: "password",
      username: "robin"
    });
    expect(user.password).toEqual("password");
  });

  it("has a profilePic", () => {
    const user = new User({
      email: "robin@example.com",
      password: "password",
      username: "robin",
      profilePic: "http://profile.pic"
    });
    expect(user.profilePic).toEqual("http://profile.pic");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      email: "robin@example.com",
      password: "password",
      username: "robin",
      profilePic: "http://profile.pic"
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          email: "robin@example.com",
          password: "password",
          username: "robin",
          profilePic: "http://profile.pic"
        });
        done();
      });
    });
  });
});
