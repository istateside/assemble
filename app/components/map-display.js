import Ember from 'ember';
import ENV from "assemble/config/environment";

const { inject } = Ember;
const { service } = inject;

export default Ember.Component.extend({
  /**
    An alias for the Google Maps service.

    @property googleMap
    @type Service
   */
  googleMap: service('google-map'),

  didInsertElement() {
    Ember.$.getScript('https://maps.googleapis.com/maps/api/js?key=' + ENV.GOOGLE_API_KEY, () => {
      return this.get('googleMap').initMap();
    });
  }
});
