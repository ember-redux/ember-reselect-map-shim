import { test, module } from 'qunit';
import { createArraySelector } from 'reselect-map';

module('reselect-map export tests');

test('exports function', function(assert) {
  assert.equal(typeof createArraySelector, 'function');
});
