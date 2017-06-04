/* global server */
import { skip, test } from 'qunit';
import moduleForAcceptance from 'assemble/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'assemble/tests/helpers/ember-simple-auth';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | team-show', {
  beforeEach() {
    this.team1 = server.create('team', { teamName: 'The Fighting Mongooses' });
    this.team2 = server.create('team', { teamName: 'The Springfield Isotopes' });
    this.team3 = server.create('team', { teamName: 'The New New York Mets' });

    server.create('user', { username: 'Alice', email: 'alice@example.com', teams: [this.team1, this.team3] });
    server.create('user', { username: 'Laura', email: 'laura@example.com' , teams: [this.team1] });
    server.create('user', { username: 'Marge', email: 'marge@example.com' , teams: [this.team1] });
    server.create('user', { username: 'Maggie', email: 'maggie@example.com' , teams: [this.team2] });
    server.create('user', { username: 'Patty', email: 'patty@example.com', teams: [this.team2] });

    authenticateSession(this.application);
  }
});

test("the page shows the team name", function(assert) {
  visit(`/teams/${this.team1.id}`);

  andThen(() => {
    assert.equal(find(testSelector('team-name')).text(), 'The Fighting Mongooses');
  });
});

test("the page lists the team's users", function(assert) {
  visit(`/teams/${this.team1.id}`);

  andThen(() => {
    assert.equal(find(testSelector('username', 0)).text(), 'Alice');
    assert.equal(find(testSelector('username', 1)).text(), 'Laura');
    assert.equal(find(testSelector('username', 2)).text(), 'Marge');
  });
});

skip("unauthenticated users", function(assert) {
  // Assumes current user is alice@example.com
  visit(`/teams/${this.team2.id}`);

  andThen(() => {
    assert.equal(find(testSelector('team-name')).length, 0, 'it does not render the page for users who are not part of the team');
  });
});
