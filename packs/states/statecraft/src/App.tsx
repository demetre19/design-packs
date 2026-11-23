import { RotateCw, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { SpecimenCard } from './components/SpecimenCard';
import { STATE_COMPONENTS } from './components/states';
import {
  filterStates,
  getCategoryCounts,
  STATE_CATEGORIES,
  STATES_CATALOG,
  type FilterTab,
  type StateSpec,
} from './utils/statesCatalog';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalReplay, setGlobalReplay] = useState(0);
  const [inspectedSpec, setInspectedSpec] = useState<StateSpec | null>(null);
  const [modalReplay, setModalReplay] = useState(0);

  const counts = useMemo(() => getCategoryCounts(STATES_CATALOG), []);
  const visibleStates = useMemo(
    () => filterStates(STATES_CATALOG, activeCategory, searchQuery),
    [activeCategory, searchQuery],
  );

  useEffect(() => {
    if (!inspectedSpec) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setInspectedSpec(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspectedSpec]);

  const handleCategoryNav = (cat: FilterTab) => {
    setActiveCategory(cat);
    const grid = document.getElementById('specimens-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const InspectedComponent = inspectedSpec
    ? STATE_COMPONENTS[inspectedSpec.id]
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Statecraft
          </a>

          <nav
            aria-label="Category shortcuts"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            {STATE_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryNav(category)}
                className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent hover:text-slate-900'
                }`}
              >
                {category === 'All' ? 'All States' : category}
              </button>
            ))}
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setGlobalReplay((n) => n + 1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Replay All</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="top" className="flex-1 max-w-[1380px] w-full mx-auto px-4 sm:px-8 py-10">
        {/* Editorial Intro */}
        <section className="max-w-3xl mb-8">
          <h1
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
            style={{ textWrap: 'balance' }}
          >
            Twenty UI state-moment interactions, rendered in peak active state.
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every specimen from State1 to State20 mounts directly in its completed or active feedback frame for instant visual scanning, with live interactive triggers and single-click replay.
          </p>
        </section>

        {/* Filter Tabs & Search Toolbar */}
        <section
          aria-label="Filter specimens"
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200"
        >
          <div
            role="tablist"
            aria-label="Interaction categories"
            className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-slate-200/70 w-fit"
          >
            {STATE_CATEGORIES.map((tab) => {
              const selected = activeCategory === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selected
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}{' '}
                  <span className="font-mono tabular-nums text-slate-400 ml-0.5">
                    {counts[tab]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="specimen-search" className="sr-only">
              Search interactions
            </label>
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="specimen-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name or mechanism..."
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-blue-600"
            />
          </div>
        </section>

        {/* 20 Specimen Cards Grid */}
        <section id="specimens-grid" aria-label="State interaction specimens">
          {visibleStates.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
              <p className="font-display text-lg font-semibold text-slate-900">
                No matching interactions
              </p>
              <p className="text-sm text-slate-500 mt-1">
                No state moments matched "{searchQuery}" in {activeCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleStates.map((spec) => (
                <SpecimenCard
                  key={spec.id}
                  spec={spec}
                  globalReplay={globalReplay}
                  onInspect={(selected) => {
                    setModalReplay(0);
                    setInspectedSpec(selected);
                  }}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Statecraft · Self-contained React + Tailwind UI state components</span>
          <span className="font-mono tabular-nums">
            Showing {visibleStates.length} of {STATES_CATALOG.length} interactions
          </span>
        </div>
      </footer>

      {/* Inspect Modal */}
      {inspectedSpec && InspectedComponent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="inspect-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectedSpec(null);
          }}
        >
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-100">
              <div>
                <p className="text-xs font-mono text-slate-500">
                  {String(inspectedSpec.id).padStart(2, '0')} · {inspectedSpec.componentName} ·{' '}
                  {inspectedSpec.category}
                </p>
                <h2
                  id="inspect-modal-title"
                  className="font-display text-lg font-semibold text-slate-900 mt-0.5"
                >
                  {inspectedSpec.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setInspectedSpec(null)}
                aria-label="Close inspector"
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="stage-grid min-h-[260px] p-8 flex items-center justify-center border-b border-slate-100">
              <InspectedComponent replaySignal={modalReplay} />
            </div>

            <div className="px-6 py-4 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {inspectedSpec.summary}
              </p>
              <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <span className="text-xs font-mono text-slate-500">
                  {inspectedSpec.mechanism} · {inspectedSpec.timing}
                </span>
                <button
                  type="button"
                  onClick={() => setModalReplay((n) => n + 1)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer whitespace-nowrap"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Replay Transition</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
