import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  body: DS.attr('string'),
  authors: DS.hasMany('author', { async: true }),
  authorNames: Ember.computed.mapBy('authors', 'name'),
  date: DS.attr('date')
});
