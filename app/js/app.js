'use strict';

var Mn = require('backbone.marionette'),
    $ =require('jquery'),
    RootLayoutView = require('./views/root/layout'),
    RootLoginView = require('./views/root/login'),
    History = require('./services/history'),
    app;

app = new Mn.Application();

app.onBeforeStart = function () {
    this.layout = new RootLayoutView();
    this.authPage = new RootLoginView();
    this.history = History;

    console.log('Before app start');
};

app.onStart = function (options) {
    this.history.init();
    console.log('On app start');
};

app.onAfterStart = function () {

};

module.exports = app;