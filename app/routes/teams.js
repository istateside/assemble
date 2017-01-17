import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findRecord('user', 'me').then((user) => {
      this.set('currentUser', user);
      return this.get('store').query('team', { user_id: this.get('currentUser.id')}).then((teams) => {
        return teams;
      });
    });
  }
});
