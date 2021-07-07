import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  desc: DS.attr('string')
});
