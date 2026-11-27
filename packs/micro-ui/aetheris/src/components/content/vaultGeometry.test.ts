import test from 'node:test';
import assert from 'node:assert/strict';
import { computeRadialPosition } from './Content15';

test('computeRadialPosition places index 0 at 12 oclock (50%, 50 - r)', () => {
  const top = computeRadialPosition(0, 6, 38);
  assert.equal(top.angleDeg, 0);
  assert.equal(top.xPct, 50);
  assert.equal(top.yPct, 12);
});

test('computeRadialPosition places opposite node at 6 oclock (50%, 50 + r)', () => {
  const bottom = computeRadialPosition(3, 6, 38);
  assert.equal(bottom.angleDeg, 180);
  assert.equal(bottom.xPct, 50);
  assert.equal(bottom.yPct, 88);
});

test('computeRadialPosition throws for non-positive total', () => {
  assert.throws(() => computeRadialPosition(0, 0, 38));
});
