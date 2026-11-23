'use client';

import React, { useEffect, useState } from 'react';
import { Check, Code2, Copy, Search, X } from 'lucide-react';
import {
  DRAWER_CATALOG,
  DrawerSpec,
  StyleFamily,
  filterDrawersByStyle,
} from '@/lib/drawer-catalog';
import { DrawerMenu1 } from '@/components/drawers/DrawerMenu1';
import { DrawerMenu2 } from '@/components/drawers/DrawerMenu2';
import { DrawerMenu3 } from '@/components/drawers/DrawerMenu3';
import { DrawerMenu4 } from '@/components/drawers/DrawerMenu4';
import { DrawerMenu5 } from '@/components/drawers/DrawerMenu5';
import { DrawerMenu6 } from '@/components/drawers/DrawerMenu6';
import { DrawerMenu7 } from '@/components/drawers/DrawerMenu7';
import { DrawerMenu8 } from '@/components/drawers/DrawerMenu8';
import { DrawerMenu9 } from '@/components/drawers/DrawerMenu9';
import { DrawerMenu10 } from '@/components/drawers/DrawerMenu10';
import { DrawerMenu11 } from '@/components/drawers/DrawerMenu11';
import { DrawerMenu12 } from '@/components/drawers/DrawerMenu12';
import { DrawerMenu13 } from '@/components/drawers/DrawerMenu13';
import { DrawerMenu14 } from '@/components/drawers/DrawerMenu14';
import { DrawerMenu15 } from '@/components/drawers/DrawerMenu15';
import { DrawerMenu16 } from '@/components/drawers/DrawerMenu16';
import { DrawerMenu17 } from '@/components/drawers/DrawerMenu17';
import { DrawerMenu18 } from '@/components/drawers/DrawerMenu18';
import { DrawerMenu19 } from '@/components/drawers/DrawerMenu19';
import { DrawerMenu20 } from '@/components/drawers/DrawerMenu20';

export interface DrawerShowcaseProps {
  sourceMap: Record<string, string>;
}

const STYLE_FILTERS: Array<'All' | StyleFamily> = [
  'All',
  'Minimal',
  'Bold',
  'Dark',
  'Light Warm',
];

