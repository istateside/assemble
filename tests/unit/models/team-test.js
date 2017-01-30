import { moduleForModel, test } from 'ember-qunit';

moduleForModel('team', 'Unit | Model | team', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:alert', 'model:team']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
