'use client';

import React, { useMemo, useState } from 'react';
import { Check, Code2, Copy, Eye, EyeOff, RotateCcw, Search } from 'lucide-react';
import {
  MENU_CATALOG,
  MenuCatalogEntry,
  MenuKind,
  MenuStyle,
  filterMenus,
} from '@/lib/menu-catalog';
import { DropdownMenu1 } from '@/components/menus/DropdownMenu1';
import { DropdownMenu2 } from '@/components/menus/DropdownMenu2';
import { DropdownMenu3 } from '@/components/menus/DropdownMenu3';
import { DropdownMenu4 } from '@/components/menus/DropdownMenu4';
import { DropdownMenu5 } from '@/components/menus/DropdownMenu5';
import { DropdownMenu6 } from '@/components/menus/DropdownMenu6';
import { DropdownMenu7 } from '@/components/menus/DropdownMenu7';
import { DropdownMenu8 } from '@/components/menus/DropdownMenu8';
import { DropdownMenu9 } from '@/components/menus/DropdownMenu9';
import { DropdownMenu10 } from '@/components/menus/DropdownMenu10';
import { DropdownMenu11 } from '@/components/menus/DropdownMenu11';
import { DropdownMenu12 } from '@/components/menus/DropdownMenu12';
import { DropdownMenu13 } from '@/components/menus/DropdownMenu13';
import { DropdownMenu14 } from '@/components/menus/DropdownMenu14';
import { DropdownMenu15 } from '@/components/menus/DropdownMenu15';
import { DropdownMenu16 } from '@/components/menus/DropdownMenu16';
import { DropdownMenu17 } from '@/components/menus/DropdownMenu17';
import { DropdownMenu18 } from '@/components/menus/DropdownMenu18';
import { DropdownMenu19 } from '@/components/menus/DropdownMenu19';
import { DropdownMenu20 } from '@/components/menus/DropdownMenu20';

export interface ShowcaseAppProps {
  sources: Record<string, string>;
}

const COMPACT_COUNT = MENU_CATALOG.filter((m) => m.kind === 'compact').length;
const MEGA_COUNT = MENU_CATALOG.filter((m) => m.kind === 'mega').length;

const KIND_OPTIONS: Array<{ value: 'all' | MenuKind; label: string }> = [
  { value: 'all', label: `All (${MENU_CATALOG.length})` },
  { value: 'compact', label: `Compact 248-320px (${COMPACT_COUNT})` },
  { value: 'mega', label: `Full-Width Mega (${MEGA_COUNT})` },
];

const STYLE_OPTIONS: Array<{ value: 'all' | MenuStyle; label: string }> = [
  { value: 'all', label: 'All Styles' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'bold', label: 'Bold' },
  { value: 'dark', label: 'Dark' },
  { value: 'glass', label: 'Glass' },
];

function renderMenuComponent(
  id: number,
  onNavigate: (label: string) => void,
  forceOpen?: boolean,
) {
  switch (id) {
    case 1:
      return <DropdownMenu1 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 2:
      return <DropdownMenu2 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 3:
      return <DropdownMenu3 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 4:
      return <DropdownMenu4 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 5:
      return <DropdownMenu5 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 6:
      return <DropdownMenu6 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 7:
      return <DropdownMenu7 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 8:
      return <DropdownMenu8 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 9:
      return <DropdownMenu9 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 10:
      return <DropdownMenu10 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 11:
      return <DropdownMenu11 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 12:
      return <DropdownMenu12 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 13:
      return <DropdownMenu13 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 14:
      return <DropdownMenu14 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 15:
      return <DropdownMenu15 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 16:
      return <DropdownMenu16 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 17:
      return <DropdownMenu17 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 18:
      return <DropdownMenu18 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 19:
      return <DropdownMenu19 onNavigate={onNavigate} forceOpen={forceOpen} />;
    case 20:
      return <DropdownMenu20 onNavigate={onNavigate} forceOpen={forceOpen} />;
    default:
      return null;
  }
}

