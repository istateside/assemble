import DS from 'ember-data';

const { belongsTo, attr } = DS;

/**
  @class model:alert
  @extends DS.Model
  @type DS.Model
 */

export default DS.Model.extend({
  // Properties

  alertText: attr('string'),
  alertLocation: attr('string'),

  // Relationships

  team: belongsTo()
});
