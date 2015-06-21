import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var posts = payload.items.map(function(item) {
      var post = Ember.$.extend(true, {}, item.fields);
      post.id = item.sys.id;
      post.authors = post.author.map(function(item) {
        return item.sys.id;
      });
      post.categories = post.category.map(function(item) {
        return item.sys.id;
      });
      post.featuredImage = post.featuredImage != null && post.featuredImage.sys.id;

      delete post.author;
      delete post.category;

      return post;
    });

    payload = {};
    payload[type.modelName] = posts;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, primaryTypeClass, rawPayload, recordId) {
    var post = rawPayload.fields;
    post.id = rawPayload.sys.id;
    post.authors = post.author.map(function(item) {
      return item.sys.id;
    });
    post.categories = post.category.map(function(item) {
      return item.sys.id;
    });
    post.featuredImage = post.featuredImage != null && post.featuredImage.sys.id;

    delete post.author;
    delete post.category;

    var payload = {};
    payload[primaryTypeClass.modelName] = post;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
