import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveSnapAfterDrag,
  getNextSnapPoint,
  filterMenuItems,
  filterCatalog,
  groupItemsAlphabetically,
  computeLiveDragHeightPercent,
  type SnapPoint,
  type MenuCatalogMeta,
} from './sheet-logic';

const SNAP_POINTS: SnapPoint[] = [
  { id: 'peek', label: 'Peek', heightPercent: 40 },
  { id: 'half', label: 'Half', heightPercent: 68 },
  { id: 'full', label: 'Full', heightPercent: 92 },
];

test('resolveSnapAfterDrag snaps upward when dragged up past midpoint', () => {
  const result = resolveSnapAfterDrag({
    snapPoints: SNAP_POINTS,
    currentSnapId: 'peek',
    deltaY: -220,
    containerHeight: 700,
  });
  assert.deepEqual(result, { action: 'snap', snap: SNAP_POINTS[1] });
});

test('resolveSnapAfterDrag snaps to full when dragged high up', () => {
  const result = resolveSnapAfterDrag({
    snapPoints: SNAP_POINTS,
    currentSnapId: 'peek',
    deltaY: -400,
    containerHeight: 700,
  });
  assert.deepEqual(result, { action: 'snap', snap: SNAP_POINTS[2] });
});

test('resolveSnapAfterDrag dismisses when dragged far down from lowest snap', () => {
  const result = resolveSnapAfterDrag({
    snapPoints: SNAP_POINTS,
    currentSnapId: 'peek',
    deltaY: 200,
    containerHeight: 700,
  });
  assert.deepEqual(result, { action: 'dismiss' });
});

test('getNextSnapPoint cycles and respects up/down bounds', () => {
  assert.equal(getNextSnapPoint(SNAP_POINTS, 'peek', 'cycle')?.id, 'half');
  assert.equal(getNextSnapPoint(SNAP_POINTS, 'full', 'cycle')?.id, 'peek');
  assert.equal(getNextSnapPoint(SNAP_POINTS, 'full', 'up')?.id, 'full');
  assert.equal(getNextSnapPoint(SNAP_POINTS, 'peek', 'down')?.id, 'peek');
});

test('filterMenuItems matches label, description, and category case-insensitively', () => {
  const items = [
    { id: '1', label: 'Analytics', description: 'Traffic charts', category: 'Insights' },
    { id: '2', label: 'Billing', description: 'Invoices & cards', category: 'Finance' },
    { id: '3', label: 'Team', description: 'Member permissions', category: 'Admin' },
  ];
  assert.equal(filterMenuItems(items, '').length, 3);
  assert.deepEqual(
    filterMenuItems(items, 'invoice').map((i) => i.id),
    ['2']
  );
  assert.deepEqual(
    filterMenuItems(items, 'INSIGHTS').map((i) => i.id),
    ['1']
  );
});

test('groupItemsAlphabetically sorts and buckets items by leading letter', () => {
  const groups = groupItemsAlphabetically([
    { label: 'Design Systems' },
    { label: 'Billing' },
    { label: 'API Keys' },
    { label: 'Analytics' },
  ]);
  assert.deepEqual(
    groups.map((g) => g.letter),
    ['A', 'B', 'D']
  );
  assert.deepEqual(
    groups[0].items.map((i) => i.label),
    ['Analytics', 'API Keys']
  );
});

test('filterCatalog filters by kind, layout topology, and search query', () => {
  const sample: MenuCatalogMeta[] = [
    {
      id: 1,
      componentName: 'SheetMenu1',
      title: 'Split Master-Detail',
      kind: 'top-dropdown',
      layoutPattern: 'master-detail',
      topologyLabel: 'Two-Pane Split Rail',
      styleFamily: 'minimal-light',
      hasProfileFooter: true,
      hasUtilityActions: false,
      hasSearchBar: true,
      summary: 'Split two-pane menu',
    },
    {
      id: 19,
      componentName: 'SheetMenu19',
      title: 'A-Z Index Sheet',
      kind: 'bottom-sheet',
      layoutPattern: 'az-index',
      topologyLabel: 'Alphabetical Index Rail',
      styleFamily: 'editorial-light',
      hasProfileFooter: false,
      hasUtilityActions: true,
      hasSearchBar: true,
      snapPoints: SNAP_POINTS,
      summary: 'Bottom sheet with A-Z rail',
    },
  ];

  assert.equal(filterCatalog(sample, { kind: 'top-dropdown' }).length, 1);
  assert.equal(filterCatalog(sample, { kind: 'bottom-sheet', layout: 'az-index' }).length, 1);
  assert.equal(filterCatalog(sample, { query: 'rail' }).length, 2);
});

test('computeLiveDragHeightPercent clamps between min and max', () => {
  assert.equal(
    computeLiveDragHeightPercent({
      baseHeightPercent: 50,
      deltaY: -500,
      containerHeight: 700,
    }),
    96
  );
  assert.equal(
    computeLiveDragHeightPercent({
      baseHeightPercent: 40,
      deltaY: 500,
      containerHeight: 700,
    }),
    18
  );
});
