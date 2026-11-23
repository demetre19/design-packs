import { Columns2, Moon, Rows3, Search, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { SpecimenCard } from './components/SpecimenCard';
import { ExportBundleModal, SpecimenModal } from './components/SpecimenModal';
import {
  BACKGROUNDS_META,
  CATEGORY_OPTIONS,
  type BackgroundCategory,
  type BackgroundMeta,
} from './data/backgroundsMeta';
import {
  buildAllComponentsBundle,
  filterBackgrounds,
  getCategoryCounts,
} from './utils/catalogFilter';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | BackgroundCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'stack'>('grid');
  const [inspected, setInspected] = useState<{
    meta: BackgroundMeta;
    tab: 'preview' | 'code';
  } | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const categoryCounts = useMemo(() => getCategoryCounts(BACKGROUNDS_META), []);

  const filteredItems = useMemo(
    () => filterBackgrounds(BACKGROUNDS_META, activeCategory, searchQuery),
    [activeCategory, searchQuery]
  );

  const bundleCode = useMemo(() => buildAllComponentsBundle(BACKGROUNDS_META), []);

  const handleStepModal = (direction: -1 | 1) => {
    if (!inspected) return;
    const pool = filteredItems.length > 0 ? filteredItems : BACKGROUNDS_META;
    const currentIdx = pool.findIndex((item) => item.id === inspected.meta.id);
    const baseIdx = currentIdx === -1 ? 0 : currentIdx;
    const nextIdx = (baseIdx + direction + pool.length) % pool.length;
    setInspected({ meta: pool[nextIdx], tab: inspected.tab });
  };

  return (
    <div id="top" className="min-h-screen bg-[#F8F8F7] text-zinc-900 dark:bg-[#09090B] dark:text-zinc-100">
      <Header
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onOpenExport={() => setIsExportOpen(true)}
      />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        {/* Editorial Intro */}
        <section className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs tracking-wider text-blue-700 dark:text-blue-400">
                20 Self-Contained Surface Components · Bg1–Bg20
              </p>
              <h1 className="mt-2 font-serif text-3xl font-medium tracking-tight text-balance text-zinc-950 sm:text-4xl dark:text-white">
                Architectural &amp; Atmospheric Background Specimens
              </h1>
              <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Each component renders a full-bleed container with sample editorial content using pure SVG and CSS gradients—zero external images, calibrated with opacity tokens for both light and dark surfaces.
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-sm text-zinc-600 tabular-nums dark:text-zinc-400 shrink-0">
              <div>
                <span className="block font-mono text-base sm:text-lg font-semibold text-zinc-950 dark:text-white">
                  20
                </span>
                <span className="text-xs whitespace-nowrap">Distinct Motifs</span>
              </div>
              <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
              <div>
                <span className="block font-mono text-base sm:text-lg font-semibold text-zinc-950 dark:text-white">
                  0
                </span>
                <span className="text-xs whitespace-nowrap">External Assets</span>
              </div>
              <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
              <div>
                <span className="block font-mono text-base sm:text-lg font-semibold whitespace-nowrap text-zinc-950 dark:text-white">
                  Light / Dark
                </span>
                <span className="text-xs whitespace-nowrap">Opacity Tuned</span>
              </div>
            </div>
          </div>

          {/* Workspace Toolbar */}
          <div
            id="catalog"
            className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              role="tablist"
              aria-label="Filter backgrounds by category"
              className="flex flex-wrap items-center gap-1 rounded-xl bg-zinc-200/70 p-1 dark:bg-zinc-900"
            >
              {CATEGORY_OPTIONS.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count = categoryCounts[cat.id];
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 tabular-nums whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                      isActive
                        ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                        : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-[230px] flex-1 sm:flex-initial">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400"
                  aria-hidden="true"
                />
                <label htmlFor="pattern-search" className="sr-only">
                  Search background patterns
                </label>
                <input
                  id="pattern-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search motif or Bg1–Bg20..."
                  className="h-9 w-full rounded-lg border border-zinc-200 bg-white pr-8 pl-9 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-blue-600 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search query"
                    className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <div className="flex items-center rounded-lg border border-zinc-200 bg-white p-0.5 dark:border-zinc-800 dark:bg-zinc-900">
                <button
                  type="button"
                  onClick={() => setIsDark(false)}
                  aria-pressed={!isDark}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    !isDark
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Light Surface</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsDark(true)}
                  aria-pressed={isDark}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isDark
                      ? 'bg-zinc-100 text-zinc-950'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Dark Surface</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center rounded-lg border border-zinc-200 bg-white p-0.5 dark:border-zinc-800 dark:bg-zinc-900">
                <button
                  type="button"
                  onClick={() => setLayoutMode('grid')}
                  aria-label="Two column grid layout"
                  aria-pressed={layoutMode === 'grid'}
                  className={`inline-flex h-7 w-8 cursor-pointer items-center justify-center rounded-md transition-colors ${
                    layoutMode === 'grid'
                      ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  <Columns2 className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setLayoutMode('stack')}
                  aria-label="Full-width stacked layout"
                  aria-pressed={layoutMode === 'stack'}
                  className={`inline-flex h-7 w-8 cursor-pointer items-center justify-center rounded-md transition-colors ${
                    layoutMode === 'stack'
                      ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                >
                  <Rows3 className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Specimen Grid */}
        <section aria-label="Background specimens" className="mt-8">
          <div className="mb-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span className="tabular-nums">
              Showing {filteredItems.length} of {BACKGROUNDS_META.length} components
            </span>
            <span>Click Preview for full-bleed inspection or Copy for standalone TSX</span>
          </div>

          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white/60 px-6 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
              <p className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">
                No matching background motifs
              </p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Clear the search filter or switch back to all 20 patterns.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              data-testid="specimen-grid"
              className={
                layoutMode === 'grid'
                  ? 'grid grid-cols-1 gap-6 lg:grid-cols-2'
                  : 'flex flex-col gap-8'
              }
            >
              {filteredItems.map((meta) => (
                <SpecimenCard
                  key={meta.id}
                  meta={meta}
                  onInspect={(selected, tab) => setInspected({ meta: selected, tab })}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60 py-8 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row sm:items-center dark:text-zinc-400">
          <p>Surface Foundry · 20 self-contained React + Tailwind decorative backgrounds (Bg1–Bg20)</p>
          <button
            type="button"
            onClick={() => setIsExportOpen(true)}
            className="cursor-pointer font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Download Complete TSX Bundle
          </button>
        </div>
      </footer>

      <SpecimenModal
        meta={inspected?.meta ?? null}
        initialTab={inspected?.tab ?? 'preview'}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
        onClose={() => setInspected(null)}
        onStep={handleStepModal}
      />

      <ExportBundleModal
        isOpen={isExportOpen}
        bundleCode={bundleCode}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}
