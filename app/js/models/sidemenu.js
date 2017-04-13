'use strict';

var BaseModel = require('./base'),
    AppConfig = require('../config'),
    SideMenuModel;

SideMenuModel = BaseModel.extend({
    urlRoot: AppConfig.apiPath + '/side_menu'
});

module.exports = SideMenuModel;