function DrawerSchematic({ spec }: { spec: DrawerSpec }) {
  const isDark =
    spec.styleFamily === 'Dark' ||
    (spec.styleFamily === 'Bold' && spec.id !== 15);
  const mutedLine = isDark ? 'bg-white/25' : 'bg-slate-900/15';
  const strongLine = isDark ? 'bg-white/80' : 'bg-slate-900/75';
  const borderTone = isDark ? 'border-white/15' : 'border-slate-900/12';

  const renderInnerTopology = () => {
    // 1: Vertical Spine + 2-Column Grid
    if (spec.id === 1) {
      return (
        <div className="flex h-full">
          <div className={`w-4 shrink-0 border-r ${borderTone}`} />
          <div className="flex flex-1 flex-col justify-between p-2.5">
            <div className="space-y-2">
              <div className={`h-3.5 w-full rounded border ${borderTone}`} />
              <div className="grid grid-cols-2 gap-1.5">
                <div className="space-y-1">
                  <div className={`h-1 w-8 rounded-full ${strongLine}`} />
                  <div className={`h-1 w-10 rounded-full ${mutedLine}`} />
                  <div className={`h-1 w-7 rounded-full ${mutedLine}`} />
                </div>
                <div className="space-y-1">
                  <div className={`h-1 w-8 rounded-full ${strongLine}`} />
                  <div className={`h-1 w-9 rounded-full ${mutedLine}`} />
                  <div className={`h-1 w-10 rounded-full ${mutedLine}`} />
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
          </div>
        </div>
      );
    }

    // 2: Dual-Rail Icon + Detail Pane
    if (spec.id === 2) {
      return (
        <div className="flex h-full">
          <div className="flex w-5 shrink-0 flex-col items-center justify-between bg-slate-900 py-2">
            <div className="space-y-1">
              <div className="h-2 w-2 rounded-xs bg-white/80" />
              <div className="h-2 w-2 rounded-xs bg-white/30" />
              <div className="h-2 w-2 rounded-xs bg-white/30" />
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
          </div>
          <div className="flex flex-1 flex-col justify-between p-2.5">
            <div className="space-y-2">
              <span className="block text-[10px] font-semibold truncate">{spec.brandName}</span>
              <div className={`h-3.5 w-full rounded border ${borderTone}`} />
              <div className="space-y-1">
                <div className={`h-1.5 w-16 rounded-full ${strongLine}`} />
                <div className={`h-1.5 w-14 rounded-full ${mutedLine}`} />
              </div>
            </div>
            <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
          </div>
        </div>
      );
    }

    // 4 or 9: 2x2 Bento Tiles
    if (spec.id === 4 || spec.id === 9) {
      return (
        <div className="flex h-full flex-col justify-between p-3">
          <div className="space-y-2">
            <span className="block text-[10px] font-semibold truncate">{spec.brandName}</span>
            <div className={`h-3.5 w-full rounded border ${borderTone}`} />
            <div className="grid grid-cols-2 gap-1.5">
              <div className={`h-5 rounded border ${borderTone}`} />
              <div className={`h-5 rounded border ${borderTone}`} />
              <div className={`h-5 rounded border ${borderTone}`} />
              <div className={`h-5 rounded border ${borderTone}`} />
            </div>
          </div>
          <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
        </div>
      );
    }

    // 12: Inverted Bottom Thumb-Zone
    if (spec.id === 12) {
      return (
        <div className="flex h-full flex-col justify-between p-3">
          <span className="block text-[10px] font-bold truncate">{spec.brandName}</span>
          <div className="space-y-1.5">
            <div className="grid grid-cols-2 gap-1">
              <div className={`h-3 rounded border ${borderTone}`} />
              <div className={`h-3 rounded border ${borderTone}`} />
            </div>
            <div className={`h-3.5 w-full rounded border ${borderTone}`} />
            <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
          </div>
        </div>
      );
    }

    // 14: Parallel Two-Column Directory
    if (spec.id === 14) {
      return (
        <div className="flex h-full flex-col justify-between p-3">
          <div className="space-y-2">
            <span className="block text-[10px] font-semibold truncate">{spec.brandName}</span>
            <div className={`h-3.5 w-full rounded border ${borderTone}`} />
            <div className={`grid grid-cols-2 divide-x pt-1 ${borderTone}`}>
              <div className="space-y-1 pr-2">
                <div className={`h-1.5 w-10 rounded-full ${strongLine}`} />
                <div className={`h-1.5 w-12 rounded-full ${mutedLine}`} />
                <div className={`h-1.5 w-9 rounded-full ${mutedLine}`} />
              </div>
              <div className="space-y-1 pl-2">
                <div className={`h-1.5 w-10 rounded-full ${strongLine}`} />
                <div className={`h-1.5 w-12 rounded-full ${mutedLine}`} />
                <div className={`h-1.5 w-9 rounded-full ${mutedLine}`} />
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
        </div>
      );
    }

    // 17: Floating Inset Rounded Container
    if (spec.id === 17) {
      return (
        <div className="h-full w-full p-2 bg-slate-900/30">
          <div
            style={{ backgroundColor: spec.surfaceHex }}
            className="flex h-full flex-col justify-between rounded-lg border border-white/15 p-2.5"
          >
            <div className="space-y-2">
              <span className="block text-[10px] font-semibold text-white truncate">{spec.brandName}</span>
              <div className="h-3.5 w-full rounded border border-white/15" />
              <div className="space-y-1">
                <div className="h-1.5 w-16 rounded-full bg-white/75" />
                <div className="h-1.5 w-14 rounded-full bg-white/25" />
              </div>
            </div>
            <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded" />
          </div>
        </div>
      );
    }

    // 18: Right Quick-Jump Index Rail
    if (spec.id === 18) {
      return (
        <div className="flex h-full">
          <div className="flex flex-1 flex-col justify-between p-3">
            <div className="space-y-2">
              <span className="block text-[10px] font-semibold truncate">{spec.brandName}</span>
              <div className={`h-3.5 w-full rounded border ${borderTone}`} />
              <div className="space-y-1">
                <div className={`h-1.5 w-14 rounded-full ${strongLine}`} />
                <div className={`h-1.5 w-20 rounded-full ${mutedLine}`} />
                <div className={`h-1.5 w-16 rounded-full ${mutedLine}`} />
              </div>
            </div>
            <div style={{ backgroundColor: spec.accentHex }} className="h-3.5 w-full rounded-sm" />
          </div>
          <div className={`flex w-4 shrink-0 flex-col items-center justify-center gap-1 border-l ${borderTone}`}>
            <span className={`h-1.5 w-1.5 rounded-xs ${strongLine}`} />
            <span className={`h-1.5 w-1.5 rounded-xs ${mutedLine}`} />
            <span className={`h-1.5 w-1.5 rounded-xs ${mutedLine}`} />
            <span className={`h-1.5 w-1.5 rounded-xs ${mutedLine}`} />
          </div>
        </div>
      );
    }

    // Default tailored schematic for remaining distinct patterns
    return (
      <div className="flex h-full flex-col justify-between p-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-tight truncate">
              {spec.brandName}
            </span>
            <span className={`h-2 w-2 rounded-xs ${mutedLine}`} />
          </div>

          <div className={`h-3.5 w-full rounded border px-1.5 flex items-center ${borderTone}`}>
            <div className={`h-1 w-14 rounded-full ${mutedLine}`} />
          </div>

          {spec.id === 8 && (
            <div className="grid grid-cols-3 gap-1">
              <div className={`h-3 rounded border ${borderTone}`} />
              <div className={`h-3 rounded border ${borderTone}`} />
              <div className={`h-3 rounded border ${borderTone}`} />
            </div>
          )}

          {spec.id !== 8 && (
            <div className="space-y-1.5 pt-0.5">
              <div className={`h-1.5 w-20 rounded-full ${strongLine}`} />
              <div className={`h-1.5 w-24 rounded-full ${mutedLine}`} />
              <div className={`h-1.5 w-16 rounded-full ${mutedLine}`} />
            </div>
          )}
        </div>

        <div
          style={{ backgroundColor: spec.accentHex }}
          className="h-3.5 w-full rounded-sm opacity-95"
        />
      </div>
    );
  };

  return (
    <div
      aria-hidden="true"
      className="relative flex h-44 w-full overflow-hidden rounded-t-xl border-b border-slate-200 bg-slate-100"
    >
      <div
        style={{ backgroundColor: spec.surfaceHex, color: spec.inkHex }}
        className={`h-full w-[60%] border-r ${borderTone}`}
      >
        {renderInnerTopology()}
      </div>

      <div className="relative flex-1 bg-slate-200/70 p-3.5">
        <div className="space-y-2 opacity-45">
          <div className="h-2.5 w-16 rounded-full bg-slate-400" />
          <div className="h-2 w-24 rounded-full bg-slate-300" />
          <div className="h-12 w-full rounded-md bg-slate-300/70" />
        </div>
        <div className="absolute inset-0 bg-slate-950/15" />
        <span className="absolute right-2.5 bottom-2.5 font-mono text-[11px] font-medium tabular-nums text-slate-700 bg-white/90 px-2 py-0.5 rounded">
          {spec.widthPx}px
        </span>
      </div>
    </div>
  );
}

