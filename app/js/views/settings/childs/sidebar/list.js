'use strict';
var Mn = require('backbone.marionette'),
    ItemView = require('./item'),
    _ = require('underscore'),
    SideMenuInfoListView;

SideMenuInfoListView = Mn.CollectionView.extend({
    childView: ItemView,
    tagName: 'tbody'
});

module.exports = SideMenuInfoListView;