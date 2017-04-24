'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    HomeView = require('../views/home/home'),
    HeaderView = require('../views/header/header'),
    ErorrView = require('../views/erorr/erorr'),
    Session = require('../services/session'),
    Storage = require('../services/storage'),
    MainController;

MainController = Mn.Object.extend({

    index: function() {
        console.log('router');
        console.log(Storage.get('logined'))
        if (Storage.get('logined')) {
            App.layout.showChildView('headerRegion',
                new HeaderView({

                })
            );
            App.layout.showChildView('pageRegion',
                new HomeView({

                })
            );
        } else {
            App.layout.showChildView('pageRegion',
                new ErorrView({

                })
            );
        }





    }
});

module.exports = MainController;