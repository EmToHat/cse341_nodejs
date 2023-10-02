const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./models/connect');
const cors = require('cors');

const port = process.env.port || 8080;
const app = express();

// import routes
const indexRoute = require('./routes/index');

// apply routes
//app.use('/', indexRoute);

app
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', indexRoute);

mongodb.initializeDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and App is listening on ${port}`);
  }
});
