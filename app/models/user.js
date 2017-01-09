import DS from 'ember-data';

const { attr, hasMany } = DS;

/**
  @class model:user
  @extends DS.Model
  @type DS.Model
 */

export default DS.Model.extend({
  // Properties

  email: attr('string'),
  username: attr('string'),
  profileText: attr('string'),

  // Relationships

  teams: hasMany()
});
