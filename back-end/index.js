const express = require('express'),
      jsonfile = require('jsonfile'),
      path = require('path'),
      bodyParser = require('body-parser'),
      fileExists = require('file-exists'),
      db = path.resolve(__dirname, 'db/db.json'),
      seedData = path.resolve(__dirname, 'seed_data/cmsData.json'),
      app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json());

// Get seed command argument
var argv = require('minimist')(process.argv.slice(2));
console.log(argv._);
// Set up the DB

if(argv._.length === 0 && fileExists.sync(db) === false) {
  jsonfile.writeFileSync(db, jsonfile.readFileSync(seedData));
}
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
