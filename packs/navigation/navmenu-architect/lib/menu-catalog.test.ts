import test from 'node:test';
import assert from 'node:assert/strict';
import { MENU_CATALOG, filterMenus } from './menu-catalog';

test('catalog defines exactly 20 unique components named DropdownMenu1..20', () => {
  assert.equal(MENU_CATALOG.length, 20);
  const names = MENU_CATALOG.map((m) => m.componentName);
  assert.deepEqual(
    names,
    Array.from({ length: 20 }, (_, idx) => `DropdownMenu${idx + 1}`),
  );
});

test('catalog covers both menu kinds, all 4 styles, layout variations, search placements, and promo strip variations', () => {
  const kinds = new Set(MENU_CATALOG.map((m) => m.kind));
  const styles = new Set(MENU_CATALOG.map((m) => m.style));
  const rowStyles = new Set(MENU_CATALOG.map((m) => m.rowStyle));
  const groupings = new Set(MENU_CATALOG.map((m) => m.grouping));
  const promoFlags = new Set(MENU_CATALOG.map((m) => m.hasPromoStrip));

  assert.deepEqual(kinds, new Set(['compact', 'mega']));
  assert.deepEqual(styles, new Set(['minimal', 'bold', 'dark', 'glass']));
  assert.deepEqual(rowStyles, new Set(['icon-led', 'text-only']));
  assert.deepEqual(groupings, new Set(['grouped', 'flat']));
  assert.deepEqual(promoFlags, new Set([true, false]));

  for (const entry of MENU_CATALOG) {
    assert.ok(entry.topology.length > 0, `${entry.componentName} missing topology`);
    assert.ok(entry.searchPlacement.length > 0, `${entry.componentName} missing searchPlacement`);
  }
});

test('filterMenus filters accurately by kind, style, and query', () => {
  const compactMenus = filterMenus(MENU_CATALOG, { kind: 'compact', style: 'all', query: '' });
  const megaMenus = filterMenus(MENU_CATALOG, { kind: 'mega', style: 'all', query: '' });
  assert.equal(compactMenus.length + megaMenus.length, 20);
  assert.ok(compactMenus.length >= 8);
  assert.ok(megaMenus.length >= 10);

  const glassMenus = filterMenus(MENU_CATALOG, { kind: 'all', style: 'glass', query: '' });
  assert.equal(glassMenus.length, 4);

  const queryMatch = filterMenus(MENU_CATALOG, { kind: 'all', style: 'all', query: 'broadsheet' });
  assert.equal(queryMatch.length, 1);
  assert.equal(queryMatch[0].componentName, 'DropdownMenu17');

  const emptyResult = filterMenus(MENU_CATALOG, { kind: 'compact', style: 'dark', query: 'nonexistent' });
  assert.equal(emptyResult.length, 0);
});
