const asyncHandler = require("express-async-handler")  // To handle the exceptions by using this library


// @desc Get all Contacts
// @route Get /api/contacts
// @access public

const getContacts = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
})

// @desc create Contact
// @route Post /api/contacts
// @access public

const createContact = asyncHandler (async (req, res) => {
    const { name , email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ message: "contact created" });
})

// @desc Get Contact by id
// @route Get /api/contacts/:id
// @access public

const getContact = asyncHandler (async  (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
})

// @desc update Contact
// @route Put /api/contacts/:id
// @access public

const updateContact = asyncHandler (async (req, res) => {
    res.status(201).json({ message: `Update contact for ${req.params.id}` });
})


// @desc delete Contact
// @route Delete /api/contacts/:id
// @access public

const deleteContact = asyncHandler (async (req, res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
})


module.exports = { getContact, createContact, getContacts, updateContact, deleteContact };