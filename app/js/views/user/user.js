'use strict'

var Mn = require('backbone.marionette'),
    Bb =require('backbone'),
    $ = require('jquery'),
    AppConfig = require('../../config'),
    UserCollection = require('../../collections/users'),
    UserlistView =require('./childs/userlist/list'),
    FromUserlistView =require('./childs/from/form'),
    UserModel = require('../../models/users'),
    UsersView;

UsersView = Mn.View.extend({
    template: require('./template/user.pug'),
    regions: {
        users: {
            el: '#user-list',
            replaceElement: true
        },
        formuser: '#from-userslist'
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
        this.showUserlist()
        this.showForm()
    },
    showUserlist: function () {
        var userlist = new UserCollection();
        userlist.fetch();

        this.listenTo(userlist, 'sync', function () {
            this.showChildView('users',
                new UserlistView({
                    collection: userlist
                })
            )
        })
    },
    showForm: function () {
        var userlist = new UserCollection();
        // var userModel = new UserModel();
        // userlist.fetch();
        // userModel.fetch();

        // this.listenTo(userlist, 'sync', function () {
            this.showChildView('formuser',
                new FromUserlistView({
                    // collection: userlist,
                    // model: userModel
                })
            )
        // })
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
        var ids = this.$el.find('.user-id');
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
        // this.collection.fetch();
    }
});

module.exports = UsersView;