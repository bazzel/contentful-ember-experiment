import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  body: DS.attr('string'),
  author: DS.belongsTo('author', { async: true }),
  authorName: Ember.computed.alias('author.name'),
  date: DS.attr('date')
});
