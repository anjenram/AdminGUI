'use strict'

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    UserCollection = require('../../collections/users'),
    UserlistView =require('./childs/userlist/list'),
    UsersView;

UsersView = Mn.View.extend({
    template: require('./template/user.pug'),
    regions: {
        users: {
            el: '#user-list',
            replaceElement: true
        }
    },
    showUserlist: function () {
        var userlist = new UserCollection();
        userlist.fetch();

        this.listenTo(userlist, 'sync', function () {
            this.showChildView('users',
                new UserlistView({
                    collection: userlist
                })
            )
        })
    }
});

module.exports = UsersView;