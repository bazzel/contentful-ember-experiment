import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  findAll: function() {
    var url = 'https://cdn.contentful.com/spaces/k2z9tfoe7o9n/entries?content_type=5KMiN6YPvi42icqAUQMCQe&access_token=fe6eb8da16a59ce6de939cb35e2528f8848f7b505225cc1854b5a0bc0fba2aaa';
    return ajax(url);
  }
});
