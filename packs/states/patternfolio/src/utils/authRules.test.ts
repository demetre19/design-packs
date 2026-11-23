import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidEmail,
  evaluatePasswordStrength,
  sanitizeWorkspaceSlug,
  formatCountdownSeconds,
} from './authRules';

test('isValidEmail validates standard email addresses', () => {
  assert.equal(isValidEmail('alex@company.com'), true);
  assert.equal(isValidEmail('  alex.lee+work@sub.domain.co '), true);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail('not-an-email'), false);
  assert.equal(isValidEmail('alex@domain'), false);
});

test('evaluatePasswordStrength scores password complexity accurately', () => {
  assert.deepEqual(evaluatePasswordStrength(''), { score: 0, label: 'Weak' });
  assert.deepEqual(evaluatePasswordStrength('abc'), { score: 1, label: 'Weak' });
  assert.deepEqual(evaluatePasswordStrength('Abcdefgh'), { score: 2, label: 'Fair' });
  assert.deepEqual(evaluatePasswordStrength('Abcdef12'), { score: 3, label: 'Good' });
  assert.deepEqual(evaluatePasswordStrength('Abcdef12!'), { score: 4, label: 'Strong' });
});

test('sanitizeWorkspaceSlug normalizes company workspace URLs', () => {
  assert.equal(sanitizeWorkspaceSlug('Northbridge Labs'), 'northbridge-labs');
  assert.equal(sanitizeWorkspaceSlug('  --Acme_Corp!! '), 'acme-corp');
});

test('formatCountdownSeconds formats HH:MM:SS cleanly', () => {
  assert.equal(formatCountdownSeconds(0), '00:00:00');
  assert.equal(formatCountdownSeconds(3665), '01:01:05');
  assert.equal(formatCountdownSeconds(-10), '00:00:00');
});
