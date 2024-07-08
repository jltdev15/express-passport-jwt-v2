const express = require("express");
const router = express.Router();

const passport = require("passport");
const authController = require("../controller/authController");
const userController = require("../controller/userController");

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Protected route example
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userController.getProfile
);

module.exports = router;
