import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
  list: DS.belongsTo('list'),
  board: DS.belongsTo('board'),
  pos: DS.attr('string'),
  // comments: DS.hasMany('comment')
});
