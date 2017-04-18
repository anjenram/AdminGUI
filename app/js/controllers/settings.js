'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    SettingsView = require('../views/settings/settings'),
    HeaderView = require('../views/header/header'),
    SettingsController;

SettingsController = Mn.Object.extend({

    settings: function() {
        console.log('router');

        App.layout.showChildView('headerRegion',
            new HeaderView({

            })
        );
        App.layout.showChildView('pageRegion',
            new SettingsView({

            })
        );



    }
});
module.exports = SettingsController;