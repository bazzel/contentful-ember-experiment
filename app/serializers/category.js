import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var categories = payload.items.map(function(item) {
      var category = item.fields;
      category.id = item.sys.id;
      return category;
    });

    payload = {};
    payload[type.modelName] = categories;

    return this._super(store, type, payload);
  }
});
