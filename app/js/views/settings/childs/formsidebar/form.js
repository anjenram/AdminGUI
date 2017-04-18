'use strict';

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    FormBehavior = require('../../../../behaviors/form'),
    SidemenuModel = require('../../../../models/sidemenu'),
    FormSidebarMenuListView;

FormSidebarMenuListView = Mn.View.extend({
    initialize: function (options) {
        this.model = new  SidemenuModel()
    },
    template: require('./template/form.pug'),
    ui: {
        submit: '.submit'
    },
    events: {
        'click @ui.submit': 'onSubmit'
    },
    behaviors: {
        form: {
            behaviorClass: FormBehavior
        }
    },
    bindings: {
        '[name="url"]':{
            observe: 'url',
            updateView: true
        },
        '[name="name"]':{
            observe: 'name'
            // updateView:true
        }
    },
    onSubmit: function (e) {
        e.preventDefault();
        var _this = this;
        this.model.save(null,{
            type: 'POST',
            success: function () {

            }
        });
    }
});

module.exports = FormSidebarMenuListView;