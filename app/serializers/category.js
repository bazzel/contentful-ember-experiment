import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var categories = payload.items.map(function(item) {
      var category = Ember.$.extend(true, {}, item.fields);
      category.id = item.sys.id;
      return category;
    });

    payload = {};
    payload[type.modelName] = categories;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, primaryTypeClass, rawPayload, recordId) {
    var category = rawPayload.fields;
    category.id = rawPayload.sys.id;

    var payload = {};
    payload[primaryTypeClass.modelName] = category;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
