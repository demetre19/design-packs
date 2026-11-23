import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FEEDBACK_CATALOG,
  filterFeedbackCatalog,
  formatTransferStats,
  getCategoryCounts,
  validateWebhookForm,
} from './feedbackCatalog';

test('catalog contains exactly 20 unique components named Feedback1 through Feedback20', () => {
  assert.equal(FEEDBACK_CATALOG.length, 20);
  const names = FEEDBACK_CATALOG.map((item) => item.componentName);
  const uniqueNames = new Set(names);
  assert.equal(uniqueNames.size, 20);
  for (let i = 1; i <= 20; i += 1) {
    assert.equal(names[i - 1], `Feedback${i}`);
  }
});

test('filterFeedbackCatalog filters by category, placement, and search query', () => {
  const skeletons = filterFeedbackCatalog(FEEDBACK_CATALOG, { query: 'skeleton loader' });
  assert.deepEqual(
    skeletons.map((i) => i.componentName),
    ['Feedback15', 'Feedback16', 'Feedback17']
  );

  const progressCategorySearch = filterFeedbackCatalog(FEEDBACK_CATALOG, { query: 'skeleton' });
  assert.equal(progressCategorySearch.length, 5);

  const topBanners = filterFeedbackCatalog(FEEDBACK_CATALOG, { placement: 'Top Banner' });
  assert.deepEqual(
    topBanners.map((i) => i.componentName),
    ['Feedback4', 'Feedback6', 'Feedback11']
  );

  const toasts = filterFeedbackCatalog(FEEDBACK_CATALOG, {
    category: 'Toasts & Snackbars',
    placement: 'Bottom-Right',
  });
  assert.deepEqual(
    toasts.map((i) => i.componentName),
    ['Feedback1', 'Feedback2']
  );
});

test('getCategoryCounts sums accurately to 20', () => {
  const counts = getCategoryCounts(FEEDBACK_CATALOG);
  assert.equal(counts.All, 20);
  const categorySum =
    counts['Toasts & Snackbars'] +
    counts['Banners & Announcements'] +
    counts['Forms & Connectivity'] +
    counts['Consent & Modals'] +
    counts['Progress & Skeletons'] +
    counts['Outcomes & Error States'];
  assert.equal(categorySum, 20);
});

test('validateWebhookForm rejects empty and invalid inputs and accepts valid inputs', () => {
  const invalid = validateWebhookForm({
    email: 'bad-email',
    webhookUrl: 'http://insecure.local',
    secret: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.equal(invalid.errorList.length, 3);

  const valid = validateWebhookForm({
    email: 'ops@acme.io',
    webhookUrl: 'https://hooks.acme.io/events',
    secret: 'whsec_1234567890abcd',
  });
  assert.equal(valid.valid, true);
  assert.equal(valid.errorList.length, 0);
});

test('formatTransferStats clamps bounds and computes ETA and phase labels', () => {
  const mid = formatTransferStats(50, 20);
  assert.equal(mid.clampedPercent, 50);
  assert.equal(mid.transferredMb, '10.0');
  assert.equal(mid.totalMbFormatted, '20.0');
  assert.equal(mid.etaText, '6s remaining');
  assert.equal(mid.phaseLabel, 'Uploading encrypted chunks');

  const done = formatTransferStats(120, 20);
  assert.equal(done.clampedPercent, 100);
  assert.equal(done.etaText, 'Completed');
  assert.equal(done.phaseLabel, 'Export verified and ready');
});
