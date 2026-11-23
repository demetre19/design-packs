import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { extractComponentSource } from './sourceExtractor';

test('extractComponentSource extracts all 20 Orn1..Orn20 definitions cleanly', () => {
  const base = path.resolve(process.cwd(), 'src/components/ornaments');
  const files = [
    fs.readFileSync(path.join(base, 'Dividers.tsx'), 'utf8'),
    fs.readFileSync(path.join(base, 'Frames.tsx'), 'utf8'),
    fs.readFileSync(path.join(base, 'TypographyOrnaments.tsx'), 'utf8'),
    fs.readFileSync(path.join(base, 'EditorialAccents.tsx'), 'utf8'),
  ];
  const combined = files.join('\n');

  for (let i = 1; i <= 20; i += 1) {
    const name = `Orn${i}`;
    const snippet = extractComponentSource(combined, name);
    assert.equal(snippet.includes(`export function ${name}(`), true, `Missing ${name}`);
    assert.equal(snippet.endsWith('}'), true, `Incomplete brace match for ${name}`);
  }
});
