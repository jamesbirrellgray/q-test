const express = require('express'),
      jsonfile = require('jsonfile'),
      path = require('path'),
      bodyParser = require('body-parser'),
      fileExists = require('file-exists'),
      db = path.resolve(__dirname, 'db/db.json'),
      seedData = path.resolve(__dirname, 'seed_data/cmsData.json'),
      argv = require('minimist')(process.argv.slice(2)),
      app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json());

// Set up the DB and seed the data (for tests) if the seed argument is passes to "npm run be-start" e.g "be-start seed"
if(argv._.length === 0 && fileExists.sync(db) === false) {
  jsonfile.writeFileSync(db, jsonfile.readFileSync(seedData));
} else if (argv._[0] === "test") {
  db = jsonfile.readFileSync(seedData);
} else if (argv._[0] === "seed") {
  jsonfile.writeFileSync(db, jsonfile.readFileSync(seedData));
}
// Set port
var port = process.env.PORT || 5000;

// set up router
var router = express.Router();  

// Api home
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
