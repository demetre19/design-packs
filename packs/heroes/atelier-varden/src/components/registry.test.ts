import test from 'node:test';
import assert from 'node:assert/strict';
import { allComponents, categories, filterComponents } from './registry';

test('registry contains all 62 components across 14 categories', () => {
  assert.equal(categories.length, 14);
  assert.equal(allComponents.length, 62);

  const declaredSum = categories.reduce((sum, cat) => sum + cat.count, 0);
  assert.equal(declaredSum, 62);
});

test('content category contains Content1 through Content15 with unique IDs', () => {
  const contentItems = allComponents.filter((item) => item.category === 'content');
  assert.equal(contentItems.length, 15);

  const ids = new Set(allComponents.map((item) => item.id));
  assert.equal(ids.size, 62);

  for (let i = 1; i <= 15; i++) {
    const match = contentItems.find((item) => item.id === `content-${i}`);
    assert.ok(match, `Missing content-${i} in registry`);
    assert.equal(typeof match.component, 'function');
    assert.ok(match.codeSnippet.includes(`Content${i}`));
  }
});

test('filterComponents filters accurately by category and search query', () => {
  const contentOnly = filterComponents(allComponents, 'content', '');
  assert.equal(contentOnly.length, 15);

  const ledgerSearch = filterComponents(allComponents, 'all', 'ledger');
  assert.equal(ledgerSearch.length, 1);
  assert.equal(ledgerSearch[0].id, 'content-1');

  const vaultSearch = filterComponents(allComponents, 'content', 'vault');
  assert.equal(vaultSearch.length, 1);
  assert.equal(vaultSearch[0].id, 'content-15');
});
