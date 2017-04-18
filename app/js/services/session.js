'use strict';

var Storage = require('./storage'),
    History = require('./history'),
    // User = require('../models/user'),
    Session;

var STORAGE_KEY = 'user';

var currentUser = null;

Session = {
    currentUser: function() {
        return currentUser || (currentUser = new User(Storage.get(STORAGE_KEY)));
    },

    isLoggedIn: function() {
        return this.currentUser().isLogged();
    },

    save: function () {
        Storage.set(STORAGE_KEY, this.currentUser().toJSON());
    },

    // create: function (cbs) {
    //     var _this = this;
    //     this.currentUser().login({}, {
    //         success: function () {
    //             _this.save();
    //             History.navigate('#/board/tasks/', { trigger: true });
    //         },
    //         error: function (xhr, status, error) {
    //             _this.currentUser().trigger('error', _this.currentUser(), JSON.parse(xhr.responseText) || {}, {});
    //         }
    //     });
    // },
    create: function (cbs) {
        var _this = this;
        // this.currentUser().login({}, {
        //     success: function () {
        //         _this.save();
                History.navigate('#/', { trigger: true });
            // },
            // error: function (xhr, status, error) {
            //     _this.currentUser().trigger('error', _this.currentUser(), JSON.parse(xhr.responseText) || {}, {});
            // }
        // });
    },
    clean: function () {
        // Storage.remove(STORAGE_KEY);
        // this.currentUser().clear();
        History.navigate('#/login', { trigger: true });
    },

    getToken: function() {
        return { userTokenId: this.currentUser().get('TokenID') };
        // return { userTokenId: '7446f2a7-aba1-4b44-ab83-4197695c810b' };
    },
    getCSRFToken: function() {

        return this.getCookie('csrftoken');

    },

    getCookie: function(name) {
        function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
    }

};

module.exports = Session;