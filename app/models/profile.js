import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  profileText: DS.attr('string'),
  onCall: DS.attr('boolean'),
  // add profile pic later
  // profilePic: DS.attr('string'),
  user: DS.belongsTo(),
  team: DS.belongsTo(),
});
