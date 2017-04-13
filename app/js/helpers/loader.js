'use strict';

var _ = require('underscore'),
    template = _.template('<div class="mwp-loading"><i class="material-icons md-24">loop</i></div>');

var Loader = {
    add: function($selector, options) {
        if ($selector.length) {
            $selector.append(template(options));
        }
    },

    destroy: function ($selector) {
        if ($selector.length) {
            $selector.find('.mwp-loading').remove();
        }
    }
};

module.exports = Loader;