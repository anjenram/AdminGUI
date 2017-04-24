'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    FormBehavior = require('../../behaviors/form'),
    Session = require('../../services/session'),
    LoginModel = require('../../models/login'),
    Storage =require('../../services/storage'),
    Routes = require('../../helpers/routes'),
    History = require('../../services/history'),
    LoginView;

LoginView = Mn.View.extend({
    template: require('./template/login.pug'),
    className: 'login-container',
    ui: {
        login: '.logIn',
        signup: 'a.btn'
    },
    events: {
        'click @ui.login': 'onSubmit',
        'click @ui.signup': 'onSignUp'
    },
    behaviors: {
        form: {
            behaviorClass: FormBehavior
        }
    },
    bindings: {
        '[name="username"]':{
            observe: 'username',
            updateView: false,
            setOptions: {
                validate: false
            }
        },
        '[name="password"]':{
            observe: 'password',
            updateView:false,
            setOptions: {
                validate: false
            }
        }
    },
    onSubmit: function (e) {
        e.preventDefault();
        var _this = this;
        this.model.save(null,{
            type: 'POST',
            success: function (m, data) {
                console.log(data);
                if (data.message === "Error User not found") {
                    $('.hiddenblock').append('<span class="invalid-text">User not found</span>')
                    setInterval(function () {
                        $('.invalid-text').hide(2000)

                    }, 4000)
                } else {
                    var User = {
                        '_id': data.data._id,
                        'username': data.data.username
                    }
                    // History.navigate(Routes.mainIndexPath(), { trigger: true });
                    Storage.set('logined', true)
                    Session.create(User);
                }

            },
            error: function (e, m, b) {
                console.log(e)
                console.log(m)
                console.log(b)
                if (m.status == 400) { $('.hiddenblock').append('<span class="invalid-text">Invalid Username or Password</span>')
                    setInterval(function () {
                        $('.invalid-text').hide(2000)

                    }, 4000)
                }
                if (m.status == 404) { $('.hiddenblock').append('<span class="invalid-text">Invalid Username or Password</span>')
                    setInterval(function () {
                        $('.invalid-text').hide(2000)
                    }, 4000)}
            }
        });
    },
    onSignUp: function (e) {
        e.preventDefault();
        History.navigate('#/signup', { trigger: true });
    }
});

module.exports = LoginView;