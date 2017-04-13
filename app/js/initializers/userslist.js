'use strict';

var App = require('../app'),
    Router = require('../routers/userslist'),
    routes = require('../helpers/routes');

App.on('before:start', function() {
    var router = new Router();
    routes.bind('userslist', router);
    console.log('module userlist started');

});