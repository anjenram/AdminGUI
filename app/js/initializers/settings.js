'use strict';

var App = require('../app'),
    Router = require('../routers/settings'),
    routes = require('../helpers/routes');

App.on('before:start', function() {
    var router = new Router();
    routes.bind('settings', router);
    console.log('module settings started');

});