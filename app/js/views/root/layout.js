'use strict';

var Mn = require('backbone.marionette'),
    HomeView = require('../home/home'),
    HeaderView = require('../header/header'),
    SidebarView = require('../sidebar/sidebar'),
    RootLayoutView;

RootLayoutView = Mn.View.extend({

    el: 'body',

    regions: {
        pageRegion: '#page_region',
        sidebarRegion: '#sidebar_region',
        headerRegion: '#header_region',
        footerRegion: '#footer_region'
    },
    onRender: function () {
        this.showPage();
        this.showSidebar();
        this.showHeader();
    },

    showPage: function () {
        this.showChildView('pageRegion', new HomeView());
    },
    showSidebar: function () {
        this.showChildView('sidebarRegion',new SidebarView());
    },
    showHeader: function () {
        this.showChildView('headerRegion',new HeaderView());
    }
});

module.exports = RootLayoutView;