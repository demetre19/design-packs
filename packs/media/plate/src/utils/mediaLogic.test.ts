import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clampPercentage,
  stepCarouselIndex,
  computePointerPercent,
  computeLoupeOrigin,
  computeAspectDimensions,
  filterMediaRegistry,
  formatSlideCounter,
  type MediaComponentMeta,
} from './mediaLogic';

test('clampPercentage bounds values between 0 and 100', () => {
  assert.equal(clampPercentage(-15), 0);
  assert.equal(clampPercentage(140), 100);
  assert.equal(clampPercentage(52.36), 52.4);
  assert.equal(clampPercentage(Number.NaN), 50);
});

test('stepCarouselIndex wraps cleanly in both directions', () => {
  assert.equal(stepCarouselIndex(0, 1, 4), 1);
  assert.equal(stepCarouselIndex(3, 1, 4), 0);
  assert.equal(stepCarouselIndex(0, -1, 4), 3);
  assert.equal(stepCarouselIndex(2, -1, 4), 1);
  assert.equal(stepCarouselIndex(0, 1, 0), 0);
});

test('computePointerPercent calculates horizontal drag percentage', () => {
  assert.equal(computePointerPercent(200, 100, 400), 25);
  assert.equal(computePointerPercent(50, 100, 400), 0);
  assert.equal(computePointerPercent(600, 100, 400), 100);
  assert.equal(computePointerPercent(200, 100, 0), 50);
});

test('computeLoupeOrigin maps pointer coordinates to clamped percentages', () => {
  const origin = computeLoupeOrigin(250, 200, {
    left: 100,
    top: 100,
    width: 300,
    height: 200,
  });
  assert.deepEqual(origin, { x: 50, y: 50 });
});

test('computeAspectDimensions derives accurate frame proportions', () => {
  assert.deepEqual(computeAspectDimensions('16:9', 1600), {
    width: 1600,
    height: 900,
    label: '1.78 : 1',
  });
  assert.deepEqual(computeAspectDimensions('1:1', 800), {
    width: 800,
    height: 800,
    label: '1.00 : 1',
  });
  assert.deepEqual(computeAspectDimensions('4:3', 800), {
    width: 800,
    height: 600,
    label: '1.33 : 1',
  });
});

test('filterMediaRegistry filters by category and search term', () => {
  const sample: MediaComponentMeta[] = [
    {
      id: 'Img1',
      number: 1,
      title: 'Caption Overlay',
      pattern: 'image with caption overlay',
      category: 'overlays',
      span: 'single',
    },
    {
      id: 'Img3',
      number: 3,
      title: 'Before / After Slider',
      pattern: 'before/after comparison slider',
      category: 'interactive',
      span: 'wide',
    },
  ];
  assert.equal(filterMediaRegistry(sample, 'all', '').length, 2);
  assert.equal(filterMediaRegistry(sample, 'interactive', '').length, 1);
  assert.equal(filterMediaRegistry(sample, 'all', 'caption')[0].id, 'Img1');
  assert.equal(filterMediaRegistry(sample, 'overlays', 'slider').length, 0);
});

test('formatSlideCounter zero-pads indices', () => {
  assert.equal(formatSlideCounter(0, 4), '01 / 04');
  assert.equal(formatSlideCounter(3, 4), '04 / 04');
});
