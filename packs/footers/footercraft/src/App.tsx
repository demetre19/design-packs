import React, { useMemo, useRef, useState } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import {
  FOOTER_CATALOG,
  FOOTER_STYLES,
  FOOTER_TOPOLOGIES,
  FooterCatalogItem,
  FooterStyle,
  FooterTopology,
  filterFooters,
} from './data/footerCatalog';
import { FOOTER_COMPONENTS, getFooterSource } from './components/footers';
import { ShowcaseHeader } from './components/ShowcaseHeader';
import { FooterShowcaseCard } from './components/FooterShowcaseCard';
import { CodeDrawer } from './components/CodeDrawer';

export default function App() {
  const [selectedTopology, setSelectedTopology] = useState<FooterTopology | 'All'>('All');
  const [selectedStyle, setSelectedStyle] = useState<FooterStyle | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedItem, setInspectedItem] = useState<FooterCatalogItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const catalogRef = useRef<HTMLElement>(null);
  const toastTimerRef = useRef<number | null>(null);

  const filteredFooters = useMemo(
    () =>
      filterFooters(FOOTER_CATALOG, {
        topology: selectedTopology,
        style: selectedStyle,
        query: searchQuery,
      }),
    [selectedTopology, selectedStyle, searchQuery]
  );

  const handleResetFilters = () => {
    setSelectedTopology('All');
    setSelectedStyle('All');
    setSearchQuery('');
  };

  const handleQuickPreset = (preset: 'all' | FooterTopology) => {
    setSelectedStyle('All');
    setSearchQuery('');
    setSelectedTopology(preset === 'all' ? 'All' : preset);
    catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePreviewLinkClick = (label: string, brand: string) => {
    setToastMessage(`${brand}: opened "${label}" preview link`);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const inspectedSource = inspectedItem ? getFooterSource(inspectedItem.id) : '';

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F6F6F4] text-zinc-950">
      <ShowcaseHeader
        onQuickPreset={handleQuickPreset}
        onJumpToCatalog={() => catalogRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-medium text-zinc-500">
              React + Tailwind CSS · Semantic HTML · Inline SVG Marks
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 text-balance">
              40 distinct website footer sections built for real production layouts.
            </h1>
            <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
              Explore ten structural topologies across six visual styles. Every footer uses semantic{' '}
              <code className="font-mono text-sm text-zinc-900">&lt;footer&gt;</code> markup, structured{' '}
              <code className="font-mono text-sm text-zinc-900">&lt;ul&gt;/&lt;li&gt;</code> navigation groups, letter-logos, and inline SVG icons with live interactive states.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-zinc-200 py-5">
            <div>
              <p className="text-2xl font-bold tracking-tight tabular-nums text-zinc-950">40</p>
              <p className="text-xs text-zinc-500">Self-contained components</p>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight tabular-nums text-zinc-950">10</p>
              <p className="text-xs text-zinc-500">Distinct layout topologies</p>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight tabular-nums text-zinc-950">6</p>
              <p className="text-xs text-zinc-500">Visual &amp; tonal themes</p>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight tabular-nums text-zinc-950">0</p>
              <p className="text-xs text-zinc-500">External image dependencies</p>
            </div>
          </div>
        </section>

        <section ref={catalogRef} aria-label="Footer filter controls and gallery" className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-white border border-zinc-200 rounded-xl p-5 mb-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
              <div className="md:col-span-5">
                <label htmlFor="catalog-search" className="block text-xs font-medium text-zinc-600 mb-1.5">
                  Search brand, component, or topology
                </label>
                <div className="relative">
                  <Search className="h-4 w-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
                  <input
                    id="catalog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Try Footer7, Sitemap, Fintech, Dark..."
                    className="w-full rounded-lg border border-zinc-300 bg-zinc-50 pl-9 pr-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="topology-select" className="block text-xs font-medium text-zinc-600 mb-1.5">
                  Topology
                </label>
                <select
                  id="topology-select"
                  value={selectedTopology}
                  onChange={(e) => setSelectedTopology(e.target.value as FooterTopology | 'All')}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none"
                >
                  <option value="All">All Topologies (10)</option>
                  {FOOTER_TOPOLOGIES.map((topology) => (
                    <option key={topology} value={topology}>
                      {topology}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="style-select" className="block text-xs font-medium text-zinc-600 mb-1.5">
                  Visual Style
                </label>
                <select
                  id="style-select"
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value as FooterStyle | 'All')}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-blue-600 focus:outline-none"
                >
                  <option value="All">All Styles (6)</option>
                  {FOOTER_STYLES.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-1 flex justify-end">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by style">
                <button
                  type="button"
                  onClick={() => setSelectedStyle('All')}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedStyle === 'All'
                      ? 'bg-zinc-950 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  All Styles
                </button>
                {FOOTER_STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedStyle === style
                        ? 'bg-zinc-950 text-white'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>

              <p className="text-xs font-medium text-zinc-600 tabular-nums" data-testid="results-count">
                Showing {filteredFooters.length} of {FOOTER_CATALOG.length} footers
              </p>
            </div>
          </div>

          {filteredFooters.length === 0 ? (
            <div className="bg-white border border-zinc-200 rounded-xl p-12 text-center space-y-3">
              <h2 className="text-lg font-semibold text-zinc-950">No matching footers found</h2>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">
                No footer sections matched your current topology, style, and search criteria.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredFooters.map((item) => {
                const FooterComponent = FOOTER_COMPONENTS[item.id];
                return (
                  <FooterShowcaseCard
                    key={item.id}
                    item={item}
                    Component={FooterComponent}
                    sourceCode={getFooterSource(item.id)}
                    onInspectCode={setInspectedItem}
                    onPreviewLinkClick={handlePreviewLinkClick}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      <CodeDrawer
        item={inspectedItem}
        sourceCode={inspectedSource}
        onClose={() => setInspectedItem(null)}
      />

      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-40 rounded-lg bg-zinc-950 text-white px-4 py-2.5 text-xs font-medium shadow-lg border border-zinc-800"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
