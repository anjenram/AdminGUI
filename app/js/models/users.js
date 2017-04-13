'use strict'

var BaseModel = require('./base'),
    AppConfig = require('../config'),
    UsersModel;

UsersModel = BaseModel.extend({
    urlRoot: AppConfig.apiPath + 'users'
});

module.exports = UsersModel;
