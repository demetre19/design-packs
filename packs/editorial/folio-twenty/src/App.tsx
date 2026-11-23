import { useMemo, useState } from 'react';
import { Search, RotateCcw, ArrowUp } from 'lucide-react';
import {
  CARD_SPECS,
  type CardCategory,
  type CardStyle,
  type ViewMode,
  countSpecsByStyle,
  filterCardSpecs,
  formatCatalogSummary,
  getAvailableCategories,
} from './utils/cardCatalog';
import { SpecimenSection } from './components/SpecimenSection';

const STYLE_OPTIONS: Array<{ value: CardStyle | 'all'; label: string }> = [
  { value: 'all', label: 'All Styles' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'editorial', label: 'Editorial' },
  { value: 'dark', label: 'Dark' },
  { value: 'playful', label: 'Playful' },
];

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState<CardStyle | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CardCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalViewMode, setGlobalViewMode] = useState<ViewMode>('both');

  const styleCounts = useMemo(() => countSpecsByStyle(CARD_SPECS), []);
  const categories = useMemo(() => getAvailableCategories(CARD_SPECS), []);

  const visibleSpecs = useMemo(
    () =>
      filterCardSpecs(CARD_SPECS, {
        style: selectedStyle,
        category: selectedCategory,
        query: searchQuery,
      }),
    [selectedStyle, selectedCategory, searchQuery]
  );

  const hasActiveFilters =
    selectedStyle !== 'all' ||
    selectedCategory !== 'all' ||
    searchQuery.trim().length > 0;

  const resetFilters = () => {
    setSelectedStyle('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F7] text-[#141413]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Folio Twenty
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600"
          >
            <a
              href="#directory"
              className="hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
            >
              Index
            </a>
            <a
              href="#card-1"
              className="hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
            >
              Editorial
            </a>
            <a
              href="#card-7"
              className="hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
            >
              Features
            </a>
            <a
              href="#card-13"
              className="hover:text-zinc-900 transition-colors whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
          </nav>

          <div className="shrink-0">
            <a
              href="#specimens"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
            >
              Browse Components
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-zinc-500">
              React & Tailwind CSS Component Library · Card1 – Card20
            </p>
            <h1
              className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-[1.08] text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Twenty self-contained cards and content blocks across four visual systems.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 max-w-2xl">
              Every component uses semantic HTML5 landmarks, tabular numerals, accessible interactive disclosures, and is shown in both standalone measure and 3-up grid wrappers.
            </p>
          </div>

          {/* Full-width 4-column summary strip */}
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-zinc-200">
            <div>
              <dt className="text-xs text-zinc-500">Components</dt>
              <dd className="mt-1 text-2xl font-semibold font-mono tabular-nums text-zinc-900">
                20
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Visual Aesthetics</dt>
              <dd className="mt-1 text-2xl font-semibold font-mono tabular-nums text-zinc-900">
                4
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Content Categories</dt>
              <dd className="mt-1 text-2xl font-semibold font-mono tabular-nums text-zinc-900">
                7
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Layout Contexts</dt>
              <dd className="mt-1 text-2xl font-semibold font-mono tabular-nums text-zinc-900">
                Standalone + 3-Up
              </dd>
            </div>
          </dl>
        </section>

        {/* Compact Quick Index Directory */}
        <section id="directory" aria-label="Component index" className="pb-8">
          <div className="bg-white border border-zinc-200 rounded-xl p-5">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h2 className="text-xs font-semibold text-zinc-900">
                Component Index (Jump to Specimen)
              </h2>
              <span className="text-xs font-mono tabular-nums text-zinc-500">
                {formatCatalogSummary(visibleSpecs.length, CARD_SPECS.length)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {CARD_SPECS.map((spec) => {
                const isVisible = visibleSpecs.some((v) => v.id === spec.id);
                return (
                  <a
                    key={spec.id}
                    href={`#${spec.id}`}
                    className={`px-2.5 py-1.5 rounded-lg text-xs transition-colors truncate border ${
                      isVisible
                        ? 'border-zinc-200 bg-zinc-50 text-zinc-900 hover:border-zinc-400'
                        : 'border-transparent bg-transparent text-zinc-400 hover:text-zinc-600'
                    }`}
                  >
                    <span className="font-mono font-semibold mr-1.5">{spec.number}.</span>
                    <span>{spec.componentName} · {spec.cardType.replace(' (SVG Art)', '').replace('Pricing-Adjacent ', '')}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workspace Filter Toolbar */}
        <section
          aria-label="Filter and layout controls"
          className="py-5 border-y border-zinc-200 flex flex-col gap-3 2xl:flex-row 2xl:items-center 2xl:justify-between"
        >
          {/* Style Segmented Filter */}
          <div
            className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1 p-1 bg-zinc-200/70 rounded-lg self-start shrink-0"
            role="group"
            aria-label="Filter by aesthetic style"
          >
            {STYLE_OPTIONS.map((opt) => {
              const active = selectedStyle === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedStyle(opt.value)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
                    active
                      ? 'bg-white text-zinc-900 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {opt.label} ({styleCounts[opt.value]})
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Select */}
            <div className="flex items-center gap-2">
              <label htmlFor="category-filter" className="sr-only">
                Filter by category
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as CardCategory | 'all')
                }
                className="px-3 py-2 text-xs font-medium bg-white border border-zinc-300 rounded-lg text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative">
              <label htmlFor="card-search" className="sr-only">
                Search components
              </label>
              <Search
                className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="card-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Card1..20 or type"
                className="pl-8 pr-3 py-2 w-48 sm:w-52 text-xs bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              />
            </div>

            {/* Global Grid Context Mode */}
            <div
              className="flex items-center gap-1 p-1 bg-zinc-200/70 rounded-lg shrink-0"
              role="group"
              aria-label="Global grid context mode"
            >
              {(
                [
                  { id: 'both', label: 'Both Contexts' },
                  { id: 'standalone', label: 'Standalone' },
                  { id: 'grid', label: '3-Up Grids' },
                ] as const
              ).map((mode) => {
                const active = globalViewMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setGlobalViewMode(mode.id)}
                    aria-pressed={active}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
                      active
                        ? 'bg-white text-zinc-900 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {mode.label}
                  </button>
                );
              })}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 hover:bg-zinc-100 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </section>

        {/* Specimens List */}
        <div id="specimens" className="pb-16">
          {visibleSpecs.length === 0 ? (
            <div className="my-12 bg-white border border-zinc-200 rounded-xl p-12 text-center">
              <h2 className="text-lg font-semibold text-zinc-900">
                No matching card components
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Adjust the style filter, category selector, or search term to view components.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            visibleSpecs.map((spec) => (
              <SpecimenSection
                key={spec.id}
                spec={spec}
                globalViewMode={globalViewMode}
              />
            ))
          )}
        </div>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-zinc-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span
              className="font-semibold text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Folio Twenty
            </span>
            <span aria-hidden="true">·</span>
            <span>20 Self-Contained Semantic React + Tailwind Components</span>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to top</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
