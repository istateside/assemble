import Ember from 'ember';

/**
  @class route:team
  @extends Ember.Route
 */
export default Ember.Route.extend({
  model(params) {
    return this.store.find('team', params.team_id);
  }
});
