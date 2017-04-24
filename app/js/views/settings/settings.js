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
    initialize: function (options) {
        this.SelectId = ''
    },
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
        remove: '.remove'
    },
    events: {
        'click @ui.selectAll': 'onSelectAll',
        'click @ui.selectTd': 'onSelectTD',
        'click @ui.remove': 'onRemove'
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
        var _this = this;
        var CurrentEl = this.$el.find(e.target);
        var id = CurrentEl.parent().next('td').text();
        console.log(id)
        return _this.SelectId = id
    },
    onRemove: function (e) {
        var _this = this;
        var id = _this.SelectId;
        console.log(id)
        var sideSelectModel = new SideMenuModel({
            id: id
        });
        sideSelectModel.destroy({
            success:function () {
                console.log('DELITED!')
            }
        })
    }
});

module.exports = SettingsView;