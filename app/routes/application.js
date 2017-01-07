import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._loadCurrentUser().then(() => {
      this.transitionTo('/');
    }).catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    this.get('session').loadCurrentUser();
  }
});
