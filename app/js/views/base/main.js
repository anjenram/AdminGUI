'use strict';

var Marionette = require('backbone.marionette'),
    template = require('../../templates/base/main'),
    MainLayoutView;

MainLayoutView = Marionette.View.extend({

    className: 'containter', 

    template: template,

    regions: {
        headerRegion: '#page_header_region',
        contentRegion: '#page_content_region',
        footerRegion: '#page_footer_region'
    }

});

module.exports = MainLayoutView;