import Ember from 'ember';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),

  model: function() {
    return this.store.findAll('user');
  },

  actions: {
    getCurrentUserLocation() {
      this.get('geolocation').getLocation().then((geoObject) => {
        this.controllerFor('index').set('currentUserLocation',
          geoObject.coords.latitude + ", " + geoObject.coords.longitude);
      });
    }
  }
});
