import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

/**
  @class route:login
  @extends Ember.Route
  @cuses UnauthenticatedRouteMixin
 */

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
});
