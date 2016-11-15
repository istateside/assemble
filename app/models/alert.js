import DS from 'ember-data';

const { belongsTo, attr } = DS;

export default DS.Model.extend({
  alertText: attr('string'),
  alertLocation: attr('string'),
  team: belongsTo()
});
