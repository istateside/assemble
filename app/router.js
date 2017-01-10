import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('users/login');
  this.route('login');
  this.route('signup');
});

export default Router;
