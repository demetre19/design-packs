import { useMemo, useState } from 'react';
import { Code2, RotateCcw, Search } from 'lucide-react';
import { COMPARISON_CATALOG, type ComparisonShowcaseItem } from './components/comparisons';
import { COMPARISON_SOURCES } from './components/comparisons/sourceMap';
import { CodeDrawer } from './components/CodeDrawer';
import {
  filterCatalog,
  type ComparisonCategory,
  type ComparisonStyle,
} from './utils/comparisonHelpers';

const STYLE_FILTERS: ReadonlyArray<ComparisonStyle | 'All'> = [
  'All',
  'Minimal',
  'Professional',
  'Dark',
  'Editorial',
];

const COLUMN_FILTERS: ReadonlyArray<2 | 3 | 4 | 'All'> = ['All', 2, 3, 4];

const CATEGORY_OPTIONS: ReadonlyArray<ComparisonCategory | 'All'> = [
  'All',
  'Feature Matrix',
  'Before / After',
  'Competitor vs Us',
  'Spec Sheet',
  'Pricing + Features',
  'Mobile Cards',
  'Toggleable View',
  'Pros & Cons',
  'Version Comparison',
];

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState<ComparisonStyle | 'All'>('All');
  const [selectedColumns, setSelectedColumns] = useState<2 | 3 | 4 | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ComparisonCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedItem, setInspectedItem] = useState<ComparisonShowcaseItem | null>(null);

  const visibleItems = useMemo(
    () =>
      filterCatalog(COMPARISON_CATALOG, {
        style: selectedStyle,
        columnCount: selectedColumns,
        category: selectedCategory,
        query: searchQuery,
      }),
    [selectedStyle, selectedColumns, selectedCategory, searchQuery]
  );

  const hasActiveFilters =
    selectedStyle !== 'All' ||
    selectedColumns !== 'All' ||
    selectedCategory !== 'All' ||
    searchQuery.trim() !== '';

  const resetFilters = () => {
    setSelectedStyle('All');
    setSelectedColumns('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  const applyNavPreset = (preset: 'all' | 'matrices' | 'specs' | 'editorial' | 'dark') => {
    setSearchQuery('');
    setSelectedColumns('All');
    if (preset === 'all') {
      setSelectedStyle('All');
      setSelectedCategory('All');
    } else if (preset === 'matrices') {
      setSelectedStyle('All');
      setSelectedCategory('Feature Matrix');
    } else if (preset === 'specs') {
      setSelectedStyle('All');
      setSelectedCategory('Spec Sheet');
    } else if (preset === 'editorial') {
      setSelectedStyle('Editorial');
      setSelectedCategory('All');
    } else if (preset === 'dark') {
      setSelectedStyle('Dark');
      setSelectedCategory('All');
    }
    const el = document.getElementById('showcase-feed');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 bg-stone-50/95 backdrop-blur-xs border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              resetFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight text-stone-950 font-display whitespace-nowrap shrink-0"
          >
            CompareKit
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600" aria-label="Collection filters">
            <a
              href="#showcase-feed"
              onClick={(e) => {
                e.preventDefault();
                applyNavPreset('all');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              All Components
            </a>
            <a
              href="#showcase-feed"
              onClick={(e) => {
                e.preventDefault();
                applyNavPreset('matrices');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Feature Matrices
            </a>
            <a
              href="#showcase-feed"
              onClick={(e) => {
                e.preventDefault();
                applyNavPreset('specs');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Spec Sheets
            </a>
            <a
              href="#showcase-feed"
              onClick={(e) => {
                e.preventDefault();
                applyNavPreset('editorial');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Editorial
            </a>
            <a
              href="#showcase-feed"
              onClick={(e) => {
                e.preventDefault();
                applyNavPreset('dark');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Dark UI
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#directory"
              className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
            >
              Component Index
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Hero Header */}
        <section className="max-w-3xl mb-10">
          <p className="text-xs font-medium text-stone-500 mb-3">
            React + Tailwind CSS · 20 Self-Contained Components · Semantic HTML
          </p>
          <h1
            className="font-display font-semibold tracking-tight text-stone-950 mb-4"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', textWrap: 'balance', lineHeight: 1.1 }}
          >
            Twenty distinct comparison architectures built for real product decisions.
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-2xl">
            Explore feature comparison matrices, before/after transformations, competitor vs-us benchmarks,
            hardware spec sheets, seat-scaled pricing grids, mobile-stacked cards, toggleable views, pros/cons
            evaluations, and version release tables.
          </p>
        </section>

        {/* Workspace Filter Toolbar */}
        <section
          aria-label="Filter comparison components"
          className="bg-white border border-stone-200 rounded-xl p-4 md:p-5 mb-8 space-y-4"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="catalog-search" className="sr-only">
                Search components
              </label>
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Compare1..20, specs, pricing, pros/cons..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-2 focus:outline-stone-900"
              />
            </div>

            {/* Category & Reset */}
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="category-select" className="sr-only">
                Filter by comparison pattern
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ComparisonCategory | 'All')}
                className="px-3 py-2 text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-2 focus:outline-stone-900"
              >
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Patterns (9 types)' : cat}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3 border-t border-stone-100">
            {/* Style Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-lg self-start" role="group" aria-label="Visual style filter">
              {STYLE_FILTERS.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setSelectedStyle(style)}
                  aria-pressed={selectedStyle === style}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedStyle === style
                      ? 'bg-white text-stone-950 shadow-xs'
                      : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {style === 'All' ? 'All Styles' : style}
                </button>
              ))}
            </div>

            {/* Column Count Tabs */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg" role="group" aria-label="Column count filter">
                {COLUMN_FILTERS.map((cols) => (
                  <button
                    key={String(cols)}
                    type="button"
                    onClick={() => setSelectedColumns(cols)}
                    aria-pressed={selectedColumns === cols}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap tabular-nums ${
                      selectedColumns === cols
                        ? 'bg-white text-stone-950 shadow-xs'
                        : 'text-stone-600 hover:text-stone-950'
                    }`}
                  >
                    {cols === 'All' ? 'Any Columns' : `${cols} Cols`}
                  </button>
                ))}
              </div>
              <span className="text-xs font-mono text-stone-500 tabular-nums whitespace-nowrap" data-testid="visible-count">
                {visibleItems.length} / {COMPARISON_CATALOG.length}
              </span>
            </div>
          </div>
        </section>

        {/* Quick Jump Directory */}
        <section id="directory" aria-label="Quick component directory" className="mb-12">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-sm font-semibold text-stone-900 font-display">Quick Directory</h2>
            <span className="text-xs text-stone-500">Click any component to jump directly</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
            {COMPARISON_CATALOG.map((item) => {
              const isVisible = visibleItems.some((v) => v.id === item.id);
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-lg border text-left transition-colors ${
                    isVisible
                      ? 'bg-white border-stone-200 hover:border-stone-400 text-stone-900'
                      : 'bg-stone-100/60 border-stone-200/60 text-stone-400 opacity-50 pointer-events-none'
                  }`}
                >
                  <div className="text-xs font-mono font-semibold tabular-nums">{item.name}</div>
                  <div className="text-xs text-stone-500 truncate mt-0.5">{item.title}</div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Live Rendered Components */}
        <div id="showcase-feed" className="space-y-16">
          {visibleItems.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-xl p-12 text-center">
              <h2 className="text-lg font-semibold text-stone-900 font-display mb-2">
                No matching comparison components
              </h2>
              <p className="text-sm text-stone-600 mb-6">
                Try clearing your style, column count, or search query filters to view all 20 components.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            visibleItems.map((item) => {
              const Comp = item.Component;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  data-testid="comparison-showcase-item"
                  className="scroll-mt-20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 mb-1">
                        <span className="font-mono font-semibold text-stone-800 tabular-nums">
                          {String(item.number).padStart(2, '0')}. {item.name}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.style}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.columnCount} Columns</span>
                      </div>
                      <h2 className="text-lg font-semibold text-stone-950 font-display">{item.title}</h2>
                      <p className="text-sm text-stone-600 mt-0.5">{item.description}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setInspectedItem(item)}
                      aria-label={`Inspect TSX code for ${item.name}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors self-start sm:self-auto whitespace-nowrap shrink-0"
                    >
                      <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspect {item.name} Code</span>
                    </button>
                  </div>

                  <Comp />
                </article>
              );
            })
          )}
        </div>
      </main>

      <footer className="border-t border-stone-200 mt-20 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <span>CompareKit · 20 Self-Contained React + Tailwind Comparison Components</span>
          <a href="#top" className="hover:text-stone-900 transition-colors">
            Back to top
          </a>
        </div>
      </footer>

      <CodeDrawer
        item={inspectedItem}
        sourceCode={inspectedItem ? COMPARISON_SOURCES[inspectedItem.id] ?? '' : ''}
        onClose={() => setInspectedItem(null)}
      />
    </div>
  );
}
