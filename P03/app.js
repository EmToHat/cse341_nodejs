const 
  express = require('express'),
  bodyParser = require('body-parser'),
  mongodb = require('./models/connect'), // database connection
  cors = require('cors'),
  port = process.env.port || 8080,
  app = express();

// import routes
const INDEX_Route = require('./routes/index');

// apply routes
app
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', INDEX_Route);

mongodb.initializeDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and App is listening on ${port}`);
  }
});
