'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    UsersView = require('../views/user/user'),
    SidebarView = require('../views/sidebar/sidebar'),
    HeaderView = require('../views/header/header'),
    UsersController;

UsersController = Mn.Object.extend({

    userslist: function() {
        console.log('userlist');
        App.layout.showChildView('sidebarRegion',
            new SidebarView({

            })
        );
        App.layout.showChildView('headerRegion',
            new HeaderView({

            })
        );
        App.layout.showChildView('pageRegion',
            new UsersView({

            })
        );



    }
});
module.exports = UsersController;