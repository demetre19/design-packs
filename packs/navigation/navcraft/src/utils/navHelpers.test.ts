import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getPaginationRange,
  getBoundedPage,
  filterCommandGroups,
  toggleSetItem,
} from './navHelpers';

test('getPaginationRange returns full sequence when totalPages is small', () => {
  assert.deepEqual(getPaginationRange(2, 5), [1, 2, 3, 4, 5]);
});

test('getPaginationRange handles left-anchored pages with right ellipsis', () => {
  assert.deepEqual(getPaginationRange(2, 12), [1, 2, 3, 4, 5, 'ellipsis-right', 12]);
});

test('getPaginationRange handles middle pages with both ellipses', () => {
  assert.deepEqual(getPaginationRange(6, 12), [
    1,
    'ellipsis-left',
    5,
    6,
    7,
    'ellipsis-right',
    12,
  ]);
});

test('getPaginationRange handles right-anchored pages with left ellipsis', () => {
  assert.deepEqual(getPaginationRange(11, 12), [1, 'ellipsis-left', 8, 9, 10, 11, 12]);
});

test('getBoundedPage clamps between 1 and totalPages', () => {
  assert.equal(getBoundedPage(1, -1, 10), 1);
  assert.equal(getBoundedPage(10, 1, 10), 10);
  assert.equal(getBoundedPage(4, 2, 10), 6);
});

test('filterCommandGroups filters items by label, keywords, or group', () => {
  const groups = [
    {
      group: 'Navigation',
      items: [
        { id: '1', label: 'Go to Deployments', keywords: 'release build' },
        { id: '2', label: 'Open Billing', keywords: 'invoice' },
      ],
    },
    {
      group: 'Actions',
      items: [{ id: '3', label: 'Create API Token', keywords: 'key secret' }],
    },
  ];
  const filtered = filterCommandGroups(groups, 'deploy');
  assert.equal(filtered.length, 1);
  assert.equal(filtered[0].items.length, 1);
  assert.equal(filtered[0].items[0].id, '1');
  assert.equal(filterCommandGroups(groups, 'nonexistent').length, 0);
});

test('toggleSetItem adds and removes ids cleanly', () => {
  assert.deepEqual(toggleSetItem(['src', 'docs'], 'tests'), ['src', 'docs', 'tests']);
  assert.deepEqual(toggleSetItem(['src', 'docs'], 'src'), ['docs']);
});
