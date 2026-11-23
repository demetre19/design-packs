import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DRAWER_CATALOG,
  filterDrawersByStyle,
  filterNavGroupsByQuery,
  validateDrawerCatalog,
} from './drawer-catalog';

test('drawer catalog contains 20 valid drawers with unique topologies within 320-400px width', () => {
  const result = validateDrawerCatalog(DRAWER_CATALOG);
  assert.equal(result.valid, true, result.errors.join('; '));
});

test('drawer catalog covers all four requested style families across 20 designs', () => {
  const minimal = filterDrawersByStyle(DRAWER_CATALOG, 'Minimal');
  const bold = filterDrawersByStyle(DRAWER_CATALOG, 'Bold');
  const dark = filterDrawersByStyle(DRAWER_CATALOG, 'Dark');
  const warm = filterDrawersByStyle(DRAWER_CATALOG, 'Light Warm');

  assert.equal(minimal.length, 6);
  assert.equal(bold.length, 4);
  assert.equal(dark.length, 5);
  assert.equal(warm.length, 5);
  assert.equal(filterDrawersByStyle(DRAWER_CATALOG, 'All').length, 20);
});

test('filterNavGroupsByQuery matches parent items and nested children accurately', () => {
  const groups = [
    {
      heading: 'Documentation',
      items: [
        {
          label: 'Getting Started',
          children: [{ label: 'Installation' }, { label: 'CLI Reference' }],
        },
        {
          label: 'Core Concepts',
          children: [{ label: 'Edge Caching' }, { label: 'Routing' }],
        },
      ],
    },
  ];

  const childMatch = filterNavGroupsByQuery(groups, 'edge');
  assert.equal(childMatch.length, 1);
  assert.equal(childMatch[0].items.length, 1);
  assert.equal(childMatch[0].items[0].label, 'Core Concepts');
  assert.deepEqual(childMatch[0].items[0].children, [{ label: 'Edge Caching' }]);

  const noMatch = filterNavGroupsByQuery(groups, 'nonexistent');
  assert.equal(noMatch.length, 0);
});
