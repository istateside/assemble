import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  currentUserLocation: null,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
