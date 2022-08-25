const express = require('express');
const router = express.Router();

const UserController = require('../controller/user');
// const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.delete("/:userId", UserController.user_delete);

// router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;