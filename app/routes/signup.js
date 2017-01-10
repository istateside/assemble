import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

/**
  @class route:signup
  @extends Ember.Route
  @uses UnauthenticatedRouteMixin
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
