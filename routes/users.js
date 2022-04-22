const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");


router.get("/new", UsersController.New);
router.post("/", UsersController.Create);
router.get("/:username/profile", UsersController.Profile);
router.get("/:username/settings", UsersController.Settings);
router.post("/:username/update", UsersController.Update);

module.exports = router;
