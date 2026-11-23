import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateCartTotals,
  detectCardBrand,
  evaluatePromoCode,
  filterAndSortProducts,
  formatCardNumber,
  validateCardFields,
  validateShippingFields,
  type CatalogProduct,
} from './commerce';

test('evaluatePromoCode handles valid and invalid codes', () => {
  const warm = evaluatePromoCode('warm15', 100);
  assert.equal(warm.valid, true);
  assert.equal(warm.discountAmount, 15);
  assert.equal(warm.freeShipping, false);

  const ship = evaluatePromoCode('SHIPFREE', 80);
  assert.equal(ship.valid, true);
  assert.equal(ship.freeShipping, true);

  const invalid = evaluatePromoCode('BOGUS', 100);
  assert.equal(invalid.valid, false);
  assert.ok(invalid.error);
});

test('calculateCartTotals computes subtotal, discount, shipping, tax, and total', () => {
  const promo = evaluatePromoCode('WARM15', 200);
  const totals = calculateCartTotals(
    [
      { price: 120, qty: 1 },
      { price: 40, qty: 2 },
    ],
    12,
    promo,
    0.08
  );
  assert.equal(totals.subtotal, 200);
  assert.equal(totals.discount, 30);
  assert.equal(totals.shipping, 12);
  assert.equal(totals.tax, 13.6);
  assert.equal(totals.total, 195.6);

  const empty = calculateCartTotals([], 12, promo, 0.08);
  assert.equal(empty.total, 0);
  assert.equal(empty.shipping, 0);
});

test('card formatting and brand detection', () => {
  assert.equal(formatCardNumber('4242424242424242'), '4242 4242 4242 4242');
  assert.equal(detectCardBrand('4242 1111'), 'Visa');
  assert.equal(detectCardBrand('5412 1111'), 'Mastercard');
  assert.equal(detectCardBrand('3782 8224'), 'Amex');
});

test('shipping and card validation catch missing/invalid inputs', () => {
  const sErr = validateShippingFields({
    fullName: '',
    email: 'bad',
    address: '12',
    city: '',
    postalCode: '1',
  });
  assert.equal(Object.keys(sErr).length, 5);

  const cErr = validateCardFields({
    cardName: 'Ada Lovelace',
    cardNumber: '4242 4242 4242 4242',
    expiry: '08/28',
    cvc: '842',
  });
  assert.equal(Object.keys(cErr).length, 0);
});

test('filterAndSortProducts filters by category, stock, price, and sorts', () => {
  const sample: CatalogProduct[] = [
    { id: '1', name: 'A', category: 'Lighting', material: 'Brass', price: 240, monogram: 'A', gradient: ['#111', '#333'], inStock: true, rating: 4.9 },
    { id: '2', name: 'B', category: 'Ceramics', material: 'Clay', price: 65, monogram: 'B', gradient: ['#222', '#444'], inStock: false, rating: 4.5 },
    { id: '3', name: 'C', category: 'Lighting', material: 'Steel', price: 180, monogram: 'C', gradient: ['#333', '#555'], inStock: true, rating: 4.7 },
  ];
  const res = filterAndSortProducts(sample, {
    categories: ['Lighting'],
    materials: [],
    maxPrice: 300,
    inStockOnly: true,
    sortBy: 'price-asc',
  });
  assert.deepEqual(res.map((p) => p.id), ['3', '1']);
});
