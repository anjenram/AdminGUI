'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    SettingsView = require('../views/settings/settings'),
    HeaderView = require('../views/header/header'),
    ErorrView = require('../views/erorr/erorr'),

    Storage = require('../services/storage'),

    SettingsController;

SettingsController = Mn.Object.extend({

    settings: function() {
        console.log('router');
        if (Storage.get('logined')) {
            App.layout.showChildView('headerRegion',
                new HeaderView({})
            );
            App.layout.showChildView('pageRegion',
                new SettingsView({})
            );
        } else {
            App.layout.showChildView('pageRegion',
                new ErorrView({

                })
            );
        }


    }
});
module.exports = SettingsController;