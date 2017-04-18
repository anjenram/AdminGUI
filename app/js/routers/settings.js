'use strict';

var BaseRouter = require('./base'),
    SettingsController = require('../controllers/settings'),
    SettingsRouter;
SettingsRouter = BaseRouter.extend({
    appRoutes:{
        'settings': 'settings'
    },
    controller: new SettingsController()
});

module.exports = SettingsRouter;