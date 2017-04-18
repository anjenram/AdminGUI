'use strict';

var BaseRouter = require('./base'),
    ProfileController = require('../controllers/profile'),
    SettingsRouter;
SettingsRouter = BaseRouter.extend({
    appRoutes:{
        'profile': 'profile'

    },
    controller: new ProfileController()
});


module.exports = SettingsRouter;
