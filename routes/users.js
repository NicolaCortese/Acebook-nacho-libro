const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

// called from the homepage when clicking Signup
router.get("/new", UsersController.New);

// called when submitting the new user form
router.post("/", UsersController.Create);

router.get("/profile", UsersController.Profile);

module.exports = router;
