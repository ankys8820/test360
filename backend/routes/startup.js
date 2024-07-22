const express=require("express");
const router=express.Router();
const startupController = require('../controllers/startup');
const passport = require("passport");

router
    .route('/register')
        .post(startupController.registerStartup);

router
    .route('/login')
        .post( passport.authenticate('startup'),startupController.login);
    
router
    .route('/logout')
        .post(startupController.logout);

module.exports = router;