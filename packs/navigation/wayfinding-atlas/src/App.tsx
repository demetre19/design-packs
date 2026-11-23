import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { WAY_CATALOG } from './data/catalog';
import {
  filterCatalog,
  type WayCategory,
  type WayDensity,
  type WayStyle,
} from './utils/stepLogic';
import { SpecimenCard } from './components/SpecimenCard';

const CATEGORY_OPTIONS: { id: WayCategory; label: string }[] = [
  { id: 'all', label: 'All 20' },
  { id: 'steppers', label: 'Steppers' },
  { id: 'breadcrumbs', label: 'Breadcrumbs' },
  { id: 'headers', label: 'Page Headers' },
  { id: 'anchors-back', label: 'Anchor & Back Nav' },
  { id: 'hybrid', label: 'Hybrid' },
];

const STYLE_OPTIONS: { id: WayStyle | 'all'; label: string }[] = [
  { id: 'all', label: 'All Styles' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'professional', label: 'Professional' },
  { id: 'dark', label: 'Dark' },
  { id: 'colourful', label: 'Colourful' },
];

const DENSITY_OPTIONS: { id: WayDensity | 'all'; label: string }[] = [
  { id: 'all', label: 'All Densities' },
  { id: 'compact', label: 'Compact' },
  { id: 'spacious', label: 'Spacious' },
];

export default function App() {
  const [category, setCategory] = useState<WayCategory>('all');
  const [styleFilter, setStyleFilter] = useState<WayStyle | 'all'>('all');
  const [densityFilter, setDensityFilter] = useState<WayDensity | 'all'>('all');
  const [query, setQuery] = useState('');
  const [globalResetKey, setGlobalResetKey] = useState(0);

  const visibleItems = useMemo(
    () =>
      filterCatalog(WAY_CATALOG, {
        category,
        style: styleFilter,
        density: densityFilter,
        query,
      }),
    [category, styleFilter, densityFilter, query]
  );

  const hasActiveFilters =
    category !== 'all' ||
    styleFilter !== 'all' ||
    densityFilter !== 'all' ||
    query.trim() !== '';

  const clearAllFilters = () => {
    setCategory('all');
    setStyleFilter('all');
    setDensityFilter('all');
    setQuery('');
  };

  const handleHeaderJump = (targetCategory: WayCategory) => {
    setCategory(targetCategory);
    const catalogEl = document.getElementById('specimen-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Three-zone Top Bar Contract */}
      <header className="bg-white/95 backdrop-blur-xs border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              clearAllFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-extrabold tracking-tight text-slate-950 whitespace-nowrap shrink-0"
          >
            Wayfinding Atlas
          </a>

          <nav aria-label="Primary sections" className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => handleHeaderJump('steppers')}
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Steppers
            </button>
            <button
              type="button"
              onClick={() => handleHeaderJump('breadcrumbs')}
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Breadcrumbs
            </button>
            <button
              type="button"
              onClick={() => handleHeaderJump('headers')}
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Page Headers
            </button>
            <button
              type="button"
              onClick={() => handleHeaderJump('anchors-back')}
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Scrollspy & Back
            </button>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setGlobalResetKey((k) => k + 1)}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
            >
              Reset All Demos
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        {/* Hero */}
        <section className="pb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 max-w-3xl text-balance">
            Twenty interactive wayfinding components built for real navigation flows.
          </h1>
          <p className="text-base text-slate-600 mt-3 max-w-2xl leading-relaxed">
            Every specimen below is a self-contained React component with semantic landmarks, keyboard focus states, and live state transitions across compact and spacious densities.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 mt-5 tabular-nums">
            <span>20 live components (Way1–Way20)</span>
            <span aria-hidden="true">·</span>
            <span>6 pattern families</span>
            <span aria-hidden="true">·</span>
            <span>4 visual themes</span>
          </div>
        </section>

        {/* Workspace Filter Toolbar */}
        <section
          id="specimen-catalog"
          aria-label="Filter components"
          className="bg-white rounded-xl border border-slate-200 p-4 mb-6 space-y-3"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div
              role="group"
              aria-label="Component category"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg"
            >
              {CATEGORY_OPTIONS.map((opt) => {
                const active = category === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCategory(opt.id)}
                    aria-pressed={active}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-slate-950 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <label htmlFor="catalog-search" className="sr-only">
                Search wayfinding components
              </label>
              <Search
                className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Way1..Way20 or pattern..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="style-select" className="text-xs font-medium text-slate-500">
                  Style
                </label>
                <select
                  id="style-select"
                  value={styleFilter}
                  onChange={(e) => setStyleFilter(e.target.value as WayStyle | 'all')}
                  className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {STYLE_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="density-select" className="text-xs font-medium text-slate-500">
                  Density
                </label>
                <select
                  id="density-select"
                  value={densityFilter}
                  onChange={(e) => setDensityFilter(e.target.value as WayDensity | 'all')}
                  className="px-2.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  {DENSITY_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 tabular-nums">
              <span data-testid="visible-count">
                Showing {visibleItems.length} of {WAY_CATALOG.length}
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Specimens List */}
        {visibleItems.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <h2 className="text-base font-bold text-slate-950">No matching components</h2>
            <p className="text-sm text-slate-600 mt-1">
              Adjust your search query, style, or density filter to inspect available wayfinding patterns.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Show All 20 Components
            </button>
          </div>
        ) : (
          <div>
            {visibleItems.map((item) => (
              <SpecimenCard
                key={item.id}
                item={item}
                globalResetKey={globalResetKey}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
