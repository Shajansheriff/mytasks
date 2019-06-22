import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  desc: DS.attr('string'),
  lists: DS.hasMany('list')
});
