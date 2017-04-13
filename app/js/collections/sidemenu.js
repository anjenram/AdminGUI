'use strict';

var BaseCollection = require('./base'),
    SideMenuModel = require('../models/sidemenu'),
    _ = require('underscore'),
    SideMenuCollection;

SideMenuCollection =  BaseCollection.extend({
    url: 'side_menu/'

});

module.exports = SideMenuCollection;