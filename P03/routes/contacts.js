const 
    express = require('express'),
    router = express.Router();

// import from the controller folder
const CONTACT_Controller = require('../controllers/contacts');

// router gets the information from the two functions
router
    // GET
    .get('/', CONTACT_Controller.getAllContactInformation)
    .get('/:id', CONTACT_Controller.getASingleContact)
    // POST
    .post('/', CONTACT_Controller.createContact)
    // PUT
    .put('/:id', CONTACT_Controller.updateContact)
    // DELETE
    .delete('/:id', CONTACT_Controller.deleteContact);

// exports the router
module.exports = router;