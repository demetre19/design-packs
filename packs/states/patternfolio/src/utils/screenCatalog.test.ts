import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SCREEN_CATALOG,
  filterScreens,
  resolveScreenFromQuery,
  getAdjacentScreenId,
} from './screenCatalog';

test('catalog contains exactly 10 auth screens and 10 error screens', () => {
  const auth = SCREEN_CATALOG.filter((s) => s.category === 'auth');
  const err = SCREEN_CATALOG.filter((s) => s.category === 'error');
  assert.equal(auth.length, 10);
  assert.equal(err.length, 10);
  assert.equal(SCREEN_CATALOG.length, 20);
});

test('filterScreens filters by category and search query', () => {
  assert.equal(filterScreens(SCREEN_CATALOG, 'auth', '').length, 10);
  assert.equal(filterScreens(SCREEN_CATALOG, 'error', '').length, 10);
  assert.equal(filterScreens(SCREEN_CATALOG, 'all', 'magic link').length, 1);
  assert.equal(filterScreens(SCREEN_CATALOG, 'error', '404')[0]?.id, 'Error1');
  assert.equal(filterScreens(SCREEN_CATALOG, 'auth', '404').length, 0);
});

test('resolveScreenFromQuery resolves case-insensitively with safe fallback', () => {
  assert.equal(resolveScreenFromQuery('?screen=Auth7'), 'Auth7');
  assert.equal(resolveScreenFromQuery('?screen=error9'), 'Error9');
  assert.equal(resolveScreenFromQuery('?screen=unknown'), 'Auth1');
  assert.equal(resolveScreenFromQuery(''), 'Auth1');
});

test('getAdjacentScreenId wraps around cleanly', () => {
  assert.equal(getAdjacentScreenId('Auth1', 'prev'), 'Error10');
  assert.equal(getAdjacentScreenId('Error10', 'next'), 'Auth1');
  assert.equal(getAdjacentScreenId('Auth4', 'next'), 'Auth5');
});
