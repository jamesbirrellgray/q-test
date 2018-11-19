const express = require('express'),
      jsonfile = require('jsonfile'),
      path = require('path'),
      bodyParser = require('body-parser'),
      db = path.resolve(__dirname, 'db/db.json'),
      app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 5000;

// set up router
var router = express.Router();  

// test route
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to the q-test api!' });   

});

// prefix 
app.use('/api/v1', router);

router.route('/posts')
  .get(function(req, res) {
    res.status(200).send(jsonfile.readFileSync(db));
  })
  .post(function(req, res) {
    // todo prettyfy the json but maybe not! jsonfile.writeFileSync(db, req.body);
  });
app.listen(port);
