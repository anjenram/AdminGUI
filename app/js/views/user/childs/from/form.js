'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    FormBehavior = require('../../../../behaviors/form'),
    UserModel = require('../../../../models/users'),
    FormUsersListView;

FormUsersListView = Mn.View.extend({
    initialize: function (options) {
    this.model = new  UserModel()
    },
    template: require('./template/form.pug'),
    ui: {
        submit: '.submit'
    },
    events: {
        'click @ui.submit': 'onSubmit'
    },
    behaviors: {
        form: {
            behaviorClass: FormBehavior
        }
    },
    bindings: {
        '[name="username"]':{
            observe: 'username',
            updateView: true
        },
        '[name="admin"]':{
            observe: 'admin'
            // updateView:true
        },
        '[name="password"]':{
            observe: 'password'
            // updateView:true
        },
        '[name="email"]':{
            observe: 'email'
            // updateView:true
        }
    },
    onSubmit: function (e) {
        e.preventDefault();
        var _this = this;
        var timeCreated = new Date();
        this.model.set('timeCreated', timeCreated);
        this.model.save(null,{
            type: 'POST',
            success: function () {

            }
        });
    }
});

module.exports = FormUsersListView;