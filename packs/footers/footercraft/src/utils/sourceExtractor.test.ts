import test from 'node:test';
import assert from 'node:assert/strict';
import { extractComponentSource } from './sourceExtractor';

const SAMPLE_FILE = `import React, { useState } from 'react';

export function Footer1() {
  return (
    <footer className="bg-zinc-950 text-white">
      <p>Footer 1</p>
    </footer>
  );
}

export function Footer2() {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-white text-zinc-900">
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </footer>
  );
}
`;

test('extractComponentSource extracts standalone TSX without useState when unused', () => {
  const source1 = extractComponentSource(SAMPLE_FILE, 'Footer1');
  assert.match(source1, /^import React from 'react';/);
  assert.ok(source1.includes('export function Footer1()'));
  assert.ok(!source1.includes('export function Footer2()'));
});

test('extractComponentSource includes useState import when used by component', () => {
  const source2 = extractComponentSource(SAMPLE_FILE, 'Footer2');
  assert.match(source2, /^import React, \{ useState \} from 'react';/);
  assert.ok(source2.includes('export function Footer2()'));
  assert.ok(source2.includes('useState'));
});

test('extractComponentSource handles missing component gracefully', () => {
  const missing = extractComponentSource(SAMPLE_FILE, 'Footer99');
  assert.ok(missing.includes('not found'));
});
