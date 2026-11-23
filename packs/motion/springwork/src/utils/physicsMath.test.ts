import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SPECIMEN_REGISTRY,
  computeInertiaTargetIndex,
  filterPhysSpecimens,
  reorderListItem,
  rubberBandOffset,
  validateAccessCode,
} from './physicsMath';

test('registry defines all 20 unique Phys1..Phys20 specimens', () => {
  assert.equal(SPECIMEN_REGISTRY.length, 20);
  const ids = new Set(SPECIMEN_REGISTRY.map((s) => s.id));
  assert.equal(ids.size, 20);
  assert.equal(SPECIMEN_REGISTRY[0].id, 'Phys1');
  assert.equal(SPECIMEN_REGISTRY[19].id, 'Phys20');
});

test('rubberBandOffset applies diminishing resistance and preserves sign', () => {
  assert.equal(rubberBandOffset(0), 0);
  const smallPull = rubberBandOffset(40, 240, 0.55);
  const largePull = rubberBandOffset(400, 240, 0.55);
  assert.ok(smallPull > 0 && smallPull < 40);
  assert.ok(largePull > smallPull && largePull < 240);
  assert.equal(rubberBandOffset(-40, 240, 0.55), -smallPull);
});

test('computeInertiaTargetIndex projects velocity and clamps within slide bounds', () => {
  // Fast leftward flick from slide 0 advances forward
  assert.equal(computeInertiaTargetIndex(0, -40, -0.9, 260, 4), 1);
  // Weak drag snaps back to current slide
  assert.equal(computeInertiaTargetIndex(1, -20, 0, 260, 4), 1);
  // Clamps at lower and upper bounds
  assert.equal(computeInertiaTargetIndex(0, 180, 1.2, 260, 4), 0);
  assert.equal(computeInertiaTargetIndex(3, -180, -1.2, 260, 4), 3);
});

test('reorderListItem swaps items immutably and guards out-of-bounds moves', () => {
  const items = ['Alpha', 'Beta', 'Gamma'];
  assert.deepEqual(reorderListItem(items, 1, 'up'), ['Beta', 'Alpha', 'Gamma']);
  assert.deepEqual(reorderListItem(items, 0, 'up'), ['Alpha', 'Beta', 'Gamma']);
  assert.deepEqual(reorderListItem(items, 2, 'down'), ['Alpha', 'Beta', 'Gamma']);
  assert.deepEqual(items, ['Alpha', 'Beta', 'Gamma']);
});

test('validateAccessCode rejects empty/short/digitless input and accepts valid code', () => {
  assert.equal(validateAccessCode('').valid, false);
  assert.equal(validateAccessCode('ABC1').valid, false);
  assert.equal(validateAccessCode('SPRING').valid, false);
  assert.equal(validateAccessCode('SPRING20').valid, true);
});

test('filterPhysSpecimens filters by category and search query', () => {
  const controls = filterPhysSpecimens(SPECIMEN_REGISTRY, 'controls', '');
  assert.ok(controls.length > 0);
  assert.ok(controls.every((s) => s.category === 'controls'));

  const modalSearch = filterPhysSpecimens(SPECIMEN_REGISTRY, 'all', 'modal');
  assert.equal(modalSearch.length, 1);
  assert.equal(modalSearch[0].id, 'Phys3');
});
