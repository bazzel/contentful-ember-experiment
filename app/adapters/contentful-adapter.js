import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  spaceId: 'k2z9tfoe7o9n',
  accessToken: 'fe6eb8da16a59ce6de939cb35e2528f8848f7b505225cc1854b5a0bc0fba2aaa',
  contentTypeId: undefined,
  linkType: 'entries',
  findAll: function() {
    var url = 'https://cdn.contentful.com/spaces/' + this.spaceId + '/' + this.linkType + '?content_type=' + this.contentTypeId + '&access_token=' + this.accessToken;
    return ajax(url);
  },
  find: function(store, type, id) {
    var url = 'https://cdn.contentful.com/spaces/' + this.spaceId + '/' + this.linkType + '/' + id + '?access_token=' + this.accessToken;
    return ajax(url);
  }
});
