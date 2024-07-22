const express = require("express");
const router = express.Router();
const internController = require("../controllers/intern");
const passport = require("passport");

router.route("/register").post(internController.registerIntern);

router.route("/verify-email").post(internController.verifyEmail);

router
  .route("/login")
  .post(passport.authenticate("intern"), internController.login);

router.route("/logout").post(internController.logout);

module.exports = router;
