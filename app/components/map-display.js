import Ember from 'ember';

export default Ember.Component.extend({
  /**
    An alias for the Google Maps service.

    @property map
    @type Service
   */
  map: service('google-map')
});
