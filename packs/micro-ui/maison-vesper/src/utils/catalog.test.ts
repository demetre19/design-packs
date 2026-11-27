import test from 'node:test';
import assert from 'node:assert/strict';
import { CATEGORIES, filterCatalogEntries, formatPlateNumber } from './catalog';

test('CATEGORIES includes all 15 categories totaling 62 components', () => {
  assert.equal(CATEGORIES.length, 15);
  assert.equal(CATEGORIES[0].id, 'all');
  assert.ok(CATEGORIES[0].label.includes('62'));
  assert.equal(CATEGORIES[1].id, 'content');
  assert.ok(CATEGORIES[1].label.includes('15'));
});

test('filterCatalogEntries returns all items when activeCategory is all', () => {
  const items = [
    { id: 'Hero1', category: 'heroes' },
    { id: 'Content1', category: 'content' },
  ];
  assert.equal(filterCatalogEntries(items, 'all').length, 2);
});

test('filterCatalogEntries filters by category accurately', () => {
  const items = [
    { id: 'Hero1', category: 'heroes' },
    { id: 'Content1', category: 'content' },
    { id: 'Content2', category: 'content' },
  ];
  const filtered = filterCatalogEntries(items, 'content');
  assert.equal(filtered.length, 2);
  assert.deepEqual(
    filtered.map((item) => item.id),
    ['Content1', 'Content2']
  );
});

test('formatPlateNumber zero-pads single digits', () => {
  assert.equal(formatPlateNumber(0), '01');
  assert.equal(formatPlateNumber(8), '09');
  assert.equal(formatPlateNumber(9), '10');
  assert.equal(formatPlateNumber(58), '59');
});
