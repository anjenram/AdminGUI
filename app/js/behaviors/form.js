'use strict';

var Mn = require('backbone.marionette'),
    _ = require('underscore'),
    Tooltip = require('../helpers/tooltip'),
    FormBehavior;

// var Tooltip = require('../helpers/tooltip');
// var Loader = require('../helpers/loader');

FormBehavior = Mn.Behavior.extend({

    bindValidationEvents: function () {
        this.listenTo(this.view.model, 'request', function () {
            // var $submit_btn = this.view.$('button[type="submit"]');
            // Loader.add($submit_btn);
            Tooltip.destroy_all(this.view.$el.find('form'));
        }, this);

        this.listenTo(this.view.model, 'sync error', function () {
            // var $submit_btn = this.view.$('button[type="submit"]');
            // Loader.destroy($submit_btn);
        }, this);

        this.listenTo(this.view.model, 'error', function (model, errors, options) {

            _.each(this.view.model.attributes, function (attr, key) {
                this.onValid(this.view, key);
            }, this);

            _.each(errors, function (error, key) {
                this.onInvalid(this.view, key, error);
            }, this);

        }, this);

        this.listenTo(this.view.model, 'validated:valid', function () {
            Tooltip.destroy_all(this.view.$el.find('form'));
        }, this);
    },

    onRender: function () {
        this.bindValidationEvents();
        this.view.stickit();
    },

    onValid: function (view, attr) {
        var $el = view.$("[name=" + attr + "]");

        Tooltip.destroy($el);
    },

    onInvalid: function (view, attr, error) {
        var $el = view.$("[name=" + attr + "]");

        Tooltip.add($el, {
            title: error
        });
    }

});

module.exports = FormBehavior;