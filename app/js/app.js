'use strict';

var Mn = require('backbone.marionette'),
    RootLayoutView = require('./views/root/layout'),
    History = require('./services/history'),
    app;

app = new Mn.Application();

app.onBeforeStart = function () {
    this.layout = new RootLayoutView();
    this.history = History;

    console.log('Before app start');
};

app.onStart = function (options) {

    console.log('On app start');
};

app.onAfterStart = function () {
    this.history.start();
};

module.exports = app;