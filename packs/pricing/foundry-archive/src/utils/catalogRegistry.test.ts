import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATEGORIES,
  getTotalComponentCount,
  filterComponentEntries,
  type ComponentEntryMeta,
} from './catalogRegistry';

test('total component count equals 61 (46 existing + 15 content sections)', () => {
  assert.equal(getTotalComponentCount(CATEGORIES), 61);
  const contentCat = CATEGORIES.find((c) => c.id === 'content');
  assert.ok(contentCat);
  assert.equal(contentCat.count, 15);
  assert.equal(contentCat.path, 'src/components/content/');
});

test('filterComponentEntries matches by id, name, or archetype case-insensitively', () => {
  const sample: ComponentEntryMeta[] = [
    {
      id: 'Content1',
      category: 'content',
      name: 'Content 1: The Ledger',
      path: 'src/components/content/Content1.tsx',
      archetype: 'Annotated Financial Ledger',
    },
    {
      id: 'Content15',
      category: 'content',
      name: 'Content 15: The Inverted Vault',
      path: 'src/components/content/Content15.tsx',
      archetype: 'Radial Composition',
    },
  ];

  assert.equal(filterComponentEntries(sample, '').length, 2);
  assert.equal(filterComponentEntries(sample, 'ledger').length, 1);
  assert.equal(filterComponentEntries(sample, 'radial')[0].id, 'Content15');
  assert.equal(filterComponentEntries(sample, 'Content15').length, 1);
  assert.equal(filterComponentEntries(sample, 'nonexistent').length, 0);
});
