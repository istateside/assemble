import Ember from 'ember';

const { service } = Ember.inject;

/**
  @class controller:login
  @extends Ember.Controller
  @type Ember.Controller
 */

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    /**
      Logs in the current user using Ember Simple Auth's Devise authenticator.

      @private
      @method authenticate
    */
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
