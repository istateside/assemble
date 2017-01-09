import DS from 'ember-data';

const { attr, hasMany } = DS;

/**
  @class model:team
  @extends DS.Model
 */

export default DS.Model.extend({
  // Attributes

  /**
    The name of a team.

    @attribute teamName
    @type String
   */
  teamName: attr('string'),

  /**
    A team's privacy setting. Can be 'public' (all users can see members and
    alerts) or 'private' (only members of that team can see).

    @attribute privacy
    @type String
   */
  privacy: attr('string'),

  // Relationships

  users: hasMany(),
  alerts: hasMany(),
});