export function DrawerShowcase({ sourceMap }: DrawerShowcaseProps) {
  const [styleFilter, setStyleFilter] = useState<'All' | StyleFamily>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lastEvent, setLastEvent] = useState<string>(
    'Click any menu trigger below to open its slide-in drawer from the left edge.'
  );
  const [inspectedComponent, setInspectedComponent] = useState<string | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  useEffect(() => {
    if (!inspectedComponent) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setInspectedComponent(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectedComponent]);

  const styleFiltered = filterDrawersByStyle(DRAWER_CATALOG, styleFilter);
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const visibleDrawers = normalizedSearch
    ? styleFiltered.filter(
        (spec) =>
          spec.componentName.toLowerCase().includes(normalizedSearch) ||
          spec.brandName.toLowerCase().includes(normalizedSearch) ||
          spec.domain.toLowerCase().includes(normalizedSearch) ||
          spec.topology.toLowerCase().includes(normalizedSearch) ||
          spec.features.some((f) => f.toLowerCase().includes(normalizedSearch))
      )
    : styleFiltered;

  const renderDrawerComponent = (spec: DrawerSpec) => {
    const commonProps = {
      triggerLabel: `Open ${spec.componentName}`,
      onNavigate: (label: string) =>
        setLastEvent(`Navigated to "${label}" inside ${spec.componentName} (${spec.brandName}).`),
      onCtaClick: (label: string) =>
        setLastEvent(`Triggered primary CTA "${label}" in ${spec.componentName}.`),
    };

    switch (spec.id) {
      case 1: return <DrawerMenu1 {...commonProps} />;
      case 2: return <DrawerMenu2 {...commonProps} />;
      case 3: return <DrawerMenu3 {...commonProps} />;
      case 4: return <DrawerMenu4 {...commonProps} />;
      case 5: return <DrawerMenu5 {...commonProps} />;
      case 6: return <DrawerMenu6 {...commonProps} />;
      case 7: return <DrawerMenu7 {...commonProps} />;
      case 8: return <DrawerMenu8 {...commonProps} />;
      case 9: return <DrawerMenu9 {...commonProps} />;
      case 10: return <DrawerMenu10 {...commonProps} />;
      case 11: return <DrawerMenu11 {...commonProps} />;
      case 12: return <DrawerMenu12 {...commonProps} />;
      case 13: return <DrawerMenu13 {...commonProps} />;
      case 14: return <DrawerMenu14 {...commonProps} />;
      case 15: return <DrawerMenu15 {...commonProps} />;
      case 16: return <DrawerMenu16 {...commonProps} />;
      case 17: return <DrawerMenu17 {...commonProps} />;
      case 18: return <DrawerMenu18 {...commonProps} />;
      case 19: return <DrawerMenu19 {...commonProps} />;
      case 20: return <DrawerMenu20 {...commonProps} />;
      default: return null;
    }
  };

  const handleCopyCode = async (componentName: string) => {
    const code = sourceMap[componentName];
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedName(componentName);
      window.setTimeout(() => setCopiedName(null), 1800);
    } catch {
      setCopiedName(null);
    }
  };

  const handleFilterAnchor = (
    event: React.MouseEvent<HTMLAnchorElement>,
    family: 'All' | StyleFamily
  ) => {
    event.preventDefault();
    setStyleFilter(family);
    const catalogEl = document.getElementById('catalog');
    catalogEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0"
          >
            LeftRail
          </a>

          <nav
            aria-label="Style family shortcuts"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <a
              href="#catalog"
              onClick={(e) => handleFilterAnchor(e, 'All')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              All 20 Drawers
            </a>
            <a
              href="#catalog"
              onClick={(e) => handleFilterAnchor(e, 'Minimal')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Minimal
            </a>
            <a
              href="#catalog"
              onClick={(e) => handleFilterAnchor(e, 'Dark')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Dark
            </a>
            <a
              href="#catalog"
              onClick={(e) => handleFilterAnchor(e, 'Bold')}
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
            >
              Bold &amp; Warm
            </a>
          </nav>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setInspectedComponent('DrawerMenu1')}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 whitespace-nowrap shrink-0"
            >
              Inspect Source
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="max-w-3xl space-y-5">
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-slate-950 [text-wrap:balance]">
            Twenty distinct <span className="whitespace-nowrap">slide-in</span> drawer topologies
          </h1>
          <p className="text-base leading-relaxed text-slate-600 max-w-2xl">
            Every component from <code className="font-mono text-sm text-slate-900">DrawerMenu1</code> through{' '}
            <code className="font-mono text-sm text-slate-900">DrawerMenu20</code> includes a live search bar and a unique internal topology—from dual-rail switchers and drill-down stacks to bento tiles, file trees, and thumb-zone layouts.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#catalog"
              onClick={(e) => handleFilterAnchor(e, 'All')}
              className="inline-flex items-center rounded-lg bg-[#1E40AF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1E3A8A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF] whitespace-nowrap"
            >
              Explore All 20 Menus
            </a>
            <p className="text-xs text-slate-500 font-medium" role="status" aria-live="polite">
              {lastEvent}
            </p>
          </div>
        </section>

        {/* Filter & Search Toolbar */}
        <section id="catalog" aria-label="Drawer component catalog" className="space-y-6">
          <div className="flex flex-col gap-4 border-y border-slate-200 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div
              role="group"
              aria-label="Filter by style family"
              className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1"
            >
              {STYLE_FILTERS.map((family) => {
                const active = styleFilter === family;
                const count = filterDrawersByStyle(DRAWER_CATALOG, family).length;
                return (
                  <button
                    key={family}
                    type="button"
                    onClick={() => setStyleFilter(family)}
                    aria-pressed={active}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-slate-950 shadow-xs'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {family} ({count})
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-72">
              <label htmlFor="catalog-search" className="sr-only">
                Filter drawer components
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topology, brand, domain..."
                className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              />
            </div>
          </div>

          {/* 20 Component Cards */}
          {visibleDrawers.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white px-6 py-12 text-center">
              <p className="text-sm font-medium text-slate-700">
                No drawer components match &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStyleFilter('All');
                  setSearchQuery('');
                }}
                className="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {visibleDrawers.map((spec) => (
                <article
                  key={spec.id}
                  data-testid={`drawer-card-${spec.id}`}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
                >
                  <DrawerSchematic spec={spec} />

                  <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                    <div className="space-y-2.5">
                      <div className="flex items-baseline justify-between gap-4">
                        <h2 className="font-display text-lg font-semibold tracking-tight text-slate-950">
                          {String(spec.id).padStart(2, '0')}. {spec.componentName}
                        </h2>
                        <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                          {spec.brandName}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>{spec.topology}</span>
                        <span aria-hidden="true">·</span>
                        <span>{spec.styleFamily}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{spec.widthPx}px</span>
                      </div>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {spec.summary}
                      </p>

                      <p className="text-xs text-slate-500 pt-1">
                        <strong className="font-semibold text-slate-700">Anatomy:</strong>{' '}
                        {spec.features.join(' · ')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      {renderDrawerComponent(spec)}

                      <button
                        type="button"
                        onClick={() => setInspectedComponent(spec.componentName)}
                        aria-label={`View code for ${spec.componentName}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 whitespace-nowrap"
                      >
                        <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>View Code</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>LeftRail Component Library · DrawerMenu1–DrawerMenu20</span>
          <span>20 topologies · Live search bars · Scrim overlay · Inline SVGs</span>
        </div>
      </footer>

      {/* Code Inspector Dialog */}
      {inspectedComponent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${inspectedComponent} source code`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={() => setInspectedComponent(null)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-[2px]"
          />
          <div className="relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-slate-800 bg-[#0B0F17] text-slate-100 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <div>
                <h2 className="font-mono text-sm font-semibold text-white">
                  {inspectedComponent}.tsx
                </h2>
                <p className="text-xs text-slate-400">
                  Self-contained React + Tailwind component
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyCode(inspectedComponent)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:bg-slate-700"
                >
                  {copiedName === inspectedComponent ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy TSX</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setInspectedComponent(null)}
                  aria-label="Close code inspector"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <pre className="flex-1 overflow-auto p-5 font-mono text-xs leading-relaxed text-slate-200">
              <code>{sourceMap[inspectedComponent] ?? ''}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
