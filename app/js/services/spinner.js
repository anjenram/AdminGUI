var _ = require('underscore'),
    nprogress = require('nprogress');

nprogress.done = _.debounce(nprogress.done, 1000);

var Spinner = {

  init: function() {
    nprogress.configure({
      parent: '.spinner',
      showSpinner: false
    });
  },

  hide: function () {
    nprogress.done();
  },

  show: function () {
    nprogress.start();
  }

};

module.exports = Spinner;