const express = require("express");
const { registerUser, loginUser, userInformation } = require("../contollers/user.controller");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', validateToken, userInformation);


module.exports = router 