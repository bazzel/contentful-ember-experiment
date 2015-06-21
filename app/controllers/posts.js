import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['date'],
  sortAscending: false,
  queryParams: ['category'],
  category: null,
  filteredPosts: function() {
    var category = this.get('category');
    var posts = this.get('arrangedContent');

    if (category) {
      return posts.filter(function(post) {
        return post.get('categories').mapBy('title').contains(category);
      });
    } else {
      return posts;
    }
  }.property('category', 'model')
});
