import Ember from 'ember';

const { service } = Ember.inject;

/**
  @class controller:login
  @extends Ember.Controller
 */

export default Ember.Controller.extend({

  /**
    An alias for the session service.

    @property session
    @type Service
   */
  session: service('session'),

  actions: {
    /**
      Logs in the current user using Ember Simple Auth's Devise authenticator.

      @private
      @event authenticate
    */
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
