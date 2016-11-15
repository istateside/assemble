import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  teamName: attr('string'),
  privacy: attr('string'),
  users: hasMany(),
  alerts: hasMany(),
});
