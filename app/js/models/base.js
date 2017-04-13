'use strict';

var Backbone = require('backbone'),
    gspb = require('../services/session'),
    BaseModel;
BaseModel = Backbone.Model.extend({
    // methodMap: {
    //     'create': 'POST',
    //     'update': 'PUT',
    //     'delete': 'DELETE',
    //     'read':   'GET'
    // },
    //
    // sync: function (method, model, options) {
    //     var type = this.methodMap[method];
    //     var self = this;
    //
    //     if ((type == 'DELETE') || (type == 'GET')) {
    //         return Backbone.sync(method, model, options);
    //     } else {
    //         var form = new FormData();
    //
    //         _.each(this.attributes, function (value, key) {
    //             if (key == 'files') {
    //                 _.each(value.models, function (file) {
    //                     form.append(key, file.get('file'));
    //         });
    //                 return;
    //             }
    //             form.append(key, value);
    //         });
    //
    //         var url = this.url();
    //
    //         if (options.url)
    //             url = options.url;
    //
    //         var xhr = new XMLHttpRequest();
    //
    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState == 4)
    //                 if (xhr.status == 200 || xhr.status == 201) {
    //                     options.success(xhr.response, xhr.status, xhr);
    //                 } else {
    //                     self.trigger('error', self, JSON.parse(xhr.response) || {}, options);
    //                 }
    //         };
    //
    //         xhr.open(type, url);
    //         xhr.send(form);
    //         model.trigger('request', model, xhr, options);
    //
    //         return xhr;
    //     }
    //
    // }
});

module.exports = BaseModel;
