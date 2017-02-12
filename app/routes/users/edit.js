import Ember from 'ember';

/**
  @class route:user
  @extends Ember.Route
 */
export default Ember.Route.extend({

  /**
    The standard Ember Route model hook, used to create a new user.

    @method model
    @return {Object}
   */
  model(params) {
    return this.store.find('user', params.user_id);
  }
});
