import { useMemo, useState } from 'react';
import { Code2, Search } from 'lucide-react';
import { SPECIMENS, type SpecimenEntry } from './data/specimens';
import { SpecimenModal } from './components/SpecimenModal';
import { filterSpecimens, type TreatmentCategory } from './utils/treatmentMath';

const CATEGORIES: TreatmentCategory[] = [
  'All',
  'Clip & Mask',
  'Scroll & Depth',
  'Color & Optics',
  'Interactive & Grid',
];

export default function App() {
  const [category, setCategory] = useState<TreatmentCategory>('All');
  const [query, setQuery] = useState('');
  const [activeSpecimen, setActiveSpecimen] = useState<SpecimenEntry | null>(null);

  const visibleSpecimens = useMemo(() => {
    const filteredIds = new Set(
      filterSpecimens(SPECIMENS, category, query).map((item) => item.id)
    );
    return SPECIMENS.filter((item) => filteredIds.has(item.id));
  }, [category, query]);

  const resetFilters = () => {
    setCategory('All');
    setQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F6F6F4] text-[#141413]">
      {/* Strict 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#F6F6F4]/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0"
          >
            ICFX Specimens
          </a>

          <nav
            aria-label="Primary sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600"
          >
            <a
              href="#gallery"
              className="transition-colors hover:text-stone-900 whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#architecture"
              className="transition-colors hover:text-stone-900 whitespace-nowrap shrink-0"
            >
              Architecture
            </a>
            <a
              href="#index"
              className="transition-colors hover:text-stone-900 whitespace-nowrap shrink-0"
            >
              Index
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setActiveSpecimen(SPECIMENS[0])}
              className="rounded-lg bg-[#1D4ED8] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#1E40AF] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              Inspect Icfx1
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1240px] px-6 py-12">
        {/* Editorial Hero */}
        <section className="grid gap-10 border-b border-stone-200 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium tracking-wider text-stone-500">
              Specimen Folio · React &amp; Tailwind CSS
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl [text-wrap:balance]">
              Twenty self-contained image treatments built for motion and clarity.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              Each component from <span className="font-mono text-sm text-stone-900">Icfx1</span> to{' '}
              <span className="font-mono text-sm text-stone-900">Icfx20</span> is isolated in its own
              module using vector SVG scenes, layered gradients, and monogram blocks with zero
              external image dependencies.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-stone-200 pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <div className="font-mono text-2xl font-semibold tabular-nums text-stone-900">20</div>
              <div className="mt-1 text-xs text-stone-500">Components</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold tabular-nums text-stone-900">4</div>
              <div className="mt-1 text-xs text-stone-500">Disciplines</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-semibold tabular-nums text-stone-900">0</div>
              <div className="mt-1 text-xs text-stone-500">External URLs</div>
            </div>
          </div>
        </section>

        {/* Filter & Search Toolbar */}
        <section
          id="gallery"
          aria-label="Filter image treatments"
          className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div
            role="tablist"
            aria-label="Treatment categories"
            className="flex flex-wrap items-center gap-1 rounded-lg bg-stone-200/70 p-1"
          >
            {CATEGORIES.map((item) => {
              const active = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(item)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                    active
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tabular-nums text-stone-500 whitespace-nowrap">
              {visibleSpecimens.length} of {SPECIMENS.length} shown
            </span>
            <div className="relative w-full md:w-64">
              <label htmlFor="specimen-search" className="sr-only">
                Search treatments
              </label>
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-stone-400"
                aria-hidden="true"
              />
              <input
                id="specimen-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Icfx1..20 or effect"
                className="w-full rounded-lg border border-stone-200 bg-white py-2 pr-3 pl-8 text-xs text-stone-900 placeholder:text-stone-400 focus:border-[#1D4ED8] focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Specimen Grid */}
        {visibleSpecimens.length === 0 ? (
          <div className="mt-10 rounded-xl border border-stone-200 bg-white p-12 text-center">
            <h2 className="text-lg font-semibold text-stone-900">
              No matching image treatments
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Clear your search term or switch back to all 20 specimens.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 rounded-lg bg-[#1D4ED8] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visibleSpecimens.map((item) => {
              const { Component } = item;
              return (
                <article
                  key={item.id}
                  data-testid={`specimen-card-${item.name}`}
                  className={`flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 ${
                    item.spanWide ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span className="font-mono font-semibold tabular-nums text-stone-900">
                          {String(item.id).padStart(2, '0')} · {item.name}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.trigger}</span>
                      </div>
                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-stone-900">
                        {item.title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveSpecimen(item)}
                      aria-label={`Inspect ${item.name} source code`}
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-stone-200 bg-[#F6F6F4] px-3 py-1.5 text-xs font-medium text-stone-800 transition hover:border-stone-300 hover:bg-stone-100 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Inspect</span>
                    </button>
                  </div>

                  <Component />

                  <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
                    <span className="truncate">{item.technique}</span>
                    <span className="font-mono text-[11px] text-stone-400 shrink-0">
                      {item.name}.tsx
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Architecture & Complete Index */}
        <section
          id="architecture"
          className="mt-16 grid gap-8 border-t border-stone-200 pt-12 lg:grid-cols-3"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-900">
              Self-Contained Design
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Every component imports only React and uses Tailwind utilities paired with compositor
              transforms, CSS clip-paths, or inline SVG color filters so each file drops cleanly
              into any React + Tailwind project.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-900">
              Accessible Controls
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Hover-driven effects include explicit toggle or replay buttons, range sliders expose
              keyboard arrow navigation, and reduced-motion preferences collapse animation durations
              automatically.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-stone-900">
              Zero Broken Media
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              All 20 frames render crisp architectural vector graphics, multi-stop CSS gradients,
              and typographic monogram blocks without relying on external stock image CDNs.
            </p>
          </div>
        </section>

        <section id="index" className="mt-12 border-t border-stone-200 pt-10">
          <h2 className="text-lg font-semibold text-stone-900">Complete Component Index</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500">
                  <th className="py-2 pr-4 font-medium">ID</th>
                  <th className="py-2 pr-4 font-medium">Component</th>
                  <th className="py-2 pr-4 font-medium">Treatment</th>
                  <th className="py-2 pr-4 font-medium">Category</th>
                  <th className="py-2 font-medium">Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/70">
                {SPECIMENS.map((item) => (
                  <tr key={item.id} className="hover:bg-white/60">
                    <td className="py-2 pr-4 font-mono tabular-nums text-stone-500">
                      {String(item.id).padStart(2, '0')}
                    </td>
                    <td className="py-2 pr-4 font-mono font-medium text-stone-900">
                      <button
                        type="button"
                        onClick={() => setActiveSpecimen(item)}
                        className="text-[#1D4ED8] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                      >
                        {item.name}
                      </button>
                    </td>
                    <td className="py-2 pr-4 text-stone-800">{item.title}</td>
                    <td className="py-2 pr-4 text-stone-600">{item.category}</td>
                    <td className="py-2 text-stone-600">{item.trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-6 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <span>ICFX Specimen Folio · Self-Contained React + Tailwind Image Treatments</span>
          <a href="#top" className="font-medium text-stone-700 hover:text-stone-900">
            Back to top
          </a>
        </div>
      </footer>

      <SpecimenModal
        specimen={activeSpecimen}
        onClose={() => setActiveSpecimen(null)}
      />
    </div>
  );
}
