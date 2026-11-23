'use client';

import React, { useMemo, useState } from 'react';
import {
  Check,
  Code2,
  Copy,
  Maximize2,
  PanelBottom,
  PanelTop,
  Search,
  X,
} from 'lucide-react';
import {
  SheetMenu1,
  SheetMenu2,
  SheetMenu3,
  SheetMenu4,
  SheetMenu5,
  SheetMenu6,
  SheetMenu7,
  SheetMenu8,
  SheetMenu9,
  SheetMenu10,
  SheetMenu11,
  SheetMenu12,
  SheetMenu13,
  SheetMenu14,
  SheetMenu15,
  SheetMenu16,
  SheetMenu17,
  SheetMenu18,
  SheetMenu19,
  SheetMenu20,
  type SheetMenuProps,
} from '@/components/menus';
import {
  KIND_LABELS,
  MENU_CATALOG,
  STYLE_LABELS,
} from '@/lib/menu-catalog';
import {
  filterCatalog,
  type LayoutPattern,
  type MenuCatalogMeta,
  type MenuKind,
} from '@/lib/sheet-logic';

const COMPONENT_MAP: Record<number, React.ComponentType<SheetMenuProps>> = {
  1: SheetMenu1,
  2: SheetMenu2,
  3: SheetMenu3,
  4: SheetMenu4,
  5: SheetMenu5,
  6: SheetMenu6,
  7: SheetMenu7,
  8: SheetMenu8,
  9: SheetMenu9,
  10: SheetMenu10,
  11: SheetMenu11,
  12: SheetMenu12,
  13: SheetMenu13,
  14: SheetMenu14,
  15: SheetMenu15,
  16: SheetMenu16,
  17: SheetMenu17,
  18: SheetMenu18,
  19: SheetMenu19,
  20: SheetMenu20,
};

interface MenuShowcaseProps {
  sources: Record<number, string>;
}

const TOPOLOGY_FILTERS: Array<{ id: LayoutPattern | 'all'; label: string }> = [
  { id: 'all', label: 'All Topologies' },
  { id: 'master-detail', label: 'Split Rail' },
  { id: 'command-palette', label: 'Command' },
  { id: 'accordion-tree', label: 'Accordion' },
  { id: 'bento-mosaic', label: 'Bento' },
  { id: 'drill-down', label: 'Drill-Down' },
  { id: 'tabbed-scope', label: 'Tabbed' },
  { id: 'az-index', label: 'A–Z Index' },
];

