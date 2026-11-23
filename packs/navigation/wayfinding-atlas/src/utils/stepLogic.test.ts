import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clampStep,
  getStepStatus,
  getProgressPercent,
  collapseCrumbs,
  getPaginationRange,
  filterCatalog,
  type WayCatalogItem,
} from './stepLogic';

test('clampStep bounds indices cleanly within 0..totalSteps-1', () => {
  assert.equal(clampStep(-3, 5), 0);
  assert.equal(clampStep(2, 5), 2);
  assert.equal(clampStep(9, 5), 4);
  assert.equal(clampStep(1, 0), 0);
  assert.equal(clampStep(Number.NaN, 4), 0);
});

test('getStepStatus classifies completed, current, and upcoming steps', () => {
  assert.equal(getStepStatus(0, 2), 'completed');
  assert.equal(getStepStatus(1, 2), 'completed');
  assert.equal(getStepStatus(2, 2), 'current');
  assert.equal(getStepStatus(3, 2), 'upcoming');
});

test('getProgressPercent calculates 0..100 span across steps', () => {
  assert.equal(getProgressPercent(0, 4), 0);
  assert.equal(getProgressPercent(1, 4), 33);
  assert.equal(getProgressPercent(3, 4), 100);
  assert.equal(getProgressPercent(0, 1), 100);
});

test('collapseCrumbs hides middle segments when length exceeds maxVisible', () => {
  const shortTrail = ['Home', 'Docs', 'API'];
  const shortRes = collapseCrumbs(shortTrail, 4);
  assert.equal(shortRes.isCollapsed, false);
  assert.deepEqual(shortRes.leading, shortTrail);
  assert.deepEqual(shortRes.hidden, []);

  const longTrail = ['Root', 'Workspace', 'Engineering', 'Platform', 'Billing', 'Invoices'];
  const longRes = collapseCrumbs(longTrail, 4);
  assert.equal(longRes.isCollapsed, true);
  assert.deepEqual(longRes.leading, ['Root']);
  assert.deepEqual(longRes.hidden, ['Workspace', 'Engineering', 'Platform']);
  assert.deepEqual(longRes.trailing, ['Billing', 'Invoices']);
});

test('getPaginationRange returns balanced ellipsis tokens for multi-page ranges', () => {
  assert.deepEqual(getPaginationRange(1, 5), [1, 2, 3, 4, 5]);
  assert.deepEqual(getPaginationRange(1, 10), [1, 2, 3, 4, 5, 'ellipsis-right', 10]);
  assert.deepEqual(getPaginationRange(5, 10), [1, 'ellipsis-left', 4, 5, 6, 'ellipsis-right', 10]);
  assert.deepEqual(getPaginationRange(10, 10), [1, 'ellipsis-left', 6, 7, 8, 9, 10]);
});

test('filterCatalog filters by category, style, density, and text query', () => {
  const sample: WayCatalogItem[] = [
    {
      id: 'way-1',
      index: 1,
      componentName: 'Way1',
      title: 'Numbered Horizontal Stepper',
      category: 'steppers',
      categoryLabel: 'Steppers',
      density: 'spacious',
      style: 'minimal',
      description: 'Clean linear checkout sequence',
    },
    {
      id: 'way-11',
      index: 11,
      componentName: 'Way11',
      title: 'Collapsed Ellipsis Breadcrumb',
      category: 'breadcrumbs',
      categoryLabel: 'Breadcrumbs',
      density: 'compact',
      style: 'dark',
      description: 'Deep path menu truncation',
    },
  ];

  assert.equal(
    filterCatalog(sample, { category: 'all', style: 'all', density: 'all', query: '' }).length,
    2
  );
  assert.equal(
    filterCatalog(sample, { category: 'breadcrumbs', style: 'all', density: 'all', query: '' }).length,
    1
  );
  assert.equal(
    filterCatalog(sample, { category: 'all', style: 'dark', density: 'compact', query: 'ellipsis' })[0]?.componentName,
    'Way11'
  );
  assert.equal(
    filterCatalog(sample, { category: 'all', style: 'minimal', density: 'compact', query: '' }).length,
    0
  );
});
