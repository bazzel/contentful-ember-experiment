import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function(store, primaryTypeClass, payload, recordId) {
    var featuredImage = payload.items[0].fields;
    featuredImage.id = payload.items[0].sys.id;
    featuredImage.url = payload.items[0].fields.file.url;

    var payload = {};
    payload[primaryTypeClass.modelName] = featuredImage;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
