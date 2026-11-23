import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateScrollProgress,
  interpolateCounterValue,
  calculateMagneticOffset,
  lerpPoint,
  calculateParallaxLayers,
  filterSpecimens,
  type SpecimenMeta,
} from './fxMath';

test('calculateScrollProgress clamps bounds and handles zero scrollable height', () => {
  assert.equal(calculateScrollProgress(0, 1000, 1000), 0);
  assert.equal(calculateScrollProgress(500, 2000, 1000), 0.5);
  assert.equal(calculateScrollProgress(1500, 2000, 1000), 1);
  assert.equal(calculateScrollProgress(-50, 2000, 1000), 0);
});

test('interpolateCounterValue uses ease-out cubic progression', () => {
  assert.equal(interpolateCounterValue(0, 1200), 0);
  assert.equal(interpolateCounterValue(1, 1200), 1200);
  const mid = interpolateCounterValue(0.5, 1000);
  assert.equal(mid > 500, true);
  assert.equal(mid, 875);
});

test('calculateMagneticOffset centers at zero and clamps edges', () => {
  const rect = {left: 100, top: 200, width: 200, height: 80};
  assert.deepEqual(calculateMagneticOffset(200, 240, rect, 12), {x: 0, y: 0});
  assert.deepEqual(calculateMagneticOffset(300, 280, rect, 10), {x: 10, y: 10});
  assert.deepEqual(calculateMagneticOffset(0, 0, rect, 10), {x: -10, y: -10});
});

test('lerpPoint interpolates smoothly toward target', () => {
  const next = lerpPoint({x: 0, y: 100}, {x: 100, y: 200}, 0.25);
  assert.deepEqual(next, {x: 25, y: 125});
});

test('calculateParallaxLayers differentiates background, midground, and foreground', () => {
  const top = calculateParallaxLayers(0, 40);
  const mid = calculateParallaxLayers(0.5, 40);
  const bottom = calculateParallaxLayers(1, 40);

  assert.equal(mid.backgroundY, 0);
  assert.equal(mid.foregroundY, 0);
  assert.equal(top.backgroundY > 0, true);
  assert.equal(top.foregroundY < 0, true);
  assert.equal(bottom.backgroundY < 0, true);
  assert.equal(bottom.foregroundY > 0, true);
});

test('filterSpecimens filters by category and search term', () => {
  const sample: SpecimenMeta[] = [
    {
      id: 'Fx1',
      number: '01',
      title: 'Scroll Progress Bar',
      category: 'Scroll & Layout',
      mechanism: 'Scroll Listener · ScaleX',
      description: 'Fixed top reading progress indicator.',
    },
    {
      id: 'Fx4',
      number: '04',
      title: 'Typewriter Text Effect',
      category: 'Typography',
      mechanism: 'useState · useEffect Timer',
      description: 'Character-by-character typing sequence.',
    },
  ];

  assert.equal(filterSpecimens(sample, 'All').length, 2);
  assert.equal(filterSpecimens(sample, 'Typography').length, 1);
  assert.equal(filterSpecimens(sample, 'All', 'progress')[0]?.id, 'Fx1');
  assert.equal(filterSpecimens(sample, 'Typography', 'progress').length, 0);
});
