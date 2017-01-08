import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),

  beforeModel() {
    return this._loadCurrentUserData();
  },

  sessionAuthenticated() {
    this._loadCurrentUserData().then(() => {
      this.transitionTo('/');
    }).catch(() => this.get('session').invalidate());
  },

  _loadCurrentUserData() {
    this.get('session').loadCurrentUserData();
  }
});
