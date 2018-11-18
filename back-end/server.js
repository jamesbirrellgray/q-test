const express = require('express'),
      jsonfile = require('jsonfile'),
      path = require('path'),
      bodyParser = require('body-parser'),
      db = path.resolve(__dirname, 'data/cmsData.json'),
      app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 5000;

// set up router
var router = express.Router();  

// test route
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our q-test api!' });   
});

// prefix 
app.use('/api/v1', router);

router.route('/posts')
  .get(function(req, res) {
    
  })
  .post(function(req, res) {

  });
  
app.listen(port);
