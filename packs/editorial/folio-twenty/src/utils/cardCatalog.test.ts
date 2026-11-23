import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CARD_SPECS,
  countSpecsByStyle,
  filterCardSpecs,
  formatCatalogSummary,
  getAvailableCategories,
  resolveVisibleContexts,
} from './cardCatalog';

test('catalog contains 20 unique Card1..Card20 components covering all 4 styles', () => {
  assert.equal(CARD_SPECS.length, 20);
  const names = new Set(CARD_SPECS.map((s) => s.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i++) {
    assert.equal(names.has(`Card${i}`), true);
  }
  const counts = countSpecsByStyle(CARD_SPECS);
  assert.equal(counts.all, 20);
  assert.ok(counts.minimal > 0);
  assert.ok(counts.editorial > 0);
  assert.ok(counts.dark > 0);
  assert.ok(counts.playful > 0);
  assert.equal(counts.minimal + counts.editorial + counts.dark + counts.playful, 20);
});

test('filterCardSpecs filters accurately by style, category, and search query', () => {
  const darkOnly = filterCardSpecs(CARD_SPECS, {
    style: 'dark',
    category: 'all',
    query: '',
  });
  assert.equal(darkOnly.length, 4);
  assert.ok(darkOnly.every((item) => item.style === 'dark'));

  const faqMatch = filterCardSpecs(CARD_SPECS, {
    style: 'all',
    category: 'all',
    query: 'accordion',
  });
  assert.equal(faqMatch.length, 1);
  assert.equal(faqMatch[0].componentName, 'Card20');

  const noMatch = filterCardSpecs(CARD_SPECS, {
    style: 'playful',
    category: 'Lists & Utility',
    query: '',
  });
  assert.equal(noMatch.length, 0);
});

test('getAvailableCategories preserves order and uniqueness', () => {
  const categories = getAvailableCategories(CARD_SPECS);
  assert.equal(categories.length, 7);
  assert.equal(categories[0], 'Editorial & Blog');
});

test('resolveVisibleContexts maps viewMode and 3-up support properly', () => {
  assert.deepEqual(resolveVisibleContexts('both', true), {
    showStandalone: true,
    showCollectionWrapper: true,
    collectionLabel: '3-Up Grid Wrapper',
  });
  assert.deepEqual(resolveVisibleContexts('standalone', false), {
    showStandalone: true,
    showCollectionWrapper: false,
    collectionLabel: 'Stacked Row Context',
  });
  assert.deepEqual(resolveVisibleContexts('grid', false), {
    showStandalone: false,
    showCollectionWrapper: true,
    collectionLabel: 'Stacked Row Context',
  });
});

test('formatCatalogSummary formats pluralized counts accurately', () => {
  assert.equal(formatCatalogSummary(20, 20), 'Showing all 20 components');
  assert.equal(formatCatalogSummary(4, 20), 'Showing 4 of 20 components');
});
