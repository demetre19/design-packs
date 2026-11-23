import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SPECIMEN_CATALOG,
  filterSpecimens,
  getAdjacentSpecimens,
  parseSpecimenParam,
} from './specimenCatalog';

test('catalog contains exactly 30 uniquely numbered BlogSingle1..30 specimens', () => {
  assert.equal(SPECIMEN_CATALOG.length, 30);
  const ids = new Set(SPECIMEN_CATALOG.map((item) => item.id));
  const names = new Set(SPECIMEN_CATALOG.map((item) => item.componentName));
  assert.equal(ids.size, 30);
  assert.equal(names.size, 30);
  assert.equal(SPECIMEN_CATALOG[0].componentName, 'BlogSingle1');
  assert.equal(SPECIMEN_CATALOG[29].componentName, 'BlogSingle30');
});

test('filterSpecimens filters by category and text query', () => {
  const tech = filterSpecimens(SPECIMEN_CATALOG, 'Technical & Docs', '');
  assert.ok(tech.length >= 5);
  assert.ok(tech.every((s) => s.category === 'Technical & Docs'));

  const byId = filterSpecimens(SPECIMEN_CATALOG, 'All', '15');
  assert.equal(byId.length, 1);
  assert.equal(byId[0].componentName, 'BlogSingle15');

  const byFormat = filterSpecimens(SPECIMEN_CATALOG, 'All', 'glossary');
  assert.equal(byFormat.length, 1);
  assert.equal(byFormat[0].id, 29);
});

test('getAdjacentSpecimens wraps around cleanly at boundaries', () => {
  const first = getAdjacentSpecimens(SPECIMEN_CATALOG, 1);
  assert.equal(first.prev.id, 30);
  assert.equal(first.next.id, 2);

  const last = getAdjacentSpecimens(SPECIMEN_CATALOG, 30);
  assert.equal(last.prev.id, 29);
  assert.equal(last.next.id, 1);
});

test('parseSpecimenParam clamps and defaults invalid values to 1', () => {
  assert.equal(parseSpecimenParam('?specimen=17'), 17);
  assert.equal(parseSpecimenParam('?specimen=0'), 1);
  assert.equal(parseSpecimenParam('?specimen=99'), 1);
  assert.equal(parseSpecimenParam('?specimen=abc'), 1);
  assert.equal(parseSpecimenParam(''), 1);
});
