import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var posts = payload.items.map(function(item) {
      var post = Ember.$.extend(true, {}, item.fields);
      post.id = item.sys.id;
      post.author = post.author[0].sys.id;
      return post;
    });

    payload = {};
    payload[type.modelName] = posts;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, primaryTypeClass, rawPayload, recordId) {
    var post = rawPayload.fields;
    post.id = rawPayload.sys.id;
    post.author = post.author[0].sys.id;

    var payload = {};
    payload[primaryTypeClass.modelName] = post;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
