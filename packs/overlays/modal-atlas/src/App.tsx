import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal1,
  Modal2,
  Modal3,
  Modal4,
  Modal5,
  Modal6,
  Modal7,
  Modal8,
  Modal9,
  Modal10,
  Modal11,
  Modal12,
  Modal13,
  Modal14,
  Modal15,
  Modal16,
  Modal17,
  Modal18,
  Modal19,
  Modal20,
  type ModalProps,
} from './components/modals';
import { ModalThumbnail } from './components/ModalThumbnail';
import {
  ALL_KINDS,
  ALL_LAYOUTS,
  ALL_STYLES,
  MODAL_SPECS,
  countByStyleFamily,
  filterModalSpecs,
  type ModalKind,
  type ModalLayout,
  type StyleFamily,
} from './utils/catalog';

const MODAL_COMPONENTS: Record<number, React.ComponentType<ModalProps>> = {
  1: Modal1,
  2: Modal2,
  3: Modal3,
  4: Modal4,
  5: Modal5,
  6: Modal6,
  7: Modal7,
  8: Modal8,
  9: Modal9,
  10: Modal10,
  11: Modal11,
  12: Modal12,
  13: Modal13,
  14: Modal14,
  15: Modal15,
  16: Modal16,
  17: Modal17,
  18: Modal18,
  19: Modal19,
  20: Modal20,
};

