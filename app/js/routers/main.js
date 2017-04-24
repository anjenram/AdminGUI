'use strict';

var BaseRouter = require('./base'),
    Mn = require('backbone.marionette'),
    MainController = require('../controllers/main'),
    MainRouter;

MainRouter = Mn.AppRouter.extend({
    appRoutes: {
        '/': 'index',
        '': 'index'
    },

    // controller: new MainController()
    controller: new MainController()

});

module.exports = MainRouter;


