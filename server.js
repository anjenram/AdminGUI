var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var port = process.env.PORT || 8011; // set our port
//setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/admin');
var User = require('./db/models/user');
var SideMenu = require('./db/models/side_menu');
// ROUTES API

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

// more routes for our API will happen here
router.route('/users')

.post(function(req, res) {

        var user = new User();
        user.name = req.body.name;


        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'User created!'
            });
        });

    })
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

router.route('/users/:user_id')
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })

.put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {

        if (err)
            res.send(err);

        user.name = req.body.name;
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'User updated!'
            });
        });

    });
})

.delete(function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err)
            res.send(err);

        res.json({
            message: 'Successfully deleted'
        });
    });
});

//menu
router.route('/side_menu')
    .get(function (req, res) {
        SideMenu.find(function(err, menu) {
            if (err)
                res.send(err);

            res.json(menu);
        })
    })
    .post(function(req, res) {

        var item = new SideMenu();
        item.name = req.body.name;
        item.url = req.body.url;


        item.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'Menu item Create!'
            });
        });

    });
router.route('/side_menu/:_id')
    .put(function(req, res) {
        SideMenu.findById(req.params._id, function(err, item) {

            if (err)
                res.send(err);

            item.name = req.body.name;
            item.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Menu Item Update!'
                });
            });

        });
    })
    .delete(function(req, res) {
        SideMenu.remove({
            _id: req.params._id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({
                message: 'Successfully deleted'
            });
        });
    });
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);