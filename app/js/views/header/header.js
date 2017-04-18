var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    SideMenuCollection = require('../../collections/sidemenu'),
    MenuView = require('./menu/menu'),
    Session = require('../../services/session'),
    HeaderView;

HeaderView = Mn.View.extend({
    template: require('./template/header.pug'),
    className: 'header-style',
    regions: {
        sidebar_menu: "#head-menu"
    },
    ui: {
        logout: '.user-logout'
    },
    events: {
        'click @ui.logout': 'logout'
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
    logout: function (e) {
        e.preventDefault();
        Session.clean();
    }
});

module.exports = HeaderView;