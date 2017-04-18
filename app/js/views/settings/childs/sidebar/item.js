'use strict';
var Mn = require('backbone.marionette'),
    template = require('./template/item.pug'),
    SideMenuInfoItemView;

SideMenuInfoItemView = Mn.View.extend({
    tagName: 'tr',
    template: template
});

module.exports = SideMenuInfoItemView;