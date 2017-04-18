'use strict';
var Mn = require('backbone.marionette'),
    ItemView = require('./item'),
    _ = require('underscore'),
    MenuView;

MenuView = Mn.CollectionView.extend({
    tagName: 'ul',
    template: _.template('<ul id="#sidebar_menus"></ul>'),
    childView: ItemView,
    childViewContainer: 'ul#sidebar_menus'
});

module.exports = MenuView;