import React, { useMemo, useState } from 'react';
import { Code2, Pause, Play, Search } from 'lucide-react';
import { AMBIENT_CATALOG } from './data/ambientCatalog';
import { AMBIENT_REGISTRY } from './data/ambientRegistry';
import type { AmbientCategory } from './data/ambientTypes';
import {
  filterAmbientItems,
  formatAmbientIndex,
  getAdjacentAmbientId,
} from './data/ambientUtils';
import { AmbientInspectorModal } from './components/AmbientInspectorModal';

const CATEGORY_TABS: { id: AmbientCategory; label: string }[] = [
  { id: 'all', label: 'All (20)' },
  { id: 'gradients', label: 'Gradients & Glow' },
  { id: 'particles', label: 'Particles & Stars' },
  { id: 'geometry', label: 'Geometry & Grids' },
  { id: 'atmospheres', label: 'Mist, Waves & Light' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<AmbientCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [paused, setPaused] = useState(false);
  const [inspectedId, setInspectedId] = useState<string | null>(null);
  const [heroPreviewId, setHeroPreviewId] = useState<string>('Amb1');

  const filteredItems = useMemo(
    () => filterAmbientItems(AMBIENT_CATALOG, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  const inspectedItem = useMemo(
    () => AMBIENT_CATALOG.find((item) => item.id === inspectedId) ?? null,
    [inspectedId]
  );

  const heroEntry = AMBIENT_REGISTRY[heroPreviewId] ?? AMBIENT_REGISTRY.Amb1;
  const HeroAmbient = heroEntry.Component;

  const handleNavigateInspector = (direction: 'prev' | 'next') => {
    if (!inspectedId) return;
    const nextId = getAdjacentAmbientId(AMBIENT_CATALOG, inspectedId, direction);
    if (nextId) {
      setInspectedId(nextId);
    }
  };

  return (
    <div
      data-ambient-stage
      data-motion={paused ? 'paused' : 'running'}
      className="min-h-screen bg-[#090A0F] text-[#F2F3F7]"
    >
      {/* Top Bar Contract: strictly 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090A0F]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="text-base font-semibold tracking-tight text-white whitespace-nowrap shrink-0"
          >
            Atmosphere
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 text-sm font-medium text-slate-400 md:flex"
          >
            <a
              href="#catalog"
              className="transition-colors hover:text-white whitespace-nowrap shrink-0"
            >
              Catalog
            </a>
            <a
              href="#principles"
              className="transition-colors hover:text-white whitespace-nowrap shrink-0"
            >
              Principles
            </a>
            <a
              href="#usage"
              className="transition-colors hover:text-white whitespace-nowrap shrink-0"
            >
              Integration
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#catalog"
              className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-white whitespace-nowrap shrink-0"
            >
              Browse All 20
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Split */}
        <section className="mx-auto max-w-6xl px-6 pt-12 pb-14 lg:pt-16 lg:pb-16">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-medium tracking-wide text-slate-400">
                  React + Tailwind · Pure CSS &amp; SVG Keyframes
                </p>
                <h1
                  className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
                  style={{ textWrap: 'balance' }}
                >
                  Twenty ambient layers built to sit quietly behind real content.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                  Self-contained components Amb1 through Amb20. Zero external animation libraries, zero canvas loops, and measured contrast so foreground typography stays crisp.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setInspectedId(heroPreviewId)}
                  className="rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-white whitespace-nowrap"
                >
                  Inspect {heroPreviewId} Source
                </button>
                <button
                  type="button"
                  onClick={() => setPaused((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 whitespace-nowrap"
                >
                  {paused ? (
                    <>
                      <Play className="h-4 w-4" aria-hidden="true" />
                      Resume Motion
                    </>
                  ) : (
                    <>
                      <Pause className="h-4 w-4" aria-hidden="true" />
                      Pause Motion
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 lg:col-span-6">
              <div className="flex-1 rounded-xl border border-white/15 bg-[#11131A] p-1.5">
                <HeroAmbient className="h-full min-h-[280px]" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-slate-400">
                <span>Previewing {heroPreviewId}</span>
                <div className="flex items-center gap-1.5">
                  {(['Amb1', 'Amb6', 'Amb11', 'Amb14', 'Amb19'] as const).map((presetId) => (
                    <button
                      key={presetId}
                      type="button"
                      onClick={() => setHeroPreviewId(presetId)}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap ${
                        heroPreviewId === presetId
                          ? 'bg-white/15 text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                      }`}
                    >
                      {presetId}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4-column summary strip below hero split */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div>
              <div className="font-mono-code text-2xl font-medium text-white tabular-nums">20</div>
              <p className="mt-1 text-xs text-slate-400">Self-contained components</p>
            </div>
            <div>
              <div className="font-mono-code text-2xl font-medium text-white tabular-nums">0 B</div>
              <p className="mt-1 text-xs text-slate-400">Extra runtime dependencies</p>
            </div>
            <div>
              <div className="font-mono-code text-2xl font-medium text-white tabular-nums">100%</div>
              <p className="mt-1 text-xs text-slate-400">Pure CSS &amp; SVG keyframes</p>
            </div>
            <div>
              <div className="font-mono-code text-2xl font-medium text-white tabular-nums">AA</div>
              <p className="mt-1 text-xs text-slate-400">Foreground text legibility</p>
            </div>
          </div>
        </section>

        {/* Catalog Toolbar + 20 Component Grid */}
        <section id="catalog" className="border-t border-white/10 bg-[#0B0D13] py-14">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Component Catalog
                </h2>
                <p className="mt-1.5 text-sm text-slate-400">
                  Every frame renders its live CSS or SVG keyframe layer behind a realistic content block.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="relative block">
                  <span className="sr-only">Search ambient components</span>
                  <Search
                    className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter by name, Amb14, SVG..."
                    className="h-10 w-full rounded-lg border border-white/15 bg-[#11131A] pr-3 pl-9 text-sm text-white placeholder:text-slate-500 focus:border-slate-400 focus:outline-none sm:w-64"
                  />
                </label>

                <button
                  type="button"
                  onClick={() => setPaused((prev) => !prev)}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#11131A] px-3.5 text-xs font-medium text-slate-200 transition-colors hover:bg-white/5 whitespace-nowrap"
                >
                  {paused ? (
                    <>
                      <Play className="h-3.5 w-3.5" aria-hidden="true" />
                      Resume All
                    </>
                  ) : (
                    <>
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                      Pause All
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Interactive filter tabs */}
            <div
              role="tablist"
              aria-label="Filter components by category"
              className="mt-6 flex flex-wrap items-center gap-1.5 border-b border-white/10 pb-5"
            >
              {CATEGORY_TABS.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-slate-100 text-slate-950'
                        : 'bg-[#11131A] text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
              <span className="font-mono-code ml-auto text-xs text-slate-400 tabular-nums">
                Showing {filteredItems.length} of 20
              </span>
            </div>

            {/* Grid */}
            {filteredItems.length === 0 ? (
              <div className="mt-10 rounded-xl border border-white/10 bg-[#11131A] p-12 text-center">
                <p className="text-base font-medium text-white">
                  No ambient components match “{searchQuery}”.
                </p>
                <p className="mt-1.5 text-sm text-slate-400">
                  Clear the search query or switch back to all categories.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-5 rounded-lg bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div
                data-testid="ambient-grid"
                className="mt-8 grid gap-6 md:grid-cols-2"
              >
                {filteredItems.map((item) => {
                  const entry = AMBIENT_REGISTRY[item.id];
                  const Component = entry.Component;
                  return (
                    <article
                      key={item.id}
                      data-testid={`ambient-card-${item.id}`}
                      className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#11131A] p-3"
                    >
                      <div className="overflow-hidden rounded-lg border border-white/10">
                        <Component />
                      </div>

                      <div className="flex items-start justify-between gap-4 px-2 pt-4 pb-1">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="font-mono-code tabular-nums">
                              {formatAmbientIndex(item.index)}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{item.id}</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.technique}</span>
                          </div>
                          <h3 className="mt-1 text-base font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">
                            {item.summary}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setInspectedId(item.id)}
                          aria-label={`Inspect ${item.id} ${item.title}`}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:bg-white/15 hover:text-white whitespace-nowrap"
                        >
                          <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                          Inspect
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Principles & Usage Section */}
        <section id="principles" className="border-t border-white/10 bg-[#090A0F] py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold text-white">
                01. Compositor-Only Motion
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Every loop animates transform, opacity, or filter rather than layout geometry, keeping frame times smooth without JavaScript timers.
              </p>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">
                02. Reduced-Motion Native
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Each component ships its own prefers-reduced-motion media query so resting states remain composed and static when motion is disabled.
              </p>
            </div>
            <div id="usage">
              <h2 className="text-base font-semibold text-white">
                03. Drop-In Slot Wrapper
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Pass custom JSX via children to wrap your own cards or heroes, or render any Amb1–Amb20 directly with its built-in sample block.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090A0F] py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-slate-500">
          <span>Atmosphere Component Catalog · Amb1–Amb20</span>
          <span>Pure CSS &amp; SVG Keyframes · React + Tailwind</span>
        </div>
      </footer>

      <AmbientInspectorModal
        item={inspectedItem}
        paused={paused}
        onTogglePause={() => setPaused((prev) => !prev)}
        onClose={() => setInspectedId(null)}
        onNavigate={handleNavigateInspector}
      />
    </div>
  );
}
