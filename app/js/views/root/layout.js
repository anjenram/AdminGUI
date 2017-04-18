'use strict';

var Mn = require('backbone.marionette'),
    HomeView = require('../home/home'),
    HeaderView = require('../header/header'),
    RootLayoutView;

RootLayoutView = Mn.View.extend({

    el: 'body',

    regions: {
        pageRegion: {
            selector: '#page_region'
        },
        headerRegion: '#header_region',
        footerRegion: '#footer_region'
    },
    onRender: function () {
        this.showPage();
        this.showHeader();
    },

    showPage: function () {
        this.showChildView('pageRegion', new HomeView());
    },

    showHeader: function () {
        this.showChildView('headerRegion',new HeaderView());
    }
});

module.exports = RootLayoutView;