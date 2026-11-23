import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FOOTER_CATALOG,
  FOOTER_STYLES,
  FOOTER_TOPOLOGIES,
  filterFooters,
  validateNewsletterEmail,
} from './footerCatalog';

test('catalog contains 40 unique footer definitions Footer1..Footer40', () => {
  assert.equal(FOOTER_CATALOG.length, 40);

  const ids = new Set(FOOTER_CATALOG.map((item) => item.id));
  const names = new Set(FOOTER_CATALOG.map((item) => item.componentName));
  const brands = new Set(FOOTER_CATALOG.map((item) => item.brand));

  assert.equal(ids.size, 40);
  assert.equal(names.size, 40);
  assert.equal(brands.size, 40);

  for (let i = 1; i <= 40; i++) {
    assert.equal(FOOTER_CATALOG[i - 1].id, i);
    assert.equal(FOOTER_CATALOG[i - 1].componentName, `Footer${i}`);
  }
});

test('every requested topology and style is represented in the catalog', () => {
  for (const topology of FOOTER_TOPOLOGIES) {
    const matches = FOOTER_CATALOG.filter((item) => item.topology === topology);
    assert.ok(matches.length >= 2, `Expected at least 2 footers for topology ${topology}`);
  }

  for (const style of FOOTER_STYLES) {
    const matches = FOOTER_CATALOG.filter(
      (item) => item.style === style || item.secondaryStyle === style
    );
    assert.ok(matches.length >= 4, `Expected at least 4 footers for style ${style}`);
  }
});

test('filterFooters filters by topology, style, and search query', () => {
  const all = filterFooters(FOOTER_CATALOG, { topology: 'All', style: 'All', query: '' });
  assert.equal(all.length, 40);

  const darkOnly = filterFooters(FOOTER_CATALOG, { style: 'Dark' });
  assert.ok(darkOnly.length > 0);
  assert.ok(darkOnly.every((item) => item.style === 'Dark' || item.secondaryStyle === 'Dark'));

  const sitemapOnly = filterFooters(FOOTER_CATALOG, { topology: 'Sitemap Tree' });
  assert.ok(sitemapOnly.length >= 3);
  assert.ok(sitemapOnly.every((item) => item.topology === 'Sitemap Tree'));

  const queryMatches = filterFooters(FOOTER_CATALOG, { query: 'Vellum' });
  assert.equal(queryMatches.length, 1);
  assert.equal(queryMatches[0].componentName, 'Footer1');

  const noMatches = filterFooters(FOOTER_CATALOG, { query: 'nonexistent-xyz-999' });
  assert.equal(noMatches.length, 0);
});

test('validateNewsletterEmail validates empty, malformed, and valid addresses', () => {
  assert.equal(validateNewsletterEmail('').valid, false);
  assert.equal(validateNewsletterEmail('   ').valid, false);
  assert.equal(validateNewsletterEmail('invalid-email').valid, false);
  assert.equal(validateNewsletterEmail('user@domain').valid, false);
  assert.equal(validateNewsletterEmail('alex@company.io').valid, true);
});
