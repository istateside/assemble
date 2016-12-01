import Ember from 'ember';
import ENV from 'assemble/config/environment';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  didInsertElement() {
    gapi.load('auth2', function() {
      window.auth2 = gapi.auth2.init({
        client_id: ENV.GOOGLE_CLIENT_ID
      });
    });
  },

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification, password');
      return this.get('session').authenticate('authenticator:oauth2-password-grant', identification, password)
      .catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },

    signinButton() {
      window.auth2.grantOfflineAccess({'redirect_uri': 'postmessage', prompt: 'login'}).then((authResult) => {
        debugger;
        if (authResult['code']) {

          // Hide the sign-in button now that the user is authorized, for example:
          $('#signinButton').attr('style', 'display: none');

          // Send the code to the server
          $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/auth/google_oauth2/callback',
            contentType: 'application/octet-stream; charset=utf-8',
            success: function(result) {
              // Handle or verify the server response.
              console.log("!!!");
            },
            processData: false,
            data: authResult['code']
          });
        } else {
          // There was an error.
        }
      });
    }
  },

  signInCallback(authResult) {
  }
});
