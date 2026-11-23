import React, { useMemo, useState } from 'react';
import { Maximize2, Pause, Play, RotateCcw, Search, X } from 'lucide-react';
import {
  CATEGORY_LABELS,
  filterSpecimens,
  getCategoryCounts,
  GOO_CATEGORIES,
  GOO_SPECIMENS,
  GooCategory,
  GooSpecimenMeta,
} from './utils/gooCatalog';
import { GOO_COMPONENTS, Goo3 } from './components/goo';
import { SpecimenModal } from './components/SpecimenModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<GooCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [motionPaused, setMotionPaused] = useState(false);
  const [resetNonce, setResetNonce] = useState(0);
  const [inspectedId, setInspectedId] = useState<number | null>(null);

  const counts = useMemo(() => getCategoryCounts(GOO_SPECIMENS), []);
  const filteredSpecimens = useMemo(
    () => filterSpecimens(GOO_SPECIMENS, activeCategory, searchQuery),
    [activeCategory, searchQuery]
  );

  const inspectedSpecimen: GooSpecimenMeta | null = useMemo(
    () => GOO_SPECIMENS.find((item) => item.id === inspectedId) ?? null,
    [inspectedId]
  );

  const handleModalNavigate = (direction: 'prev' | 'next') => {
    if (inspectedId === null) return;
    const nextId =
      direction === 'next'
        ? (inspectedId % GOO_SPECIMENS.length) + 1
        : ((inspectedId - 2 + GOO_SPECIMENS.length) % GOO_SPECIMENS.length) + 1;
    setInspectedId(nextId);
  };

  const handleResetAll = () => {
    setResetNonce((n) => n + 1);
    setMotionPaused(false);
  };

  return (
    <div className={`min-h-screen bg-[#F7F7F5] text-[#141413] ${motionPaused ? 'motion-paused' : ''}`}>
      {/* Top Bar: 3-zone contract */}
      <header className="sticky top-0 z-30 border-b border-stone-200/90 bg-[#F7F7F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#141413] whitespace-nowrap shrink-0"
          >
            Viscous Lab
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600"
          >
            <a
              href="#specimens"
              className="hover:text-[#141413] transition-colors whitespace-nowrap shrink-0"
            >
              Specimens
            </a>
            <a
              href="#svg-pattern"
              className="hover:text-[#141413] transition-colors whitespace-nowrap shrink-0"
            >
              SVG Filters
            </a>
            <a
              href="#motion-rules"
              className="hover:text-[#141413] transition-colors whitespace-nowrap shrink-0"
            >
              Motion Craft
            </a>
            <a
              href="#index"
              className="hover:text-[#141413] transition-colors whitespace-nowrap shrink-0"
            >
              Index
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-2 rounded-lg bg-[#141413] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset All</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1280px] px-6">
        {/* Hero Split */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-medium text-stone-500">
                  Interactive Kinetic Archive · 20 Self-Contained Components
                </p>
                <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-[#141413] [text-wrap:balance] sm:text-5xl">
                  Twenty studies in liquid &amp; gooey micro-interactions.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600">
                  Each specimen from <span className="font-mono text-sm text-[#141413]">Goo1</span> to{' '}
                  <span className="font-mono text-sm text-[#141413]">Goo20</span> is a standalone React
                  and Tailwind component powered by SVG{' '}
                  <span className="font-mono text-sm text-[#141413]">feGaussianBlur</span> /{' '}
                  <span className="font-mono text-sm text-[#141413]">feColorMatrix</span> thresholding,
                  polygon clip-paths, and elastic pointer physics.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#specimens"
                  className="inline-flex items-center justify-center rounded-lg bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Explore Specimens
                </a>
                <button
                  type="button"
                  onClick={() => setMotionPaused((p) => !p)}
                  aria-pressed={motionPaused}
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-[#141413] transition-colors hover:bg-stone-100 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {motionPaused ? (
                    <>
                      <Play className="h-4 w-4" aria-hidden="true" />
                      <span>Resume Loops</span>
                    </>
                  ) : (
                    <>
                      <Pause className="h-4 w-4" aria-hidden="true" />
                      <span>Pause Loops</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 lg:col-span-5">
              <div className="mb-3 flex items-center justify-between text-xs text-stone-500">
                <span className="font-mono text-[#141413]">Featured Chamber · Goo3</span>
                <span>Pointer-reactive metaballs</span>
              </div>
              <div className="flex-1">
                <Goo3 key={`hero-${resetNonce}`} />
              </div>
            </div>
          </div>

          {/* 4-Column Quantitative Strip below hero split */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-stone-200 py-6 md:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-[#141413] tabular-nums">
                20
              </p>
              <p className="mt-1 text-xs text-stone-500">Distinct Goo1–Goo20 specimens</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-[#141413] tabular-nums">
                13
              </p>
              <p className="mt-1 text-xs text-stone-500">SVG alpha-threshold filters</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-[#141413] tabular-nums">
                7
              </p>
              <p className="mt-1 text-xs text-stone-500">Clip-path, wave &amp; radius morphs</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-[#141413] tabular-nums">
                100%
              </p>
              <p className="mt-1 text-xs text-stone-500">Self-contained React + Tailwind</p>
            </div>
          </div>
        </section>

        {/* Specimens Filter Toolbar + Grid */}
        <section id="specimens" className="py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div
              role="tablist"
              aria-label="Filter specimens by category"
              className="flex flex-wrap items-center gap-1 rounded-xl bg-stone-200/70 p-1"
            >
              {GOO_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600 ${
                      active
                        ? 'bg-white text-[#141413] shadow-xs'
                        : 'text-stone-600 hover:text-[#141413]'
                    }`}
                  >
                    {cat.label}{' '}
                    <span className="ml-1 font-mono text-[11px] text-stone-400 tabular-nums">
                      {counts[cat.id]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-stone-400"
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label="Search specimens"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Goo1..20 or technique"
                className="h-10 w-full rounded-xl border border-stone-300 bg-white pr-9 pl-9 text-sm text-[#141413] placeholder:text-stone-400 focus:border-blue-600 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 right-2.5 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-stone-400 hover:text-[#141413]"
                >
                  <X className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {filteredSpecimens.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-12 text-center">
              <p className="font-display text-lg font-semibold text-[#141413]">
                No matching specimens
              </p>
              <p className="mt-1 text-sm text-stone-500">
                Try clearing your search query or switching back to All 20.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-lg bg-[#141413] px-4 py-2 text-xs font-medium text-white hover:bg-stone-800"
              >
                Show All 20
              </button>
            </div>
          ) : (
            <div
              data-testid="specimen-grid"
              className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredSpecimens.map((meta) => {
                const SpecimenComponent = GOO_COMPONENTS[meta.componentName];
                return (
                  <article
                    key={`${meta.componentName}-${resetNonce}`}
                    data-testid={`specimen-card-${meta.componentName}`}
                    className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 text-xs text-stone-500">
                        <div className="flex min-w-0 items-center gap-1.5 truncate">
                          <span className="font-mono font-medium text-[#141413]">
                            {meta.componentName}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{CATEGORY_LABELS[meta.category]}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setInspectedId(meta.id)}
                          aria-label={`Inspect ${meta.componentName}: ${meta.title}`}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-600"
                        >
                          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Inspect</span>
                        </button>
                      </div>

                      <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-[#141413]">
                        {String(meta.id).padStart(2, '0')}. {meta.title}
                      </h3>

                      <div className="mt-4">
                        <SpecimenComponent />
                      </div>
                    </div>

                    <div className="mt-4 border-t border-stone-100 pt-3">
                      <p className="text-xs leading-relaxed text-stone-600">{meta.description}</p>
                      <p className="mt-2 font-mono text-[11px] text-stone-400">
                        {meta.technique} · {meta.trigger}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Technical Reference Sections */}
        <section id="svg-pattern" className="mt-12 grid grid-cols-1 gap-8 border-t border-stone-200 py-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium text-stone-500">Filter Mechanics</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#141413] [text-wrap:balance]">
              How SVG alpha thresholding creates surface tension
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              A Gaussian blur spreads solid shapes into soft alpha gradients. Passing that blurred
              output through a steep <span className="font-mono text-[#141413]">feColorMatrix</span>{' '}
              alpha multiplier (such as <span className="font-mono text-[#141413]">22 -9</span>)
              snaps overlapping semi-transparent edges back to crisp opacity, fusing nearby shapes
              with a smooth concave bridge.
            </p>
          </div>

          <div id="motion-rules" className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-[#141413]">
              Implementation Architecture
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-2.5">
                <dt className="font-medium text-[#141413]">Scoped Filter IDs</dt>
                <dd className="font-mono text-xs text-stone-500">goo-filter-1 .. goo-filter-20</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-stone-100 pb-2.5">
                <dt className="font-medium text-[#141413]">Compositor Properties</dt>
                <dd className="font-mono text-xs text-stone-500">transform, clip-path, filter</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="font-medium text-[#141413]">Reduced Motion</dt>
                <dd className="font-mono text-xs text-stone-500">prefers-reduced-motion honored</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Compact Index Table */}
        <section id="index" className="border-t border-stone-200 py-12">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#141413]">
              Complete Component Index
            </h2>
            <span className="font-mono text-xs text-stone-500 tabular-nums">20 components</span>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-medium text-stone-500">
                  <th className="px-4 py-3">Component</th>
                  <th className="px-4 py-3">Micro-Interaction</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Technique</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {GOO_SPECIMENS.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50">
                    <td className="px-4 py-2.5 font-mono text-xs font-medium text-[#141413] tabular-nums">
                      {item.componentName}
                    </td>
                    <td className="px-4 py-2.5 font-medium text-[#141413]">{item.title}</td>
                    <td className="px-4 py-2.5 text-stone-600">{CATEGORY_LABELS[item.category]}</td>
                    <td className="px-4 py-2.5 font-mono text-xs text-stone-500">
                      {item.technique}
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <button
                        type="button"
                        onClick={() => setInspectedId(item.id)}
                        className="rounded-md px-2.5 py-1 text-xs font-medium text-blue-700 hover:bg-blue-50"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-4 px-6 text-xs text-stone-500 sm:flex-row sm:items-center">
          <p>Viscous Lab · 20 self-contained liquid &amp; gooey UI components</p>
          <a href="#top" className="font-medium text-[#141413] hover:underline">
            Back to top
          </a>
        </div>
      </footer>

      <SpecimenModal
        specimen={inspectedSpecimen}
        onClose={() => setInspectedId(null)}
        onNavigate={handleModalNavigate}
      />
    </div>
  );
}
