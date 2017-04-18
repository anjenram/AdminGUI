'use strict';

var Mn = require('backbone.marionette'),
    LoginView = require('../login/login'),
    LoginRootView;

LoginRootView = Mn.View.extend({
    el: 'body',

    regions: {
        pageRegion: '#page_region'
    },
    onRender: function () {
        this.showPage();
    },
    showPage: function () {
        this.showChildView('pageRegion', new LoginView());
    }
});

module.exports = LoginRootView;