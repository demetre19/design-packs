import React, { useMemo, useState } from 'react';
import { Search, RotateCcw, X } from 'lucide-react';
import { NAV_CATALOG, type NavCategory } from './components/navs';

const CATEGORIES: Array<'All' | NavCategory> = [
  'All',
  'Overlays',
  'Tabs',
  'Pagination',
  'Structure',
  'Bars',
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | NavCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [resetEpoch, setResetEpoch] = useState(0);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: NAV_CATALOG.length };
    for (const item of NAV_CATALOG) {
      counts[item.category] = (counts[item.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return NAV_CATALOG.filter((item) => {
      const matchesCat = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        item.id.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.semantics.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const handleResetAll = () => {
    setResetEpoch((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Bar Contract: Brand — 5 single-line nav links — 1 primary action */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            Navcraft
          </button>

          <nav aria-label="Component categories" className="hidden md:flex items-center gap-6">
            {(['Overlays', 'Tabs', 'Pagination', 'Structure', 'Bars'] as const).map((cat) => {
              const selected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(selected ? 'All' : cat)}
                  className={`text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
                    selected
                      ? 'text-blue-600 underline decoration-2 underline-offset-8'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Demos</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Editorial Page Header */}
        <section aria-labelledby="catalog-heading" className="pb-8 border-b border-slate-200">
          <h1
            id="catalog-heading"
            className="max-w-2xl font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl"
          >
            20 Semantic Navigation Micro-Elements
          </h1>
          <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-slate-600">
            Self-contained React and Tailwind primitives built with semantic{' '}
            <code className="font-mono text-sm text-slate-800">&lt;nav&gt;</code>,{' '}
            <code className="font-mono text-sm text-slate-800">&lt;menu&gt;</code>, and{' '}
            <code className="font-mono text-sm text-slate-800">&lt;ol&gt;</code> landmarks. All
            overlay patterns render open by default for immediate inspection.
          </p>

          {/* Workspace Filter Toolbar */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="tablist"
              aria-label="Filter navigation primitives"
              className="flex flex-wrap items-center gap-1 rounded-xl bg-slate-200/70 p-1"
            >
              {CATEGORIES.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {category}{' '}
                    <span className="ml-0.5 font-mono text-[11px] text-slate-400 tabular-nums">
                      {categoryCounts[category]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <label htmlFor="catalog-search" className="sr-only">
                Filter components
              </label>
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter Nav1–Nav20 or ARIA role..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pr-8 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear filter"
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Showcase Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-sm font-medium text-slate-800">
              No navigation components match &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-slate-800"
            >
              Show All 20 Components
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filteredItems.map((item) => {
              const Comp = item.Component;
              return (
                <section
                  key={`${item.id}-${resetEpoch}`}
                  id={item.id}
                  aria-labelledby={`${item.id}-title`}
                  data-testid={`showcase-${item.id}`}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2
                        id={`${item.id}-title`}
                        className="font-display text-base font-semibold text-slate-900"
                      >
                        {item.number}. {item.title}
                      </h2>
                      <span className="font-mono text-xs text-slate-500">{item.id}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {item.category}
                      <span aria-hidden="true"> · </span>
                      {item.semantics}
                      {item.defaultOpen && (
                        <>
                          <span aria-hidden="true"> · </span>
                          <span className="font-medium text-blue-700">Open by default</span>
                        </>
                      )}
                    </p>
                  </div>

                  <div className="mt-5 rounded-xl bg-slate-50/90 p-5">
                    <Comp />
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
