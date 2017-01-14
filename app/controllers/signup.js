import Ember from 'ember';
import { isValidEmail } from '../system/validation';

const { service } = Ember.inject;

/**
  @class controller:signup
  @extends Ember.Controller
 */
export default Ember.Controller.extend({

  /**
    An alias for the session service/dependency injection.

    @property session
    @type Service
   */
  session: service(),

  /**
    An alias for the Ember Data store/dependency injection.

    @property store
    @type Service
   */
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
    return this.get('password') === this.get('passwordConfirmation') &&
             isValidEmail(this.get('email'));
  },

  actions: {

    /**
      Sign up a new user by creating a new user record, saving it, then logging in.

      @event signup
     */
    signup() {
      let user = this.get('model');

      user.save().catch((error) => {
        this.set('errorMessage', error);
      }).then(() => {
        this.get('session')
        .authenticate('authenticator:devise',
          user.get('email'), user.get('password'))
          .catch((reason) => {
            this.set('errorMessage', reason.error || reason);
          });
      });
    }
  }
});
