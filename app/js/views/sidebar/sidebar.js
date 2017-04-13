var Mn = require('backbone.marionette'),
    Bb = require('backbone'),
    SideMenuCollection = require('../../collections/sidemenu'),
    MenuView = require('./menu/menu'),
    SidebarView;

SidebarView = Mn.View.extend({
    template: require('./template/sidebar.pug'),
    regions: {
        sidebar_menu: "#sidebar_menu"
    },
    onRender: function () {
        var menuCollection = new SideMenuCollection();
        menuCollection.fetch();

        this.listenTo(menuCollection, 'sync', function () {
            this.showChildView('sidebar_menu',
                new MenuView({
                    collection: menuCollection
                })
            )
        })
    },
    showMenu: function () {

    }
});

module.exports = SidebarView;