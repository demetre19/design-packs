import test from 'node:test';
import assert from 'node:assert/strict';
import * as ContentModules from './index';

test('exports all 15 named content components Content1 through Content15', () => {
  const expectedNames = Array.from({ length: 15 }, (_, i) => `Content${i + 1}`);
  for (const name of expectedNames) {
    assert.equal(
      typeof (ContentModules as Record<string, unknown>)[name],
      'function',
      `${name} should be exported as a React component function`
    );
  }
});
