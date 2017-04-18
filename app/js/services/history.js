'use strict';

var Backbone = require('backbone');

var history = Backbone.history;

var History = {
  init: function () {
    history.start({
      root: '/'
    })
  },

  reload: function() {
    history.loadUrl(history.fragment);
  },

  navigate: function(route, options) {
    history.navigate(route, options);
  },

  fragment: function() {
    return history.getFragment();
  }
};

module.exports = History;