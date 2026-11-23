import { useMemo, useState, type ComponentType } from 'react';
import { ArrowUp, RotateCcw, Search, X } from 'lucide-react';
import {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6,
  Btn7,
  Btn8,
  Btn9,
  Btn10,
  Btn11,
  Btn12,
  Btn13,
  Btn14,
  Btn15,
  Btn16,
  Btn17,
  Btn18,
  Btn19,
  Btn20,
} from './components/buttons';
import type { ControlSpec, FilterCategory } from './types/controls';
import {
  CATEGORY_LABELS,
  CONTROL_SPECS,
  countByCategory,
  filterControlSpecs,
} from './utils/catalogFilter';

const COMPONENT_MAP: Record<ControlSpec['id'], ComponentType> = {
  Btn1,
  Btn2,
  Btn3,
  Btn4,
  Btn5,
  Btn6,
  Btn7,
  Btn8,
  Btn9,
  Btn10,
  Btn11,
  Btn12,
  Btn13,
  Btn14,
  Btn15,
  Btn16,
  Btn17,
  Btn18,
  Btn19,
  Btn20,
};

const FILTER_ORDER: FilterCategory[] = ['all', 'core', 'feedback', 'utilities', 'links'];

export default function App() {
  const [category, setCategory] = useState<FilterCategory>('all');
  const [query, setQuery] = useState('');
  const [resetVersion, setResetVersion] = useState(0);

  const counts = useMemo(() => countByCategory(CONTROL_SPECS), []);
  const visibleSpecs = useMemo(
    () => filterControlSpecs(CONTROL_SPECS, category, query),
    [category, query]
  );

  const handleNavCategory = (target: FilterCategory) => {
    setCategory(target);
    const gridEl = document.getElementById('specimen-catalog');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setCategory('all');
              setQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight whitespace-nowrap shrink-0 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:rounded"
          >
            Control Foundry
          </a>

          <nav
            aria-label="Control categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <a
              href="#core-actions"
              onClick={(e) => {
                e.preventDefault();
                handleNavCategory('core');
              }}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Core Actions
            </a>
            <a
              href="#feedback-variants"
              onClick={(e) => {
                e.preventDefault();
                handleNavCategory('feedback');
              }}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Feedback & Variants
            </a>
            <a
              href="#state-disclosure"
              onClick={(e) => {
                e.preventDefault();
                handleNavCategory('utilities');
              }}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              State & Disclosure
            </a>
            <a
              href="#links-confirmation"
              onClick={(e) => {
                e.preventDefault();
                handleNavCategory('links');
              }}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Links & Confirmation
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setResetVersion((v) => v + 1)}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset All States</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <section className="border-b border-slate-200 pb-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-slate-500">
              Component Catalog · Btn1 to Btn20 · React &amp; Tailwind CSS
            </p>
            <h1 className="mt-2.5 text-3xl font-bold tracking-tight text-balance text-slate-950 sm:text-4xl">
              Twenty Interactive Button &amp; Link Control Specimens
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Self-contained React controls rendered in realistic interface contexts with live
              state management, keyboard focus rings, and accessible ARIA patterns.
            </p>
          </div>

          <div
            id="specimen-catalog"
            className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              role="group"
              aria-label="Filter controls by category"
              className="flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-slate-100/90 p-1"
            >
              {FILTER_ORDER.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(cat)}
                    className={`inline-flex min-h-[38px] items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      active
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{CATEGORY_LABELS[cat]}</span>
                    <span className="font-mono text-[11px] tabular-nums text-slate-400">
                      {counts[cat]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-80">
              <label htmlFor="control-search" className="sr-only">
                Search button and link controls
              </label>
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              />
              <input
                id="control-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by name, Btn1..20, or ARIA..."
                className="min-h-[42px] w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
              {query && (
                <button
                  type="button"
                  aria-label="Clear search query"
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span aria-live="polite" className="font-mono tabular-nums">
              Showing {visibleSpecs.length} of {CONTROL_SPECS.length} specimens
            </span>
            {(category !== 'all' || query) && (
              <button
                type="button"
                onClick={() => {
                  setCategory('all');
                  setQuery('');
                }}
                className="font-medium text-blue-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>

        {visibleSpecs.length > 0 ? (
          <section
            aria-label="Button and interactive control specimens"
            className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {visibleSpecs.map((spec) => {
              const ControlComponent = COMPONENT_MAP[spec.id];
              return <ControlComponent key={`${spec.id}-${resetVersion}`} />;
            })}
          </section>
        ) : (
          <section className="mt-10 rounded-xl border border-slate-200 bg-white px-6 py-14 text-center">
            <h2 className="text-lg font-semibold text-slate-900">
              No matching control specimens
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Try clearing your search term or switching back to all 20 controls.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setQuery('');
              }}
              className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Show All 20 Controls
            </button>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          <span>Control Foundry · Self-contained React &amp; Tailwind UI Specimens</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to top</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
