import DS from 'ember-data';

const { attr, hasMany } = DS;

/**
  @class model:team
  @extends DS.Model
  @type DS.Model
 */

export default DS.Model.extend({
  // Properties

  teamName: attr('string'),
  privacy: attr('string'),

  // Relationships

  users: hasMany(),
  alerts: hasMany(),
});
