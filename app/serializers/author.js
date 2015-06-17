import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function(store, primaryTypeClass, rawPayload, recordId) {
    var author = rawPayload.fields;
    author.id = rawPayload.sys.id;

    var payload = {};
    payload[primaryTypeClass.modelName] = author;
    return this._super(store, primaryTypeClass, payload, recordId);
  }
});
