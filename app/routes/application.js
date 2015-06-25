import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),
  actions: {
    setLocale: function(locale) {
      this.set('i18n.locale', locale);
    }
  }
  //model: function() {
    //return Ember.RSVP.hash({
      //categories: this.store.find('category')
    //});
  //},
  //setupController: function(controller, model) {
    //this.controllerFor('categories').set('model', model.categories);
  //},
  //renderTemplate: function() {
    //this._super();
    //this.render('categories', {
      //into: 'application',
      //outlet: 'sidebar',
      //controller: 'categories'
    //});
  //}
});
