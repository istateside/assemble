import DS from 'ember-data';

const { belongsTo, attr } = DS;

/**
  @class model:alert
  @extends DS.Model
 */

export default DS.Model.extend({
  // Attributes

  /**
    The actual text of an alert sent from a user to a team.

    @attribute alertText
    @type String
   */
  alertText: attr('string'),

  /**
    The latitude and longitude of the user sending the alert.

    @attribute alertLocation
    @type String
   */
  alertLocation: attr('string'),

  // Relationships

  team: belongsTo()
});
