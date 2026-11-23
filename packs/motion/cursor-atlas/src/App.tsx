import React, { useMemo, useState } from 'react';
import { Maximize2, Search } from 'lucide-react';
import {
  CURSOR_CATALOG,
  CURSOR_CATEGORIES,
  type CursorCategory,
} from './data/cursorCatalog';
import { SpecimenModal } from './components/SpecimenModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CursorCategory>('All');
  const [query, setQuery] = useState('');
  const [inspectedNumber, setInspectedNumber] = useState<number | null>(null);

  const filteredSpecimens = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return CURSOR_CATALOG.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.componentName.toLowerCase().includes(normalizedQuery) ||
        item.summary.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeCategory, query]);

  const activeSpecimen = useMemo(
    () =>
      inspectedNumber !== null
        ? CURSOR_CATALOG.find((item) => item.number === inspectedNumber) ?? null
        : null,
    [inspectedNumber],
  );

  const jumpToCategory = (category: CursorCategory) => {
    setActiveCategory(category);
    const grid = document.getElementById('specimen-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-zinc-900">
      {/* Three-Zone Top Bar */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-[#F7F7F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory('All');
              setQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0"
          >
            Cursor Atlas
          </a>

          <nav
            aria-label="Primary categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600"
          >
            <button
              type="button"
              onClick={() => jumpToCategory('Magnetic & Pointer')}
              className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Magnetic
            </button>
            <button
              type="button"
              onClick={() => jumpToCategory('Spatial 3D')}
              className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Spatial 3D
            </button>
            <button
              type="button"
              onClick={() => jumpToCategory('Masks & Light')}
              className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Masks & Light
            </button>
            <button
              type="button"
              onClick={() => jumpToCategory('Typography & Menus')}
              className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Typography
            </button>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() =>
                setInspectedNumber(
                  filteredSpecimens[0]?.number ?? CURSOR_CATALOG[0].number,
                )
              }
              className="rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0"
            >
              Open Inspector
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1320px] px-6 py-10 sm:py-12">
        {/* Editorial Intro + Summary Strip */}
        <section className="border-b border-zinc-200 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-mono tracking-wide text-blue-600">
                20 Self-Contained React + Tailwind Specimens
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 text-balance leading-[1.08]">
                Precision cursor interactions with centered static poise
              </h1>
              <p className="mt-3 text-base text-zinc-600 leading-relaxed max-w-xl">
                Hover or glide across any stage below. Every component isolates
                its own <code className="font-mono text-xs text-zinc-800">useState</code> and{' '}
                <code className="font-mono text-xs text-zinc-800">onMouseMove</code> wrapper
                and returns gracefully to a centered resting target when idle.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-4 lg:border-t-0 lg:pt-0 shrink-0">
              <div>
                <dt className="text-xs text-zinc-500">Specimens</dt>
                <dd className="mt-0.5 font-display text-2xl font-bold tabular-nums text-zinc-900">
                  20
                </dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Categories</dt>
                <dd className="mt-0.5 font-display text-2xl font-bold tabular-nums text-zinc-900">
                  4
                </dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Static Center</dt>
                <dd className="mt-0.5 font-display text-2xl font-bold tabular-nums text-zinc-900">
                  50%
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Filter & Search Toolbar */}
        <section
          aria-label="Filter cursor specimens"
          className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div
            role="tablist"
            aria-label="Specimen categories"
            className="flex flex-wrap items-center gap-1 rounded-xl bg-zinc-200/70 p-1"
          >
            {CURSOR_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-white text-zinc-900 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
              <label htmlFor="specimen-search" className="sr-only">
                Filter specimens
              </label>
              <input
                id="specimen-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by name or effect..."
                className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-9 pr-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <span className="text-xs font-mono tabular-nums text-zinc-500 whitespace-nowrap shrink-0">
              {filteredSpecimens.length} / {CURSOR_CATALOG.length}
            </span>
          </div>
        </section>

        {/* 20 Specimen Grid */}
        <section
          id="specimen-grid"
          aria-label="Cursor specimen grid"
          className="mt-6"
        >
          {filteredSpecimens.length === 0 ? (
            <div className="rounded-2xl border border-zinc-200 bg-white p-12 text-center">
              <p className="font-display text-lg font-semibold text-zinc-900">
                No matching cursor specimens
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Clear the search input or switch back to all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setQuery('');
                }}
                className="mt-4 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSpecimens.map((specimen) => {
                const { Component } = specimen;
                return (
                  <article
                    key={specimen.number}
                    data-testid={`card-cursor-${specimen.number}`}
                    className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300"
                  >
                    {/* Self-Contained Interactive Stage */}
                    <div className="h-[268px] w-full border-b border-zinc-200">
                      <Component />
                    </div>

                    {/* Editorial Footer */}
                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <span className="font-mono tabular-nums font-medium text-blue-600">
                            {String(specimen.number).padStart(2, '0')}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{specimen.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono text-zinc-700">
                            {specimen.componentName}
                          </span>
                        </div>
                        <h2 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-zinc-900">
                          {specimen.title}
                        </h2>
                        <p className="mt-1 text-sm text-zinc-600 leading-relaxed">
                          {specimen.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                        <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                          Centered rest · Hover stage
                        </span>
                        <button
                          type="button"
                          aria-label={`Inspect ${specimen.componentName} ${specimen.title}`}
                          onClick={() => setInspectedNumber(specimen.number)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors whitespace-nowrap shrink-0"
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                          Inspect
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-zinc-500">
          <span>Cursor Atlas · 20 Self-Contained React + Tailwind Specimens</span>
          <span>Hover any stage to interact · Leave stage to restore centered rest</span>
        </div>
      </footer>

      <SpecimenModal
        specimen={activeSpecimen}
        onClose={() => setInspectedNumber(null)}
        onSelectNumber={(num) => setInspectedNumber(num)}
        totalCount={CURSOR_CATALOG.length}
      />
    </div>
  );
}
