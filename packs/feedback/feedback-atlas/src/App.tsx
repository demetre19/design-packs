import { useMemo, useState } from 'react';
import { ChevronDown, Layers, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react';
import {
  FEEDBACK_CATALOG,
  FEEDBACK_CATEGORIES,
  FEEDBACK_PLACEMENTS,
  FeedbackCategory,
  FeedbackMeta,
  FeedbackPlacement,
  filterFeedbackCatalog,
  getCategoryCounts,
} from './utils/feedbackCatalog';
import { ShowcaseCard } from './components/ShowcaseCard';
import { ViewportOverlayHost } from './components/ViewportOverlayHost';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<FeedbackCategory>('All');
  const [selectedPlacement, setSelectedPlacement] = useState<FeedbackPlacement>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const [resetKey, setResetKey] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryCounts = useMemo(() => getCategoryCounts(FEEDBACK_CATALOG), []);

  const filteredComponents = useMemo(
    () =>
      filterFeedbackCatalog(FEEDBACK_CATALOG, {
        category: selectedCategory,
        placement: selectedPlacement,
        query: searchQuery,
      }),
    [selectedCategory, selectedPlacement, searchQuery]
  );

  const pinnedItems = useMemo(
    () => FEEDBACK_CATALOG.filter((item) => pinnedIds.includes(item.id)),
    [pinnedIds]
  );

  const handleTogglePin = (meta: FeedbackMeta) => {
    setPinnedIds((prev) =>
      prev.includes(meta.id) ? prev.filter((id) => id !== meta.id) : [...prev, meta.id]
    );
  };

  const handleResetDemo = () => {
    setSelectedCategory('All');
    setSelectedPlacement('All');
    setSearchQuery('');
    setPinnedIds([]);
    setResetKey((prev) => prev + 1);
  };

  const triggerToastStackDemo = () => {
    setPinnedIds(['feedback-1', 'feedback-2']);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Feedback Atlas
          </a>

          <nav
            aria-label="Component category shortcuts"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={() => setSelectedCategory('Toasts & Snackbars')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Toasts
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Banners & Announcements')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Banners
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Forms & Connectivity')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Forms
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Progress & Skeletons')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Loaders
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('Outcomes & Error States')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              Errors
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={triggerToastStackDemo}
              className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0"
            >
              Launch Toast Stack
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-[1400px] px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="order-1 space-y-6 lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <label htmlFor="catalog-search" className="sr-only">
                    Search Components
                  </label>
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="catalog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search toast, skeleton, ARIA..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-8 pr-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search query"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700"
                    >
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  aria-expanded={mobileFiltersOpen}
                  onClick={() => setMobileFiltersOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 hover:bg-slate-50 lg:hidden whitespace-nowrap shrink-0"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  Filters
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      mobileFiltersOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="mt-5">
                  <p className="text-xs font-semibold text-slate-900">Categories</p>
                  <div className="mt-2 space-y-1">
                    {FEEDBACK_CATEGORIES.map((category) => {
                      const active = selectedCategory === category;
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => setSelectedCategory(category)}
                          className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${
                            active
                              ? 'bg-slate-900 font-semibold text-white'
                              : 'font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span className="truncate">{category}</span>
                          <span
                            className={`font-mono text-[11px] tabular-nums ${
                              active ? 'text-slate-300' : 'text-slate-400'
                            }`}
                          >
                            {categoryCounts[category]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <label
                    htmlFor="placement-select"
                    className="block text-xs font-semibold text-slate-900"
                  >
                    Placement Filter
                  </label>
                  <select
                    id="placement-select"
                    value={selectedPlacement}
                    onChange={(e) => setSelectedPlacement(e.target.value as FeedbackPlacement)}
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:border-slate-400 focus:outline-none"
                  >
                    {FEEDBACK_PLACEMENTS.map((placement) => (
                      <option key={placement} value={placement}>
                        {placement === 'All' ? 'All Placements' : placement}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="hidden lg:block rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-900">Quick Index</p>
                <span className="font-mono text-[11px] tabular-nums text-slate-500">01–20</span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {FEEDBACK_CATALOG.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      if (selectedCategory !== 'All' || selectedPlacement !== 'All' || searchQuery) {
                        setSelectedCategory('All');
                        setSelectedPlacement('All');
                        setSearchQuery('');
                      }
                    }}
                    className="rounded-md border border-slate-200 py-1.5 text-center font-mono text-[11px] font-medium tabular-nums text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950"
                  >
                    {String(item.number).padStart(2, '0')}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <main className="order-2 min-w-0">
            <section className="border-b border-slate-200 pb-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-medium text-slate-500">
                    Accessible React &amp; Tailwind UI Patterns · 20 Self-Contained Components
                  </p>
                  <h1 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
                    Feedback Component System
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Twenty distinct, self-contained feedback components (<span className="font-mono text-slate-800">Feedback1</span> through{' '}
                    <span className="font-mono text-slate-800">Feedback20</span>) engineered with live{' '}
                    <span className="font-mono text-slate-800">useState</span> workflows,{' '}
                    <span className="font-mono text-slate-800">role=&quot;alert&quot;</span> and{' '}
                    <span className="font-mono text-slate-800">role=&quot;status&quot;</span>{' '}
                    accessibility semantics, and varied viewport placements.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleResetDemo}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Reset All States
                  </button>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                  <span>
                    Showing{' '}
                    <strong className="font-mono tabular-nums text-slate-900">
                      {filteredComponents.length}
                    </strong>{' '}
                    of <strong className="font-mono tabular-nums text-slate-900">20</strong>{' '}
                    components
                  </span>
                </div>
                {(selectedCategory !== 'All' || selectedPlacement !== 'All' || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedPlacement('All');
                      setSearchQuery('');
                    }}
                    className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900 whitespace-nowrap shrink-0"
                  >
                    Clear active filters
                  </button>
                )}
              </div>
            </section>

            {filteredComponents.length === 0 ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center"
              >
                <p className="text-sm font-semibold text-slate-900">
                  No feedback components match your current filter
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Try clearing your search query or switching back to All categories and placements.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedPlacement('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 whitespace-nowrap shrink-0"
                >
                  Show All 20 Components
                </button>
              </div>
            ) : (
              <div key={resetKey} className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
                {filteredComponents.map((meta) => {
                  const isWide =
                    meta.placement === 'Top Banner' ||
                    meta.placement === 'Bottom Bar' ||
                    meta.componentName === 'Feedback17' ||
                    meta.componentName === 'Feedback7';

                  return (
                    <div key={meta.id} className={isWide ? 'xl:col-span-2' : ''}>
                      <ShowcaseCard
                        meta={meta}
                        isPinned={pinnedIds.includes(meta.id)}
                        onTogglePin={handleTogglePin}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      <ViewportOverlayHost
        pinnedItems={pinnedItems}
        onUnpin={(id) => setPinnedIds((prev) => prev.filter((item) => item !== id))}
        onClearAll={() => setPinnedIds([])}
      />
    </div>
  );
}
