import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

/**
  @class route:index
  @extends Ember.Route
  @uses ApplicationRouteMixin
 */

export default Ember.Route.extend(ApplicationRouteMixin, {

  /**
    An alias for the Ember geolocation service used to access current user's location.

    @property geolocation
    @type Service
   */
  geolocation: service(),

  actions: {

    /**
      An action using the geolocation service to get the current user's location
      in latitude/longitude and populate the `currentUserLocation` property on the
      index controller with that location as a string.

      @event getCurrentUserLocation
      @return String
     */
    getCurrentUserLocation() {
      this.get('geolocation').trackLocation().then((geoObject) => {
        this.controllerFor('index').set('currentUserLocation',
          geoObject.coords.latitude + ", " + geoObject.coords.longitude);
      });
    }
  }
});
