import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatBytes,
  formatCurrency,
  nextSortConfig,
  sortRecords,
  sumBy,
  toggleAllSelection,
  toggleSelection,
} from './tableLogic';

test('nextSortConfig cycles none -> ascending -> descending -> none', () => {
  const s1 = nextSortConfig({ key: 'name', direction: 'none' }, 'name');
  assert.deepEqual(s1, { key: 'name', direction: 'ascending' });

  const s2 = nextSortConfig(s1, 'name');
  assert.deepEqual(s2, { key: 'name', direction: 'descending' });

  const s3 = nextSortConfig(s2, 'name');
  assert.deepEqual(s3, { key: 'name', direction: 'none' });

  const s4 = nextSortConfig(s2, 'email');
  assert.deepEqual(s4, { key: 'email', direction: 'ascending' });
});

test('sortRecords sorts numbers and strings deterministically without mutating input', () => {
  const rows = [
    { id: '2', name: 'INV-10', amount: 420 },
    { id: '1', name: 'INV-2', amount: 1200 },
    { id: '3', name: 'INV-1', amount: 85 },
  ];
  const ascAmount = sortRecords(rows, { key: 'amount', direction: 'ascending' });
  assert.deepEqual(ascAmount.map((r) => r.id), ['3', '2', '1']);
  assert.equal(rows[0].id, '2');

  const descName = sortRecords(rows, { key: 'name', direction: 'descending' });
  assert.deepEqual(descName.map((r) => r.name), ['INV-10', 'INV-2', 'INV-1']);

  const none = sortRecords(rows, { key: 'amount', direction: 'none' });
  assert.deepEqual(none.map((r) => r.id), ['2', '1', '3']);
});

test('selection helpers toggle single and all rows cleanly', () => {
  let selected: string[] = [];
  selected = toggleSelection(selected, 'u1');
  assert.deepEqual(selected, ['u1']);
  selected = toggleSelection(selected, 'u2');
  assert.deepEqual(selected, ['u1', 'u2']);
  selected = toggleSelection(selected, 'u1');
  assert.deepEqual(selected, ['u2']);

  const all = toggleAllSelection(selected, ['u1', 'u2', 'u3']);
  assert.deepEqual(all.sort(), ['u1', 'u2', 'u3']);

  const cleared = toggleAllSelection(all, ['u1', 'u2', 'u3']);
  assert.deepEqual(cleared, []);
});

test('formatters and sumBy return expected financial and byte outputs', () => {
  assert.equal(formatCurrency(1250.5), '$1,250.50');
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(1536), '1.5 KB');
  assert.equal(formatBytes(15 * 1024 * 1024), '15 MB');
  assert.equal(sumBy([{ a: 10 }, { a: 25.5 }], (x) => x.a), 35.5);
});
