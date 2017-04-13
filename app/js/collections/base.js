'use strict';

var Backbone = require('backbone'),
    AppConfig = require('../config'),
    BaseCollection;
BaseCollection = Backbone.Collection.extend({
    initialize: function() {
        this.url = AppConfig.apiPath + _.result(this, 'url');
    }
});

module.exports = BaseCollection;
