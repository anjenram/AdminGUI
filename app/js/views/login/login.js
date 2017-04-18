'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    FormBehavior = require('../../behaviors/form'),
    Session = require('../../services/session'),
    LoginModel = require('../../models/login'),
    Routes = require('../../helpers/routes'),
    LoginView;

LoginView = Mn.View.extend({
    template: require('./template/login.pug'),
    className: 'login-container',
    ui: {
        login: '.logIn'
    },
    events: {
        'click @ui.login': 'onSubmit'
    },
    behaviors: {
        form: {
            behaviorClass: FormBehavior
        }
    },
    bindings: {
        '[name="username"]':{
            observe: 'username',
            // updateView: true
        },
        '[name="password"]':{
            observe: 'password'
            // updateView:true
        }
    },
    onSubmit: function (e) {
        e.preventDefault();
        var _this = this;
        this.model.save(null,{
            type: 'POST',
            success: function () {
                console.log(Session.create())
                Session.create();
            }
        });
    }
});

module.exports = LoginView;