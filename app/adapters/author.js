import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  find: function(store, type, id, snapshot) {
    var url = 'https://cdn.contentful.com/spaces/k2z9tfoe7o9n/entries/' + id + '?access_token=fe6eb8da16a59ce6de939cb35e2528f8848f7b505225cc1854b5a0bc0fba2aaa';
    return ajax(url);
  }

});
