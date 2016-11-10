import DS from 'ember-data';

export default DS.Model.extend({
  alertText: DS.attr('string'),
  user: DS.belongsTo(),
  team: DS.belongsTo()
});
