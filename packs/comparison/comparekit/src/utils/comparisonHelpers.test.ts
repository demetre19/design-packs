import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateTierPrice,
  filterComparisonRows,
  computeDeltaPercentage,
  filterCatalog,
  type ComparisonCatalogEntry,
} from './comparisonHelpers';

test('calculateTierPrice handles monthly and annual seat calculations', () => {
  assert.equal(calculateTierPrice(20, 5, 'monthly', 0.2), 100);
  assert.equal(calculateTierPrice(20, 5, 'annual', 0.2), 80);
  assert.equal(calculateTierPrice(15, 10, 'monthly', 0.2, 5), 75);
  assert.equal(calculateTierPrice(15, 3, 'monthly', 0.2, 5), 15);
});

test('filterComparisonRows removes identical rows when differencesOnly is true', () => {
  const rows = [
    { label: 'SSO', category: 'Security', values: [true, true, true] },
    { label: 'Audit Logs', category: 'Security', values: [false, true, true] },
    { label: 'Guest Seats', category: 'Collaboration', values: ['5', 'Unlimited', 'Unlimited'] },
  ];

  const diffOnly = filterComparisonRows(rows, { differencesOnly: true });
  assert.equal(diffOnly.length, 2);
  assert.deepEqual(
    diffOnly.map((r) => r.label),
    ['Audit Logs', 'Guest Seats']
  );

  const securityDiffs = filterComparisonRows(rows, {
    differencesOnly: true,
    category: 'Security',
  });
  assert.equal(securityDiffs.length, 1);
  assert.equal(securityDiffs[0].label, 'Audit Logs');
});

test('computeDeltaPercentage formats positive, negative, and zero changes', () => {
  assert.equal(computeDeltaPercentage(420, 110), '-74%');
  assert.equal(computeDeltaPercentage(10, 28), '+180%');
  assert.equal(computeDeltaPercentage(50, 50), '0%');
});

test('filterCatalog filters by style, column count, and text query', () => {
  const sample: ComparisonCatalogEntry[] = [
    {
      id: 'compare-1',
      number: 1,
      name: 'Compare1',
      title: 'SaaS Matrix',
      description: 'Three tier plan comparison',
      category: 'Feature Matrix',
      style: 'Professional',
      columnCount: 3,
      usesTable: true,
    },
    {
      id: 'compare-2',
      number: 2,
      name: 'Compare2',
      title: 'Dark Dev Pricing',
      description: 'Four tier developer matrix',
      category: 'Pricing + Features',
      style: 'Dark',
      columnCount: 4,
      usesTable: true,
    },
  ];

  assert.equal(filterCatalog(sample, { style: 'Dark' }).length, 1);
  assert.equal(filterCatalog(sample, { columnCount: 3 }).length, 1);
  assert.equal(filterCatalog(sample, { query: 'developer' }).length, 1);
  assert.equal(filterCatalog(sample, { query: 'nonexistent' }).length, 0);
});
