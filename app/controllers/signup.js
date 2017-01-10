import Ember from 'ember';
import { isValidEmail } from '../system/validation';

const { service } = Ember.inject;

/**
  @class controller:signup
  @extends Ember.Controller
 */
export default Ember.Controller.extend({

  /**
    An alias for the session service.

    @property session
    @type Service
   */
  session: service(),
  store: service(),

  /**
    A method that determines whether a user can create a new account, based on
    whether their their `password` and `confirmPassword` match, and their email
    is valid.

    @private
    @method canSignUp
    @return Boolean
   */
  _canSignUp() {
    return this.get('password') === this.get('confirmPassword') &&
             isValidEmail(this.get('email'))
  },

  actions: {

    /**
      Sign up a new user by creating a new user record, saving it, then logging in.

      @event signup
     */
    signup() {
      if (this._canSignUp()) {
        let user = this.get('store').createRecord('user', {
          email: this.get('email'),
          password: this.get('password')
        });
        user.save();
        this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password')).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        }).then(() => this.transitionToRoute('/'));
      }
    }
  }
});
