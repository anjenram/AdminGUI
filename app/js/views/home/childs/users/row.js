'use strict';
var Mn = require('backbone.marionette'),
    RowView;

var RowView = Marionette.LayoutView.extend({
    tagName: 'tr',
    template: '#table-row'
});

module.exports = RowView;