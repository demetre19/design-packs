import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSubtotal,
  evaluatePromoCode,
  calculateFreeShippingProgress,
  paginateItems,
  filterScreens,
  resolveScreenFromSearch,
  type ScreenMeta,
} from './shopLogic';

test('calculateSubtotal sums positive item prices and quantities', () => {
  assert.equal(
    calculateSubtotal([
      { price: 120, quantity: 2 },
      { price: 45, quantity: 1 },
    ]),
    285
  );
  assert.equal(calculateSubtotal([]), 0);
});

test('evaluatePromoCode validates known codes and computes exact discount', () => {
  const valid = evaluatePromoCode(' save10 ', 200);
  assert.equal(valid.valid, true);
  assert.equal(valid.discount, 20);
  assert.equal(valid.rate, 0.1);

  const invalid = evaluatePromoCode('BADCODE', 200);
  assert.equal(invalid.valid, false);
  assert.equal(invalid.discount, 0);
});

test('calculateFreeShippingProgress computes remaining amount and clamp', () => {
  const partial = calculateFreeShippingProgress(90, 150);
  assert.equal(partial.remaining, 60);
  assert.equal(partial.percent, 60);
  assert.equal(partial.unlocked, false);

  const unlocked = calculateFreeShippingProgress(180, 150);
  assert.equal(unlocked.remaining, 0);
  assert.equal(unlocked.percent, 100);
  assert.equal(unlocked.unlocked, true);
});

test('paginateItems slices cleanly and clamps out-of-range page numbers', () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const p2 = paginateItems(items, 2, 3);
  assert.deepEqual(p2.pageItems, [4, 5, 6]);
  assert.equal(p2.totalPages, 3);
  assert.equal(p2.currentPage, 2);

  const clamped = paginateItems(items, 99, 3);
  assert.equal(clamped.currentPage, 3);
  assert.deepEqual(clamped.pageItems, [7]);
});

test('filterScreens and resolveScreenFromSearch match category, style, and query param', () => {
  const sample: ScreenMeta[] = [
    {
      id: 'Shop1',
      number: 1,
      title: 'Kanso Objects',
      brand: 'Kanso',
      category: 'Product Detail',
      style: 'Minimal / Professional',
      topology: 'Split-Pane',
      summary: 'Task lamp PDP',
    },
    {
      id: 'Shop16',
      number: 16,
      title: 'Aura Linen',
      brand: 'Aura',
      category: 'Shopping Cart',
      style: 'Minimal / Professional',
      topology: 'Split-Pane',
      summary: 'Empty cart state',
    },
  ];

  assert.equal(filterScreens(sample, 'Shopping Cart', 'All').length, 1);
  assert.equal(resolveScreenFromSearch('?screen=shop16', sample), 'Shop16');
  assert.equal(resolveScreenFromSearch('?screen=unknown', sample), 'Shop1');
});
