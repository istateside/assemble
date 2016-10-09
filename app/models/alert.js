import DS from 'ember-data';

export default DS.Model.extend({
  alertText: DS.attr('string'),
  // figure out how to get location later
  // prob gonna be some kind of service
  // location: DS.attr('string'),
  user: DS.belongsTo(),
  team: DS.belongsTo()
});
