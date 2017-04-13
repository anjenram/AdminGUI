'use strict';

var Marionette = require('backbone.marionette'),
    template = require('../../templates/base/layout'),
    BaseLayoutView;

BaseLayoutView = Marionette.View.extend({

    template: template,
    
    className: 'modal-dialog',

    regions: {
        headerRegion: '#header_region',
        sidebarRegion: '#sidebar_region',
        contentRegion: '#content_region',
        footerRegion: '#footer_region'
    },

    ui: {
        close: '.close'
    },

    events: {
        'click @ui.close': 'onClickClose'
    },

    onClickClose: function () {
        this.$el.hide();
    }
    
});

module.exports = BaseLayoutView;