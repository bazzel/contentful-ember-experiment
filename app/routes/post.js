import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('categories').set('model', this.store.find('category'));
  },
  renderTemplate: function() {
    this._super();
    this.render('categories', {
      into: 'post',
      outlet: 'sidebar',
      controller: 'categories'
    });
  }
});
