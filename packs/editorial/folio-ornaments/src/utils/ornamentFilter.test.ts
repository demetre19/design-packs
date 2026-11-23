import test from 'node:test';
import assert from 'node:assert/strict';
import { ORNAMENT_SPECS } from '../data/ornamentRegistry';
import { buildCategorySummaries, filterOrnaments } from './ornamentFilter';

test('registry contains exactly 20 unique Orn1..Orn20 components', () => {
  assert.equal(ORNAMENT_SPECS.length, 20);
  const names = new Set(ORNAMENT_SPECS.map((s) => s.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.equal(names.has(`Orn${i}`), true);
  }
});

test('category summaries sum to 20 total items', () => {
  const summaries = buildCategorySummaries(ORNAMENT_SPECS);
  const all = summaries.find((s) => s.id === 'all');
  const subtotal = summaries
    .filter((s) => s.id !== 'all')
    .reduce((acc, s) => acc + s.count, 0);

  assert.equal(all?.count, 20);
  assert.equal(subtotal, 20);
});

test('filterOrnaments filters by category and search query accurately', () => {
  const dividers = filterOrnaments(ORNAMENT_SPECS, 'dividers', '');
  assert.equal(dividers.length, 6);

  const stampMatches = filterOrnaments(ORNAMENT_SPECS, 'all', 'stamp');
  assert.equal(stampMatches.length, 1);
  assert.equal(stampMatches[0]?.componentName, 'Orn12');

  const combined = filterOrnaments(ORNAMENT_SPECS, 'typography', 'gradient');
  assert.equal(combined.length, 1);
  assert.equal(combined[0]?.componentName, 'Orn15');

  const empty = filterOrnaments(ORNAMENT_SPECS, 'frames', 'nonexistent-motif-xyz');
  assert.equal(empty.length, 0);
});
