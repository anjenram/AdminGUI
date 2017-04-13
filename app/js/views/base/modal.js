'use strict';

var Marionette = require('backbone.marionette'),
    template = require('../../templates/base/modal'),
    ModalLayoutView;

ModalLayoutView = Marionette.View.extend({

    className: 'modal-dialog',

    template: template,

    regions: {
        headerRegion: '.modal-header.js',
        contentRegion: '.modal-body',
        footerRegion: '.modal-footer'
    }

});

module.exports = ModalLayoutView;