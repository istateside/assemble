import DS from 'ember-data';
import Session from "ember-simple-auth/services/session";

const { service } = Ember.inject;

/**
  A service extending Ember Simple Auth's provided `session` service.
  Used primarily for providing information on the current user.

  @class service:session
  @extends ember-simple-auth/services/session
  @type Ember.Service
*/

export default Session.extend({

  /**
    An alias for injecting Ember Data's store service.

    @property store
    @type Service
   */
  store: service(),

  /**
    A method to get and set the current user's data if authenticated.

    @public
    @method loadCurrentUserData
  */
  loadCurrentUserData() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (this.get('isAuthenticated')) {
        return this.get('store').findRecord('user', 'me').then((user) => {
          this.set('currentUser', user);
          return this.get('store').query('team', { user_id: this.get('currentUser.id')}).then((teams) => {
            this.set('currentUserTeams', teams);
          });
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});
