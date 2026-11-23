import test from 'node:test';
import assert from 'node:assert/strict';
import { AMBIENT_CATALOG } from './ambientCatalog';
import {
  filterAmbientItems,
  formatAmbientIndex,
  getAdjacentAmbientId,
  validateCatalogCompleteness,
} from './ambientUtils';

test('catalog contains all 20 unique Amb1..Amb20 entries', () => {
  const result = validateCatalogCompleteness(AMBIENT_CATALOG);
  assert.equal(result.valid, true);
  assert.deepEqual(result.missingIds, []);
  assert.deepEqual(result.duplicateIds, []);
  assert.equal(AMBIENT_CATALOG.length, 20);
});

test('formatAmbientIndex pads single digits cleanly', () => {
  assert.equal(formatAmbientIndex(1), '01');
  assert.equal(formatAmbientIndex(9), '09');
  assert.equal(formatAmbientIndex(20), '20');
});

test('filterAmbientItems filters by category and search query', () => {
  const particles = filterAmbientItems(AMBIENT_CATALOG, 'particles', '');
  assert.equal(particles.length, 3);
  assert.deepEqual(
    particles.map((item) => item.id),
    ['Amb2', 'Amb6', 'Amb15']
  );

  const auroraSearch = filterAmbientItems(AMBIENT_CATALOG, 'all', 'aurora');
  assert.equal(auroraSearch.length, 1);
  assert.equal(auroraSearch[0].id, 'Amb1');

  const idSearch = filterAmbientItems(AMBIENT_CATALOG, 'all', 'Amb20');
  assert.equal(idSearch.length, 1);
  assert.equal(idSearch[0].id, 'Amb20');
});

test('getAdjacentAmbientId wraps cleanly across catalog boundaries', () => {
  assert.equal(getAdjacentAmbientId(AMBIENT_CATALOG, 'Amb1', 'prev'), 'Amb20');
  assert.equal(getAdjacentAmbientId(AMBIENT_CATALOG, 'Amb20', 'next'), 'Amb1');
  assert.equal(getAdjacentAmbientId(AMBIENT_CATALOG, 'Amb4', 'next'), 'Amb5');
});
