'use strict';

var Mn = require('backbone.marionette'),
    App = require('../app'),
    _ = require('underscore'),
    ProfileView = require('../views/profile/profile'),
    ErorrView = require('../views/erorr/erorr'),
    UserModel = require('../models/users'),
    Storage = require('../services/storage'),
    HeaderView = require('../views/header/header'),
    ProfileController;

ProfileController = Mn.Object.extend({

    profile: function() {
        console.log('router');
        if (Storage.get('logined')) {

            App.layout.showChildView('headerRegion',
                new HeaderView({})
            );
            var user = Storage.get('user');
            console.log(user)
            var model = new UserModel({
                id: user._id
            });
            model.fetch({
                success: function () {
                    App.layout.showChildView('pageRegion',
                        new ProfileView({
                            model: model
                        })
                    );
                }
            });
            console.log(model)

        } else {
            App.layout.showChildView('pageRegion',
                new ErorrView({

                })
            );
        }


    }
});
module.exports = ProfileController;