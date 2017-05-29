import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('users/login');
  this.route('teams', function() {
    this.route('show', { path: '/:team_id' });
  });
  this.route('login');
  this.route('signup');
});

export default Router;
