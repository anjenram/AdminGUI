var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    HeaderView;

HeaderView = Mn.View.extend({
    template: require('./template/header.pug'),
});

module.exports = HeaderView;