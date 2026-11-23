import { type ComponentType, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import {
  Vid1,
  Vid2,
  Vid3,
  Vid4,
  Vid5,
  Vid6,
  Vid7,
  Vid8,
  Vid9,
  Vid10,
  Vid11,
  Vid12,
  Vid13,
  Vid14,
  Vid15,
  Vid16,
  Vid17,
  Vid18,
  Vid19,
  Vid20,
} from './components/media';
import {
  COMPONENT_CATALOG,
  type MediaCategory,
  filterCatalog,
} from './utils/media';

const COMPONENT_MAP: Record<string, ComponentType> = {
  Vid1,
  Vid2,
  Vid3,
  Vid4,
  Vid5,
  Vid6,
  Vid7,
  Vid8,
  Vid9,
  Vid10,
  Vid11,
  Vid12,
  Vid13,
  Vid14,
  Vid15,
  Vid16,
  Vid17,
  Vid18,
  Vid19,
  Vid20,
};

const CATEGORY_TABS: ReadonlyArray<{ id: MediaCategory; label: string }> = [
  { id: 'all', label: 'All (20)' },
  { id: 'video', label: 'Video' },
  { id: 'audio', label: 'Audio' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'interactive', label: 'Interactive' },
];

export default function App() {
  const [category, setCategory] = useState<MediaCategory>('all');
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(
    () => filterCatalog(COMPONENT_CATALOG, category, query),
    [category, query],
  );

  const resetFilters = () => {
    setCategory('all');
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F6F7F9] text-slate-900 flex flex-col">
      {/* 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              resetFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 font-display"
          >
            Kinema Kit
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 ${
                category === 'all' ? 'text-slate-950 underline underline-offset-4' : ''
              }`}
            >
              All Components
            </button>
            <button
              type="button"
              onClick={() => setCategory('video')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 ${
                category === 'video' ? 'text-slate-950 underline underline-offset-4' : ''
              }`}
            >
              Video Players
            </button>
            <button
              type="button"
              onClick={() => setCategory('audio')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 ${
                category === 'audio' ? 'text-slate-950 underline underline-offset-4' : ''
              }`}
            >
              Audio &amp; Podcasts
            </button>
            <button
              type="button"
              onClick={() => setCategory('interactive')}
              className={`hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 ${
                category === 'interactive' ? 'text-slate-950 underline underline-offset-4' : ''
              }`}
            >
              Interactive Frames
            </button>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 rounded-lg bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              View All 20
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-10 sm:py-12 flex flex-col gap-10">
        {/* Editorial Hero & Filter Toolbar */}
        <section className="flex flex-col gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-3xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>React &amp; Tailwind UI Pattern Library</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">Vid1–Vid20</span>
              <span aria-hidden="true">·</span>
              <span>Self-contained SVG &amp; gradient frames</span>
            </div>
            <h1 className="text-[clamp(2rem,3.6vw,3.1rem)] font-bold tracking-tight text-slate-950 leading-[1.12] [text-wrap:balance]">
              Twenty embedded media components with functional playback state
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Explore 20 distinct video, audio, podcast, live stream, and interactive frame patterns built with zero external media dependencies. Every play button, scrubber, speed toggle, and switcher updates live state.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Segmented Filter Control */}
            <div
              role="group"
              aria-label="Filter media components by category"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start"
            >
              {CATEGORY_TABS.map((tab) => {
                const active = category === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setCategory(tab.id)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-slate-950 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <label htmlFor="component-search" className="sr-only">
                Search media components
              </label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="component-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Vid1–Vid20, podcast, live..."
                className="w-full h-10 pl-9 pr-9 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded text-slate-400 hover:text-slate-700 flex items-center justify-center"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Component Grid */}
        {visibleItems.length === 0 ? (
          <section className="bg-white border border-slate-200 rounded-xl p-10 text-center flex flex-col items-center gap-3">
            <h2 className="text-lg font-semibold text-slate-900">
              No matching media components
            </h2>
            <p className="text-sm text-slate-600 max-w-md">
              Try clearing your search filter or switching back to all 20 embedded media patterns.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 px-4 py-2 rounded-lg bg-slate-950 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </section>
        ) : (
          <section
            aria-label="Media component catalog"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {visibleItems.map((item) => {
              const Component = COMPONENT_MAP[item.id];
              const isFull = item.span === 'full' && category === 'all' && !query.trim();
              return (
                <div
                  key={item.id}
                  id={item.id}
                  data-testid={`component-slot-${item.id}`}
                  className={`flex flex-col gap-3 ${isFull ? 'lg:col-span-2' : 'lg:col-span-1'}`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 px-0.5">
                    <h2 className="text-base font-semibold text-slate-950 font-display">
                      {String(item.number).padStart(2, '0')}. {item.name}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-medium text-slate-700">{item.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.archetype}</span>
                    </div>
                  </div>
                  <Component />
                </div>
              );
            })}
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <span>Kinema Kit · 20 Self-Contained Media Components (Vid1–Vid20)</span>
          <span>Showing {visibleItems.length} of {COMPONENT_CATALOG.length} components</span>
        </div>
      </footer>
    </div>
  );
}
