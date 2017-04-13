'use strict';

var App = require('../app');
// HeaderController = require('../controllers/header');

App.on('before:start', function() {
    // new HeaderController();

    console.log('Header start');
});
