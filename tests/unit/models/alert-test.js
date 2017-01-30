import { moduleForModel, test } from 'ember-qunit';

moduleForModel('alert', 'Unit | Model | alert', {
  // Specify the other units that are required for this test.
  needs: ['model:team', 'model:alert']
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
