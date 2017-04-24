'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    FormBehavior = require('../../behaviors/form'),
    UserModes = require('../../models/users'),
    History = require('../../services/history'),
    SugnUpView;

SugnUpView = Mn.View.extend({
    template: require('./template/signup.pug'),
    className: 'login-container',
    ui: {
        signup: '.Signup-btn',
        back: 'a.btn'
    },
    events: {
        'click @ui.signup': 'onSubmit',
        'click @ui.back': 'onBack'
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
        '[name="email"]':{
            observe: 'email'
            // updateView:true
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
    },
    onBack: function (e) {
        e.preventDefault();
        History.navigate('#/login', { trigger: true });
    }
});

module.exports = SugnUpView;