'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    UserModel = require('../../models/users'),
    template = require('./template/profile.pug'),
    Storage = require('../../services/storage'),
    ProfileView;

ProfileView = Mn.View.extend({
    initialize: function (options) {
    },
    template: template,
    templateContext: function () {
        var _this = this
        return  {
            _id: _this.model.get('_id'),
            username: _this.model.get('username'),
            email: _this.options.model.get('email')
        }
    }
});

module.exports = ProfileView;