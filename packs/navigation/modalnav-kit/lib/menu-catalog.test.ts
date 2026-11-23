import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MENU_CATALOG,
  filterMenuCatalog,
  filterCommandGroups,
} from './menu-catalog';

test('catalog contains exactly 20 unique modal menus within 480-720px panel width', () => {
  assert.equal(MENU_CATALOG.length, 20);
  const names = new Set(MENU_CATALOG.map((m) => m.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i++) {
    assert.ok(names.has(`ModalMenu${i}`), `Missing ModalMenu${i}`);
  }
  for (const entry of MENU_CATALOG) {
    assert.ok(
      entry.panelWidthPx >= 480 && entry.panelWidthPx <= 720,
      `${entry.componentName} panelWidthPx=${entry.panelWidthPx} outside 480-720`
    );
  }
});

test('filterMenuCatalog filters by styleFamily and layoutArchetype', () => {
  const darkMenus = filterMenuCatalog(MENU_CATALOG, { styleFamily: 'Dark' });
  assert.equal(darkMenus.length, 6);
  assert.ok(darkMenus.every((m) => m.styleFamily === 'Dark'));

  const editorialMenus = filterMenuCatalog(MENU_CATALOG, {
    styleFamily: 'Warm Editorial',
  });
  assert.equal(editorialMenus.length, 4);

  const combined = filterMenuCatalog(MENU_CATALOG, {
    styleFamily: 'Bold / Colourful',
    layoutArchetype: 'Bento & Radial',
  });
  assert.equal(combined.length, 2);
  assert.deepEqual(
    combined.map((m) => m.componentName),
    ['ModalMenu5', 'ModalMenu14']
  );
});

test('filterMenuCatalog filters by text query case-insensitively', () => {
  const bauhaus = filterMenuCatalog(MENU_CATALOG, { query: 'bauhaus' });
  assert.equal(bauhaus.length, 1);
  assert.equal(bauhaus[0].componentName, 'ModalMenu8');

  const miller = filterMenuCatalog(MENU_CATALOG, { query: 'miller' });
  assert.equal(miller.length, 1);
  assert.equal(miller[0].componentName, 'ModalMenu13');

  const empty = filterMenuCatalog(MENU_CATALOG, { query: 'nonexistent-xyz' });
  assert.equal(empty.length, 0);
});

test('filterCommandGroups filters nested items and drops empty groups', () => {
  const groups = [
    {
      heading: 'Navigation',
      items: [
        { label: 'Deployments', description: 'Production rollouts' },
        { label: 'Analytics', description: 'Traffic metrics' },
      ],
    },
    {
      heading: 'Settings',
      items: [{ label: 'Billing', description: 'Invoices and plan' }],
    },
  ];

  const filtered = filterCommandGroups(groups, 'deploy');
  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].heading, 'Navigation');
  assert.equal(filtered[0].items.length, 1);
  assert.equal(filtered[0].items[0].label, 'Deployments');

  const noMatch = filterCommandGroups(groups, 'zzzzzz');
  assert.equal(noMatch.length, 0);
});
