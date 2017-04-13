'use strict';

var app = require('./app'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');

Backbone.$ = $;
window.jQuery = $;
window._ = _;


require('./initializers/dictionaries');
require('./initializers/stickit');
require('./initializers/main');
require('./initializers/profile');
require('./initializers/settings');
require('./initializers/userslist');

require('bootstrap-sass');
// app.start();
