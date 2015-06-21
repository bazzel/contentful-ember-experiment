import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  //extractArray: function(store, type, payload) {
    //var posts = payload.items.map(function(item) {
      //var post = Ember.$.extend(true, {}, item.fields);
      //post.id = item.sys.id;
      //post.authors = post.author.map(function(item) {
        //return item.sys.id;
      //});
      //return post;
    //});

    //payload = {};
    //payload[type.modelName] = posts;

    //return this._super(store, type, payload);
  //},
  extractSingle: function(store, primaryTypeClass, rawPayload, recordId) {
    var featuredImage = rawPayload.fields;
    featuredImage.id = rawPayload.sys.id;
    featuredImage.url = rawPayload.fields.file.url;

    var payload = {};
    payload[primaryTypeClass.modelName] = featuredImage;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
