// Index Routes
const 
    express = require('express'),
    router = express.Router();

const CONTACT_Router = require('./contacts');

router.use('/contacts', CONTACT_Router);

module.exports = router;