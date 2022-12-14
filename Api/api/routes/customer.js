const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth-admin');

const CustomerController = require('../controller/customer');

router.post("/signup", CustomerController.user_signup);

router.post("/login", CustomerController.user_login);

router.get("/", CustomerController.user_get_all);

router.get("/:custId", CustomerController.users_get_user);

router.patch("/:custId", CustomerController.users_update_user);

router.delete("/:custId", CustomerController.user_delete);


module.exports = router;