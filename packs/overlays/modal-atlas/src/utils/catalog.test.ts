import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MODAL_SPECS,
  ALL_STYLES,
  countByStyleFamily,
  filterModalSpecs,
} from './catalog';

test('catalog contains exactly 20 uniquely numbered Modal1..Modal20 components', () => {
  assert.equal(MODAL_SPECS.length, 20);
  const names = MODAL_SPECS.map((m) => m.exportName);
  for (let i = 1; i <= 20; i++) {
    assert.ok(names.includes(`Modal${i}`), `Missing Modal${i}`);
  }
  assert.equal(new Set(names).size, 20);
});

test('all 5 style families are evenly represented with 4 modals each', () => {
  const counts = countByStyleFamily(MODAL_SPECS);
  for (const style of ALL_STYLES) {
    assert.equal(counts[style], 4, `Expected 4 modals for ${style}, got ${counts[style]}`);
  }
});

test('filterModalSpecs filters accurately by kind, style, layout, and search query', () => {
  const darkModals = filterModalSpecs(MODAL_SPECS, {
    search: '',
    kind: 'All',
    styleFamily: 'Dark',
    layout: 'All',
  });
  assert.equal(darkModals.length, 4);
  assert.ok(darkModals.every((m) => m.styleFamily === 'Dark'));

  const slideOvers = filterModalSpecs(MODAL_SPECS, {
    search: '',
    kind: 'All',
    styleFamily: 'All',
    layout: 'Right Slide-Over',
  });
  assert.equal(slideOvers.length, 3);

  const searchMatches = filterModalSpecs(MODAL_SPECS, {
    search: 'command palette',
    kind: 'All',
    styleFamily: 'All',
    layout: 'All',
  });
  assert.equal(searchMatches.length, 1);
  assert.equal(searchMatches[0].exportName, 'Modal16');

  const noMatches = filterModalSpecs(MODAL_SPECS, {
    search: 'nonexistent-xyz-widget',
    kind: 'All',
    styleFamily: 'All',
    layout: 'All',
  });
  assert.equal(noMatches.length, 0);
});
