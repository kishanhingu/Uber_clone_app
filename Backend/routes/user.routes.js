const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");

// user register routes
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ],
  userController.registerUser
);

// user login routes
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ],
  userController.loginUser
);

// user profile
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

// user logout
router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
