import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CATALOG_ITEMS,
  buildSparklinePolyline,
  filterCatalog,
} from './catalog';

test('catalog contains exactly 20 uniquely numbered Data1..Data20 components', () => {
  assert.equal(CATALOG_ITEMS.length, 20);
  const ids = new Set(CATALOG_ITEMS.map((item) => item.id));
  assert.equal(ids.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.ok(ids.has(`Data${i}`), `Missing Data${i}`);
  }
});

test('filterCatalog filters by style, density, category, and search query', () => {
  const darkItems = filterCatalog(CATALOG_ITEMS, {
    category: 'all',
    style: 'dark',
    density: 'all',
    query: '',
  });
  assert.equal(darkItems.length, 5);
  assert.deepEqual(
    darkItems.map((i) => i.id),
    ['Data2', 'Data4', 'Data7', 'Data11', 'Data13']
  );

  const compactMetrics = filterCatalog(CATALOG_ITEMS, {
    category: 'metrics',
    style: 'all',
    density: 'compact',
    query: '',
  });
  assert.deepEqual(
    compactMetrics.map((i) => i.id),
    ['Data4', 'Data7']
  );

  const sparklineQuery = filterCatalog(CATALOG_ITEMS, {
    category: 'all',
    style: 'all',
    density: 'all',
    query: 'sparkline',
  });
  assert.deepEqual(
    sparklineQuery.map((i) => i.id),
    ['Data6', 'Data7']
  );

  const emptyResult = filterCatalog(CATALOG_ITEMS, {
    category: 'all',
    style: 'all',
    density: 'all',
    query: 'nonexistent-xyz-component',
  });
  assert.equal(emptyResult.length, 0);
});

test('buildSparklinePolyline computes bounded SVG coordinates accurately', () => {
  const result = buildSparklinePolyline([10, 20, 15, 30], 100, 40, 4);
  assert.equal(result.coords.length, 4);
  // First point is min value (10) -> y = 40 - 4 = 36, x = 4
  assert.equal(result.coords[0].x, 4);
  assert.equal(result.coords[0].y, 36);
  // Last point is max value (30) -> y = 4, x = 96
  assert.equal(result.coords[3].x, 96);
  assert.equal(result.coords[3].y, 4);
  assert.ok(result.points.includes('4,36'));
  assert.ok(result.points.includes('96,4'));
});
