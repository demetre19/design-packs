import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clamp,
  lerp,
  easeOutCubic,
  computeStickyProgress,
  computeViewportTraversal,
  getActiveStepIndex,
  computeRingDashOffset,
  computeHorizontalTrackX,
} from './scrollMath';

test('clamp constrains values to [min, max] and handles NaN', () => {
  assert.equal(clamp(-0.4), 0);
  assert.equal(clamp(1.6), 1);
  assert.equal(clamp(0.45), 0.45);
  assert.equal(clamp(Number.NaN, 0, 1), 0);
});

test('lerp interpolates linearly with clamped factor', () => {
  assert.equal(lerp(10, 20, 0), 10);
  assert.equal(lerp(10, 20, 0.5), 15);
  assert.equal(lerp(10, 20, 2), 20);
});

test('easeOutCubic starts fast and settles smoothly at 1', () => {
  assert.equal(easeOutCubic(0), 0);
  assert.equal(easeOutCubic(1), 1);
  assert.ok(easeOutCubic(0.5) > 0.8);
});

test('computeStickyProgress maps runway bounds accurately', () => {
  assert.equal(computeStickyProgress(100, 2400, 900), 0);
  assert.equal(computeStickyProgress(0, 2400, 900), 0);
  assert.equal(computeStickyProgress(-750, 2400, 900), 0.5);
  assert.equal(computeStickyProgress(-1500, 2400, 900), 1);
  assert.equal(computeStickyProgress(-1900, 2400, 900), 1);
});

test('computeViewportTraversal produces mid-state when element is centered', () => {
  const vh = 900;
  const h = 400;
  // Just entering bottom
  assert.equal(computeViewportTraversal(900, h, vh), 0);
  // Centered in viewport: top = (900 - 400) / 2 = 250
  const mid = computeViewportTraversal(250, h, vh);
  assert.ok(mid > 0.45 && mid < 0.55);
  // Exited top
  assert.equal(computeViewportTraversal(-400, h, vh), 1);
});

test('getActiveStepIndex maps normalized progress cleanly across steps', () => {
  assert.equal(getActiveStepIndex(0, 4), 0);
  assert.equal(getActiveStepIndex(0.24, 4), 0);
  assert.equal(getActiveStepIndex(0.26, 4), 1);
  assert.equal(getActiveStepIndex(0.74, 4), 2);
  assert.equal(getActiveStepIndex(1, 4), 3);
});

test('computeRingDashOffset computes accurate SVG stroke offset', () => {
  const { circumference, dashOffset } = computeRingDashOffset(40, 0.5);
  assert.ok(Math.abs(circumference - 2 * Math.PI * 40) < 0.001);
  assert.ok(Math.abs(dashOffset - circumference * 0.5) < 0.001);
  assert.equal(computeRingDashOffset(40, 1).dashOffset, 0);
});

test('computeHorizontalTrackX translates negatively up to track minus viewport', () => {
  assert.equal(computeHorizontalTrackX(0, 3000, 1200), 0);
  assert.equal(computeHorizontalTrackX(0.5, 3000, 1200), -900);
  assert.equal(computeHorizontalTrackX(1, 3000, 1200), -1800);
  assert.equal(computeHorizontalTrackX(0.5, 800, 1200), 0);
});
