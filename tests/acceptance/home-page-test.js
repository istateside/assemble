import { test } from 'qunit';
import Ember from 'ember';
import moduleForAcceptance from 'assemble/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'assemble/tests/helpers/ember-simple-auth';
import testSelector from 'ember-test-selectors';

let StubGoogleMap = Ember.Service.extend({
  initMap() {}
});

moduleForAcceptance('Acceptance | home-page', {
  beforeEach() {
    this.application.register('service:mock-google-map', StubGoogleMap);
    this.application.inject('component', 'googleMap', 'service:mock-google-map');
  }
});

test('visiting /', function(assert) {
  authenticateSession(this.application);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find(testSelector('greeting')).text(), 'Hello Alice!');
  });
});
