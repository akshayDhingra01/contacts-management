const express = require("express");
const router = express.Router();
const { getContact, createContact, getContacts, updateContact, deleteContact } = require("../contollers/contact.controller")

router.route('/').get(getContacts).post(createContact);
router.route('/:id').put(updateContact).get(getContact).delete(deleteContact);

module.exports = router;