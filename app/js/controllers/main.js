'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    HomeView = require('../views/home/home'),
    HeaderView = require('../views/header/header'),
    MainController;

MainController = Mn.Object.extend({

    index: function() {
        console.log('router');
            App.layout.showChildView('headerRegion',
                new HeaderView({

                })
            );
            App.layout.showChildView('pageRegion',
                new HomeView({

                })
            );



    }
});

module.exports = MainController;