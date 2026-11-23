import React, { useEffect, useMemo, useState } from 'react';
import { Moon, Search, Sun, X } from 'lucide-react';
import { ORNAMENT_SPECS } from './data/ornamentRegistry';
import {
  buildCategorySummaries,
  filterOrnaments,
  type CategoryFilter,
} from './utils/ornamentFilter';
import { TopBar } from './components/TopBar';
import { SpecimenPlate } from './components/SpecimenPlate';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('folio-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return 'light';
  });

  const [category, setCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('folio-theme', theme);
  }, [theme]);

  const categorySummaries = useMemo(
    () => buildCategorySummaries(ORNAMENT_SPECS),
    []
  );

  const visibleOrnaments = useMemo(
    () => filterOrnaments(ORNAMENT_SPECS, category, searchQuery),
    [category, searchQuery]
  );

  const jumpToCatalog = () => {
    const el = document.getElementById('specimen-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="top"
      data-theme={theme}
      className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-200"
    >
      <TopBar
        onSelectCategory={setCategory}
        onJumpToCatalog={jumpToCatalog}
      />

      <main className="mx-auto max-w-7xl px-6 pt-12 pb-20">
        {/* Editorial Hero */}
        <section aria-labelledby="hero-heading" className="pb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-blue-700 dark:text-blue-400">
            Archival Specimen Compendium · Orn1–Orn20
          </p>

          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1
              id="hero-heading"
              className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl max-w-3xl [text-wrap:balance]"
            >
              Twenty decorative structures, crafted in SVG and Tailwind.
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Self-contained React components covering section dividers, framed enclosures, typographic rules, header underlines, drop caps, and margin ornaments with light and dark theme pairing.
            </p>
          </div>

          {/* 4-Column Archival Ledger Row */}
          <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-zinc-200 dark:border-zinc-800 py-5 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400">Components</dt>
              <dd className="mt-1 font-mono text-lg font-medium tabular-nums text-zinc-950 dark:text-zinc-50">
                20 Plates
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400">Ornament Engine</dt>
              <dd className="mt-1 font-mono text-lg font-medium text-zinc-950 dark:text-zinc-50">
                Inline SVG
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400">Markup Standard</dt>
              <dd className="mt-1 font-mono text-lg font-medium text-zinc-950 dark:text-zinc-50">
                Semantic HTML5
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500 dark:text-zinc-400">Color Support</dt>
              <dd className="mt-1 font-mono text-lg font-medium text-zinc-950 dark:text-zinc-50">
                Light &amp; Dark
              </dd>
            </div>
          </dl>
        </section>

        {/* Workspace Toolbar */}
        <section
          id="specimen-catalog"
          aria-label="Filter and theme controls"
          className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Segmented Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter by structure category"
            className="flex flex-wrap items-center gap-1 rounded-lg bg-zinc-200/70 dark:bg-zinc-900 p-1"
          >
            {categorySummaries.map((item) => {
              const active = category === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(item.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400 ${
                    active
                      ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
                  }`}
                >
                  {item.label}{' '}
                  <span className="font-mono tabular-nums opacity-70">
                    ({item.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Theme Switch */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64 sm:flex-initial">
              <label htmlFor="ornament-search" className="sr-only">
                Search ornaments by name or motif
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
              />
              <input
                id="ornament-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter motif or Orn1–20..."
                className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-2 pr-8 pl-9 text-xs text-zinc-950 placeholder:text-zinc-400 dark:text-zinc-50 dark:placeholder:text-zinc-500 focus:border-blue-700 dark:focus:border-blue-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search query"
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Visible Count Summary */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <p data-testid="visible-count" className="font-mono tabular-nums">
            Showing {visibleOrnaments.length} of {ORNAMENT_SPECS.length} specimen plates
          </p>
          {(category !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="font-medium text-blue-700 hover:underline dark:text-blue-400 cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* 20 Specimen Plates Grid */}
        {visibleOrnaments.length > 0 ? (
          <section
            aria-label="Decorative structure plates"
            data-testid="ornament-grid"
            className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2"
          >
            {visibleOrnaments.map((spec) => (
              <SpecimenPlate key={spec.id} spec={spec} />
            ))}
          </section>
        ) : (
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-6 py-14 text-center">
            <p className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">
              No matching specimen plates found
            </p>
            <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              Try clearing your filter or searching for terms like wave, stamp, bracket, or drop-cap.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400 transition-colors cursor-pointer"
            >
              Show All 20 Plates
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-zinc-500 dark:text-zinc-400">
          <span>Folio Ornaments · 20 SVG Decorative Structure Components</span>
          <a
            href="#top"
            className="font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50 hover:underline underline-offset-4"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
