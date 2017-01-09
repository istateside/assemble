import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

/**
  @class controller:index
  @extends Ember.Controller
  @type Ember.Controller
 */

export default Ember.Controller.extend({
  session: service('session'),
  currentUser: alias('session.currentUser'),
  teams: alias('session.currentUserTeams'),

  currentUserLocation: null,

  actions: {
    
    /**
      Logs out the current user.

      @private
      @method invalidateSession
    */
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
