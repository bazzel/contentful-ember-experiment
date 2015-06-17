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
  }
});
