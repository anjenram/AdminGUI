'use strict';

var app = require('../app'),
    Backbone = require('backbone'),
    $ = require('jquery'),
    UserCollection = require('../collections/users'),
    SideMenuCollection = require('../collections/sidemenu');
// ProfileModel = require('../models/profile');

app.dictionaries = {};
app.dictionaries.users = new UserCollection();
app.dictionaries.sidemenu = new SideMenuCollection();
// app.dictionaries.districts = new DistrictsCollection();

$.when(
    app.dictionaries.sidemenu.fetch(),
    app.dictionaries.users.fetch()

    // app.dictionaries.districts.fetch()
).then(function () {
    console.log(app)
    app.start();

    Backbone.history.start({
     root: '/'
    });

    console.log('dictionaries loaded');
});