export function MenuShowcase({ sources }: MenuShowcaseProps) {
  const [kindFilter, setKindFilter] = useState<MenuKind | 'all'>('all');
  const [layoutFilter, setLayoutFilter] = useState<LayoutPattern | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openStates, setOpenStates] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(Array.from({ length: 20 }, (_, i) => [i + 1, false]))
  );
  const [lastSelected, setLastSelected] = useState<Record<number, string>>({});
  const [codeModalId, setCodeModalId] = useState<number | null>(null);
  const [stageId, setStageId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const visibleCatalog = useMemo(
    () =>
      filterCatalog(MENU_CATALOG, {
        kind: kindFilter,
        layout: layoutFilter,
        query: searchQuery,
      }),
    [kindFilter, layoutFilter, searchQuery]
  );

  const allVisibleOpen =
    visibleCatalog.length > 0 && visibleCatalog.every((item) => Boolean(openStates[item.id]));

  const toggleAllVisible = () => {
    const nextValue = !allVisibleOpen;
    setOpenStates((prev) => {
      const updated = { ...prev };
      for (const item of visibleCatalog) {
        updated[item.id] = nextValue;
      }
      return updated;
    });
  };

  const toggleOne = (id: number, next?: boolean) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: next !== undefined ? next : !prev[id],
    }));
  };

  const handleCopyCode = async (id: number) => {
    const code = sources[id];
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  const activeCodeMeta =
    codeModalId !== null ? MENU_CATALOG.find((m) => m.id === codeModalId) ?? null : null;
  const activeStageMeta =
    stageId !== null ? MENU_CATALOG.find((m) => m.id === stageId) ?? null : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            SheetKit 20
          </a>

          <nav aria-label="Showcase sections" className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#gallery"
              onClick={() => setKindFilter('all')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              All 20 Menus
            </a>
            <a
              href="#gallery"
              onClick={() => setKindFilter('top-dropdown')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Top Drop-Downs (10)
            </a>
            <a
              href="#gallery"
              onClick={() => setKindFilter('bottom-sheet')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Bottom Sheets (10)
            </a>
            <a
              href="#matrix"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Topology Matrix
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={toggleAllVisible}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              {allVisibleOpen ? 'Close All Open' : 'Open All Menus'}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <section className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            20 Mobile-First Navigation Topologies
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 text-balance leading-[1.1]">
            Twenty varied push-down menus and layered bottom sheets with search.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Every component from{' '}
            <code className="font-mono text-sm text-slate-900">SheetMenu1</code> to{' '}
            <code className="font-mono text-sm text-slate-900">SheetMenu20</code> pairs a working
            search bar with a distinct layout topology—split master-detail, command palette,
            accordion tree, bento mosaic, drill-down stack, A–Z rail, thumb-zone search, and more.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStageId(12)}
              className="min-h-[44px] px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Test Thumb-Search Stage
            </button>
            <a
              href="#matrix"
              className="min-h-[44px] px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-100 inline-flex items-center transition-colors"
            >
              Compare All 20 Topologies
            </a>
          </div>
        </section>

        <section
          id="gallery"
          aria-label="Filter mobile navigation menus"
          className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 min-w-0 max-w-full">
              <div
                role="group"
                aria-label="Filter by menu kind"
                className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-slate-100 max-w-full"
              >
                <button
                  type="button"
                  onClick={() => setKindFilter('all')}
                  className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                    kindFilter === 'all'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  All (20)
                </button>
                <button
                  type="button"
                  onClick={() => setKindFilter('top-dropdown')}
                  className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    kindFilter === 'top-dropdown'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <PanelTop className="w-3.5 h-3.5" />
                  <span>Top Drop-Down (10)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setKindFilter('bottom-sheet')}
                  className={`min-h-[38px] px-3 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    kindFilter === 'bottom-sheet'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <PanelBottom className="w-3.5 h-3.5" />
                  <span>Bottom Sheet (10)</span>
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <label htmlFor="catalog-search" className="sr-only">
                Search components or topologies
              </label>
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menus or topologies..."
                className="w-full min-h-[42px] pl-10 pr-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-blue-600"
              />
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter by topology"
            className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-slate-100 max-w-full"
          >
            {TOPOLOGY_FILTERS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setLayoutFilter(tab.id)}
                className={`min-h-[34px] px-2.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                  layoutFilter === tab.id
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {visibleCatalog.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center space-y-3">
            <p className="text-base font-semibold text-slate-900">No menu components match your filters.</p>
            <button
              type="button"
              onClick={() => {
                setKindFilter('all');
                setLayoutFilter('all');
                setSearchQuery('');
              }}
              className="min-h-[44px] px-4 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <section
            aria-label="Mobile menu component gallery"
            data-testid="menu-gallery-grid"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {visibleCatalog.map((meta) => (
              <MenuCard
                key={meta.id}
                meta={meta}
                isOpen={Boolean(openStates[meta.id])}
                lastDestination={lastSelected[meta.id]}
                onOpenChange={(next) => toggleOne(meta.id, next)}
                onSelectDestination={(dest) =>
                  setLastSelected((prev) => ({ ...prev, [meta.id]: dest }))
                }
                onInspectCode={() => setCodeModalId(meta.id)}
                onOpenStage={() => setStageId(meta.id)}
              />
            ))}
          </section>
        )}

        <section id="matrix" className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="font-display text-xl font-bold text-slate-950">
                20-Component Topology Matrix
              </h2>
              <p className="text-sm text-slate-600">
                Structural comparison across interaction topology, search bar integration, style family, and snap tiers.
              </p>
            </div>
            <span className="text-xs font-mono tabular-nums text-slate-500">
              20 self-contained components
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 px-4">Component</th>
                  <th className="py-3.5 px-4">Kind</th>
                  <th className="py-3.5 px-4">Structural Topology</th>
                  <th className="py-3.5 px-4">Style Family</th>
                  <th className="py-3.5 px-4">Search &amp; Extras</th>
                  <th className="py-3.5 px-4">Snap Heights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MENU_CATALOG.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-slate-900 whitespace-nowrap">
                      {item.componentName}
                    </td>
                    <td className="py-3 px-4 text-slate-700 whitespace-nowrap">
                      {KIND_LABELS[item.kind]}
                    </td>
                    <td className="py-3 px-4 font-medium text-slate-900 whitespace-nowrap">
                      {item.topologyLabel}
                    </td>
                    <td className="py-3 px-4 text-slate-700 whitespace-nowrap">
                      {STYLE_LABELS[item.styleFamily]}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {[
                        item.hasSearchBar ? 'Search Bar' : null,
                        item.hasProfileFooter ? 'Profile Footer' : null,
                        item.hasUtilityActions ? 'Utilities' : null,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs tabular-nums text-slate-600 whitespace-nowrap">
                      {item.snapPoints
                        ? item.snapPoints.map((s) => `${s.label} (${s.heightPercent}%)`).join(' / ')
                        : 'Full-width push panel'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {activeCodeMeta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCodeMeta.componentName} source code`}
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="w-full max-w-3xl max-h-[86vh] bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden">
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between gap-3">
              <div>
                <h3 className="font-mono text-sm font-semibold text-white">
                  {activeCodeMeta.componentName}.tsx
                </h3>
                <p className="text-xs text-slate-400">
                  {KIND_LABELS[activeCodeMeta.kind]} · {activeCodeMeta.topologyLabel}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyCode(activeCodeMeta.id)}
                  className="min-h-[40px] px-3.5 rounded-lg bg-blue-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-blue-500 transition-colors"
                >
                  {copiedId === activeCodeMeta.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy TSX</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  aria-label="Close source dialog"
                  onClick={() => setCodeModalId(null)}
                  className="min-h-[40px] min-w-[40px] rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <pre className="p-5 overflow-auto text-xs leading-relaxed font-mono text-slate-200">
              <code>{sources[activeCodeMeta.id]}</code>
            </pre>
          </div>
        </div>
      )}

      {activeStageMeta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Interactive mobile stage for ${activeStageMeta.componentName}`}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex flex-col items-center justify-center p-2 sm:p-6"
        >
          <div className="w-full max-w-[420px] flex items-center justify-between gap-2 pb-3 text-white">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-sm font-semibold truncate">
                {activeStageMeta.componentName}
              </span>
              <span className="text-xs text-slate-300 truncate">
                · {activeStageMeta.topologyLabel}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setStageId((prev) => (prev === null ? 1 : prev === 1 ? 20 : prev - 1))
                }
                className="min-h-[38px] px-2.5 rounded-lg bg-slate-800 text-xs font-medium hover:bg-slate-700"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setStageId((prev) => (prev === null ? 1 : prev === 20 ? 1 : prev + 1))
                }
                className="min-h-[38px] px-2.5 rounded-lg bg-slate-800 text-xs font-medium hover:bg-slate-700"
              >
                Next
              </button>
              <button
                type="button"
                aria-label="Close mobile stage"
                onClick={() => setStageId(null)}
                className="min-h-[38px] min-w-[38px] rounded-lg bg-white text-slate-950 flex items-center justify-center hover:bg-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full max-w-[390px] h-[min(780px,calc(100vh-5.5rem))] rounded-[32px] border-4 border-slate-800 bg-white overflow-hidden shadow-2xl">
            {React.createElement(COMPONENT_MAP[activeStageMeta.id], {
              key: activeStageMeta.id,
              defaultOpen: true,
              contained: true,
              onSelectDestination: (dest) =>
                setLastSelected((prev) => ({ ...prev, [activeStageMeta.id]: dest })),
            })}
          </div>
        </div>
      )}
    </div>
  );
}

