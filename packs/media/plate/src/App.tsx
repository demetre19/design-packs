import { useEffect, useState } from 'react';
import { Check, Code2, Copy, RotateCcw, Search, X } from 'lucide-react';
import { MEDIA_REGISTRY, type MediaRegistryEntry } from './components/media';
import { filterMediaRegistry, type MediaCategory } from './utils/mediaLogic';

const CATEGORIES: Array<{ id: MediaCategory; label: string }> = [
  { id: 'all', label: 'All Plates' },
  { id: 'overlays', label: 'Overlays' },
  { id: 'interactive', label: 'Interactive' },
  { id: 'layouts', label: 'Layouts' },
  { id: 'placeholders', label: 'Placeholders' },
];

export default function App() {
  const [category, setCategory] = useState<MediaCategory>('all');
  const [query, setQuery] = useState('');
  const [resetEpoch, setResetEpoch] = useState(0);
  const [inspected, setInspected] = useState<MediaRegistryEntry | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const visiblePlates = filterMediaRegistry(MEDIA_REGISTRY, category, query);

  useEffect(() => {
    if (!inspected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspected]);

  const handleSelectNavCategory = (next: MediaCategory) => {
    setCategory(next);
    const grid = document.getElementById('specimen-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetAll = () => {
    setCategory('all');
    setQuery('');
    setResetEpoch((n) => n + 1);
  };

  const handleCopySnippet = async (entry: MediaRegistryEntry) => {
    const snippet = `import { ${entry.id} } from './components/media';\n\n${entry.usageSnippet}`;
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      // Clipboard API may be unavailable in restricted contexts; visual confirmation still proceeds cleanly.
    }
    setCopiedId(entry.id);
    window.setTimeout(() => {
      setCopiedId((current) => (current === entry.id ? null : current));
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#141413]">
      {/* Strict 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#f8f7f4]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="whitespace-nowrap shrink-0 font-serif text-xl font-semibold tracking-tight text-[#141413]"
          >
            Plate
          </a>

          <nav
            aria-label="Component categories"
            className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex"
          >
            <button
              type="button"
              onClick={() => handleSelectNavCategory('all')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#141413] ${
                category === 'all' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              All Plates
            </button>
            <button
              type="button"
              onClick={() => handleSelectNavCategory('interactive')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#141413] ${
                category === 'interactive' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Interactive
            </button>
            <button
              type="button"
              onClick={() => handleSelectNavCategory('overlays')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#141413] ${
                category === 'overlays' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Overlays
            </button>
            <button
              type="button"
              onClick={() => handleSelectNavCategory('layouts')}
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#141413] ${
                category === 'layouts' ? 'text-[#141413] underline underline-offset-4' : ''
              }`}
            >
              Layouts
            </button>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleResetAll}
              className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-lg bg-[#141413] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Reset Demos</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1280px] px-6 pb-20 pt-12">
        {/* Editorial Hero */}
        <section className="border-b border-stone-200 pb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-stone-500">
              React &amp; Tailwind Media System · Img1 – Img20
            </p>
            <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#141413] sm:text-5xl">
              Twenty Distinct Media Display Plates
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              Self-contained image and media presentation components authored with semantic{' '}
              <code className="font-mono text-sm text-stone-800">&lt;figure&gt;</code> and{' '}
              <code className="font-mono text-sm text-stone-800">&lt;figcaption&gt;</code> markup,
              bespoke vector and gradient compositions, and live interactive state.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-stone-200 pt-6 sm:grid-cols-4">
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#141413]">20</p>
              <p className="mt-1 text-xs text-stone-500">Unique Components</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#141413]">0</p>
              <p className="mt-1 text-xs text-stone-500">External Image URLs</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#141413]">100%</p>
              <p className="mt-1 text-xs text-stone-500">Semantic Figure Markup</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#141413]">14</p>
              <p className="mt-1 text-xs text-stone-500">Stateful Controls</p>
            </div>
          </div>
        </section>

        {/* Filter & Search Toolbar */}
        <section
          aria-label="Filter media components"
          className="mt-8 flex flex-col gap-4 border-b border-stone-200 pb-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div
            role="tablist"
            aria-label="Media component categories"
            className="flex flex-wrap items-center gap-1 rounded-lg bg-stone-200/70 p-1"
          >
            {CATEGORIES.map((tab) => {
              const active = category === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(tab.id)}
                  className={`whitespace-nowrap shrink-0 rounded-md px-3.5 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                    active
                      ? 'bg-white text-[#141413] shadow-sm'
                      : 'text-stone-600 hover:text-[#141413]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 sm:w-64 sm:flex-none">
              <label htmlFor="plate-search" className="sr-only">
                Search media components
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
                aria-hidden="true"
              />
              <input
                id="plate-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Img1–Img20 or pattern…"
                className="w-full rounded-lg border border-stone-300 bg-white py-2 pl-9 pr-3 text-sm text-[#141413] placeholder:text-stone-400 focus:border-blue-700 focus:outline-none"
              />
            </div>

            <span className="font-mono text-xs tabular-nums text-stone-600">
              Showing {visiblePlates.length} / {MEDIA_REGISTRY.length}
            </span>
          </div>
        </section>

        {/* Specimen Grid */}
        <section id="specimen-grid" className="mt-10">
          {visiblePlates.length === 0 ? (
            <div className="rounded-xl border border-stone-200 bg-white p-12 text-center">
              <p className="font-serif text-xl text-[#141413]">
                No matching display plates found
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Try clearing your search term or returning to all 20 components.
              </p>
              <button
                type="button"
                onClick={handleResetAll}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-xs font-medium text-white hover:bg-blue-800"
              >
                Show All 20 Plates
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
              {visiblePlates.map((entry) => {
                const PlateComponent = entry.Component;
                const paddedNum = String(entry.number).padStart(2, '0');
                return (
                  <article
                    key={`${entry.id}-${resetEpoch}`}
                    data-testid={`specimen-${entry.id}`}
                    className={entry.span === 'wide' ? 'lg:col-span-2' : ''}
                  >
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-stone-500">
                          <span className="font-mono font-medium tabular-nums text-stone-700">
                            {entry.id}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="capitalize">{entry.category}</span>
                        </div>
                        <h2 className="mt-0.5 font-serif text-xl font-normal text-[#141413]">
                          {paddedNum}. {entry.title}
                        </h2>
                      </div>

                      <button
                        type="button"
                        onClick={() => setInspected(entry)}
                        aria-label={`Inspect ${entry.id} component specification`}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-md border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                      >
                        <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Inspect Spec</span>
                      </button>
                    </div>

                    <p className="mb-4 max-w-2xl text-sm text-stone-600">{entry.pattern}</p>

                    <PlateComponent />
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-stone-500">
          <span>Plate Media Specimen · Img1 through Img20</span>
          <span>Semantic figure &amp; figcaption components · Zero external assets</span>
        </div>
      </footer>

      {/* Component Spec Modal */}
      {inspected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${inspected.id} component specification`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-lg rounded-xl border border-stone-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium text-blue-700">
                  {inspected.id} · {inspected.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-[#141413]">
                  {inspected.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setInspected(null)}
                aria-label="Close component specification dialog"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {inspected.pattern}
            </p>

            <div className="mt-5 rounded-lg border border-stone-200 bg-stone-950 p-4 text-stone-100">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-stone-400">Usage</span>
                <button
                  type="button"
                  onClick={() => handleCopySnippet(inspected)}
                  className="inline-flex items-center gap-1.5 rounded bg-stone-800 px-2.5 py-1 text-xs font-medium text-stone-100 hover:bg-stone-700"
                >
                  {copiedId === inspected.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-stone-200">
                {`import { ${inspected.id} } from './components/media';\n\n${inspected.usageSnippet}`}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
