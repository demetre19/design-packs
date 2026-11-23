import test from 'node:test';
import assert from 'node:assert/strict';
import {
  GOO_SPECIMENS,
  filterSpecimens,
  getCategoryCounts,
  clampElasticPull,
  computeMagneticOffset,
  getNextMorphState,
} from './gooCatalog';

test('catalog contains exactly 20 distinct Goo1..Goo20 specimens', () => {
  assert.equal(GOO_SPECIMENS.length, 20);
  const names = new Set(GOO_SPECIMENS.map((s) => s.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i++) {
    assert.equal(names.has(`Goo${i}`), true);
  }
});

test('filterSpecimens filters by category and search query accurately', () => {
  const svgItems = filterSpecimens(GOO_SPECIMENS, 'svg-metaballs', '');
  assert.equal(svgItems.length, 5);
  assert.equal(
    svgItems.every((item) => item.category === 'svg-metaballs'),
    true
  );

  const toggleMatch = filterSpecimens(GOO_SPECIMENS, 'all', 'Goo11');
  assert.equal(toggleMatch.length, 1);
  assert.equal(toggleMatch[0].componentName, 'Goo11');

  const emptyMatch = filterSpecimens(GOO_SPECIMENS, 'all', 'nonexistent-xyz');
  assert.equal(emptyMatch.length, 0);
});

test('getCategoryCounts sums cleanly to 20', () => {
  const counts = getCategoryCounts(GOO_SPECIMENS);
  assert.equal(counts.all, 20);
  const subtotal =
    counts['svg-metaballs'] +
    counts['buttons-hover'] +
    counts['morph-clip'] +
    counts['nav-controls'] +
    counts['loaders-text'];
  assert.equal(subtotal, 20);
});

test('clampElasticPull enforces max distance and snap threshold', () => {
  const mild = clampElasticPull(30, 0, 88, 66);
  assert.equal(mild.x, 30);
  assert.equal(mild.snapped, false);
  assert.ok(mild.tensionRatio < 0.5);

  const snapped = clampElasticPull(120, 0, 88, 66);
  assert.equal(snapped.x, 88);
  assert.equal(snapped.distance, 88);
  assert.equal(snapped.snapped, true);
  assert.equal(snapped.tensionRatio, 1);
});

test('computeMagneticOffset attracts inside radius and zeros outside radius', () => {
  const inside = computeMagneticOffset(40, 0, 100, 0.5);
  assert.equal(inside.active, true);
  assert.ok(inside.x > 0 && inside.x < 40);

  const outside = computeMagneticOffset(150, 0, 100, 0.5);
  assert.equal(outside.active, false);
  assert.equal(outside.x, 0);
  assert.equal(outside.y, 0);
});

test('getNextMorphState cycles through icon states deterministically', () => {
  const states = ['play', 'pause', 'stop', 'check'] as const;
  assert.equal(getNextMorphState('play', states), 'pause');
  assert.equal(getNextMorphState('check', states), 'play');
});
