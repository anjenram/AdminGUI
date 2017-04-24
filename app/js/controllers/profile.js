'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    HomeView = require('../views/home/home'),
    ErorrView = require('../views/erorr/erorr'),

    Storage = require('../services/storage'),

    HeaderView = require('../views/header/header'),
    ProfileController;

ProfileController = Mn.Object.extend({

    profile: function() {
        console.log('router');
        if (Storage.get('logined')) {
            App.layout.showChildView('headerRegion',
                new HeaderView({})
            );
            App.layout.showChildView('pageRegion',
                new HomeView({})
            );
        } else {
            App.layout.showChildView('pageRegion',
                new ErorrView({

                })
            );
        }


    }
});
module.exports = ProfileController;