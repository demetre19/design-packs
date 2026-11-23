import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { PROOF_COMPONENT_MAP } from './components/proofs';
import { ShowcaseFrame } from './components/ShowcaseFrame';
import {
  PROOF_CATALOG,
  PROOF_CATEGORIES,
  PROOF_STYLES,
  computeCatalogCounts,
  filterProofCatalog,
  type ProofCategory,
  type ProofStyle,
} from './utils/proofCatalog';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProofCategory | 'All'>('All');
  const [selectedStyle, setSelectedStyle] = useState<ProofStyle | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const catalogCounts = useMemo(() => computeCatalogCounts(PROOF_CATALOG), []);

  const filteredItems = useMemo(
    () =>
      filterProofCatalog(PROOF_CATALOG, {
        category: selectedCategory,
        style: selectedStyle,
        query: searchQuery,
      }),
    [selectedCategory, selectedStyle, searchQuery]
  );

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedStyle !== 'All' || searchQuery.trim().length > 0;

  function resetAllFilters() {
    setSelectedCategory('All');
    setSelectedStyle('All');
    setSearchQuery('');
  }

  function jumpToCategory(category: ProofCategory) {
    setSelectedCategory(category);
    setSelectedStyle('All');
    const el = document.getElementById('catalog-controls');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div id="top" className="min-h-screen bg-[#F8F8F6] text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 sm:px-10">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              resetAllFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight text-neutral-950 whitespace-nowrap shrink-0"
          >
            ProofAtlas
          </a>

          <nav aria-label="Pattern quick links" className="hidden items-center gap-6 md:flex">
            {(['Logo Clouds', 'Testimonials', 'Reviews', 'Case Studies'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => jumpToCategory(cat)}
                className="text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline whitespace-nowrap shrink-0"
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={resetAllFilters}
              className="rounded-lg bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 whitespace-nowrap shrink-0"
            >
              Show All 20
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
        <section aria-labelledby="hero-heading" className="max-w-3xl">
          <p className="text-xs font-medium text-neutral-500 tabular-nums">
            20 Self-Contained Components · 7 Pattern Families · 4 Visual Aesthetics
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl text-balance"
          >
            Twenty distinct social-proof sections built for production
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Every section from <span className="font-mono text-sm text-neutral-900">Proof1</span> to{' '}
            <span className="font-mono text-sm text-neutral-900">Proof20</span> is a standalone React and
            Tailwind CSS component with semantic HTML landmarks and custom inline SVG logos and portraits.
          </p>
        </section>

        <section
          id="catalog-controls"
          aria-label="Catalog filters"
          className="mt-10 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by pattern category">
              <button
                type="button"
                aria-pressed={selectedCategory === 'All'}
                onClick={() => setSelectedCategory('All')}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === 'All'
                    ? 'bg-neutral-950 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                All ({catalogCounts.total})
              </button>
              {PROOF_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? 'bg-neutral-950 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category} ({catalogCounts.byCategory[category]})
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <label htmlFor="proof-search" className="sr-only">
                Search social-proof sections
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400"
                aria-hidden="true"
              />
              <input
                id="proof-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Proof1..20 or pattern..."
                className="w-full rounded-lg border border-neutral-300 bg-white py-2 pr-9 pl-9 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-4 border-t border-neutral-100 pt-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by visual style">
              <span className="mr-2 text-xs font-medium text-neutral-500">Style:</span>
              <button
                type="button"
                aria-pressed={selectedStyle === 'All'}
                onClick={() => setSelectedStyle('All')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selectedStyle === 'All'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                All Styles
              </button>
              {PROOF_STYLES.map((style) => (
                <button
                  key={style}
                  type="button"
                  aria-pressed={selectedStyle === style}
                  onClick={() => setSelectedStyle(style)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    selectedStyle === style
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {style} ({catalogCounts.byStyle[style]})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs font-medium text-neutral-600 tabular-nums" data-testid="results-count">
                Showing {filteredItems.length} of {catalogCounts.total} sections
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-xs font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 whitespace-nowrap shrink-0"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        <section aria-label="Social proof sections gallery" className="mt-10 space-y-10">
          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-16 text-center">
              <h2 className="text-lg font-semibold text-neutral-900">
                No social-proof sections match your current filters
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Try clearing the search term or switching style and category filters.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="mt-6 rounded-lg bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const ProofComponent = PROOF_COMPONENT_MAP[item.id];
              return <ShowcaseFrame key={item.id} item={item} Component={ProofComponent} />;
            })
          )}
        </section>
      </main>

      <footer className="mt-16 border-t border-neutral-200 bg-white px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">
            ProofAtlas · 20 self-contained React &amp; Tailwind CSS social-proof sections
          </p>
          <a
            href="#top"
            className="text-xs font-medium text-neutral-700 underline-offset-4 hover:text-neutral-950 hover:underline"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
