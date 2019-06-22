import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  position: DS.attr('string'),
  board: DS.belongsTo('board'),
  cards: DS.hasMany('card')
});
