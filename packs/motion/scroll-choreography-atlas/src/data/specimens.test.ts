import test from 'node:test';
import assert from 'node:assert/strict';
import { SPECIMENS, filterSpecimens } from './specimens';

test('catalog defines exactly 20 unique Scroll1..Scroll20 specimens', () => {
  assert.equal(SPECIMENS.length, 20);
  const codes = SPECIMENS.map((s) => s.code);
  for (let i = 1; i <= 20; i++) {
    assert.ok(codes.includes(`Scroll${i}`), `Missing Scroll${i}`);
  }
});

test('filterSpecimens returns all or category-specific subsets', () => {
  assert.equal(filterSpecimens(SPECIMENS, 'all').length, 20);
  const sticky = filterSpecimens(SPECIMENS, 'sticky-pinned');
  assert.ok(sticky.length > 0 && sticky.length < 20);
  assert.ok(sticky.every((s) => s.category === 'sticky-pinned'));
});
