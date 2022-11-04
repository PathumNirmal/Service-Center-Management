const express = require('express');
const router = express.Router();

const UserController = require('../controller/user');

router.post("/add", UserController.user_add);

router.post("/login", UserController.user_login);

router.get("/", UserController.user_get_all);

router.get("/:userId", UserController.users_get_user);

router.patch("/:userId", UserController.users_update_user);

router.delete("/:userId", UserController.user_delete);

module.exports = router;