interface MenuCardProps {
  meta: MenuCatalogMeta;
  isOpen: boolean;
  lastDestination?: string;
  onOpenChange: (next: boolean) => void;
  onSelectDestination: (label: string) => void;
  onInspectCode: () => void;
  onOpenStage: () => void;
}

function MenuCard({
  meta,
  isOpen,
  lastDestination,
  onOpenChange,
  onSelectDestination,
  onInspectCode,
  onOpenStage,
}: MenuCardProps) {
  const Component = COMPONENT_MAP[meta.id];

  return (
    <article
      data-testid={`menu-card-${meta.id}`}
      className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-4"
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-lg font-bold text-slate-950">
            {meta.componentName} · {meta.title}
          </h2>
          <span className="font-mono text-xs tabular-nums text-slate-400">
            {String(meta.id).padStart(2, '0')}/20
          </span>
        </div>
        <p className="text-xs text-slate-500">
          {KIND_LABELS[meta.kind]} · {meta.topologyLabel} · {STYLE_LABELS[meta.styleFamily]}
        </p>
        <p className="text-sm text-slate-600 leading-snug pt-0.5">{meta.summary}</p>
      </div>

      <div className="w-full h-[580px] rounded-[28px] border border-slate-200 bg-slate-100 overflow-hidden shadow-inner">
        <Component
          open={isOpen}
          onOpenChange={onOpenChange}
          contained={true}
          onSelectDestination={onSelectDestination}
        />
      </div>

      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          type="button"
          onClick={() => onOpenChange(!isOpen)}
          className={`min-h-[42px] px-3.5 rounded-xl text-xs font-semibold transition-colors ${
            isOpen
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isOpen ? `Close ${meta.componentName}` : `Open ${meta.componentName}`}
        </button>

        <div className="flex items-center gap-1.5">
          {lastDestination && (
            <span className="text-xs text-slate-500 truncate max-w-[96px]" title={lastDestination}>
              {lastDestination}
            </span>
          )}
          <button
            type="button"
            aria-label={`Fullscreen mobile stage for ${meta.componentName}`}
            onClick={onOpenStage}
            className="min-h-[42px] px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 hover:bg-slate-100 inline-flex items-center gap-1.5 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Stage</span>
          </button>
          <button
            type="button"
            aria-label={`View TSX code for ${meta.componentName}`}
            onClick={onInspectCode}
            className="min-h-[42px] px-3 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 hover:bg-slate-100 inline-flex items-center gap-1.5 transition-colors"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>TSX</span>
          </button>
        </div>
      </div>
    </article>
  );
}
