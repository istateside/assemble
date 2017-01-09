import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

/**
  @class route:index
  @extends Ember.Route
  @type Ember.Route
 */

export default Ember.Route.extend(ApplicationRouteMixin, {
  geolocation: service(),

  actions: {
    getCurrentUserLocation() {
      this.get('geolocation').getLocation().then((geoObject) => {
        this.controllerFor('index').set('currentUserLocation',
          geoObject.coords.latitude + ", " + geoObject.coords.longitude);
      });
    }
  }
});
