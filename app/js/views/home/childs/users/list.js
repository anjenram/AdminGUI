'use strict';
var Mn = require('backbone.marionette'),
    ItemView = require('./item'),
    _ = require('underscore'),
    UserInfoListView;

UserInfoListView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: ItemView,
    templateContext: function () {
        console.log(this.model)
        var vaule = this.model.get('isActive');
        if(!vaule) {
            this.model.set('isActive', 'NO')
        } else {
            this.model.set('isActive', 'YES')
        }

    }
});

module.exports = UserInfoListView;