import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('categories').set('model', this.store.find('category'));
  },
  renderTemplate: function() {
    this._super();
    this.render('categories', {
      into: 'posts',
      outlet: 'sidebar',
      controller: 'categories'
    });
  }
});
