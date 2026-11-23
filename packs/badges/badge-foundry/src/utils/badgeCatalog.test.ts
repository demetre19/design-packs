import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BADGE_CATALOG,
  filterBadges,
  formatBadgeCount,
  getCategoryCounts,
} from './badgeCatalog';

test('catalog defines exactly 20 unique Badge1..Badge20 entries', () => {
  assert.equal(BADGE_CATALOG.length, 20);
  const ids = new Set(BADGE_CATALOG.map((b) => b.id));
  const names = new Set(BADGE_CATALOG.map((b) => b.componentName));
  assert.equal(ids.size, 20);
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.equal(ids.has(i), true);
    assert.equal(names.has(`Badge${i}`), true);
  }
});

test('formatBadgeCount clamps negative numbers and formats overflow as 99+', () => {
  assert.equal(formatBadgeCount(-5), '0');
  assert.equal(formatBadgeCount(0), '0');
  assert.equal(formatBadgeCount(7), '7');
  assert.equal(formatBadgeCount(99), '99');
  assert.equal(formatBadgeCount(100), '99+');
  assert.equal(formatBadgeCount(240, 99), '99+');
  assert.equal(formatBadgeCount(12, 9), '9+');
});

test('filterBadges filters by category and search query case-insensitively', () => {
  const all = filterBadges(BADGE_CATALOG, 'all', '');
  assert.equal(all.length, 20);

  const ribbons = filterBadges(BADGE_CATALOG, 'ribbons', '');
  assert.equal(ribbons.length, 4);
  assert.ok(ribbons.every((b) => b.category === 'ribbons'));

  const punched = filterBadges(BADGE_CATALOG, 'all', 'PUNCHED');
  assert.equal(punched.length, 3);
  assert.ok(punched.some((b) => b.componentName === 'Badge10'));

  const ticket = filterBadges(BADGE_CATALOG, 'all', 'ticket');
  assert.equal(ticket.length, 1);
  assert.equal(ticket[0].componentName, 'Badge10');

  const none = filterBadges(BADGE_CATALOG, 'seals', 'bookmark');
  assert.equal(none.length, 0);
});

test('getCategoryCounts sums accurately to 20', () => {
  const counts = getCategoryCounts(BADGE_CATALOG);
  assert.equal(counts.all, 20);
  const sum = counts.status + counts.ribbons + counts.stickers + counts.seals + counts.chips;
  assert.equal(sum, 20);
});
