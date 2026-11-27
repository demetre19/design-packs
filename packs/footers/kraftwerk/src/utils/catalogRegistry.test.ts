import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMPONENT_CATEGORIES,
  getInitialCategory,
  getTotalComponentCount,
  isSectionVisible,
} from './catalogRegistry';

test('total component count equals 62 across all 14 families', () => {
  assert.equal(getTotalComponentCount(COMPONENT_CATEGORIES), 62);
  const contentCat = COMPONENT_CATEGORIES.find((c) => c.id === 'content');
  assert.ok(contentCat);
  assert.equal(contentCat.count, 15);
});

test('isSectionVisible handles all and individual category filters', () => {
  assert.equal(isSectionVisible('all', 'content'), true);
  assert.equal(isSectionVisible('all', 'stats'), true);
  assert.equal(isSectionVisible('content', 'content'), true);
  assert.equal(isSectionVisible('content', 'heroes'), false);
});

test('getInitialCategory defaults to content and validates query param', () => {
  assert.equal(getInitialCategory(''), 'content');
  assert.equal(getInitialCategory('?category=all'), 'all');
  assert.equal(getInitialCategory('?category=heroes'), 'heroes');
  assert.equal(getInitialCategory('?category=unknown'), 'content');
});
