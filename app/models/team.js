import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  teamName: attr('string'),
  privacy: attr('string'),
  users: DS.hasMany(),
  alerts: DS.hasMany(),
});
