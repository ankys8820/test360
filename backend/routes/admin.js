const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const passport = require("passport");

router
  .route("/register")
    .post(adminController.registerAdmin);

router
  .route("/login")
    .post(passport.authenticate("admin"), adminController.loginAdmin);

router
  .route("/logout")
    .post(adminController.logoutAdmin);

module.exports = router;
