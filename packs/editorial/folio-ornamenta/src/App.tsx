import React, { useMemo, useState } from 'react';
import { BookOpen, LayoutGrid, Search, X } from 'lucide-react';
import {
  SPECIMEN_CATALOG,
  SPECIMEN_CATEGORIES,
  SpecimenCategory,
  filterSpecimens,
  getCategoryCounts,
} from './utils/specimenCatalog';
import { SpecimenCard } from './components/SpecimenCard';
import { EssayView } from './components/EssayView';

type ViewMode = 'grid' | 'essay';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedCategory, setSelectedCategory] = useState<SpecimenCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryCounts = useMemo(() => getCategoryCounts(SPECIMEN_CATALOG), []);

  const filteredSpecimens = useMemo(
    () =>
      filterSpecimens(SPECIMEN_CATALOG, {
        category: selectedCategory,
        query: searchQuery,
      }),
    [selectedCategory, searchQuery]
  );

  const handleNavCategory = (category: SpecimenCategory | 'All') => {
    setViewMode('grid');
    setSelectedCategory(category);
    const gridEl = document.getElementById('specimen-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleViewMode = (targetMode?: ViewMode) => {
    setViewMode((prev) => targetMode ?? (prev === 'grid' ? 'essay' : 'grid'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#181715]">
      <header className="sticky top-0 z-40 border-b border-[#E5E0D5] bg-[#FAF8F4]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setViewMode('grid');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#181715] whitespace-nowrap shrink-0"
          >
            Folio Ornamenta
          </a>

          <nav
            aria-label="Primary categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534E]"
          >
            <button
              type="button"
              onClick={() => handleNavCategory('All')}
              className="hover:text-[#181715] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Specimens
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Quotes & Prose')}
              className="hover:text-[#181715] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Quotes
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Callouts & Navigation')}
              className="hover:text-[#181715] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Callouts
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Inline & Micro')}
              className="hover:text-[#181715] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Micro-Type
            </button>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => toggleViewMode()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181715] text-white text-xs sm:text-sm font-medium hover:bg-[#292524] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
            >
              {viewMode === 'grid' ? (
                <>
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  <span>Essay View</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-4 h-4" aria-hidden="true" />
                  <span>Specimen Grid</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-8">
        {viewMode === 'essay' ? (
          <EssayView onBackToGrid={() => toggleViewMode('grid')} />
        ) : (
          <>
            <section className="py-10 sm:py-14 border-b border-[#E5E0D5]">
              <div className="max-w-3xl">
                <p className="text-xs tracking-wide text-[#57534E]">
                  Editorial Specimen Catalogue · 20 Self-Contained Components · Deco1–Deco20
                </p>
                <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#181715] leading-[1.12] text-balance">
                  Content-Decoration Components for Long-Form Reading
                </h1>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#57534E] max-w-2xl">
                  Twenty distinct, semantic React and Tailwind specimens—spanning oversized blockquotes, pull quotes, inline stats, glossary tooltips, callout boxes, decorative lists, and tactile keycaps.
                </p>
              </div>
            </section>

            <section
              id="specimen-grid"
              aria-label="Specimen catalogue controls"
              className="py-6 border-b border-[#E5E0D5] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              <div
                role="tablist"
                aria-label="Filter by decoration category"
                className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#EFECE4] border border-[#E5E0D5]"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === 'All'}
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === 'All'
                      ? 'bg-white text-[#181715] shadow-xs'
                      : 'text-[#57534E] hover:text-[#181715]'
                  }`}
                >
                  All <span className="font-mono tabular-nums ml-1 text-[#78716C]">{categoryCounts.All}</span>
                </button>
                {SPECIMEN_CATEGORIES.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-white text-[#181715] shadow-xs'
                          : 'text-[#57534E] hover:text-[#181715]'
                      }`}
                    >
                      {category}{' '}
                      <span className="font-mono tabular-nums ml-1 text-[#78716C]">
                        {categoryCounts[category]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <label htmlFor="specimen-search" className="sr-only">
                    Search specimens
                  </label>
                  <Search
                    className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="specimen-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Deco1–20 or HTML tag…"
                    className="w-full rounded-lg border border-[#D6CEBE] bg-white pl-9 pr-8 py-2 text-sm text-[#181715] placeholder:text-[#78716C] focus:border-[#1E3A8A] focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#181715] cursor-pointer"
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <span
                  data-testid="specimen-count"
                  className="text-xs font-mono tabular-nums text-[#57534E] whitespace-nowrap shrink-0"
                >
                  {filteredSpecimens.length} / {SPECIMEN_CATALOG.length}
                </span>
              </div>
            </section>

            <section aria-label="Specimen cards" className="py-8 sm:py-10">
              {filteredSpecimens.length === 0 ? (
                <div className="rounded-xl border border-[#E5E0D5] bg-white p-10 text-center space-y-3">
                  <p className="font-serif text-xl text-[#181715]">
                    No specimens match &ldquo;{searchQuery}&rdquo;
                  </p>
                  <p className="text-sm text-[#57534E]">
                    Try searching by component name (e.g. blockquote, kbd, footnote) or reset active filters.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-2 inline-flex items-center px-4 py-2 rounded-lg border border-[#D6CEBE] bg-[#FAF8F4] text-sm font-medium text-[#181715] hover:bg-[#F2EFE9] transition-colors cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {filteredSpecimens.map((specimen) => (
                    <SpecimenCard key={specimen.id} specimen={specimen} />
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-[#E5E0D5] bg-[#FAF8F4]">
        <div className="mx-auto max-w-6xl px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#78716C]">
          <span>Folio Ornamenta · Semantic React &amp; Tailwind Specimens</span>
          <span>Deco1–Deco20 · Built for long-form editorial craft</span>
        </div>
      </footer>
    </div>
  );
}
