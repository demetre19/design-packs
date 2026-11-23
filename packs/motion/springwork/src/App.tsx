/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import { RotateCcw, Search, X } from 'lucide-react';
import { PHYS_COMPONENT_MAP } from './components/phys';
import {
  SPECIMEN_REGISTRY,
  filterPhysSpecimens,
  type SpecimenCategory,
} from './utils/physicsMath';

type FilterOption = 'all' | SpecimenCategory;

const CATEGORY_TABS: { id: FilterOption; label: string; count: number }[] = [
  { id: 'all', label: 'All Specimens', count: 20 },
  { id: 'controls', label: 'Controls & Inputs', count: 7 },
  { id: 'containers', label: 'Containers & Layout', count: 7 },
  { id: 'motion', label: 'Motion & Spatial', count: 6 },
];

export default function App() {
  const [category, setCategory] = useState<FilterOption>('all');
  const [query, setQuery] = useState('');
  const [resetEpoch, setResetEpoch] = useState(0);

  const visibleSpecimens = useMemo(
    () => filterPhysSpecimens(SPECIMEN_REGISTRY, category, query),
    [category, query]
  );

  const handleNavSelect = (nextCategory: FilterOption) => {
    setCategory(nextCategory);
    const el = document.getElementById('specimens');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] text-[#141413]">
      {/* Top Bar Contract: Brand wordmark — 4 single-line nav links — 1 primary action */}
      <header className="sticky top-0 z-30 bg-[#F6F6F4]/95 backdrop-blur-sm border-b border-[#E4E4E0]">
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#141413] whitespace-nowrap shrink-0"
          >
            Springwork
          </a>

          <nav
            aria-label="Specimen categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#575753]"
          >
            <button
              type="button"
              onClick={() => handleNavSelect('all')}
              className={`hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                category === 'all' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              All Specimens
            </button>
            <button
              type="button"
              onClick={() => handleNavSelect('controls')}
              className={`hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                category === 'controls' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Controls
            </button>
            <button
              type="button"
              onClick={() => handleNavSelect('containers')}
              className={`hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                category === 'containers' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Containers
            </button>
            <button
              type="button"
              onClick={() => handleNavSelect('motion')}
              className={`hover:text-[#141413] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                category === 'motion' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Motion
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setResetEpoch((e) => e + 1)}
            className="min-h-10 px-4 py-2 rounded-lg bg-[#141413] text-white text-xs font-medium hover:bg-[#272725] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All
          </button>
        </div>
      </header>

      <main id="top" className="flex-1 max-w-[1320px] w-full mx-auto px-6 py-10 md:py-14">
        {/* Hero Overview */}
        <section className="max-w-3xl">
          <p className="text-xs font-medium text-[#575753]">
            Tactile UI Mechanics · Phys1 – Phys20
          </p>
          <h1
            className="font-display font-bold tracking-tight text-[#141413] mt-2 text-balance"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3.15rem)', lineHeight: 1.12 }}
          >
            Twenty physics-feel interactions built with spring curves and press states.
          </h1>
          <p className="text-base text-[#575753] leading-relaxed mt-4 max-w-2xl">
            Every specimen below is an independent React and Tailwind component
            driven by <code className="font-mono text-sm text-[#141413]">useState</code>{' '}
            press tracking and overshoot{' '}
            <code className="font-mono text-sm text-[#1D4ED8]">cubic-bezier</code>{' '}
            timing functions. Click, drag, flick, or submit each stage directly.
          </p>
        </section>

        {/* Filter & Search Toolbar */}
        <section
          id="specimens"
          aria-label="Filter specimens"
          className="mt-10 pb-6 border-b border-[#E4E4E0] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div
            role="tablist"
            aria-label="Filter by interaction category"
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#EAEAE5] w-fit"
          >
            {CATEGORY_TABS.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(tab.id)}
                  className={`min-h-10 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#141413] shadow-sm'
                      : 'text-[#575753] hover:text-[#141413]'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="specimen-search" className="sr-only">
              Search physics specimens
            </label>
            <Search className="w-4 h-4 text-[#6B6B66] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="specimen-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Phys1–20, modal, slider..."
              className="w-full h-10 pl-9 pr-9 rounded-lg border border-[#D4D4CE] bg-white text-sm text-[#141413] placeholder:text-[#8E8E87] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery('')}
                className="w-7 h-7 rounded flex items-center justify-center text-[#6B6B66] hover:text-[#141413] absolute right-1.5 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </section>

        {/* Specimen Grid */}
        {visibleSpecimens.length === 0 ? (
          <div className="mt-10 py-16 px-6 rounded-2xl bg-white border border-[#E4E4E0] text-center">
            <p className="text-base font-semibold text-[#141413]">
              No matching specimens found
            </p>
            <p className="text-sm text-[#575753] mt-1">
              Try another keyword or reset the active category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setQuery('');
              }}
              className="mt-4 min-h-10 px-4 py-2 rounded-lg bg-[#141413] text-white text-xs font-medium hover:bg-[#272725] cursor-pointer whitespace-nowrap"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <section
            aria-label="Interactive physics components"
            className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {visibleSpecimens.map((specimen) => {
              const Component = PHYS_COMPONENT_MAP[specimen.id];
              return (
                <article
                  key={specimen.id}
                  data-testid={`specimen-${specimen.id}`}
                  className="rounded-2xl bg-white border border-[#E4E4E0] p-6 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-[#6B6B66]">
                      <span>
                        <span className="font-mono tabular-nums text-[#141413] font-medium">
                          {String(specimen.number).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true" className="mx-1.5">
                          ·
                        </span>
                        <span>{specimen.categoryLabel}</span>
                      </span>
                      <span className="font-mono text-[#1D4ED8] font-medium">
                        {specimen.id}
                      </span>
                    </div>

                    <h2 className="font-display text-lg font-semibold text-[#141413] mt-2">
                      {specimen.title}
                    </h2>
                    <p className="text-xs text-[#575753] leading-relaxed mt-1">
                      {specimen.mechanic}
                    </p>
                  </div>

                  <div className="min-h-[164px] flex items-center justify-center py-2">
                    <Component key={`${specimen.id}-${resetEpoch}`} />
                  </div>

                  <div className="pt-3 border-t border-[#EFEFEB] flex items-center justify-between gap-2">
                    <code className="font-mono text-[11px] text-[#575753] truncate">
                      {specimen.curve}
                    </code>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>

      <footer className="border-t border-[#E4E4E0] mt-12">
        <div className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6B66]">
          <span>Springwork — 20 Self-Contained Physics-Feel React Components</span>
          <span className="font-mono tabular-nums">
            Showing {visibleSpecimens.length} of {SPECIMEN_REGISTRY.length} specimens
          </span>
        </div>
      </footer>
    </div>
  );
}
