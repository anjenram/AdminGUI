'use strict';

var BaseCollection = require('./base'),
    UsersModel = require('../models/users'),
    _ = require('underscore'),
    UsersCollection;

UsersCollection = BaseCollection.extend({
    url: 'users/',
    model: UsersModel
});

module.exports = UsersCollection;