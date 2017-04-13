'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    HomeView = require('../views/home/home'),
    SidebarView = require('../views/sidebar/sidebar'),
    HeaderView = require('../views/header/header'),
    SettingsController;

SettingsController = Mn.Object.extend({

    settings: function() {
        // console.log('router');
        // App.layout.showChildView('sidebarRegion',
        //     new SidebarView({
        //
        //     })
        // );
        // App.layout.showChildView('headerRegion',
        //     new HeaderView({
        //
        //     })
        // );
        App.layout.showChildView('pageRegion',
            new HomeView({

            })
        );



    }
});
module.exports = SettingsController;