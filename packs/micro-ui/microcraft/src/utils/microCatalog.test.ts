import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MICRO_CATALOG,
  filterMicroItems,
  formatBadgeCount,
  filterCommandActions,
  toggleCheckboxItem,
} from './microCatalog';

test('MICRO_CATALOG contains exactly 20 uniquely named Micro1..Micro20 specs', () => {
  assert.equal(MICRO_CATALOG.length, 20);
  const names = new Set(MICRO_CATALOG.map((item) => item.name));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i++) {
    assert.equal(names.has(`Micro${i}`), true);
  }
});

test('filterMicroItems filters by category, style tone, and search query', () => {
  const tooltips = filterMicroItems(MICRO_CATALOG, 'tooltips', 'all', '');
  assert.equal(tooltips.length, 5);

  const darkMenus = filterMicroItems(MICRO_CATALOG, 'menus', 'dark', '');
  assert.deepEqual(
    darkMenus.map((m) => m.name),
    ['Micro10', 'Micro11', 'Micro17']
  );

  const checkboxSearch = filterMicroItems(MICRO_CATALOG, 'all', 'all', 'checkbox');
  assert.deepEqual(
    checkboxSearch.map((m) => m.name),
    ['Micro10']
  );
});

test('formatBadgeCount handles zero, normal integers, and 99+ cap', () => {
  assert.equal(formatBadgeCount(-3), '0');
  assert.equal(formatBadgeCount(12), '12');
  assert.equal(formatBadgeCount(99), '99');
  assert.equal(formatBadgeCount(148), '99+');
});

test('filterCommandActions filters by label or group case-insensitively', () => {
  const sample = [
    { id: '1', label: 'Create Sprint', group: 'Workspace', shortcut: 'C' },
    { id: '2', label: 'Export Audit CSV', group: 'Data', shortcut: 'E' },
  ];
  assert.equal(filterCommandActions(sample, 'sprint').length, 1);
  assert.equal(filterCommandActions(sample, 'data').length, 1);
  assert.equal(filterCommandActions(sample, '').length, 2);
});

test('toggleCheckboxItem toggles only the targeted item', () => {
  const initial = [
    { id: 'a', label: 'Status', checked: true },
    { id: 'b', label: 'Owner', checked: false },
  ];
  const next = toggleCheckboxItem(initial, 'b');
  assert.equal(next[0].checked, true);
  assert.equal(next[1].checked, true);
});