export default function App() {
  const [search, setSearch] = useState('');
  const [kindFilter, setKindFilter] = useState<ModalKind | 'All'>('All');
  const [styleFilter, setStyleFilter] = useState<StyleFamily | 'All'>('All');
  const [layoutFilter, setLayoutFilter] = useState<ModalLayout | 'All'>('All');

  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const [lastActionNote, setLastActionNote] = useState<string>('');

  const filteredSpecs = useMemo(
    () =>
      filterModalSpecs(MODAL_SPECS, {
        search,
        kind: kindFilter,
        styleFamily: styleFilter,
        layout: layoutFilter,
      }),
    [search, kindFilter, styleFilter, layoutFilter],
  );

  const styleCounts = useMemo(() => countByStyleFamily(MODAL_SPECS), []);

  const hasActiveFilters =
    search.trim() !== '' ||
    kindFilter !== 'All' ||
    styleFilter !== 'All' ||
    layoutFilter !== 'All';

  const resetFilters = () => {
    setSearch('');
    setKindFilter('All');
    setStyleFilter('All');
    setLayoutFilter('All');
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setActiveModalId(16);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const ActiveModalComponent = activeModalId ? MODAL_COMPONENTS[activeModalId] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 py-4">
          <a
            href="#catalog"
            className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
          >
            Modal Atlas
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#catalog" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Catalog
            </a>
            <a href="#styles" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Style Matrix
            </a>
            <a href="#layouts" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Layouts
            </a>
            <a href="#accessibility" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Accessibility
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setActiveModalId(16)}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              Command Palette
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-12">
        <section className="space-y-4">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-slate-500">
              React 19 · Tailwind CSS v4 · Self-contained Dialog Components
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 text-balance">
              Twenty accessible modal dialog components
            </h1>
            <p className="text-base leading-relaxed text-slate-600">
              A complete library of standalone dialogs (<span className="font-mono text-slate-800">Modal1</span> through{' '}
              <span className="font-mono text-slate-800">Modal20</span>) covering confirmations, forms, lightboxes,
              slide-overs, wizards, command palettes, cookie banners, and floating alerts.
            </p>
          </div>

          {lastActionNote && (
            <div
              role="status"
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <span>
                <strong className="font-semibold text-slate-900">Last dialog action:</strong> {lastActionNote}
              </span>
              <button
                type="button"
                onClick={() => setLastActionNote('')}
                className="text-xs font-medium text-slate-500 hover:text-slate-900 shrink-0"
              >
                Clear
              </button>
            </div>
          )}
        </section>

        <section id="catalog" className="space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5">
                <label htmlFor="catalog-search" className="sr-only">
                  Search modals
                </label>
                <input
                  id="catalog-search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by component, kind, or layout..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="kind-filter" className="sr-only">
                  Filter by modal kind
                </label>
                <select
                  id="kind-filter"
                  value={kindFilter}
                  onChange={(e) => setKindFilter(e.target.value as ModalKind | 'All')}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-slate-900 focus:outline-none"
                >
                  <option value="All">All kinds (11)</option>
                  {ALL_KINDS.map((kind) => (
                    <option key={kind} value={kind}>
                      {kind}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-4">
                <label htmlFor="layout-filter" className="sr-only">
                  Filter by layout
                </label>
                <select
                  id="layout-filter"
                  value={layoutFilter}
                  onChange={(e) => setLayoutFilter(e.target.value as ModalLayout | 'All')}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-slate-900 focus:outline-none"
                >
                  <option value="All">All layouts (6)</option>
                  {ALL_LAYOUTS.map((layout) => (
                    <option key={layout} value={layout}>
                      {layout}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div role="group" aria-label="Filter by style family" className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  type="button"
                  onClick={() => setStyleFilter('All')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    styleFilter === 'All'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All styles
                </button>
                {ALL_STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setStyleFilter(style)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      styleFilter === style
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 tabular-nums">
                <span data-testid="catalog-count">
                  Showing {filteredSpecs.length} of {MODAL_SPECS.length} dialogs
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="font-semibold text-slate-900 underline underline-offset-4 hover:text-blue-600"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {filteredSpecs.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white py-14 px-6 text-center">
              <h2 className="text-base font-semibold text-slate-900">
                No modal dialogs match your current filters
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Clear the search query or reset style and layout filters to view all 20 components.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div
              data-testid="modal-catalog-grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredSpecs.map((spec) => (
                <article
                  key={spec.id}
                  data-testid={`modal-card-${spec.id}`}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
                >
                  <div>
                    <ModalThumbnail spec={spec} />

                    <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11.5px] text-slate-500">
                      <span className="font-mono font-medium text-slate-800">{spec.exportName}</span>
                      <span aria-hidden="true">·</span>
                      <span>{spec.kind}</span>
                      <span aria-hidden="true">·</span>
                      <span>{spec.layout}</span>
                      <span aria-hidden="true">·</span>
                      <span>{spec.styleFamily}</span>
                    </div>

                    <h2 className="mt-1.5 text-base font-semibold tracking-tight text-slate-950">
                      {spec.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {spec.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-slate-400">defaultOpen</span>
                    <button
                      type="button"
                      onClick={() => setActiveModalId(spec.id)}
                      aria-label={`Preview ${spec.exportName}: ${spec.title}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors whitespace-nowrap"
                    >
                      Preview {spec.exportName}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="styles" className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">Style family distribution</h2>
            <p className="mt-1 text-sm text-slate-600">
              All five visual languages are balanced evenly across the 20 dialogs.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 text-xs text-slate-500">
                  <tr>
                    <th className="py-2 font-medium">Style family</th>
                    <th className="py-2 font-medium">Included components</th>
                    <th className="py-2 font-medium text-right">Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ALL_STYLES.map((style) => {
                    const list = MODAL_SPECS.filter((m) => m.styleFamily === style)
                      .map((m) => m.exportName)
                      .join(', ');
                    return (
                      <tr key={style}>
                        <td className="py-2.5 font-medium text-slate-900 whitespace-nowrap">{style}</td>
                        <td className="py-2.5 font-mono text-xs text-slate-600">{list}</td>
                        <td className="py-2.5 font-mono text-slate-900 text-right tabular-nums">
                          {styleCounts[style]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div id="layouts" className="rounded-xl border border-slate-200 bg-white p-6 space-y-5">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">Layout modes &amp; accessibility</h2>
              <p className="mt-1 text-sm text-slate-600">
                Each dialog handles keyboard dismissal, scrim interaction, and responsive positioning without external dependencies.
              </p>
            </div>
            <dl id="accessibility" className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-900">ARIA Dialog Semantics</dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                  Every component renders <span className="font-mono">role=&quot;dialog&quot;</span>,{' '}
                  <span className="font-mono">aria-modal=&quot;true&quot;</span>, and{' '}
                  <span className="font-mono">aria-labelledby</span>.
                </dd>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-900">Controlled &amp; Uncontrolled</dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                  Supports standalone <span className="font-mono">defaultOpen</span> or controlled{' '}
                  <span className="font-mono">open</span> + <span className="font-mono">onOpenChange</span>.
                </dd>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-900">Scrim &amp; Escape Dismiss</dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                  Pressing Escape or clicking the backdrop scrim closes the active dialog and resets transient error state.
                </dd>
              </div>
              <div className="border-t border-slate-100 pt-3">
                <dt className="font-semibold text-slate-900">Zero External Media</dt>
                <dd className="mt-1 text-xs leading-relaxed text-slate-600">
                  All illustrations, lightboxes, and video players render inline SVGs and CSS gradients.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {ActiveModalComponent && (
        <ActiveModalComponent
          key={activeModalId}
          open={true}
          onOpenChange={(isOpen) => {
            if (!isOpen) setActiveModalId(null);
          }}
          onActionComplete={(msg) => setLastActionNote(msg)}
        />
      )}
    </div>
  );
}
