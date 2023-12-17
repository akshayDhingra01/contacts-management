// @desc Get all Contacts
// @route Get /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
}

// @desc create Contact
// @route Post /api/contacts
// @access public

const createContact = (req, res) => {
    res.status(201).json({ message: "contact created" });
}

// @desc Get Contact by id
// @route Get /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
}

// @desc update Contact
// @route Put /api/contacts/:id
// @access public

const updateContact = (req, res) => {
    res.status(201).json({ message: `Update contact for ${req.params.id}` });
}


// @desc delete Contact
// @route Delete /api/contacts/:id
// @access public

const deleteContact = (req, res) => {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
}


module.exports = { getContact, createContact, getContacts, updateContact, deleteContact };