import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DESIGN_SYSTEM_CATALOG,
  countByCategory,
  computeRadialPoint,
} from './designSystemRegistry';

test('catalog contains all 62 components including 15 content sections', () => {
  assert.equal(DESIGN_SYSTEM_CATALOG.length, 62);
  assert.equal(countByCategory('content'), 15);
  assert.equal(countByCategory('navbar'), 4);
  assert.equal(countByCategory('heroes'), 5);
});

test('every component ID in the catalog is unique', () => {
  const ids = new Set(DESIGN_SYSTEM_CATALOG.map((c) => c.id));
  assert.equal(ids.size, DESIGN_SYSTEM_CATALOG.length);
});

test('computeRadialPoint returns exact cardinal points around center 50,50', () => {
  const top = computeRadialPoint(0, 35);
  assert.equal(top.x, 50);
  assert.equal(top.y, 15);

  const right = computeRadialPoint(90, 35);
  assert.equal(right.x, 85);
  assert.equal(right.y, 50);

  const bottom = computeRadialPoint(180, 35);
  assert.equal(bottom.x, 50);
  assert.equal(bottom.y, 85);
});