function StageBackdrop({ entry }: { entry: MenuCatalogEntry }) {
  if (entry.id === 3) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-teal-300/60 blur-3xl" />
        <div className="absolute right-12 top-6 h-72 w-72 rounded-full bg-indigo-300/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-80 rounded-full bg-sky-300/50 blur-3xl" />
      </div>
    );
  }
  if (entry.id === 9) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -left-12 top-4 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute right-16 top-8 h-80 w-80 rounded-full bg-indigo-500/35 blur-3xl" />
        <div className="absolute bottom-4 left-1/2 h-56 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
    );
  }
  if (entry.id === 16) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -left-10 top-6 h-72 w-72 rounded-full bg-rose-300/65 blur-3xl" />
        <div className="absolute right-12 top-10 h-72 w-72 rounded-full bg-sky-300/65 blur-3xl" />
        <div className="absolute bottom-4 left-1/2 h-60 w-80 rounded-full bg-amber-200/70 blur-3xl" />
      </div>
    );
  }
  if (entry.id === 19) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute -left-12 top-8 h-72 w-72 rounded-full bg-amber-600/25 blur-3xl" />
        <div className="absolute right-10 top-6 h-80 w-80 rounded-full bg-orange-700/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-72 rounded-full bg-stone-700/35 blur-3xl" />
      </div>
    );
  }
  return null;
}

