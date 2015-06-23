import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var postCache = {};
    var entryCache = {};

    var authors = [];
    var categories = [];

    payload.includes.Entry.forEach(function(item) {
      var entry = item.fields;
      entry.id = item.sys.id;
      entryCache[entry.id] = entry;
    });

    var posts = payload.items.map(function(item) {
      var post = item.fields;
      post.id = item.sys.id;
      post.authors = post.author.map(function(item) {
        authors.push(entryCache[item.sys.id]);
        return item.sys.id;
      });
      post.categories = post.category.map(function(item) {
        categories.push(entryCache[item.sys.id]);
        return item.sys.id;
      });
      post.featuredImage = post.featuredImage != null && post.featuredImage.sys.id;

      delete post.author;
      delete post.category;

      postCache[post.id] = post;

      return post;
    });

    payload = {authors: authors, categories: categories};
    payload[type.modelName] = posts;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, primaryTypeClass, payload, recordId) {
    var entryCache = {};
    var authors = [];
    var categories = [];

    payload.includes.Entry.forEach(function(item) {
      var entry = item.fields;
      entry.id = item.sys.id;
      entryCache[entry.id] = entry;
    });

    var post = payload.items[0].fields;
    post.id = payload.items[0].sys.id;
    post.authors = post.author.map(function(item) {
      authors.push(entryCache[item.sys.id]);
      return item.sys.id;
    });
    post.categories = post.category.map(function(item) {
      categories.push(entryCache[item.sys.id]);
      return item.sys.id;
    });
    post.featuredImage = post.featuredImage != null && post.featuredImage.sys.id;

    delete post.author;
    delete post.category;

    payload = {authors: authors, categories: categories};
    payload[primaryTypeClass.modelName] = post;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
