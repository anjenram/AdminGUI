'use strict';

var App = require('../app'),
    Router = require('../routers/login'),
    routes = require('../helpers/routes');

App.on('before:start', function() {
    var router = new Router();
    routes.bind('login', router);
    console.log('module login started');

});