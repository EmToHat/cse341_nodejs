// Index Routes
const 
    express = require('express'),
    router = express.Router();

const 
    CONTACT_Router = require('./contacts'),
    SWAGGER_Router = require('./swagger');


router
    .use('/contacts', CONTACT_Router)
    .use('/', SWAGGER_Router);

module.exports = router;