import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  email: attr('string'),
  username: attr('string'),
  profileText: attr('string'),
  teams: hasMany()
});
