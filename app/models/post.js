import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  body: DS.attr('string'),
  authors: DS.hasMany('author'),
  authorNames: Ember.computed.mapBy('authors', 'name'),
  date: DS.attr('date'),
  featuredImage: DS.belongsTo('featuredImage', { async: true }),
  categories: DS.hasMany('category')
});
