import DS from 'ember-data';

export default DS.Model.extend({
  alertText: DS.attr('string'),
  alertLocation: DS.attr('string'),
  team: DS.belongsTo()
});
