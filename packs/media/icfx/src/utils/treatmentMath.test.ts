import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clampPercentage,
  computeParallaxOffset,
  computeScrollScale,
  computeTiltAngles,
  filterSpecimens,
  type SpecimenMeta,
} from './treatmentMath';

test('clampPercentage bounds values between 0 and 100', () => {
  assert.equal(clampPercentage(-15), 0);
  assert.equal(clampPercentage(42.5), 42.5);
  assert.equal(clampPercentage(140), 100);
  assert.equal(clampPercentage(Number.NaN), 0);
});

test('computeParallaxOffset maps viewport progress symmetrically', () => {
  assert.equal(computeParallaxOffset(0, 30), -30);
  assert.equal(computeParallaxOffset(0.5, 30), 0);
  assert.equal(computeParallaxOffset(1, 30), 30);
  assert.equal(computeParallaxOffset(2, 30), 30);
});

test('computeScrollScale eases down from maxScale to minScale', () => {
  assert.equal(computeScrollScale(0, 1.12, 1.0), 1.12);
  assert.equal(computeScrollScale(0.5, 1.12, 1.0), 1.06);
  assert.equal(computeScrollScale(1, 1.12, 1.0), 1.0);
});

test('computeTiltAngles maps centered pointer to 0 and corners to bounded angles', () => {
  assert.deepEqual(computeTiltAngles(0.5, 0.5, 10), { rotateX: 0, rotateY: 0 });
  assert.deepEqual(computeTiltAngles(1, 0, 10), { rotateX: 10, rotateY: 10 });
  assert.deepEqual(computeTiltAngles(0, 1, 10), { rotateX: -10, rotateY: -10 });
});

test('filterSpecimens filters by category and search query', () => {
  const sample: SpecimenMeta[] = [
    {
      id: 1,
      name: 'Icfx1',
      title: 'Radial Iris Reveal',
      category: 'Clip & Mask',
      trigger: 'Hover / Replay',
      technique: 'circle clip-path',
    },
    {
      id: 5,
      name: 'Icfx5',
      title: 'Frame Parallax',
      category: 'Scroll & Depth',
      trigger: 'Scroll',
      technique: 'translateY offset',
    },
  ];

  assert.equal(filterSpecimens(sample, 'All', '').length, 2);
  assert.equal(filterSpecimens(sample, 'Clip & Mask', '').length, 1);
  assert.equal(filterSpecimens(sample, 'All', 'parallax')[0]?.name, 'Icfx5');
  assert.equal(filterSpecimens(sample, 'Clip & Mask', 'parallax').length, 0);
});
