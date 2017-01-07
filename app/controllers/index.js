import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: Ember.computed.alias('session.currentUser'),

  currentUserLocation: null,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
