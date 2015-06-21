import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  toSentence: function() {
    // http://breakthebit.org/post/11054178956/javascript-equivalent-of-array-to-sentence-from
    var sentence = this.get('words').join(", ").replace(/,\s([^,]+)$/, ' en $1');

    return new Ember.Handlebars.SafeString(sentence);
  }.property('words.@each')
});
