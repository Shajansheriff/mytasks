import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | boards/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:boards/details');
    assert.ok(route);
  });
});
