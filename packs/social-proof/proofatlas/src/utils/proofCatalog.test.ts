import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PROOF_CATALOG,
  filterProofCatalog,
  computeCatalogCounts,
  calculateRatingBreakdown,
} from './proofCatalog';

test('PROOF_CATALOG contains exactly 20 unique components Proof1..Proof20', () => {
  assert.equal(PROOF_CATALOG.length, 20);
  const names = new Set(PROOF_CATALOG.map((item) => item.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.ok(names.has(`Proof${i}` as `Proof${number}`), `Missing Proof${i}`);
  }
});

test('computeCatalogCounts tallies categories and styles accurately', () => {
  const counts = computeCatalogCounts(PROOF_CATALOG);
  assert.equal(counts.total, 20);
  assert.equal(counts.byCategory['Logo Clouds'], 3);
  assert.equal(counts.byCategory.Testimonials, 6);
  assert.equal(counts.byCategory.Ratings, 2);
  assert.equal(counts.byCategory.Reviews, 3);
  assert.equal(counts.byCategory['Case Studies'], 2);
  assert.equal(counts.byCategory.Stats, 2);
  assert.equal(counts.byCategory.Press, 2);

  const styleSum =
    counts.byStyle.Minimal +
    counts.byStyle.Dark +
    counts.byStyle.Colourful +
    counts.byStyle.Editorial;
  assert.equal(styleSum, 20);
});

test('filterProofCatalog filters by category, style, and search query', () => {
  const darkLogoClouds = filterProofCatalog(PROOF_CATALOG, {
    category: 'Logo Clouds',
    style: 'Dark',
  });
  assert.equal(darkLogoClouds.length, 1);
  assert.equal(darkLogoClouds[0].componentName, 'Proof2');

  const marqueeQuery = filterProofCatalog(PROOF_CATALOG, {
    query: 'marquee',
  });
  assert.equal(marqueeQuery.length, 1);
  assert.equal(marqueeQuery[0].componentName, 'Proof2');

  const exactIdQuery = filterProofCatalog(PROOF_CATALOG, {
    query: 'Proof19',
  });
  assert.equal(exactIdQuery.length, 1);
  assert.equal(exactIdQuery[0].componentName, 'Proof19');

  const emptyResult = filterProofCatalog(PROOF_CATALOG, {
    category: 'Press',
    style: 'Colourful',
  });
  assert.equal(emptyResult.length, 0);
});

test('calculateRatingBreakdown computes exact average, totals, and tier percentages', () => {
  const result = calculateRatingBreakdown({
    5: 2386,
    4: 341,
    3: 71,
    2: 28,
    1: 14,
  });

  assert.equal(result.totalReviews, 2840);
  assert.equal(result.averageRating, '4.8');
  assert.equal(result.tiers.length, 5);
  assert.equal(result.tiers[0].stars, 5);
  assert.equal(result.tiers[0].percentage, 84);
  assert.equal(result.tiers[1].percentage, 12);
});

test('calculateRatingBreakdown handles zero total safely', () => {
  const result = calculateRatingBreakdown({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });

  assert.equal(result.totalReviews, 0);
  assert.equal(result.averageRating, '0.0');
  assert.ok(result.tiers.every((tier) => tier.percentage === 0));
});
