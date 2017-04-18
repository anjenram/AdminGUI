'use strict';

var BaseModel = require('./base'),
    AppConfig = require('../config'),
    LoginModel;

LoginModel = BaseModel.extend({
    urlRoot: AppConfig.apiPath + 'login'
});

module.exports = LoginModel;
