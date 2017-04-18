'use strict';

var BaseRouter = require('./base'),
    LoginController = require('../controllers/login'),
    LoginRouter;
LoginRouter = BaseRouter.extend({
    appRoutes:{
        'login': 'login',
        'signup': 'signup'

    },
    controller: new LoginController()
});


module.exports = LoginRouter;
