'use strict';
var Mn = require('backbone.marionette'),
    ItemView = require('./item'),
    _ = require('underscore'),
    UserInfoListView;

UserInfoListView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: ItemView
});

module.exports = UserInfoListView;