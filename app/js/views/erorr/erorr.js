'use strict';
var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    ErorrView;

ErorrView = Mn.View.extend({
    template: require('./template/notauth.pug')
})




module.exports = ErorrView;