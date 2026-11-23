import React, { useMemo, useState } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import {
  Data1,
  Data2,
  Data3,
  Data4,
  Data5,
  Data6,
  Data7,
  Data8,
  Data9,
  Data10,
  Data11,
  Data12,
  Data13,
  Data14,
  Data15,
  Data16,
  Data17,
  Data18,
  Data19,
  Data20,
} from './components/data';
import {
  CATALOG_ITEMS,
  ComponentCategory,
  ComponentDensity,
  ComponentStyle,
  filterCatalog,
} from './utils/catalog';

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  Data1,
  Data2,
  Data3,
  Data4,
  Data5,
  Data6,
  Data7,
  Data8,
  Data9,
  Data10,
  Data11,
  Data12,
  Data13,
  Data14,
  Data15,
  Data16,
  Data17,
  Data18,
  Data19,
  Data20,
};

const NAV_CATEGORIES: Array<{ id: ComponentCategory; label: string }> = [
  { id: 'all', label: 'All 20' },
  { id: 'tables', label: 'Tables & Files' },
  { id: 'metrics', label: 'KPI & Sparklines' },
  { id: 'feeds', label: 'Feeds & Logs' },
  { id: 'time', label: 'Time & Progress' },
];

export default function App() {
  const [category, setCategory] = useState<ComponentCategory>('all');
  const [styleFilter, setStyleFilter] = useState<ComponentStyle>('all');
  const [densityFilter, setDensityFilter] = useState<ComponentDensity>('all');
  const [query, setQuery] = useState<string>('');
  const [resetEpoch, setResetEpoch] = useState<number>(0);

  const effectiveCategories = useMemo(() => {
    if (category === 'time') {
      return ['time', 'progress'] as const;
    }
    return null;
  }, [category]);

  const filteredItems = useMemo(() => {
    if (effectiveCategories) {
      return filterCatalog(CATALOG_ITEMS, {
        category: 'all',
        style: styleFilter,
        density: densityFilter,
        query,
      }).filter((item) =>
        (effectiveCategories as readonly string[]).includes(item.category)
      );
    }
    return filterCatalog(CATALOG_ITEMS, {
      category,
      style: styleFilter,
      density: densityFilter,
      query,
    });
  }, [category, effectiveCategories, styleFilter, densityFilter, query]);

  const hasActiveFilter =
    category !== 'all' ||
    styleFilter !== 'all' ||
    densityFilter !== 'all' ||
    query.trim().length > 0;

  const resetAllFilters = () => {
    setCategory('all');
    setStyleFilter('all');
    setDensityFilter('all');
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Meridian Data
          </a>

          <nav
            aria-label="Component categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            {NAV_CATEGORIES.map((nav) => {
              const active = category === nav.id;
              return (
                <button
                  key={nav.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(nav.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-0.5 border-b-2 ${
                    active
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent hover:text-slate-900'
                  }`}
                >
                  {nav.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setResetEpoch((prev) => prev + 1)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              Reset States
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-10">
        <section aria-labelledby="catalog-heading" className="pb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-2">
              <h1
                id="catalog-heading"
                className="font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl"
              >
                Twenty self-contained data display primitives
              </h1>
              <p className="text-sm leading-relaxed text-slate-600">
                Semantic tables, KPI decks, sparkline rows, feeds, timelines, audit logs, calendar strips, trackers, comparison matrices, leaderboards, and file lists across compact and roomy densities.
              </p>
            </div>

            <div className="text-xs font-medium text-slate-500 tabular-nums whitespace-nowrap">
              Showing {filteredItems.length} of {CATALOG_ITEMS.length} components
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <div className="flex flex-wrap items-center gap-3">
              <div
                role="group"
                aria-label="Filter by visual style"
                className="inline-flex items-center rounded-lg bg-slate-100 p-1"
              >
                {(['all', 'minimal', 'dark', 'colourful'] as ComponentStyle[]).map((st) => (
                  <button
                    key={st}
                    type="button"
                    aria-pressed={styleFilter === st}
                    onClick={() => setStyleFilter(st)}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors whitespace-nowrap shrink-0 ${
                      styleFilter === st
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {st === 'all' ? 'All Styles' : st}
                  </button>
                ))}
              </div>

              <div
                role="group"
                aria-label="Filter by layout density"
                className="inline-flex items-center rounded-lg bg-slate-100 p-1"
              >
                {(['all', 'compact', 'roomy'] as ComponentDensity[]).map((dn) => (
                  <button
                    key={dn}
                    type="button"
                    aria-pressed={densityFilter === dn}
                    onClick={() => setDensityFilter(dn)}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize transition-colors whitespace-nowrap shrink-0 ${
                      densityFilter === dn
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {dn === 'all' ? 'All Densities' : dn}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <label className="relative flex items-center">
                <span className="sr-only">Search data components</span>
                <Search
                  className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components..."
                  className="w-56 rounded-lg border border-slate-200 bg-slate-50 py-1.5 pr-3 pl-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none"
                />
              </label>

              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div
            aria-label="Quick component index"
            className="mt-4 flex flex-wrap items-center gap-1.5"
          >
            {filteredItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900 whitespace-nowrap"
              >
                {item.id}
              </a>
            ))}
          </div>
        </section>

        {filteredItems.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h2 className="text-base font-semibold text-slate-900">
              No components match your active filters
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Try clearing your search query or switching style and density back to All.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredItems.map((item) => {
              const Component = COMPONENT_MAP[item.id];
              return (
                <article
                  key={`${item.id}-${resetEpoch}`}
                  id={item.id}
                  aria-labelledby={`${item.id}-title`}
                  className="scroll-mt-24 border-t border-slate-200 pt-8"
                >
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <span className="font-mono text-xs font-semibold text-indigo-700">
                        {item.id}
                      </span>
                      <h2
                        id={`${item.id}-title`}
                        className="font-display text-lg font-semibold text-slate-900"
                      >
                        {item.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 capitalize">
                      <span>{item.archetype}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.style}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.density}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-xs text-slate-600">{item.summary}</p>

                  <Component />
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
