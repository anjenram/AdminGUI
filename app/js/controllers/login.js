'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    $ = require('jquery'),
    LoginView = require('../views/login/login'),
    LoginModel = require('../models/login'),
    SignUpView = require('../views/login/signup'),

    LoginController;

LoginController = Mn.Object.extend({

    login: function() {
        console.log('login');

        App.layout.showChildView('pageRegion',
            new LoginView({
                model: new LoginModel()
            })
        );
    },
    signup: function () {
        console.log('login');
        App.layout.showChildView('pageRegion',
            new SignUpView({

            })
        );
    }
});
module.exports = LoginController;