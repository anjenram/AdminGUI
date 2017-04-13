'use strict';
var Mn = require('backbone.marionette'),
    Routes = require('../../../helpers/routes'),
    template = require('./template/menu.pug'),
    ItemView;

ItemView = Mn.View.extend({
    tagName: 'li',
    template: template,
    templateContext: function () {
        return {
            Routes: Routes
        }
    }
});

module.exports = ItemView;