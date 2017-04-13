'use strict';

var STORAGE = localStorage;

var Storage = {
  set: function(key, data) {
    data = JSON.stringify(data);
    STORAGE.setItem(key, data);
  },

  get: function(key) {
    var data = STORAGE.getItem(key);
    return JSON.parse(data);
  },

  remove: function(key) {
    STORAGE.removeItem(key);
  },

  clear: function() {
    STORAGE.clear();
  }
};

module.exports = Storage;
