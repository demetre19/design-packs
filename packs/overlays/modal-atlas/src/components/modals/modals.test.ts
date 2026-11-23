import test from 'node:test';
import assert from 'node:assert/strict';
import * as modals from './index';

test('all 20 modal components Modal1..Modal20 are exported as functions', () => {
  for (let i = 1; i <= 20; i++) {
    const key = `Modal${i}` as keyof typeof modals;
    assert.equal(typeof modals[key], 'function', `Expected ${key} to be exported`);
  }
});
