'use strict';

var BaseRouter = require('./base'),
    UsersController = require('../controllers/userslist'),
    UsersRouter;
UsersRouter = BaseRouter.extend({
    appRoutes:{
        '#/userslist': 'userslist'
    },
    controller: new UsersController()
});

module.exports = UsersRouter;