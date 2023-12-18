const express = require("express");
const { registerUser, loginUser, userInformation } = require("../contollers/user.controller");
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/user', userInformation);

module.exports = router 