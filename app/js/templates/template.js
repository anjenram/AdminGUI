'use strict';

var Marionette = require('backbone.marionette'),
    PageView;

PageView = Marionette.View.extend({
    template: require('./base/main'),
    regions: {
        pageRegionHeader: '#page_header_region',
        pageRegionContent: '#page_content_region',
        pageRegionFooter: '#page_footer_region'
    }
});

module.exports = PageView;