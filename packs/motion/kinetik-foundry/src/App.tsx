import React, { useMemo, useState } from 'react';
import { RotateCcw, Search, SlidersHorizontal } from 'lucide-react';
import {
  KINETIC_CATEGORIES,
  KINETIC_SPECIMENS,
  type KineticCategory,
  type KineticSpecimenMeta,
  filterSpecimens,
} from './utils/kineticCatalog';
import { getSpeedMultiplier, type SpeedScale } from './utils/kineticMath';
import { KINETIC_COMPONENTS, Ktxt1 } from './components/kinetic';
import { SpecimenCard } from './components/SpecimenCard';
import { CodeInspectorModal } from './components/CodeInspectorModal';

const SPEED_OPTIONS: { id: SpeedScale; label: string }[] = [
  { id: 'fast', label: 'Fast (0.6x)' },
  { id: 'normal', label: 'Standard (1x)' },
  { id: 'dramatic', label: 'Dramatic (1.6x)' },
];

export default function App() {
  const [category, setCategory] = useState<KineticCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customText, setCustomText] = useState('');
  const [speed, setSpeed] = useState<SpeedScale>('normal');
  const [globalReplayKey, setGlobalReplayKey] = useState(0);
  const [heroSpecimenId, setHeroSpecimenId] = useState<number>(1);
  const [inspectedSpecimen, setInspectedSpecimen] = useState<KineticSpecimenMeta | null>(null);

  const speedMultiplier = getSpeedMultiplier(speed);

  const visibleSpecimens = useMemo(
    () => filterSpecimens(KINETIC_SPECIMENS, category, searchQuery),
    [category, searchQuery],
  );

  const heroSpecimen =
    KINETIC_SPECIMENS.find((s) => s.id === heroSpecimenId) ?? KINETIC_SPECIMENS[0];
  const HeroComponent = KINETIC_COMPONENTS[heroSpecimen.id];

  const handleReplayAll = () => {
    setGlobalReplayKey((k) => k + 1);
  };

  const handleResetFilters = () => {
    setCategory('all');
    setSearchQuery('');
    setCustomText('');
    setSpeed('normal');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#121211]">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 border-b border-[#E5E3DD] bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#overview"
            className="font-display text-lg font-bold tracking-tight text-[#121211] whitespace-nowrap shrink-0"
          >
            Kinetik Foundry
          </a>

          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#62605B]"
          >
            <a
              href="#overview"
              className="hover:text-[#121211] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Overview
            </a>
            <a
              href="#playground"
              className="hover:text-[#121211] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Playground
            </a>
            <a
              href="#specimens"
              className="hover:text-[#121211] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Specimens
            </a>
            <a
              href="#architecture"
              className="hover:text-[#121211] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Architecture
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleReplayAll}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#121211] px-4 text-xs font-medium text-white transition-colors hover:bg-[#D9381E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Replay All</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-6">
        {/* Hero Split */}
        <section id="overview" className="py-12 lg:py-16 border-b border-[#E5E3DD]">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-medium text-[#62605B]">
                  Kinetic Typography Atlas · Ktxt1 through Ktxt20
                </p>
                <h1 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-[#121211] sm:text-5xl leading-[1.06] [text-wrap:balance]">
                  <Ktxt1
                    key={`hero-title-${globalReplayKey}`}
                    text="Type in motion, engineered to settle."
                    speed={speedMultiplier}
                  />
                </h1>
                <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#4A4843]">
                  Twenty self-contained React and Tailwind typography components powered by CSS
                  keyframes and staggered inline character delays. Every specimen settles cleanly
                  into its final legible frame.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#specimens"
                  className="inline-flex h-11 items-center rounded-lg bg-[#D9381E] px-5 text-sm font-medium text-white transition-colors hover:bg-[#B82D16] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0"
                >
                  Browse All 20 Specimens
                </a>
                <button
                  type="button"
                  onClick={() => setInspectedSpecimen(heroSpecimen)}
                  className="inline-flex h-11 items-center rounded-lg border border-[#E5E3DD] bg-white px-5 text-sm font-medium text-[#121211] transition-colors hover:border-[#121211] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect {heroSpecimen.componentName} Source
                </button>
              </div>
            </div>

            {/* Right Column Spotlight Stage */}
            <div className="flex flex-col justify-between rounded-xl border border-[#E5E3DD] bg-white p-6 lg:col-span-6 lg:h-full">
              <div className="flex items-center justify-between gap-4 border-b border-[#EFECE6] pb-3.5">
                <div className="text-xs text-[#62605B]">
                  <span className="font-semibold text-[#121211]">{heroSpecimen.componentName}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span>{heroSpecimen.title}</span>
                </div>
                <button
                  type="button"
                  onClick={handleReplayAll}
                  aria-label="Replay spotlight specimen"
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-[#E5E3DD] px-2.5 text-xs font-medium text-[#121211] hover:border-[#121211] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3 text-[#62605B]" aria-hidden="true" />
                  <span>Replay</span>
                </button>
              </div>

              <div className="flex min-h-[160px] items-center py-6 overflow-hidden">
                <HeroComponent
                  key={`spotlight-${heroSpecimen.id}-${globalReplayKey}-${speedMultiplier}-${customText}`}
                  text={customText.trim() || heroSpecimen.defaultText}
                  speed={speedMultiplier}
                  className="text-3xl sm:text-4xl leading-[1.12]"
                />
              </div>

              <div className="border-t border-[#EFECE6] pt-3.5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-[#62605B]">
                    Quick Spotlight Selector
                  </span>
                  <span className="font-mono text-xs text-[#62605B] tabular-nums">
                    {String(heroSpecimen.id).padStart(2, '0')} / 20
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
                  {KINETIC_SPECIMENS.map((item) => {
                    const active = item.id === heroSpecimen.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setHeroSpecimenId(item.id)}
                        aria-label={`Spotlight ${item.componentName}: ${item.title}`}
                        className={`h-10 sm:h-8 rounded-md font-mono text-xs tabular-nums transition-colors cursor-pointer ${
                          active
                            ? 'bg-[#121211] text-white font-semibold'
                            : 'bg-[#FAF9F6] text-[#62605B] hover:bg-[#EFECE6] hover:text-[#121211]'
                        }`}
                      >
                        {item.id}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 4-column typographic specification strip below hero split */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E5E3DD] pt-8 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold tabular-nums text-[#121211]">20</p>
              <p className="mt-1 text-xs text-[#62605B]">Distinct kinetic modules</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tabular-nums text-[#121211]">
                Inline Delay
              </p>
              <p className="mt-1 text-xs text-[#62605B]">Per-character CSS stagger</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tabular-nums text-[#121211]">
                Settled State
              </p>
              <p className="mt-1 text-xs text-[#62605B]">Fill-mode forwards clarity</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tabular-nums text-[#121211]">
                Zero Lock-In
              </p>
              <p className="mt-1 text-xs text-[#62605B]">Self-contained React + Tailwind</p>
            </div>
          </div>
        </section>

        {/* Playground Control Toolbar */}
        <section id="playground" className="py-8 border-b border-[#E5E3DD]">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <label
                  htmlFor="custom-specimen-text"
                  className="block text-xs font-medium text-[#62605B] mb-1.5"
                >
                  Live Specimen Text Override
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="custom-specimen-text"
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Type a custom headline to test across all 20 components..."
                    className="h-11 w-full rounded-lg border border-[#E5E3DD] bg-white px-3.5 text-sm text-[#121211] placeholder:text-[#8E8A82] focus:border-[#121211] focus:outline-none"
                  />
                  {customText && (
                    <button
                      type="button"
                      onClick={() => setCustomText('')}
                      className="h-11 rounded-lg border border-[#E5E3DD] bg-white px-3.5 text-xs font-medium text-[#121211] hover:border-[#121211] whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Reset Text
                    </button>
                  )}
                </div>
              </div>

              <div className="lg:col-span-3">
                <label
                  htmlFor="specimen-search"
                  className="block text-xs font-medium text-[#62605B] mb-1.5"
                >
                  Search Techniques
                </label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8E8A82]"
                    aria-hidden="true"
                  />
                  <input
                    id="specimen-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter e.g. blur, glitch, flip..."
                    className="h-11 w-full rounded-lg border border-[#E5E3DD] bg-white pl-9 pr-3.5 text-sm text-[#121211] placeholder:text-[#8E8A82] focus:border-[#121211] focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-3">
                <span className="flex items-center gap-1.5 text-xs font-medium text-[#62605B] mb-1.5">
                  <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Stagger Speed</span>
                </span>
                <div
                  role="group"
                  aria-label="Stagger speed"
                  className="grid grid-cols-3 gap-1 rounded-lg border border-[#E5E3DD] bg-[#F1EFEA] p-1"
                >
                  {SPEED_OPTIONS.map((opt) => {
                    const active = speed === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSpeed(opt.id)}
                        className={`h-9 rounded-md px-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-white text-[#121211] shadow-xs'
                            : 'text-[#62605B] hover:text-[#121211]'
                        }`}
                      >
                        {opt.label.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="tablist"
                aria-label="Filter components by category"
                className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#E5E3DD] bg-[#F1EFEA] p-1"
              >
                {KINETIC_CATEGORIES.map((cat) => {
                  const active = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCategory(cat.id)}
                      className={`h-9 rounded-md px-3.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-white text-[#121211] shadow-xs'
                          : 'text-[#62605B] hover:text-[#121211]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#62605B] font-mono tabular-nums">
                Showing {visibleSpecimens.length} of {KINETIC_SPECIMENS.length} components
              </p>
            </div>
          </div>
        </section>

        {/* 20-Component Specimen Grid */}
        <section id="specimens" className="py-10">
          {visibleSpecimens.length === 0 ? (
            <div className="rounded-xl border border-[#E5E3DD] bg-white p-12 text-center">
              <p className="font-display text-lg font-semibold text-[#121211]">
                No kinetic specimens match your filter
              </p>
              <p className="mt-1.5 text-sm text-[#62605B]">
                Clear your search term or reset the active category to view all 20 components.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex h-10 items-center rounded-lg bg-[#121211] px-4 text-xs font-medium text-white hover:bg-[#D9381E] cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {visibleSpecimens.map((specimen) => (
                <SpecimenCard
                  key={specimen.id}
                  specimen={specimen}
                  customText={customText}
                  speedMultiplier={speedMultiplier}
                  globalReplayKey={globalReplayKey}
                  onInspect={setInspectedSpecimen}
                />
              ))}
            </div>
          )}
        </section>

        {/* Architecture Reference Section */}
        <section id="architecture" className="border-t border-[#E5E3DD] py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h2 className="font-display text-lg font-bold text-[#121211]">
                01. Word-Safe Character Stagger
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#62605B]">
                Every character-level component wraps tokens by word inside{' '}
                <code className="font-mono text-xs text-[#121211]">whitespace-nowrap</code> groups
                while calculating a sequential global character index for inline{' '}
                <code className="font-mono text-xs text-[#121211]">animationDelay</code>.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#121211]">
                02. Animated-to-Final Settlement
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#62605B]">
                Entrance and editorial reveals use{' '}
                <code className="font-mono text-xs text-[#121211]">animationFillMode: both</code>{' '}
                with compositor-friendly transforms so headings always lock cleanly into crisp
                readable ink.
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#121211]">
                03. Accessible & Reduced-Motion Safe
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#62605B]">
                Full strings remain exposed via{' '}
                <code className="font-mono text-xs text-[#121211]">aria-label</code> on each root
                container while decorative split spans are hidden from screen readers and honor{' '}
                <code className="font-mono text-xs text-[#121211]">prefers-reduced-motion</code>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E3DD] bg-[#FAF9F6]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[#62605B]">
          <span>Kinetik Foundry · 20 Self-Contained React + Tailwind Typography Components</span>
          <a href="#overview" className="hover:text-[#121211] transition-colors">
            Back to top
          </a>
        </div>
      </footer>

      <CodeInspectorModal
        specimen={inspectedSpecimen}
        customText={customText}
        speedMultiplier={speedMultiplier}
        onClose={() => setInspectedSpecimen(null)}
      />
    </div>
  );
}
