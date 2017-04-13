'use strict';

var _ = require('underscore'),
    $ = require('jquery'),
    template = _.template('<div class="help-block"><%= title%></div>');

var Tooltip = {
    add: function($selector, options) {
        if ($selector.length) {
            this.destroy($selector);

            var $formGroup = $selector.closest('.form-group');

            $formGroup.addClass('has-error').append(template(options));
        }
    },

    destroy: function ($selector) {
        if ($selector.length) {
            var $formGroup = $selector.closest('.form-group');

            $formGroup.removeClass('has-error').find('.help-block').remove();
        }
    },

    destroy_all: function ($form) {
        var inputs = $form.find('input');

        _.each(inputs, function (input) {
            this.destroy($(input));
        }, this);
    }
};

module.exports = Tooltip;