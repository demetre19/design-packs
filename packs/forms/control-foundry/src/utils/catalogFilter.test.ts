import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CONTROL_SPECS,
  clampProgress,
  countByCategory,
  filterControlSpecs,
  formatBadgeCount,
} from './catalogFilter';

test('catalog contains all 20 unique Btn1..Btn20 specs', () => {
  assert.equal(CONTROL_SPECS.length, 20);
  const ids = new Set(CONTROL_SPECS.map((item) => item.id));
  assert.equal(ids.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.ok(ids.has(`Btn${i}` as (typeof CONTROL_SPECS)[number]['id']));
  }
});

test('countByCategory sums cleanly to 20 total controls', () => {
  const counts = countByCategory(CONTROL_SPECS);
  assert.equal(counts.all, 20);
  assert.equal(counts.core, 5);
  assert.equal(counts.feedback, 5);
  assert.equal(counts.utilities, 5);
  assert.equal(counts.links, 5);
});

test('filterControlSpecs filters by category and search query', () => {
  const onlyLinks = filterControlSpecs(CONTROL_SPECS, 'links', '');
  assert.equal(onlyLinks.length, 5);
  assert.ok(onlyLinks.every((item) => item.category === 'links'));

  const clipboardMatch = filterControlSpecs(CONTROL_SPECS, 'all', 'clipboard');
  assert.equal(clipboardMatch.length, 1);
  assert.equal(clipboardMatch[0].id, 'Btn13');

  const emptyMatch = filterControlSpecs(CONTROL_SPECS, 'core', 'clipboard');
  assert.equal(emptyMatch.length, 0);
});

test('clampProgress keeps percentage within 0..100', () => {
  assert.equal(clampProgress(-15), 0);
  assert.equal(clampProgress(42.6), 43);
  assert.equal(clampProgress(128), 100);
  assert.equal(clampProgress(Number.NaN), 0);
});

test('formatBadgeCount caps counts above threshold cleanly', () => {
  assert.equal(formatBadgeCount(0), '0');
  assert.equal(formatBadgeCount(7), '7');
  assert.equal(formatBadgeCount(99), '99');
  assert.equal(formatBadgeCount(124), '99+');
  assert.equal(formatBadgeCount(-3), '0');
});
