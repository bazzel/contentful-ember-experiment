import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      categories: [{id: 1, name: 'Foo'}, {id: 2, name: 'Bar'}]
    });
  },
  setupController: function(controller, model) {
    this.controllerFor('categories').set('model', model.categories);
  },
  renderTemplate: function() {
    this.render('application');
    this.render('categories', {
      into: 'application',
      outlet: 'sidebar',
      controller: 'categories'
    });
  }
});
