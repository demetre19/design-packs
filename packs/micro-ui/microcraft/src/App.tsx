import { useState } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import {
  MICRO_CATALOG,
  filterMicroItems,
  type MicroCategory,
  type StyleTone,
} from './utils/microCatalog';
import { MICRO_COMPONENT_MAP } from './components/micro';

const CATEGORY_LINKS: { id: MicroCategory; label: string }[] = [
  { id: 'all', label: 'All 20' },
  { id: 'tooltips', label: 'Tooltips' },
  { id: 'popovers', label: 'Popovers' },
  { id: 'menus', label: 'Menus' },
  { id: 'indicators', label: 'Indicators' },
];

const STYLE_TONES: { id: StyleTone | 'all'; label: string }[] = [
  { id: 'all', label: 'All Styles' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'dark', label: 'Dark' },
  { id: 'colourful', label: 'Colourful' },
  { id: 'professional', label: 'Professional' },
];

export default function App() {
  const [category, setCategory] = useState<MicroCategory>('all');
  const [styleFilter, setStyleFilter] = useState<StyleTone | 'all'>('all');
  const [query, setQuery] = useState('');
  const [resetEpoch, setResetEpoch] = useState(0);

  const visibleSpecs = filterMicroItems(MICRO_CATALOG, category, styleFilter, query);

  const handleResetAll = () => {
    setResetEpoch((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900">
      {/* Top Bar Contract: Brand wordmark — 5 clean single-line nav links — 1 primary action */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setCategory('all');
              setStyleFilter('all');
              setQuery('');
            }}
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Microcraft
          </a>

          <nav
            aria-label="Component categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium"
          >
            {CATEGORY_LINKS.map((link) => {
              const active = category === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => setCategory(link.id)}
                  className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-xs ${
                    active
                      ? 'text-slate-950 border-slate-900'
                      : 'text-slate-500 border-transparent hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset All Open</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12">
        {/* Editorial Header */}
        <section className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
            Twenty micro-interactions, rendered open by default.
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Each component from Micro1 through Micro20 pairs a live trigger with its open
            overlay in context. Click triggers, toggle checkboxes, filter actions, or dismiss
            alerts directly inside any frame.
          </p>
        </section>

        {/* Workspace Filter Toolbar */}
        <section
          aria-label="Filter components"
          className="mt-8 pb-6 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-3">
            {/* Mobile category switcher */}
            <div className="flex md:hidden items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
              {CATEGORY_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => setCategory(link.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                    category === link.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Style tone segmented filter */}
            <div
              role="group"
              aria-label="Filter by visual style"
              className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full"
            >
              {STYLE_TONES.map((tone) => {
                const active = styleFilter === tone.id;
                return (
                  <button
                    key={tone.id}
                    type="button"
                    onClick={() => setStyleFilter(tone.id)}
                    className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                      active
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tone.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="text-xs font-medium text-slate-500 tabular-nums whitespace-nowrap">
              {visibleSpecs.length} of {MICRO_CATALOG.length} shown
            </span>

            <div className="relative w-full sm:w-64">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="catalog-search" className="sr-only">
                Search micro-components
              </label>
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Micro1–Micro20..."
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Showcase Grid */}
        {visibleSpecs.length === 0 ? (
          <div className="mt-12 py-16 px-6 rounded-2xl bg-white border border-slate-200 text-center">
            <h2 className="text-base font-semibold text-slate-900">
              No components match your current filter
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Clear the search query or reset category and style filters to view all 20 components.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setStyleFilter('all');
                setQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
            >
              Show All 20 Components
            </button>
          </div>
        ) : (
          <section
            aria-label="Component catalog"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch"
          >
            {visibleSpecs.map((spec) => {
              const MicroComponent = MICRO_COMPONENT_MAP[spec.name];
              const stageBg =
                spec.surfaceTheme === 'dark'
                  ? 'bg-slate-900/95'
                  : spec.surfaceTheme === 'tinted'
                  ? 'bg-indigo-50/45'
                  : 'bg-[#F8FAFC]';

              return (
                <article
                  key={`${spec.name}-${resetEpoch}`}
                  data-testid={`card-${spec.name}`}
                  className="flex flex-col rounded-2xl bg-white border border-slate-200 transition-colors"
                >
                  <div className="px-5 pt-5 pb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono font-semibold text-slate-900">
                        {spec.name}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{spec.styleTone}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[11px] text-slate-400">
                        role=&quot;{spec.ariaRole}&quot;
                      </span>
                    </div>
                    <h2 className="mt-1.5 font-display text-base font-semibold text-slate-900">
                      {spec.title}
                    </h2>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      {spec.summary}
                    </p>
                  </div>

                  <div
                    className={`flex-1 px-4 py-6 rounded-b-2xl border-t border-slate-100 flex items-center justify-center ${stageBg} ${spec.minStageHeightClass}`}
                  >
                    <MicroComponent />
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
