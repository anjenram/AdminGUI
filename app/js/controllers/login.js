'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    $ = require('jquery'),
    LoginView = require('../views/login/login'),
    LoginModel = require('../models/login'),
    UserModel = require('../models/users'),
    SignUpView = require('../views/login/signup'),
    Session = require('../services/session'),
    LoginController;

LoginController = Mn.Object.extend({

    login: function() {
        console.log('login');
        var clear = Mn.View.extend({
            template: _.template('')
        })
        App.layout.showChildView('headerRegion',
            new clear()
        );
        App.layout.showChildView('pageRegion',
            new LoginView({
                model: new LoginModel()
            })
        );
    },
    signup: function () {
        console.log('signup');
        var clear = Mn.View.extend({
            template: _.template('')
        })
        App.layout.showChildView('headerRegion',
            new clear()
        );
        App.layout.showChildView('pageRegion',
            new SignUpView({
                model: new UserModel()
            })
        );
    }
});
module.exports = LoginController;