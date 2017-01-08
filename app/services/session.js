import DS from 'ember-data';
import Session from "ember-simple-auth/services/session";

export default Session.extend({
  store: Ember.inject.service(),

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
