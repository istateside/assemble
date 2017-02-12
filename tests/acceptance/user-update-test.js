/* global server */
import { test } from 'qunit';
import moduleForAcceptance from 'assemble/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { authenticateSession } from 'assemble/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | user update');

test('should update user', function(assert) {
  authenticateSession(this.application);
  let user = server.db.users.findBy({ email: 'alice@example.com'});

  visit('/users/' + user.id + '/edit');
  fillIn(testSelector('email'), 'new.email@example.com');
  click('button.submit');

  andThen(function() {
    assert.equal(currentURL(), '/users/' + user.id);
    assert.equal(find(testSelector('email')).text(), 'new.email@example.com');
  });
});
