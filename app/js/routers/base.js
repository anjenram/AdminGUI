'use strict';

var Mn = require('backbone.marionette'),
    Routes = require('../helpers/routes'),
    // Session = require('../services/session'),
    BaseRouter;

require('backbone.routefilter');

BaseRouter = Mn.AppRouter.extend({

    before: function (route) {
        console.log('routers:before');
    }

});

module.exports = BaseRouter;
