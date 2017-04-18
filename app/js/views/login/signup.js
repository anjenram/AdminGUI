'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    FormBehavior = require('../../behaviors/form'),
    UserModes = require('../../models/users'),
    SugnUpView;

SugnUpView = Mn.View.extend({
    template: require('./template/signup.pug')
});

module.exports = SugnUpView;