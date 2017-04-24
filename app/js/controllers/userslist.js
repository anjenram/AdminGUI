'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    UsersView = require('../views/user/user'),
    HeaderView = require('../views/header/header'),
    ErorrView = require('../views/erorr/erorr'),

    Storage = require('../services/storage'),

    UsersController;

UsersController = Mn.Object.extend({

    userslist: function() {
        console.log('userlist');
        if (Storage.get('logined')) {
            App.layout.showChildView('headerRegion',
                new HeaderView({})
            );
            App.layout.showChildView('pageRegion',
                new UsersView({})
            );
        } else {
            App.layout.showChildView('pageRegion',
                new ErorrView({

                })
            );
        }


    }
});
module.exports = UsersController;