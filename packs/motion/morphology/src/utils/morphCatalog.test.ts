import test from 'node:test';
import assert from 'node:assert/strict';
import {
  MORPH_SPECS,
  computeMidSlideIndicator,
  countMorphedStates,
  createInitialMorphMap,
  filterMorphSpecs,
  setAllMorphStates,
} from './morphCatalog';

test('MORPH_SPECS contains exactly 20 unique sequential morph interactions', () => {
  assert.equal(MORPH_SPECS.length, 20);
  const ids = new Set(MORPH_SPECS.map((s) => s.id));
  assert.equal(ids.size, 20);
  MORPH_SPECS.forEach((spec, idx) => {
    assert.equal(spec.index, idx + 1);
    assert.equal(spec.id, `morph${idx + 1}`);
  });
});

test('createInitialMorphMap defaults all 20 components to morphed end state', () => {
  const initial = createInitialMorphMap();
  assert.equal(countMorphedStates(initial), 20);
  const reset = setAllMorphStates(initial, false);
  assert.equal(countMorphedStates(reset), 0);
  const restored = setAllMorphStates(reset, true);
  assert.equal(countMorphedStates(restored), 20);
});

test('filterMorphSpecs filters accurately by category and search query', () => {
  const all = filterMorphSpecs(MORPH_SPECS, 'all', '');
  assert.equal(all.length, 20);

  const icons = filterMorphSpecs(MORPH_SPECS, 'icons', '');
  assert.ok(icons.length >= 3);
  assert.ok(icons.every((s) => s.category === 'icons'));

  const gooMatch = filterMorphSpecs(MORPH_SPECS, 'all', 'goo');
  assert.equal(gooMatch.length, 1);
  assert.equal(gooMatch[0].id, 'morph4');

  const indexMatch = filterMorphSpecs(MORPH_SPECS, 'all', '18');
  assert.equal(indexMatch.length, 1);
  assert.equal(indexMatch[0].id, 'morph18');
});

test('computeMidSlideIndicator stretches width mid-slide and settles cleanly', () => {
  const settled = computeMidSlideIndicator(0, 0, 1, 3);
  assert.equal(settled.leftPercent, 0);
  assert.equal(settled.widthPercent, 33.33);
  assert.equal(settled.stretchRatio, 1);

  const midSlide = computeMidSlideIndicator(0, 1, 0.5, 3);
  assert.ok(midSlide.stretchRatio > 1.2, 'Indicator should stretch during mid-slide');
  assert.ok(midSlide.leftPercent > 0 && midSlide.leftPercent < 33.33);
  assert.ok(midSlide.widthPercent > 33.33);

  const arrived = computeMidSlideIndicator(0, 2, 1, 3);
  assert.equal(arrived.stretchRatio, 1);
  assert.equal(arrived.leftPercent, 66.67);
});
