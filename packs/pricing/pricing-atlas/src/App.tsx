import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, Copy, Maximize2, Search, X } from 'lucide-react';
import { PRICING_CATALOG } from './components/pricing';
import { ShowcaseHeader } from './components/ShowcaseHeader';
import { FocusStage } from './components/FocusStage';
import {
  filterPricingSections,
  STYLE_LABELS,
  TOPOLOGY_LABELS,
  type PricingStyle,
  type PricingTopology,
} from './utils/pricingHelpers';

const STYLE_OPTIONS: Array<{ value: PricingStyle | 'all'; label: string }> = [
  { value: 'all', label: 'All Styles' },
  { value: 'minimal', label: STYLE_LABELS.minimal },
  { value: 'dark', label: STYLE_LABELS.dark },
  { value: 'light-warm', label: STYLE_LABELS['light-warm'] },
  { value: 'bold', label: STYLE_LABELS.bold },
];

const TOPOLOGY_OPTIONS: Array<{ value: PricingTopology | 'all'; label: string }> = [
  { value: 'all', label: 'All Topologies (10)' },
  ...(Object.entries(TOPOLOGY_LABELS) as Array<[PricingTopology, string]>).map(([value, label]) => ({
    value,
    label,
  })),
];

export default function App() {
  const [topology, setTopology] = useState<PricingTopology | 'all'>('all');
  const [style, setStyle] = useState<PricingStyle | 'all'>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'stack' | 'directory' | 'focus'>('stack');
  const [focusId, setFocusId] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filtered = useMemo(
    () => filterPricingSections(PRICING_CATALOG, { topology, style, query }),
    [topology, style, query]
  );

  const handleResetFilters = () => {
    setTopology('all');
    setStyle('all');
    setQuery('');
  };

  const handleCopy = async (id: number, componentName: string) => {
    const snippet = `import { ${componentName} } from './components/pricing';`;
    try {
      await navigator.clipboard.writeText(snippet);
    } catch {
      // Clipboard API fallback when restricted
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1600);
  };

  const openFocus = (id: number) => {
    setFocusId(id);
    setViewMode('focus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <ShowcaseHeader
        viewMode={viewMode}
        onChangeView={setViewMode}
        onResetFilters={handleResetFilters}
      />

      <main className="flex-1">
        {viewMode === 'focus' ? (
          <FocusStage
            items={filtered.length > 0 ? filtered : PRICING_CATALOG}
            activeId={focusId}
            onSelectId={setFocusId}
            onExit={() => setViewMode('stack')}
          />
        ) : (
          <div className="mx-auto max-w-7xl px-6 sm:px-10 py-10">
            {/* Editorial Intro + Filter Controls */}
            <section aria-label="Catalog filters" className="pb-8 border-b border-slate-200">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [font-family:var(--font-display)] [text-wrap:balance]">
                    Forty Self-Contained Pricing Sections
                  </h1>
                  <p className="mt-2.5 text-sm sm:text-base text-slate-600">
                    Ten structural topologies rendered across minimal, dark, light-warm, and bold visual systems. Every section includes working billing toggles, calculators, disclosures, and tier actions.
                  </p>
                </div>

                <div className="inline-flex items-center p-1 bg-slate-200/70 rounded-lg self-start shrink-0">
                  <button
                    type="button"
                    onClick={() => setViewMode('stack')}
                    aria-pressed={viewMode === 'stack'}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      viewMode === 'stack'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Live Stack
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('directory')}
                    aria-pressed={viewMode === 'directory'}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                      viewMode === 'directory'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Directory Grid
                  </button>
                </div>
              </div>

              <div className="mt-7 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Style segmented tabs */}
                <div
                  role="group"
                  aria-label="Filter by visual style"
                  className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/60 rounded-lg self-start"
                >
                  {STYLE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setStyle(opt.value)}
                      aria-pressed={style === opt.value}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                        style === opt.value
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Topology select + Search */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <label htmlFor="topology-filter" className="text-xs font-medium text-slate-600 whitespace-nowrap">
                      Topology
                    </label>
                    <select
                      id="topology-filter"
                      value={topology}
                      onChange={(e) => setTopology(e.target.value as PricingTopology | 'all')}
                      className="h-9 rounded-lg border border-slate-300 bg-white px-3 text-xs font-medium text-slate-900 focus:outline-2 focus:outline-slate-900"
                    >
                      {TOPOLOGY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="search"
                      aria-label="Search pricing sections"
                      placeholder="Search brand or Pricing1..40"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="h-9 w-full sm:w-72 rounded-lg border border-slate-300 bg-white pl-8 pr-8 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-2 focus:outline-slate-900"
                    />
                    {query && (
                      <button
                        type="button"
                        aria-label="Clear search"
                        onClick={() => setQuery('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <p className="tabular-nums">
                  Showing <strong className="font-semibold text-slate-800">{filtered.length}</strong> of{' '}
                  {PRICING_CATALOG.length} pricing sections
                  <span aria-hidden="true"> · </span>
                  10 topologies
                  <span aria-hidden="true"> · </span>
                  4 visual styles
                </p>
                {(topology !== 'all' || style !== 'all' || query.trim() !== '') && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="font-semibold text-slate-800 underline underline-offset-4 hover:text-slate-950"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </section>

            {/* Empty State */}
            {filtered.length === 0 ? (
              <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <h2 className="text-lg font-semibold text-slate-900">
                  No pricing sections match your current filters
                </h2>
                <p className="mt-1.5 text-sm text-slate-600">
                  Try clearing your search query or switching back to all topologies and styles.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Reset all filters
                </button>
              </div>
            ) : viewMode === 'directory' ? (
              /* Compact Directory Grid */
              <section aria-label="Pricing sections directory" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-400 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                        <span className="font-mono font-semibold text-slate-900">
                          {item.componentName}
                        </span>
                        <span>{item.styleLabel}</span>
                      </div>
                      <h2 className="mt-2 text-base font-semibold text-slate-900">
                        {item.brand}
                      </h2>
                      <p className="text-xs text-slate-500">
                        {item.topologyLabel}
                        <span aria-hidden="true"> · </span>
                        {item.domain}
                      </p>
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed">{item.summary}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => openFocus(item.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:underline underline-offset-4"
                      >
                        <span>Inspect live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.componentName)}
                        className="text-xs text-slate-500 hover:text-slate-900 font-medium"
                      >
                        {copiedId === item.id ? 'Copied' : 'Copy import'}
                      </button>
                    </div>
                  </article>
                ))}
              </section>
            ) : (
              /* Live Stack of All Matching Pricing Components */
              <div className="mt-10 space-y-14">
                {filtered.map((item) => {
                  const SectionComponent = item.Component;
                  return (
                    <div
                      key={item.id}
                      id={`pricing-${item.id}`}
                      data-testid={`pricing-card-${item.id}`}
                      className="scroll-mt-20"
                    >
                      <div className="mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                          <span className="font-mono font-semibold text-slate-950">
                            {item.componentName}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-slate-900">{item.brand}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.topologyLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.styleLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.domain}</span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCopy(item.id, item.componentName)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
                          >
                            {copiedId === item.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                            <span>{copiedId === item.id ? 'Copied' : 'Copy import'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => openFocus(item.id)}
                            aria-label={`Isolate ${item.componentName}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors whitespace-nowrap"
                          >
                            <Maximize2 className="w-3 h-3" />
                            <span>Isolate</span>
                          </button>
                        </div>
                      </div>

                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                        <SectionComponent />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Pricing Atlas — 40 self-contained React & Tailwind CSS pricing sections</span>
          <span>Pricing1 through Pricing40 · Semantic HTML & accessible interactive controls</span>
        </div>
      </footer>
    </div>
  );
}
