const asyncHandler = require("express-async-handler") 
const User = require("../models/user.model")
const bcrypt = require("bcrypt")

// @desc Register User
// @route Post api/users/register
// @access public
const registerUser = asyncHandler (async (req, res) => {

    const { username, email, password } = req.body
    if (!username || !email || !password ) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const availableUser = await User.findOne({email});
    console.log(availableUser);
    if (availableUser){
        res.status(400);
        throw new Error("User already registered!")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)  // 10 here is solved rounds
    console.log(hashedPassword);
    
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201);
        res.json({
            _id : user._id,
            username: user.username,
            email: user.email 
        })
    } else {
        res.status(400);
        throw new Error("User data is not valid")
    }

    res.status(200).json({message : "Register the User"})
});


// @desc Login User
// @route Post api/users/login
// @access public
const loginUser = asyncHandler (async (req, res) => {
    res.status(200).json({message : "Register the User"})
});


// @desc Get User's current information
// @route Get /api/users/user
// @access private
const userInformation = asyncHandler (async (req, res) => {
    res.status(200).json({message : "users information"})
});

module.exports = {registerUser, loginUser, userInformation}