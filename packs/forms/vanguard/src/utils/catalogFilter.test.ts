import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATALOG_CATEGORIES,
  filterCatalogItems,
  getCategoryCounts,
  validateCatalogIntegrity,
  type CatalogMetaItem,
} from './catalogFilter';

const SAMPLE_ITEMS: CatalogMetaItem[] = [
  { id: 'navbar-1', name: 'Navbar 1 (Minimal Bar)', category: 'navbar', path: 'src/components/navbar/Navbar1.tsx' },
  { id: 'content-1', name: 'Content 1 — The Ledger', category: 'content', path: 'src/components/content/Content1.tsx' },
  { id: 'content-15', name: 'Content 15 — The Inverted Vault', category: 'content', path: 'src/components/content/Content15.tsx' },
  { id: 'stat-1', name: 'Stat 1 (Instrument Readout Rows)', category: 'stats', path: 'src/components/stats/Stat1.tsx' },
];

test('filterCatalogItems filters by category and search query', () => {
  const contentOnly = filterCatalogItems(SAMPLE_ITEMS, 'content', '');
  assert.equal(contentOnly.length, 2);

  const vaultSearch = filterCatalogItems(SAMPLE_ITEMS, 'all', 'vault');
  assert.equal(vaultSearch.length, 1);
  assert.equal(vaultSearch[0].id, 'content-15');

  const emptySearch = filterCatalogItems(SAMPLE_ITEMS, 'navbar', 'vault');
  assert.equal(emptySearch.length, 0);
});

test('getCategoryCounts summarizes total and per-category counts', () => {
  const counts = getCategoryCounts(SAMPLE_ITEMS);
  assert.equal(counts.all, 4);
  assert.equal(counts.content, 2);
  assert.equal(counts.navbar, 1);
  assert.equal(counts.stats, 1);
});

test('validateCatalogIntegrity detects duplicate ids or paths', () => {
  assert.equal(validateCatalogIntegrity(SAMPLE_ITEMS).valid, true);

  const duped: CatalogMetaItem[] = [
    ...SAMPLE_ITEMS,
    { id: 'content-1', name: 'Dup', category: 'content', path: 'src/components/content/Dup.tsx' },
  ];
  const res = validateCatalogIntegrity(duped);
  assert.equal(res.valid, false);
  assert.equal(res.errors.length, 1);
});

test('CATALOG_CATEGORIES includes content and all 14 component groups', () => {
  const ids = CATALOG_CATEGORIES.map((c) => c.id);
  assert.ok(ids.includes('all'));
  assert.ok(ids.includes('content'));
  assert.equal(CATALOG_CATEGORIES.length, 15);
});
