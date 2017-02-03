import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

let StubGoogleMap = Ember.Service.extend({
  initMap() {}
});

moduleForComponent('map-display', 'Integration | Component | map display', {
  integration: true,
  beforeEach() {
    this.register('service:google-map', StubGoogleMap);
    this.inject.service('googleMap', { as: 'mapsService' });
  }
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{map-display}}`);

  assert.equal(this.$().text().trim(), '');
});
