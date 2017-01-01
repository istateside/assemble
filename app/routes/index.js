import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  geolocation: Ember.inject.service(),

  actions: {
    getCurrentUserLocation() {
      this.get('geolocation').getLocation().then((geoObject) => {
        this.controllerFor('index').set('currentUserLocation',
          geoObject.coords.latitude + ", " + geoObject.coords.longitude);
      });
    }
  }
});
