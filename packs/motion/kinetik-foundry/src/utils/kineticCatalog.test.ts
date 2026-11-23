import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeCenterSpread,
  computeStaggerDelay,
  getSpeedMultiplier,
  resolveScrambleChar,
  scaleMs,
  splitChars,
  splitLines,
  splitWords,
} from './kineticMath';
import { filterSpecimens, KINETIC_SPECIMENS } from './kineticCatalog';

test('catalog contains exactly 20 unique components Ktxt1..Ktxt20', () => {
  assert.equal(KINETIC_SPECIMENS.length, 20);
  const names = new Set(KINETIC_SPECIMENS.map((s) => s.componentName));
  assert.equal(names.size, 20);
  for (let i = 1; i <= 20; i++) {
    assert.ok(names.has(`Ktxt${i}` as `Ktxt${number}`), `Missing Ktxt${i}`);
  }
});

test('filterSpecimens filters by category and search query accurately', () => {
  assert.equal(filterSpecimens(KINETIC_SPECIMENS, 'all').length, 20);
  const interactive = filterSpecimens(KINETIC_SPECIMENS, 'interactive');
  assert.ok(interactive.length >= 3);
  assert.ok(interactive.every((item) => item.category === 'interactive'));

  const glitchMatch = filterSpecimens(KINETIC_SPECIMENS, 'all', 'glitch');
  assert.equal(glitchMatch.length, 1);
  assert.equal(glitchMatch[0].componentName, 'Ktxt13');
});

test('stagger delay and duration scaling respect speed presets', () => {
  assert.equal(getSpeedMultiplier('fast'), 0.6);
  assert.equal(getSpeedMultiplier('normal'), 1);
  assert.equal(getSpeedMultiplier('dramatic'), 1.6);

  assert.equal(computeStaggerDelay(0, 35, 'normal'), '0ms');
  assert.equal(computeStaggerDelay(4, 35, 'normal'), '140ms');
  assert.equal(computeStaggerDelay(4, 35, 'fast'), '84ms');
  assert.equal(scaleMs(500, 'dramatic'), 800);
});

test('splitChars, splitWords, and splitLines preserve tokens properly', () => {
  assert.deepEqual(splitChars('A B'), ['A', ' ', 'B']);
  assert.deepEqual(splitWords('  hello   kinetic  world '), ['hello', 'kinetic', 'world']);
  assert.deepEqual(splitWords('   '), []);
  assert.deepEqual(splitLines('Line one\nLine two\nLine three'), [
    'Line one',
    'Line two',
    'Line three',
  ]);
  assert.deepEqual(splitLines('One two three four five', 2), ['One two', 'three four', 'five']);
});

test('computeCenterSpread returns symmetric distances from center', () => {
  assert.equal(computeCenterSpread(0, 1, 10), 0);
  assert.equal(computeCenterSpread(0, 3, 10), -10);
  assert.equal(computeCenterSpread(1, 3, 10), 0);
  assert.equal(computeCenterSpread(2, 3, 10), 10);
});

test('resolveScrambleChar settles to exact target char once tick threshold passes', () => {
  assert.equal(resolveScrambleChar(' ', 0, 0), ' ');
  assert.notEqual(resolveScrambleChar('K', 2, 1, 2), '');
  assert.equal(resolveScrambleChar('K', 2, 6, 2), 'K');
  assert.equal(resolveScrambleChar('X', 5, 20, 2), 'X');
});
