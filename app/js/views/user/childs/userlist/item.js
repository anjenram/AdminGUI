'use strict';
var Mn = require('backbone.marionette'),
    template = require('./template/item.pug'),
    UserInfoItemView;

UserInfoItemView = Mn.View.extend({
    tagName: 'tr',
    template: template
});

module.exports = UserInfoItemView;