import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clamp,
  lerp,
  normalizePointer,
  computeMagneticOffset,
  computeTiltTransform,
  computeRepelOffset,
  computeParallaxOffset,
  computeSplitRatio,
} from './cursorMath';

test('clamp restricts numbers to inclusive range', () => {
  assert.equal(clamp(1.5, 0, 1), 1);
  assert.equal(clamp(-0.2, 0, 1), 0);
  assert.equal(clamp(0.4, 0, 1), 0.4);
  assert.equal(clamp(Number.NaN, 0, 1), 0);
});

test('lerp interpolates smoothly between endpoints', () => {
  assert.equal(lerp(0, 100, 0.25), 25);
  assert.equal(lerp(10, 20, 0), 10);
  assert.equal(lerp(10, 20, 2), 20);
});

test('normalizePointer maps client coordinates to [0, 1] and defaults to center on invalid bounds', () => {
  const centered = normalizePointer(150, 200, {
    left: 100,
    top: 100,
    width: 100,
    height: 200,
  });
  assert.deepEqual(centered, { x: 0.5, y: 0.5 });

  const invalid = normalizePointer(150, 200, {
    left: 0,
    top: 0,
    width: 0,
    height: 100,
  });
  assert.deepEqual(invalid, { x: 0.5, y: 0.5 });
});

test('computeMagneticOffset returns zero when inactive or outside radius, and pulls toward pointer when close', () => {
  assert.deepEqual(
    computeMagneticOffset({ x: 0.6, y: 0.5 }, { x: 0.5, y: 0.5 }, 0.4, 20, false),
    { x: 0, y: 0 },
  );
  assert.deepEqual(
    computeMagneticOffset({ x: 0.95, y: 0.5 }, { x: 0.5, y: 0.5 }, 0.3, 20, true),
    { x: 0, y: 0 },
  );
  const pulled = computeMagneticOffset({ x: 0.6, y: 0.5 }, { x: 0.5, y: 0.5 }, 0.4, 20, true);
  assert.ok(pulled.x > 0);
  assert.equal(pulled.y, 0);
});

test('computeTiltTransform centers shine at 50/50 when static and tilts correctly on corners', () => {
  assert.deepEqual(computeTiltTransform({ x: 0.2, y: 0.8 }, 12, false), {
    rotateX: 0,
    rotateY: 0,
    shineX: 50,
    shineY: 50,
  });
  const topLeft = computeTiltTransform({ x: 0, y: 0 }, 12, true);
  assert.equal(topLeft.rotateX, 12);
  assert.equal(topLeft.rotateY, -12);
  assert.equal(topLeft.shineX, 0);
  assert.equal(topLeft.shineY, 0);
});

test('computeRepelOffset pushes away in repel mode and pulls inward in attract mode', () => {
  const repel = computeRepelOffset(
    { x: 0.4, y: 0.5 },
    { x: 0.5, y: 0.5 },
    'repel',
    0.4,
    20,
    true,
  );
  assert.ok(repel.x > 0);

  const attract = computeRepelOffset(
    { x: 0.4, y: 0.5 },
    { x: 0.5, y: 0.5 },
    'attract',
    0.4,
    20,
    true,
  );
  assert.ok(attract.x < 0);
});

test('computeParallaxOffset scales linearly with depth and resets when inactive', () => {
  assert.deepEqual(computeParallaxOffset({ x: 1, y: 0.5 }, 0.5, 20, true), {
    x: 10,
    y: 0,
  });
  assert.deepEqual(computeParallaxOffset({ x: 1, y: 0.5 }, 0.5, 20, false), {
    x: 0,
    y: 0,
  });
});

test('computeSplitRatio clamps within bounds and centers at 50% when static', () => {
  assert.equal(computeSplitRatio(0.1, false), 50);
  assert.equal(computeSplitRatio(0.01, true), 8);
  assert.equal(computeSplitRatio(0.99, true), 92);
  assert.equal(computeSplitRatio(0.62, true), 62);
});
