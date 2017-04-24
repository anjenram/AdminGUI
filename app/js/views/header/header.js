var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    _ = require('underscore'),
    SideMenuCollection = require('../../collections/sidemenu'),
    MenuView = require('./menu/menu'),
    Session = require('../../services/session'),
    Storage = require('../../services/storage'),
    HeaderView;

HeaderView = Mn.View.extend({
    initialize: function (options) {
        this.model = new Bb.Model();
        var user = Session.currentUser()
        if (_.isUndefined(user.username)) {
            this.username = 'NONAME';
        } else {
            this.username = user.username;
        }
        this.model.set('username', this.username);
        console.log(this)
    },
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
        Storage.set('logined', false);
        Session.clean();
    },
    // GetUser: function () {
    //     var _this = this;
    //     var user = Session.currentUser();
    //     console.log(user)
    //     _this.model.set('username', user.username)
    //     return user.username
    // }
    tempalteContext: {
        username: this.username
    }
});

module.exports = HeaderView;