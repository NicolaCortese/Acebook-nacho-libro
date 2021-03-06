var mongoose = require("mongoose");

require("../mongodb_helper");
var Post = require("../../models/post");

describe("Post model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it("has a message", () => {
    var post = new Post({ message: "some message" });
    expect(post.message).toEqual("some message");
  });

  it("has a timestamp", () => {
    var post = new Post({ message: "date message", timestamp: "1572393600000" });
    expect(String(post.timestamp)).toContain("Wed Oct 30 2019 00:00:00");
  });

  it("can list all posts", (done) => {
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    });
  });

  it("can save a post", (done) => {
    var post = new Post({ message: "some message" });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "some message" });
        done();
      });
    });
  });

  it("shows a username of the post author", (done) => {
    const user = { username: "cat" };
    let post = new Post({ message: "some other message", author: user });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "some other message", author: { username: "cat"} });
        done();
      });
    });
  });

  it("can upload and see the image",  (done) => {
    let post = new Post({ message: "image test", image_url: "https://picsum.photos/536/354" });
    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();
        expect(posts[0]).toMatchObject({ message: "image test", image_url: "https://picsum.photos/536/354" });
        done();
      })
    })
  })

  it("can like a post", (done) => {
    let post = new Post({ message: "message to be liked", likes: "someone" });
    post.save((err) => {
      expect(err).toBeNull();
      
      Post.find((err, posts) => {
        expect(err).toBeNull();
        expect(posts[0].message).toEqual("message to be liked");
        expect(posts[0].likes).toContain("someone");
        done();
      });
    });
  });

  it("can comment on a post", (done) => {
    let post = new Post({ message: "message to be commented on", comments: {message: "great comment", author: "somebody"} });
    post.save((err) => {
      expect(err).toBeNull();
      
      Post.find((err, posts) => {
        expect(err).toBeNull();
        expect(posts[0].message).toEqual("message to be commented on");
        expect(posts[0].comments[0].message).toContain("great comment");
        expect(posts[0].comments[0].author).toEqual("somebody")
        done();
      });
    });
  })
});
