const express = require('express');
const router = express.Router();

// import from the controller folder
const contactsController = require('../controllers/contacts');

// router gets the information from the two functions
router.get('/', contactsController.getContactInformation);
router.get('/:id', contactsController.getSingle);

// exports the router
module.exports = router;