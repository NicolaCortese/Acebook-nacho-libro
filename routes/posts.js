const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/:id/delete", PostsController.Delete);
router.get("/:id/edit", PostsController.Edit);
router.post("/:id/save", PostsController.Save);
router.get("/new", PostsController.New);
router.post("/:id/Like", PostsController.Like);
router.post("/:id/Unlike", PostsController.Unlike);

module.exports = router;
