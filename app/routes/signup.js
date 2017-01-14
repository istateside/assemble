import Ember from 'ember';

/**
  @class route:signup
  @extends Ember.Route
 */
export default Ember.Route.extend({

  /**
    The standard Ember Route model hook, used to create a new user.

    @method model
    @return {Object}
   */
  model() {
    return this.store.createRecord('user');
  }
});
