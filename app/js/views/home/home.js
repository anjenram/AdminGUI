var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    UserCollection = require('../../collections/users'),
    SidebarMenuCollection = require('../../collections/sidemenu'),
    UserInfoView =require('./childs/users/list'),
    MenuInfoView =require('./childs/sidemenu/list'),
    HomeView;

HomeView = Mn.View.extend({
    template: require('./template/home.pug'),
    regions: {
        users: {
            el: '#user-info',
            replaceElement: true
        },
        sidebar: {
            el: '#sidebar-info',
            replaceElement: true
        }
    },
    onRender: function () {
        this.showSidebarInform();
        this.showUserInform();
    },
    showUserInform: function () {
        var userCollection = new UserCollection();
        userCollection.fetch();

        this.listenTo(userCollection, 'sync', function () {
            this.showChildView('users',
                new UserInfoView({
                    collection: userCollection
                })
            )
        })
    },
    showSidebarInform: function () {
        var menuCollection = new SidebarMenuCollection();
        menuCollection.fetch();

        this.listenTo(menuCollection, 'sync', function () {
            this.showChildView('sidebar',
                new MenuInfoView({
                    collection: menuCollection
                })
            )
        })
    }
});

module.exports = HomeView;