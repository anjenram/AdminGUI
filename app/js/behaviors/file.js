'use strict';

var Mn = require('backbone.marionette');

var ImageItemView = Mn.View.extend({

    tagName: 'div',
    className: 'gallery__item',
    template: require('../templates/images/image-item.pug'),

    events: {
        'click .gallery__item__delete': 'onClickDelete'
    },

    onClickDelete: function () {
        this.model.destroy();
    },

    onRender: function () {
        var img = this.$el.find('img');

        if (this.model.get('file').id) {
            img.attr('src', this.model.get('file').thumbnail);
            return;
        }

        var reader = new FileReader();

        reader.onload = function () {
            img.attr('src', reader.result);
        }; 

        reader.readAsDataURL(this.model.get('file'));
    }

});

var FileItemView = Mn.View.extend({

    tagName: 'div',
    className: 'form-file__item gallery-files__item label label-file',
    template: require('../templates/images/file-item.pug'),

    events: {
        'click .form-file__delete': 'onClickDelete'
    },

    onRender: function () {
        var img = this.$el.find('a');

        if (this.model.get('file').id) {
            img.attr('href', this.model.get('file').url);
            return;
        }

        var reader  = new FileReader();

        reader.onload = function () {
            img.attr('href', reader.result);
        };

        reader.readAsDataURL(this.model.get('file'));
    },

    onClickDelete: function () {
        this.model.destroy();
    }

});

var FileCollectionView = Mn.CollectionView.extend({

    tagName: 'div',
    className: 'gallery',

    childView: function (model) {
        var view;

        //TODO rewrite
        var file_type = model.get('file').type;

        if (file_type.indexOf('image') != -1) {
            view = ImageItemView;
        } else {
            view = FileItemView;
        }

        return view;
    },

    viewComparator: function (model) {
        return model.get('file').type;
    }

});

var FileBehavior = Mn.Behavior.extend({

    events: {
        'change .form-image-input': 'onChange'
    },

    onChange: function (e) {
        if (e.currentTarget.files[0]) {
            this.view.model.get('files').add({
                file: e.currentTarget.files[0]
            });
            this.view.model.trigger('change:files');
        }
    },

    onAttach: function () {
        new FileCollectionView({
            el: this.$el.find('#images'),
            collection: this.view.model.get('files')
        }).render();
    }

});

module.exports = FileBehavior;