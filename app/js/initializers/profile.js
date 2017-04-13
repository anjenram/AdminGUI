'use strict';

var App = require('../app'),
    Router = require('../routers/profile'),
    routes = require('../helpers/routes');

App.on('before:start', function() {
    var router = new Router();
    routes.bind('profile', router);
    console.log('module profile started');

});