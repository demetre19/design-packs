import test from 'node:test';
import assert from 'node:assert/strict';
import { BACKGROUNDS_META } from '../data/backgroundsMeta';
import { buildAllComponentsBundle, filterBackgrounds, getCategoryCounts } from './catalogFilter';

test('catalog contains all 20 unique Bg1..Bg20 components in order', () => {
  assert.equal(BACKGROUNDS_META.length, 20);
  const ids = BACKGROUNDS_META.map((item) => item.id);
  const expected = Array.from({ length: 20 }, (_, i) => `Bg${i + 1}`);
  assert.deepEqual(ids, expected);
});

test('every background component snippet is self-contained with zero external image URLs', () => {
  for (const item of BACKGROUNDS_META) {
    assert.ok(item.sourceCode.includes(`export function ${item.id}`), `${item.id} exports its component`);
    assert.ok(item.sourceCode.includes('dark:'), `${item.id} includes dark mode opacity styling`);
    assert.equal(item.sourceCode.includes('<img'), false, `${item.id} must not use <img>`);
    assert.equal(item.sourceCode.includes('http://'), false, `${item.id} must not reference external URLs`);
    assert.equal(item.sourceCode.includes('https://'), false, `${item.id} must not reference external URLs`);
  }
});

test('category counts sum cleanly to 20', () => {
  const counts = getCategoryCounts(BACKGROUNDS_META);
  assert.equal(counts.all, 20);
  assert.equal(counts.grids + counts.organic + counts.textures, 20);
});

test('filterBackgrounds filters accurately by category and search query', () => {
  const gridResults = filterBackgrounds(BACKGROUNDS_META, 'grids', '');
  assert.equal(gridResults.length, 8);

  const auroraResults = filterBackgrounds(BACKGROUNDS_META, 'all', 'aurora');
  assert.equal(auroraResults.length, 1);
  assert.equal(auroraResults[0].id, 'Bg17');

  const idResults = filterBackgrounds(BACKGROUNDS_META, 'all', 'Bg11');
  assert.equal(idResults.length, 1);
  assert.equal(idResults[0].name, 'Dashed-Grid Blueprint');

  const emptyResults = filterBackgrounds(BACKGROUNDS_META, 'textures', 'aurora');
  assert.equal(emptyResults.length, 0);
});

test('buildAllComponentsBundle exports all 20 functions cleanly without duplicate useId imports', () => {
  const bundle = buildAllComponentsBundle(BACKGROUNDS_META);
  assert.ok(bundle.startsWith("import React, { useId } from 'react';"));
  for (let i = 1; i <= 20; i++) {
    assert.ok(bundle.includes(`export function Bg${i}(`), `Bundle missing Bg${i}`);
  }
  const importMatches = bundle.match(/import \{ useId \} from 'react';/g) ?? [];
  assert.equal(importMatches.length, 0, 'Individual useId imports should be deduplicated');
});
