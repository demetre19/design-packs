import test from 'node:test';
import assert from 'node:assert/strict';
import { filterCatalogItems, CatalogItemMeta } from './catalogFilter';

const sampleItems: CatalogItemMeta[] = [
  {
    id: 'Navbar1',
    category: 'navbar',
    name: 'Navbar 1: Solid Black Bar',
    desc: 'Solid black bar with heavy white wordmark',
    path: 'src/components/navbar/Navbar1.tsx',
  },
  {
    id: 'Content1',
    category: 'content',
    name: 'Content 1: The Ledger',
    desc: 'Dense annotated table-like extraction manifest',
    path: 'src/components/content/Content1.tsx',
  },
  {
    id: 'Content15',
    category: 'content',
    name: 'Content 15: The Inverted Vault',
    desc: 'Full black band with radial telemetry rotunda',
    path: 'src/components/content/Content15.tsx',
  },
];

test('returns all items when category is all and query is empty', () => {
  assert.equal(filterCatalogItems(sampleItems, 'all', '').length, 3);
});

test('filters strictly by selected category', () => {
  const result = filterCatalogItems(sampleItems, 'content', '');
  assert.equal(result.length, 2);
  assert.deepEqual(
    result.map((i) => i.id),
    ['Content1', 'Content15']
  );
});

test('filters case-insensitively by search query across id, name, and desc', () => {
  const byName = filterCatalogItems(sampleItems, 'all', 'ledger');
  assert.equal(byName.length, 1);
  assert.equal(byName[0].id, 'Content1');

  const byDesc = filterCatalogItems(sampleItems, 'content', 'radial');
  assert.equal(byDesc.length, 1);
  assert.equal(byDesc[0].id, 'Content15');
});
