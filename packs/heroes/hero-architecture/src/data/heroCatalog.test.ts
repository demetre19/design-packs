import test from 'node:test';
import assert from 'node:assert/strict';
import { HERO_META, filterHeroes, validateEmailAddress } from './heroCatalog';

test('HERO_META contains exactly 20 uniquely numbered heroes', () => {
  assert.equal(HERO_META.length, 20);
  const numbers = new Set(HERO_META.map((h) => h.number));
  const names = new Set(HERO_META.map((h) => h.name));
  assert.equal(numbers.size, 20);
  assert.equal(names.size, 20);
});

test('HERO_META covers all 4 style directions and all 10 layout patterns', () => {
  const styles = new Set(HERO_META.map((h) => h.style));
  const patterns = new Set(HERO_META.map((h) => h.pattern));
  assert.deepEqual(styles, new Set(['minimal', 'bold', 'dark', 'warm-editorial']));
  assert.equal(patterns.size, 10);
});

test('filterHeroes filters by style, pattern, and search query', () => {
  const darkHeroes = filterHeroes(HERO_META, { style: 'dark' });
  assert.ok(darkHeroes.length > 0);
  assert.ok(darkHeroes.every((h) => h.style === 'dark'));

  const editorialHeroes = filterHeroes(HERO_META, { pattern: 'editorial' });
  assert.equal(editorialHeroes.length, 2);

  const searchResult = filterHeroes(HERO_META, { query: 'Monolith' });
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0]?.name, 'Hero6');
});

test('validateEmailAddress rejects empty or malformed addresses and accepts valid ones', () => {
  assert.equal(validateEmailAddress(''), 'Please enter an email address.');
  assert.equal(validateEmailAddress('   '), 'Please enter an email address.');
  assert.ok(validateEmailAddress('not-an-email') !== null);
  assert.ok(validateEmailAddress('a@b') !== null);
  assert.equal(validateEmailAddress('editor@quarto.org'), null);
});
