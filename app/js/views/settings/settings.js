'use strict'

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    SidebarCollection = require('../../collections/sidemenu'),
    SidebarlistView =require('./childs/sidebar/list'),
    FromSidebarlistView =require('./childs/formsidebar/form'),
    SideMenuModel = require('../../models/sidemenu'),
    SettingsView;

SettingsView = Mn.View.extend({
    template: require('./template/settings.pug'),
    regions: {
        sidebarlist: {
            el: '#sidebar-settings-list',
            replaceElement: true
        },
        formsidemenu: '#settings-form-sidebar'
    },
    ui: {
        selectAll: '.js-th',
        selectTd: '.js-td',
        removeAll: '.remove-all'
    },
    events: {
        'click @ui.selectAll': 'onSelectAll',
        'click @ui.selectTd': 'onSelectTD',
        'click @ui.removeAll': 'onRemoveAll'
    },
    onRender: function () {
        this.showSidebarlist()
        this.showForm()
    },
    showSidebarlist: function () {
        var sidebarList = new SidebarCollection();
        sidebarList.fetch();

        this.listenTo(sidebarList, 'sync', function () {
            this.showChildView('sidebarlist',
                new SidebarlistView({
                    collection: sidebarList
                })
            )
        })
    },
    showForm: function () {



        this.showChildView('formsidemenu',
            new FromSidebarlistView({
                // collection: userlist,
                // model: userModel
            })
        )

    },
    onSelectAll: function (e) {
        // $(".remove-all").prop("disable='false'");
        var checks = this.$el.find('.js-td'),
            ids = this.$el.find('.user-id');
        var allIDS = $(ids).text();
        var arr = allIDS.split(' ');
        arr.splice(0, 1)
        checks.each(function (i, a) {
            var itm = $(a);
            itm.prop("checked", !itm.prop("checked"));
        })
        console.log(arr);
        return arr
    },
    onSelectTD: function (e) {
        var id = this.$el.find('.user-id');
        console.log($(id).text())
    },
    onRemoveAll: function (e) {
        var ids = this.$el.find('.side-id');
        var allIDS = $(ids).text();
        var arr = allIDS.split(' ');
        arr.splice(0, 1);
        arr.forEach(function (i, e) {
            var model = new UserModel({
                id: i
            });
            console.log(model);
            model.destroy()
        })
        this.collection.fetch();
    }
});

module.exports = SettingsView;