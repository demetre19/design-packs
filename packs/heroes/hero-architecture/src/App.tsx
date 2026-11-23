import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Code2, Maximize2, Monitor, Search, Smartphone, Tablet, X } from 'lucide-react';
import {
  HERO_META,
  PATTERN_OPTIONS,
  STYLE_OPTIONS,
  filterHeroes,
  type HeroMetadata,
  type HeroPattern,
  type HeroStyle,
} from './data/heroCatalog';
import { HERO_REGISTRY } from './components/heroes/registry';
import { SourceDrawer } from './components/SourceDrawer';

type FrameWidth = 'desktop' | 'tablet' | 'mobile';

export default function App() {
  const [styleFilter, setStyleFilter] = useState<'all' | HeroStyle>('all');
  const [patternFilter, setPatternFilter] = useState<'all' | HeroPattern>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [focusHeroNumber, setFocusHeroNumber] = useState<number | null>(null);
  const [frameWidth, setFrameWidth] = useState<FrameWidth>('desktop');
  const [sourceHero, setSourceHero] = useState<HeroMetadata | null>(null);

  const filteredHeroes = useMemo(
    () =>
      filterHeroes(HERO_META, {
        style: styleFilter,
        pattern: patternFilter,
        query: searchQuery,
      }),
    [styleFilter, patternFilter, searchQuery]
  );

  const focusedHero = useMemo(
    () => (focusHeroNumber !== null ? HERO_META.find((h) => h.number === focusHeroNumber) ?? null : null),
    [focusHeroNumber]
  );

  const handleResetFilters = () => {
    setStyleFilter('all');
    setPatternFilter('all');
    setSearchQuery('');
  };

  const frameClass =
    frameWidth === 'mobile'
      ? 'max-w-[390px] mx-auto border-x border-stone-300 shadow-lg'
      : frameWidth === 'tablet'
      ? 'max-w-[768px] mx-auto border-x border-stone-300 shadow-md'
      : 'w-full';

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setFocusHeroNumber(null);
            }}
            className="text-lg font-semibold tracking-tight text-stone-950 whitespace-nowrap shrink-0"
          >
            Hero Architecture
          </a>

          <nav aria-label="Catalog sections" className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#gallery"
              onClick={() => setFocusHeroNumber(null)}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#index"
              onClick={() => setFocusHeroNumber(null)}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Index
            </a>
            <button
              type="button"
              onClick={() => {
                setFocusHeroNumber(null);
                setStyleFilter('dark');
              }}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Dark Series
            </button>
            <button
              type="button"
              onClick={() => {
                setFocusHeroNumber(null);
                setStyleFilter('warm-editorial');
              }}
              className="hover:text-stone-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Editorial Series
            </button>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                if (focusHeroNumber !== null) {
                  setFocusHeroNumber(null);
                } else {
                  setFrameWidth('desktop');
                  setFocusHeroNumber(filteredHeroes[0]?.number ?? 1);
                }
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
            >
              {focusHeroNumber !== null ? 'Back to Gallery' : 'Inspect Solo'}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {focusedHero ? (
          /* Focused Solo Inspection View */
          <div className="pb-16">
            <div className="bg-stone-100 border-b border-stone-200 px-6 py-4">
              <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <button
                    type="button"
                    onClick={() => setFocusHeroNumber(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap shrink-0"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>All 20 Heroes</span>
                  </button>

                  <div className="min-w-0 text-sm text-stone-700 truncate">
                    <span className="font-mono font-semibold text-stone-950 tabular-nums">
                      {String(focusedHero.number).padStart(2, '0')}
                    </span>
                    <span className="mx-2 text-stone-400">·</span>
                    <span className="font-semibold text-stone-950">{focusedHero.name}</span>
                    <span className="mx-2 text-stone-400">·</span>
                    <span>{focusedHero.brand}</span>
                    <span className="mx-2 text-stone-400 hidden sm:inline">·</span>
                    <span className="text-stone-500 hidden sm:inline">{focusedHero.patternLabel}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Responsive Viewport Preview Controls */}
                  <div role="group" aria-label="Viewport width preview" className="flex items-center gap-1 p-1 bg-white border border-stone-300 rounded-md">
                    <button
                      type="button"
                      onClick={() => setFrameWidth('desktop')}
                      aria-label="Desktop width preview"
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        frameWidth === 'desktop' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Desktop</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrameWidth('tablet')}
                      aria-label="Tablet width preview"
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        frameWidth === 'tablet' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <Tablet className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">768px</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrameWidth('mobile')}
                      aria-label="Mobile width preview"
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                        frameWidth === 'mobile' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">390px</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSourceHero(focusedHero)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>View TSX</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      aria-label="Previous hero"
                      onClick={() =>
                        setFocusHeroNumber((prev) => (prev && prev > 1 ? prev - 1 : 20))
                      }
                      className="inline-flex items-center justify-center w-8 h-8 bg-white border border-stone-300 rounded-md text-stone-700 hover:text-stone-950"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next hero"
                      onClick={() =>
                        setFocusHeroNumber((prev) => (prev && prev < 20 ? prev + 1 : 1))
                      }
                      className="inline-flex items-center justify-center w-8 h-8 bg-white border border-stone-300 rounded-md text-stone-700 hover:text-stone-950"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-200/60 min-h-[70vh] py-6 px-0 sm:px-6">
              <div className={`${frameClass} bg-white overflow-hidden transition-all`}>
                {(() => {
                  const ActiveHero = HERO_REGISTRY[focusedHero.number].Component;
                  return <ActiveHero />;
                })()}
              </div>
            </div>
          </div>
        ) : (
          /* Main Gallery Stream View */
          <>
            <section className="mx-auto max-w-7xl px-6 pt-12 pb-8 border-b border-stone-200">
              <div className="max-w-3xl">
                <p className="text-xs font-medium tracking-wider uppercase text-stone-500 mb-3">
                  20 Self-Contained React + Tailwind Sections · Semantic &lt;header&gt; &amp; &lt;section&gt;
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-950 leading-tight [text-wrap:balance]">
                  Twenty architectural hero patterns across four typographic palettes
                </h1>
                <p className="mt-3 text-base text-stone-600 leading-relaxed">
                  Each component (`Hero1` through `Hero20`) ships with a 3-zone semantic header, real heading hierarchy, interactive controls, and copy-ready TSX source.
                </p>
              </div>

              {/* Filter & Search Toolbar */}
              <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div role="tablist" aria-label="Filter heroes by visual style" className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/70 rounded-lg w-fit">
                  {STYLE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      role="tab"
                      aria-selected={styleFilter === option.id}
                      onClick={() => setStyleFilter(option.id)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                        styleFilter === option.id
                          ? 'bg-white text-stone-950 shadow-sm'
                          : 'text-stone-600 hover:text-stone-950'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <label htmlFor="hero-search" className="sr-only">
                      Search heroes by brand, pattern, or style
                    </label>
                    <input
                      id="hero-search"
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search brand or pattern..."
                      className="pl-9 pr-8 py-2 w-60 text-sm bg-white border border-stone-300 rounded-md placeholder:text-stone-400 focus:outline-none focus:border-stone-900"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        aria-label="Clear search query"
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <label htmlFor="pattern-select" className="sr-only">
                    Filter by layout pattern
                  </label>
                  <select
                    id="pattern-select"
                    value={patternFilter}
                    onChange={(e) => setPatternFilter(e.target.value as 'all' | HeroPattern)}
                    className="px-3 py-2 text-sm bg-white border border-stone-300 rounded-md text-stone-800 focus:outline-none focus:border-stone-900"
                  >
                    {PATTERN_OPTIONS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <span data-testid="hero-count" className="text-xs font-mono text-stone-500 tabular-nums whitespace-nowrap">
                    {filteredHeroes.length} of 20 shown
                  </span>
                </div>
              </div>
            </section>

            {/* Quick Directory Index */}
            <section id="index" className="mx-auto max-w-7xl px-6 py-5 border-b border-stone-200 bg-white">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-xs font-medium text-stone-500 whitespace-nowrap shrink-0 mr-2">
                  Jump to:
                </span>
                {filteredHeroes.map((hero) => (
                  <a
                    key={hero.id}
                    href={`#${hero.id}`}
                    className="px-2.5 py-1 text-xs font-mono text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded transition-colors whitespace-nowrap shrink-0 tabular-nums"
                  >
                    {String(hero.number).padStart(2, '0')} · {hero.brand}
                  </a>
                ))}
              </div>
            </section>

            {/* Live Hero Gallery Stack */}
            <section id="gallery" className="mx-auto max-w-[1440px] px-4 sm:px-6 py-10 space-y-14">
              {filteredHeroes.length === 0 ? (
                <div className="mx-auto max-w-xl py-20 text-center bg-white border border-stone-200 rounded-lg px-6">
                  <p className="text-base font-semibold text-stone-900">
                    No hero sections match your current filters
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    Try clearing your search query or switching back to all styles and patterns.
                  </p>
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                filteredHeroes.map((hero) => {
                  const HeroComponent = HERO_REGISTRY[hero.number].Component;
                  return (
                    <article
                      key={hero.id}
                      id={hero.id}
                      data-testid={hero.id}
                      className="rounded-xl border border-stone-300 bg-white overflow-hidden shadow-xs"
                    >
                      {/* Unboxed Specification Strip */}
                      <div className="px-5 py-3.5 bg-stone-100/90 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-stone-600">
                          <span className="font-mono font-semibold text-stone-950 tabular-nums">
                            {String(hero.number).padStart(2, '0')}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-stone-950">{hero.name}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-medium text-stone-800">{hero.brand}</span>
                          <span aria-hidden="true">·</span>
                          <span>{hero.patternLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{hero.styleLabel}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setFrameWidth('desktop');
                              setFocusHeroNumber(hero.number);
                            }}
                            aria-label={`Inspect ${hero.name} in solo view`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:border-stone-900 hover:text-stone-950 transition-colors whitespace-nowrap"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Solo View</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setSourceHero(hero)}
                            aria-label={`View TSX source for ${hero.name}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-900 bg-white border border-stone-300 rounded hover:border-stone-900 transition-colors whitespace-nowrap"
                          >
                            <Code2 className="w-3.5 h-3.5" />
                            <span>View Code</span>
                          </button>
                        </div>
                      </div>

                      {/* Rendered Self-Contained Hero Component */}
                      <div>
                        <HeroComponent />
                      </div>
                    </article>
                  );
                })
              )}
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-stone-200 bg-white py-8 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
          <span>Hero Architecture Compendium — 20 Self-Contained React &amp; Tailwind Sections</span>
          <span>Hero1 through Hero20 · Semantic &lt;header&gt; &amp; &lt;section&gt;</span>
        </div>
      </footer>

      <SourceDrawer
        hero={sourceHero}
        source={sourceHero ? HERO_REGISTRY[sourceHero.number].source : ''}
        onClose={() => setSourceHero(null)}
      />
    </div>
  );
}
