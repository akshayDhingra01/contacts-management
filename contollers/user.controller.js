const asyncHandler = require("express-async-handler")  // To handle the exceptions by using this library
// const Contact = require("../models/contact.model")

// @desc Register User
// @route Post api/users/register
// @access public
const registerUser = asyncHandler (async (req, res) => {
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