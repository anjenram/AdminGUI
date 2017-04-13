'use strict';

var App = require('../app'),
    Router = require('../routers/main'),
    routes = require('../helpers/routes');

App.on('before:start', function() {
    var router = new Router();
    console.log(router);
    routes.bind('main', router);
    console.log('module main started');
});
