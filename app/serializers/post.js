import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var posts = payload.items.map(function(post) {
      return post.fields;
    });

    payload = {};
    payload[type.modelName] = posts;

    return this._super(store, type, payload);
  },
  normalize: function(typeClass, hash, prop) {
    hash.id = hash.slug;

    return this._super(typeClass, hash, prop);
  }
});
