const express = require("express");

const authController = require("./auth.controller");
const authenticate = require("./auth.middleware");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/me", authenticate, authController.me);

module.exports = router;