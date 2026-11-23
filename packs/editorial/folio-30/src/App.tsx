import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import {
  SPECIMEN_CATALOG,
  SPECIMEN_CATEGORIES,
  filterSpecimens,
  getAdjacentSpecimens,
  parseSpecimenParam,
  type SpecimenCategory,
} from './utils/specimenCatalog';
import { BLOG_SINGLE_COMPONENTS } from './components/articles';

type ViewMode = 'single' | 'catalog' | 'all';

function parseInitialMode(): ViewMode {
  if (typeof window === 'undefined') return 'single';
  const mode = new URLSearchParams(window.location.search).get('mode');
  if (mode === 'all' || mode === 'catalog' || mode === 'single') return mode;
  return 'single';
}

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>(parseInitialMode);
  const [activeId, setActiveId] = useState<number>(() =>
    typeof window !== 'undefined' ? parseSpecimenParam(window.location.search) : 1
  );
  const [category, setCategory] = useState<'All' | SpecimenCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('specimen', String(activeId));
    if (viewMode !== 'single') {
      params.set('mode', viewMode);
    }
    const nextUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', nextUrl);
  }, [activeId, viewMode]);

  const activeMeta = useMemo(
    () => SPECIMEN_CATALOG.find((s) => s.id === activeId) || SPECIMEN_CATALOG[0],
    [activeId]
  );

  const { prev, next } = useMemo(
    () => getAdjacentSpecimens(SPECIMEN_CATALOG, activeId),
    [activeId]
  );

  const filteredCatalog = useMemo(
    () => filterSpecimens(SPECIMEN_CATALOG, category, searchQuery),
    [category, searchQuery]
  );

  const ActiveComponent = BLOG_SINGLE_COMPONENTS[activeId] || BLOG_SINGLE_COMPONENTS[1];

  const openSpecimen = (id: number) => {
    setActiveId(id);
    setViewMode('single');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 overflow-x-hidden">
      {/* Top Bar Contract: 1 row, 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 h-14 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-stone-200 px-4 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="?specimen=1"
          onClick={(e) => {
            e.preventDefault();
            openSpecimen(1);
          }}
          className="font-serif text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0"
        >
          Folio 30
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav aria-label="Primary views" className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <button
            type="button"
            onClick={() => setViewMode('single')}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b ${
              viewMode === 'single'
                ? 'text-stone-900 border-stone-900'
                : 'border-transparent hover:text-stone-900 hover:border-stone-400'
            }`}
          >
            Single Specimen
          </button>
          <button
            type="button"
            onClick={() => setViewMode('catalog')}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b ${
              viewMode === 'catalog'
                ? 'text-stone-900 border-stone-900'
                : 'border-transparent hover:text-stone-900 hover:border-stone-400'
            }`}
          >
            Catalog Index
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all')}
            className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b ${
              viewMode === 'all'
                ? 'text-stone-900 border-stone-900'
                : 'border-transparent hover:text-stone-900 hover:border-stone-400'
            }`}
          >
            All 30 Stacked
          </button>
          <button
            type="button"
            onClick={() => {
              setCategory('Editorial & Feature');
              setViewMode('catalog');
            }}
            className="py-1 whitespace-nowrap shrink-0 transition-colors border-b border-transparent hover:text-stone-900 hover:border-stone-400"
          >
            Editorial
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => openSpecimen(next.id)}
            className="px-4 py-1.5 text-xs font-medium bg-stone-900 text-white hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
          >
            Next Specimen
          </button>
        </div>
      </header>

      {/* Workspace Toolbar below header */}
      <div className="bg-white border-b border-stone-200 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {viewMode === 'single' ? (
            <>
              <div className="flex flex-wrap items-center gap-3 min-w-0">
                <span className="font-mono text-xs font-semibold tabular-nums text-stone-500">
                  {String(activeMeta.id).padStart(2, '0')} / 30
                </span>
                <span aria-hidden="true" className="text-stone-300">/</span>
                <span className="font-mono text-xs font-medium text-stone-900">
                  {activeMeta.componentName}
                </span>
                <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
                <span className="text-xs sm:text-sm text-stone-600 truncate">
                  {activeMeta.formatName}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label htmlFor="specimen-select" className="sr-only">
                  Select specimen layout
                </label>
                <select
                  id="specimen-select"
                  value={activeId}
                  onChange={(e) => openSpecimen(Number(e.target.value))}
                  className="flex-1 min-w-0 text-xs bg-stone-50 border border-stone-200 px-3 h-10 sm:h-9 text-stone-800 sm:max-w-xs focus:outline-none focus:border-stone-900"
                >
                  {SPECIMEN_CATALOG.map((item) => (
                    <option key={item.id} value={item.id}>
                      {String(item.id).padStart(2, '0')}. {item.formatName} ({item.componentName})
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => openSpecimen(prev.id)}
                  aria-label="Previous specimen"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 shrink-0 border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openSpecimen(next.id)}
                  aria-label="Next specimen"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 shrink-0 border border-stone-200 bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex md:hidden items-center gap-2 w-full pt-1">
                <button
                  type="button"
                  onClick={() => setViewMode('catalog')}
                  className="flex-1 h-10 text-xs font-medium border border-stone-200 bg-stone-50 text-stone-800 hover:bg-stone-100"
                >
                  Catalog Index
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className="flex-1 h-10 text-xs font-medium border border-stone-200 bg-stone-50 text-stone-800 hover:bg-stone-100"
                >
                  All 30 Stacked
                </button>
              </div>
            </>
          ) : (
            <div className="w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5">
                {SPECIMEN_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 border ${
                      category === cat
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-60">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter 30 layouts..."
                    aria-label="Filter 30 blog article layouts"
                    className="w-full pl-8 pr-3 py-1.5 text-xs border border-stone-200 bg-stone-50 text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
                <span className="font-mono text-xs text-stone-500 tabular-nums shrink-0">
                  {filteredCatalog.length} / 30
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Stage */}
      <main className="flex-1">
        {viewMode === 'single' && (
          <div data-testid="single-specimen-stage">
            <ActiveComponent />
          </div>
        )}

        {viewMode === 'catalog' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <div className="mb-8 pb-6 border-b border-stone-200">
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
                Thirty Single-Article Editorial Architectures
              </h1>
              <p className="mt-2 text-sm text-stone-600 max-w-2xl leading-relaxed">
                Each specimen is a self-contained React and Tailwind component (BlogSingle1 through BlogSingle30) with original article copy, metadata, prose, and figures. Select any format below to read it full-bleed.
              </p>
            </div>

            {filteredCatalog.length === 0 ? (
              <div className="bg-white border border-stone-200 p-12 text-center">
                <p className="font-serif text-xl text-stone-900">No matching layouts found</p>
                <p className="mt-1 text-sm text-stone-500">
                  Clear the search filter or select All categories to inspect all 30 specimens.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-medium bg-stone-900 text-white hover:bg-stone-800"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCatalog.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openSpecimen(item.id)}
                    className="text-left bg-white border border-stone-200 hover:border-stone-900 p-6 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono text-stone-500 mb-3">
                        <span className="tabular-nums font-semibold text-stone-900">
                          {String(item.id).padStart(2, '0')} · {item.componentName}
                        </span>
                        <span>{item.category}</span>
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-stone-900 group-hover:underline leading-snug">
                        {item.formatName}
                      </h2>
                      <p className="mt-2 text-xs font-medium text-stone-700 leading-relaxed">
                        “{item.title}”
                      </p>
                      <p className="mt-2 text-xs text-stone-500 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                      <span>
                        {item.byline} · {item.readTime}
                      </span>
                      <span className="font-medium text-stone-900 group-hover:translate-x-0.5 transition-transform">
                        Open
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {viewMode === 'all' && (
          <div data-testid="all-specimens-stack" className="divide-y-4 divide-stone-300">
            {filteredCatalog.length === 0 ? (
              <div className="max-w-3xl mx-auto my-12 bg-white border border-stone-200 p-10 text-center">
                <p className="text-sm text-stone-600">No layouts match the current filter.</p>
              </div>
            ) : (
              filteredCatalog.map((item) => {
                const SpecimenComponent = BLOG_SINGLE_COMPONENTS[item.id];
                return (
                  <section
                    key={item.id}
                    id={`specimen-${item.id}`}
                    aria-label={`${item.componentName}: ${item.formatName}`}
                  >
                    <div className="bg-stone-200/70 border-b border-stone-300 px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="font-mono font-semibold tabular-nums text-stone-900">
                          {String(item.id).padStart(2, '0')} / 30
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-stone-700">{item.componentName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-stone-900">{item.formatName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => openSpecimen(item.id)}
                        className="text-xs font-medium text-stone-800 hover:underline whitespace-nowrap shrink-0"
                      >
                        Isolate View
                      </button>
                    </div>
                    <SpecimenComponent />
                  </section>
                );
              })
            )}
          </div>
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-stone-200 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            Folio 30 · Complete collection of self-contained single-article page sections (BlogSingle1–BlogSingle30).
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setViewMode('catalog')}
              className="hover:text-stone-900 transition-colors"
            >
              Browse Index
            </button>
            <button
              type="button"
              onClick={() => setViewMode('all')}
              className="hover:text-stone-900 transition-colors"
            >
              View All 30 Stacked
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
