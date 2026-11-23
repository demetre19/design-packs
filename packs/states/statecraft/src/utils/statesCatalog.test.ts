import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STATES_CATALOG,
  filterStates,
  getCategoryCounts,
  computeRingStrokeOffset,
  computeStarCascadeDelay,
  clampCountdownRatio,
} from './statesCatalog';

test('catalog defines exactly 20 unique state interactions State1..State20', () => {
  assert.equal(STATES_CATALOG.length, 20);
  const ids = new Set(STATES_CATALOG.map((s) => s.id));
  const names = new Set(STATES_CATALOG.map((s) => s.componentName));
  assert.equal(ids.size, 20);
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.equal(ids.has(i), true);
    assert.equal(names.has(`State${i}`), true);
  }
});

test('category counts sum to 20 total states', () => {
  const counts = getCategoryCounts(STATES_CATALOG);
  assert.equal(counts.All, 20);
  const subtotal =
    counts.Confirmation + counts.Feedback + counts.Transitions + counts.Commerce;
  assert.equal(subtotal, 20);
});

test('filterStates filters by category and search query accurately', () => {
  const feedbackItems = filterStates(STATES_CATALOG, 'Feedback', '');
  assert.equal(feedbackItems.every((s) => s.category === 'Feedback'), true);
  assert.ok(feedbackItems.length >= 4);

  const confettiMatches = filterStates(STATES_CATALOG, 'All', 'confetti');
  assert.equal(confettiMatches.length, 1);
  assert.equal(confettiMatches[0].componentName, 'State2');

  const emptyMatches = filterStates(STATES_CATALOG, 'Commerce', 'confetti');
  assert.equal(emptyMatches.length, 0);
});

test('computeRingStrokeOffset clamps progress between 0 and 100', () => {
  assert.equal(computeRingStrokeOffset(100, 0), 100);
  assert.equal(computeRingStrokeOffset(100, 50), 50);
  assert.equal(computeRingStrokeOffset(100, 100), 0);
  assert.equal(computeRingStrokeOffset(100, 140), 0);
  assert.equal(computeRingStrokeOffset(100, -10), 100);
});

test('computeStarCascadeDelay and clampCountdownRatio compute deterministic values', () => {
  assert.equal(computeStarCascadeDelay(0, 55), 0);
  assert.equal(computeStarCascadeDelay(4, 55), 220);
  assert.equal(clampCountdownRatio(2000, 4000), 0.5);
  assert.equal(clampCountdownRatio(-100, 4000), 0);
  assert.equal(clampCountdownRatio(5000, 4000), 1);
  assert.equal(clampCountdownRatio(100, 0), 0);
});
