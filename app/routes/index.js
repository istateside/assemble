import Ember from 'ember';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),

  model() {
    return this.store.findAll('user');
  },

  actions: {
    getUserLocation() {
      this.get('geolocation').getLocation().then(() => {
        var currentLocation = this.get('geolocation').get('currentLocation');
        this.controllerFor('index').set('userLocation', currentLocation);
      });
    }
  }
});
