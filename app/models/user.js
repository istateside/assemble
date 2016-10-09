import attr from 'ember-data/attr';
import DS from 'ember-data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  email: attr('string'),
  teams: DS.hasMany(),
  alerts: DS.hasMany(),
  profiles: DS.hasMany(),
});
