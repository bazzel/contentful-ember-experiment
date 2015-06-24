import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var authors    = [],
        categories = [],
        entries    = payload.includes.Entry,
        posts      = payload.items.map((item) => {
      return this._extractPost(item, authors, categories, entries);
    });

    payload = {
      authors: authors,
      categories: categories
    };
    payload[type.modelName] = posts;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, payload, recordId) {
    var authors    = [],
        categories = [],
        item       = payload.items[0],
        entries    = payload.includes.Entry,
        post       = this._extractPost(item, authors, categories, entries);

    payload = {
      authors: authors,
      categories: categories
    };
    payload[type.modelName] = post;

    return this._super(store, type, payload, recordId);
  },
  _cacheEntries: function(hash) {
    var entryCache = {};

    hash.forEach(function(item) {
      var entry = item.fields;

      entry.id = item.sys.id;
      entryCache[entry.id] = entry;
    });

    return entryCache;
  },
  _extractPost: function(item, authors, categories, entries) {
    var entryCache = this._cacheEntries(entries),
        post       = item.fields;

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

    return post;
  }
});
