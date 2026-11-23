import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  isValidUrl,
  isValidSlug,
  isValidPostalCode,
  validateNumberRange,
  validateDateTimeWindow,
  validateFileCandidate,
  formatFileSize,
  filterSuggestions,
} from './validation';
import { FORM_SPECS, filterFormSpecs } from '../data/formCatalog';

test('email validation accepts valid addresses and rejects malformed ones', () => {
  assert.equal(isValidEmail('ada@example.com'), true);
  assert.equal(isValidEmail('  dev.team+1@company.co.uk  '), true);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('invalid@'), false);
  assert.equal(isValidEmail('no-tld@localhost'), false);
});

test('URL validation checks protocol and optionally enforces https', () => {
  assert.equal(isValidUrl('https://studio.example.com/hook', true), true);
  assert.equal(isValidUrl('http://example.com', false), true);
  assert.equal(isValidUrl('http://example.com', true), false);
  assert.equal(isValidUrl('not-a-url'), false);
});

test('slug validation enforces lowercase alphanumeric hyphens', () => {
  assert.equal(isValidSlug('design-system'), true);
  assert.equal(isValidSlug('ab'), false);
  assert.equal(isValidSlug('Design_System'), false);
  assert.equal(isValidSlug('-leading-hyphen'), false);
});

test('postal code validation respects country formats', () => {
  assert.equal(isValidPostalCode('94107', 'US'), true);
  assert.equal(isValidPostalCode('94107-1234', 'US'), true);
  assert.equal(isValidPostalCode('9410', 'US'), false);
  assert.equal(isValidPostalCode('M5V 2T6', 'CA'), true);
  assert.equal(isValidPostalCode('SW1A 1AA', 'UK'), true);
});

test('number range validation catches min > max and out-of-bounds values', () => {
  assert.deepEqual(validateNumberRange('10', '50', { minAllowed: 0, maxAllowed: 100 }), {});
  const inverted = validateNumberRange('80', '40', { minAllowed: 0, maxAllowed: 100, label: 'Price' });
  assert.ok(inverted.maxError?.includes('80'));
  const oob = validateNumberRange('-5', '200', { minAllowed: 0, maxAllowed: 100, label: 'Price' });
  assert.ok(oob.minError);
  assert.ok(oob.maxError);
});

test('date time window computes duration and rejects inverted end times', () => {
  const valid = validateDateTimeWindow('2026-11-22', '09:00', '2026-11-22', '11:30');
  assert.equal(valid.valid, true);
  assert.equal(valid.durationMinutes, 150);

  const invalid = validateDateTimeWindow('2026-11-22', '14:00', '2026-11-22', '13:00');
  assert.equal(invalid.valid, false);
  assert.ok(invalid.error);
});

test('file validation checks extension, non-empty size, and max bytes', () => {
  const ok = validateFileCandidate({ name: 'report.pdf', size: 1024 * 500 }, ['.pdf', '.png'], 5 * 1024 * 1024);
  assert.equal(ok, null);

  const badExt = validateFileCandidate({ name: 'script.exe', size: 1024 }, ['.pdf', '.png'], 5 * 1024 * 1024);
  assert.ok(badExt?.includes('unsupported format'));

  const tooBig = validateFileCandidate({ name: 'huge.png', size: 6 * 1024 * 1024 }, ['.pdf', '.png'], 5 * 1024 * 1024);
  assert.ok(tooBig?.includes('exceeds'));

  assert.equal(formatFileSize(1536), '1.5 KB');
});

test('suggestion filtering matches query and category', () => {
  const items = [
    { id: '1', title: 'Button Tokens', category: 'Tokens', description: 'Color and spacing scale' },
    { id: '2', title: 'Date Picker', category: 'Forms', description: 'Accessible calendar field' },
  ];
  assert.equal(filterSuggestions(items, 'date').length, 1);
  assert.equal(filterSuggestions(items, '', 'Tokens').length, 1);
});

test('catalog contains all 20 unique forms and filters cleanly', () => {
  assert.equal(FORM_SPECS.length, 20);
  const darkForms = filterFormSpecs(FORM_SPECS, { query: '', style: 'Dark', layout: 'All', group: 'All' });
  assert.equal(darkForms.length, 5);
  const inlineForms = filterFormSpecs(FORM_SPECS, { query: '', style: 'All', layout: 'Inline-Compact', group: 'All' });
  assert.equal(inlineForms.length, 4);
  const searchByTitle = filterFormSpecs(FORM_SPECS, { query: 'dropzone', style: 'All', layout: 'All', group: 'All' });
  assert.equal(searchByTitle.length, 2);
});
