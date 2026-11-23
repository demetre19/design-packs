import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SPECIMEN_CATALOG,
  SPECIMEN_CATEGORIES,
  calculateReadTime,
  filterSpecimens,
  formatInitials,
  getCategoryCounts,
  truncatePreview,
} from './specimenCatalog';

test('SPECIMEN_CATALOG contains exactly 20 unique Deco1..Deco20 entries', () => {
  assert.equal(SPECIMEN_CATALOG.length, 20);
  const ids = SPECIMEN_CATALOG.map((item) => item.id);
  for (let i = 1; i <= 20; i += 1) {
    assert.equal(ids[i - 1], `Deco${i}`);
  }
  assert.equal(new Set(ids).size, 20);
});

test('filterSpecimens filters by category and search query accurately', () => {
  const quotes = filterSpecimens(SPECIMEN_CATALOG, { category: 'Quotes & Prose' });
  assert.equal(quotes.length, 4);
  assert.ok(quotes.every((item) => item.category === 'Quotes & Prose'));

  const kbdResults = filterSpecimens(SPECIMEN_CATALOG, { query: 'kbd' });
  assert.equal(kbdResults.length, 1);
  assert.equal(kbdResults[0].id, 'Deco20');

  const combined = filterSpecimens(SPECIMEN_CATALOG, {
    category: 'Callouts & Navigation',
    query: 'tip',
  });
  assert.equal(combined.length, 1);
  assert.equal(combined[0].id, 'Deco12');

  const empty = filterSpecimens(SPECIMEN_CATALOG, { query: 'nonexistent-xyz' });
  assert.equal(empty.length, 0);
});

test('getCategoryCounts totals equal catalog length', () => {
  const counts = getCategoryCounts(SPECIMEN_CATALOG);
  assert.equal(counts.All, 20);
  const sum = SPECIMEN_CATEGORIES.reduce((acc, cat) => acc + counts[cat], 0);
  assert.equal(sum, 20);
});

test('formatInitials extracts deterministic monograms', () => {
  assert.equal(formatInitials('Elena Vance'), 'EV');
  assert.equal(formatInitials('Sora Takahashi'), 'ST');
  assert.equal(formatInitials('Jean-Luc Picard'), 'JP');
  assert.equal(formatInitials('Ada'), 'AD');
  assert.equal(formatInitials('   '), '?');
});

test('calculateReadTime rounds up cleanly and enforces minimum 1 minute', () => {
  assert.equal(calculateReadTime(0), 1);
  assert.equal(calculateReadTime(150, 220), 1);
  assert.equal(calculateReadTime(440, 220), 2);
  assert.equal(calculateReadTime(441, 220), 3);
});

test('truncatePreview respects word boundaries and adds ellipsis', () => {
  const short = 'Short sentence.';
  assert.equal(truncatePreview(short, 50), 'Short sentence.');

  const long =
    'Typography is the craft of endowing human language with a durable visual form across print and screen.';
  const result = truncatePreview(long, 42);
  assert.ok(result.endsWith('…'));
  assert.ok(result.length <= 43);
  assert.equal(result, 'Typography is the craft of endowing human…');
});
