const 
    router = require('express').Router(),
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../swagger-output.json');

router
    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;