export function ShowcaseApp({ sources }: ShowcaseAppProps) {
  const [kindFilter, setKindFilter] = useState<'all' | MenuKind>('all');
  const [styleFilter, setStyleFilter] = useState<'all' | MenuStyle>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [allForcedOpen, setAllForcedOpen] = useState(false);
  const [pinnedPreviewIds, setPinnedPreviewIds] = useState<Record<number, boolean>>({});
  const [openCodeIds, setOpenCodeIds] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [lastNavigatedByMenu, setLastNavigatedByMenu] = useState<Record<number, string>>({});

  const visibleMenus = useMemo(
    () =>
      filterMenus(MENU_CATALOG, {
        kind: kindFilter,
        style: styleFilter,
        query: searchQuery,
      }),
    [kindFilter, styleFilter, searchQuery],
  );

  const toggleCode = (id: number) => {
    setOpenCodeIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const togglePinPreview = (id: number) => {
    setPinnedPreviewIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleAllOpen = () => {
    const next = !allForcedOpen;
    setAllForcedOpen(next);
    if (!next) {
      setPinnedPreviewIds({});
    }
  };

  const handleCopyCode = async (entry: MenuCatalogEntry) => {
    const source = sources[entry.componentName] ?? '';
    try {
      await navigator.clipboard.writeText(source);
      setCopiedId(entry.id);
      setTimeout(() => {
        setCopiedId((current) => (current === entry.id ? null : current));
      }, 1800);
    } catch {
      setOpenCodeIds((prev) => ({ ...prev, [entry.id]: true }));
    }
  };

  const resetFilters = () => {
    setKindFilter('all');
    setStyleFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#F6F5F1] text-neutral-900">
      {/* Top Bar Contract: 1 row, 3 zones */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-[#F6F5F1]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-neutral-950 whitespace-nowrap shrink-0"
          >
            Header Menu Kit
          </a>

          <nav aria-label="Showcase Sections" className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
            <a
              href="#menus"
              className="transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0"
            >
              Components
            </a>
            <button
              type="button"
              onClick={() => {
                setKindFilter('compact');
                document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0"
            >
              Compact Panels
            </button>
            <button
              type="button"
              onClick={() => {
                setKindFilter('mega');
                document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0"
            >
              Mega Menus
            </button>
            <a
              href="#matrix"
              className="transition-colors hover:text-neutral-950 whitespace-nowrap shrink-0"
            >
              Spec Matrix
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleToggleAllOpen}
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              {allForcedOpen ? (
                <>
                  <EyeOff className="h-3.5 w-3.5" />
                  <span>Collapse All Panels</span>
                </>
              ) : (
                <>
                  <Eye className="h-3.5 w-3.5" />
                  <span>Open All Panels</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-10">
        {/* Editorial Hero */}
        <section className="max-w-4xl pb-8">
          <h1
            className="font-display font-bold tracking-tight text-neutral-950"
            style={{ fontSize: 'clamp(2.15rem, 3.6vw, 3.25rem)', textWrap: 'balance', lineHeight: 1.08 }}
          >
            Twenty desktop navigation headers with live search bars and varied panel topologies
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            Every menu features a working search bar alongside distinct structural layouts—floating
            islands, capsule headers, double-decker mastheads, left search rails, interactive
            category tabs, audience switchers, and accordion drawers.
          </p>
        </section>

        {/* Filter & Search Toolbar */}
        <section
          aria-label="Filter Components"
          className="mb-10 flex flex-col gap-4 border-y border-neutral-200/90 py-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div role="group" aria-label="Filter by menu kind" className="flex items-center gap-1 rounded-lg bg-neutral-200/70 p-1">
              {KIND_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setKindFilter(opt.value)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    kindFilter === opt.value
                      ? 'bg-white text-neutral-950 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div role="group" aria-label="Filter by visual style" className="flex items-center gap-1 rounded-lg bg-neutral-200/70 p-1">
              {STYLE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setStyleFilter(opt.value)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    styleFilter === opt.value
                      ? 'bg-white text-neutral-950 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <label htmlFor="menu-search" className="sr-only">
                Search components
              </label>
              <input
                id="menu-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand, topology, or search..."
                className="w-full rounded-lg border border-neutral-300 bg-white py-2 pl-9 pr-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
              />
            </div>

            <span className="font-mono text-xs tabular-nums text-neutral-500 whitespace-nowrap shrink-0">
              {visibleMenus.length} / {MENU_CATALOG.length}
            </span>
          </div>
        </section>

        {/* Live Component Stages */}
        <section id="menus" className="space-y-12">
          {visibleMenus.length === 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white px-8 py-14 text-center">
              <h2 className="font-display text-xl font-semibold text-neutral-900">
                No navigation menus match these filters
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Clear the active kind, style, or search filter to inspect all 20 header menus.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            visibleMenus.map((entry) => {
              const isForced = allForcedOpen || Boolean(pinnedPreviewIds[entry.id]);
              const isCodeOpen = Boolean(openCodeIds[entry.id]);
              const lastClicked = lastNavigatedByMenu[entry.id];
              const isDarkStage = entry.style === 'dark' || entry.id === 9 || entry.id === 18 || entry.id === 19;
              const stageHeight = entry.kind === 'mega' ? 'min-h-[540px]' : 'min-h-[480px]';

              return (
                <article
                  key={entry.id}
                  data-testid={`menu-card-${entry.componentName}`}
                  className="relative hover:z-30 focus-within:z-30"
                >
                  {/* Card Meta Header */}
                  <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="font-display text-xl font-bold tracking-tight text-neutral-950 tabular-nums">
                          {String(entry.id).padStart(2, '0')}. {entry.componentName}
                        </h2>
                        <span className="text-sm font-medium text-neutral-500">
                          {entry.brand}
                        </span>
                      </div>

                      {/* Zero-pill metadata line with typographic dot separators */}
                      <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600">
                        <span className="font-semibold text-neutral-800">{entry.kindLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.styleLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.topology}</span>
                        <span aria-hidden="true">·</span>
                        <span>Search: {entry.searchPlacement}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => togglePinPreview(entry.id)}
                        aria-pressed={isForced}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          isForced
                            ? 'border-neutral-900 bg-neutral-900 text-white'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-950'
                        }`}
                      >
                        {isForced ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                        <span>{isForced ? 'Unpin Open' : 'Keep Open'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleCode(entry.id)}
                        aria-expanded={isCodeOpen}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                          isCodeOpen
                            ? 'border-neutral-900 bg-neutral-100 text-neutral-950'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-950'
                        }`}
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        <span>{isCodeOpen ? 'Hide TSX' : 'View TSX'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyCode(entry)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-950 whitespace-nowrap shrink-0"
                      >
                        {copiedId === entry.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy TSX</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Interactive Stage Canvas */}
                  <div
                    className={`relative rounded-xl border border-neutral-300/80 shadow-sm ${entry.stageClassName} ${stageHeight}`}
                  >
                    <StageBackdrop entry={entry} />

                    {/* Component under test: Header sits flush at top of stage */}
                    <div className="relative z-20 overflow-visible [&>header]:rounded-t-[11px]">
                      {renderMenuComponent(
                        entry.id,
                        (label) =>
                          setLastNavigatedByMenu((prev) => ({
                            ...prev,
                            [entry.id]: label,
                          })),
                        isForced ? true : undefined,
                      )}
                    </div>

                    {/* Subtle Page Context Below Header */}
                    <div className="relative z-10 flex flex-col justify-between px-8 py-10">
                      <div className="max-w-lg">
                        <p
                          className={`text-xs font-semibold ${
                            isDarkStage ? 'text-white/60' : 'text-neutral-500'
                          }`}
                        >
                          Hover or click &ldquo;{entry.triggerLabel}&rdquo; on the right side of the bar
                        </p>
                        <p
                          className={`mt-2 text-sm leading-relaxed ${
                            isDarkStage ? 'text-white/80' : 'text-neutral-700'
                          }`}
                        >
                          {entry.summary}
                        </p>
                      </div>

                      {lastClicked && (
                        <p
                          data-testid={`nav-feedback-${entry.componentName}`}
                          className={`mt-6 inline-block w-fit rounded-md border px-3 py-1.5 text-xs font-medium ${
                            isDarkStage
                              ? 'border-white/20 bg-white/10 text-white'
                              : 'border-neutral-300 bg-white/90 text-neutral-900'
                          }`}
                        >
                          Selected link: <span className="font-semibold">{lastClicked}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Collapsible Authentic Self-Contained TSX Source Drawer */}
                  {isCodeOpen && (
                    <div className="mt-3 overflow-hidden rounded-xl border border-neutral-800 bg-[#111318] text-neutral-100">
                      <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2.5">
                        <span className="font-mono text-xs text-neutral-400">
                          {entry.componentName}.tsx
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopyCode(entry)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white"
                        >
                          {copiedId === entry.id ? 'Copied to clipboard' : 'Copy source'}
                        </button>
                      </div>
                      <pre className="max-h-[420px] overflow-auto p-4 font-mono text-xs leading-relaxed text-neutral-200">
                        <code>{sources[entry.componentName] ?? ''}</code>
                      </pre>
                    </div>
                  )}
                </article>
              );
            })
          )}
        </section>

        {/* Comparison Spec Matrix */}
        <section id="matrix" className="mt-20 border-t border-neutral-200 pt-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-950">
            Component Architecture Matrix
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Structural and search breakdown across all twenty self-contained navigation headers.
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-500">
                  <th className="px-4 py-3">Component</th>
                  <th className="px-4 py-3">Brand</th>
                  <th className="px-4 py-3">Panel Geometry</th>
                  <th className="px-4 py-3">Style</th>
                  <th className="px-4 py-3">Topology</th>
                  <th className="px-4 py-3">Search Bar</th>
                  <th className="px-4 py-3">Promo Strip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {MENU_CATALOG.map((entry) => (
                  <tr key={entry.id} className="transition-colors hover:bg-neutral-50/80">
                    <td className="px-4 py-3 font-mono text-xs font-semibold tabular-nums text-neutral-900">
                      {entry.componentName}
                    </td>
                    <td className="px-4 py-3 font-medium text-neutral-800 whitespace-nowrap">{entry.brand}</td>
                    <td className="px-4 py-3 text-xs text-neutral-600 tabular-nums whitespace-nowrap">
                      {entry.widthSpec}
                    </td>
                    <td className="px-4 py-3 text-xs text-neutral-700 whitespace-nowrap">{entry.styleLabel}</td>
                    <td className="px-4 py-3 text-xs text-neutral-700">{entry.topology}</td>
                    <td className="px-4 py-3 text-xs text-neutral-700">{entry.searchPlacement}</td>
                    <td className="px-4 py-3 text-xs font-medium text-neutral-700 whitespace-nowrap">
                      {entry.hasPromoStrip ? 'Included' : 'None'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
