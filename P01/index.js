const express = require('express');

const app = express();

const port = 3000;

// import routes
const indexRoute = require('./routes/index');

// apply the routes
app.use('/', indexRoute);

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})