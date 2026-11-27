import test from 'node:test';
import assert from 'node:assert/strict';
import { filterComponentsByCategory, getCategoryCounts, type RegistryEntry } from './registry';

const sampleItems: RegistryEntry[] = [
  { id: 'Navbar1', name: 'Navbar 1', category: 'navbar', path: 'src/components/navbar/Navbar1.tsx' },
  { id: 'Content1', name: 'Content 1', category: 'content', path: 'src/components/content/Content1.tsx' },
  { id: 'Content2', name: 'Content 2', category: 'content', path: 'src/components/content/Content2.tsx' },
];

test('filterComponentsByCategory returns all items for "all"', () => {
  const result = filterComponentsByCategory(sampleItems, 'all');
  assert.equal(result.length, 3);
});

test('filterComponentsByCategory returns only matching category items', () => {
  const result = filterComponentsByCategory(sampleItems, 'content');
  assert.equal(result.length, 2);
  assert.deepEqual(result.map((i) => i.id), ['Content1', 'Content2']);
});

test('getCategoryCounts computes totals and per-category counts accurately', () => {
  const counts = getCategoryCounts(sampleItems, {
    navbar: 'Navbar',
    content: 'Content',
  });
  assert.equal(counts[0].id, 'all');
  assert.equal(counts[0].count, 3);
  assert.equal(counts[1].label, 'Navbar (1)');
  assert.equal(counts[2].label, 'Content (2)');
});
