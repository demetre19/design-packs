/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATALOG_CATEGORIES,
  filterCatalogEntries,
  getCategoryCount,
  type CatalogEntry,
} from './componentCatalog';

const sampleEntries: CatalogEntry[] = [
  { id: 'navbar-1', name: 'Navbar 1 // Standard', category: 'navbar', path: 'src/components/navbar/Navbar1.tsx' },
  { id: 'content-1', name: 'Content 1 // The Ledger', category: 'content', path: 'src/components/content/Content1.tsx' },
  { id: 'content-15', name: 'Content 15 // The Inverted Vault', category: 'content', path: 'src/components/content/Content15.tsx' },
];

test('CATALOG_CATEGORIES includes content (15) and totals 61 elements', () => {
  const allCat = CATALOG_CATEGORIES.find((c) => c.id === 'all');
  const contentCat = CATALOG_CATEGORIES.find((c) => c.id === 'content');
  assert.equal(allCat?.label, 'ALL 61 ELEMENTS');
  assert.equal(contentCat?.label, 'CONTENT (15)');
});

test('filterCatalogEntries filters by category and search query case-insensitively', () => {
  assert.equal(filterCatalogEntries(sampleEntries, 'all', '').length, 3);
  assert.equal(filterCatalogEntries(sampleEntries, 'content', '').length, 2);
  assert.equal(filterCatalogEntries(sampleEntries, 'content', 'vault').length, 1);
  assert.equal(filterCatalogEntries(sampleEntries, 'navbar', 'vault').length, 0);
  assert.equal(filterCatalogEntries(sampleEntries, 'all', '  LEDGER ').length, 1);
});

test('getCategoryCount returns accurate counts per category', () => {
  assert.equal(getCategoryCount(sampleEntries, 'all'), 3);
  assert.equal(getCategoryCount(sampleEntries, 'content'), 2);
  assert.equal(getCategoryCount(sampleEntries, 'heroes'), 0);
});
