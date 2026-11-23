'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  CheckCircle2,
  Code2,
  RotateCcw,
  Search,
  X,
} from 'lucide-react';
import {
  LAYOUT_ARCHETYPES,
  MENU_CATALOG,
  STYLE_FAMILIES,
  filterMenuCatalog,
  type LayoutArchetype,
  type MenuCatalogEntry,
  type StyleFamily,
} from '@/lib/menu-catalog';
import { ModalMenu1 } from '@/components/menus/ModalMenu1';
import { ModalMenu2 } from '@/components/menus/ModalMenu2';
import { ModalMenu3 } from '@/components/menus/ModalMenu3';
import { ModalMenu4 } from '@/components/menus/ModalMenu4';
import { ModalMenu5 } from '@/components/menus/ModalMenu5';
import { ModalMenu6 } from '@/components/menus/ModalMenu6';
import { ModalMenu7 } from '@/components/menus/ModalMenu7';
import { ModalMenu8 } from '@/components/menus/ModalMenu8';
import { ModalMenu9 } from '@/components/menus/ModalMenu9';
import { ModalMenu10 } from '@/components/menus/ModalMenu10';
import { ModalMenu11 } from '@/components/menus/ModalMenu11';
import { ModalMenu12 } from '@/components/menus/ModalMenu12';
import { ModalMenu13 } from '@/components/menus/ModalMenu13';
import { ModalMenu14 } from '@/components/menus/ModalMenu14';
import { ModalMenu15 } from '@/components/menus/ModalMenu15';
import { ModalMenu16 } from '@/components/menus/ModalMenu16';
import { ModalMenu17 } from '@/components/menus/ModalMenu17';
import { ModalMenu18 } from '@/components/menus/ModalMenu18';
import { ModalMenu19 } from '@/components/menus/ModalMenu19';
import { ModalMenu20 } from '@/components/menus/ModalMenu20';
import { SourceViewerModal } from '@/components/SourceViewerModal';

interface MenuShowcaseProps {
  sources: Record<string, string>;
}

interface RouteEvent {
  componentName: string;
  label: string;
  href: string;
}

export function MenuShowcase({ sources }: MenuShowcaseProps) {
  const [styleFilter, setStyleFilter] = useState<'All' | StyleFamily>('All');
  const [layoutFilter, setLayoutFilter] = useState<'All' | LayoutArchetype>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [lastRoute, setLastRoute] = useState<RouteEvent | null>(null);
  const [inspectedComponent, setInspectedComponent] = useState<string | null>(
    null
  );

  const filteredMenus = useMemo(
    () =>
      filterMenuCatalog(MENU_CATALOG, {
        styleFamily: styleFilter,
        layoutArchetype: layoutFilter,
        query: searchQuery,
      }),
    [styleFilter, layoutFilter, searchQuery]
  );

  const hasActiveFilters =
    styleFilter !== 'All' || layoutFilter !== 'All' || searchQuery.trim() !== '';

  const resetFilters = () => {
    setStyleFilter('All');
    setLayoutFilter('All');
    setSearchQuery('');
  };

  const renderMenuComponent = (entry: MenuCatalogEntry) => {
    const handleSelect = (href: string, label: string) => {
      setLastRoute({
        componentName: entry.componentName,
        label,
        href,
      });
    };

    switch (entry.id) {
      case 1:
        return (
          <ModalMenu1
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 2:
        return (
          <ModalMenu2
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 3:
        return (
          <ModalMenu3
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 4:
        return (
          <ModalMenu4
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 5:
        return (
          <ModalMenu5
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 6:
        return (
          <ModalMenu6
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 7:
        return (
          <ModalMenu7
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 8:
        return (
          <ModalMenu8
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 9:
        return (
          <ModalMenu9
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 10:
        return (
          <ModalMenu10
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 11:
        return (
          <ModalMenu11
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 12:
        return (
          <ModalMenu12
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 13:
        return (
          <ModalMenu13
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 14:
        return (
          <ModalMenu14
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 15:
        return (
          <ModalMenu15
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 16:
        return (
          <ModalMenu16
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 17:
        return (
          <ModalMenu17
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 18:
        return (
          <ModalMenu18
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 19:
        return (
          <ModalMenu19
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
      case 20:
      default:
        return (
          <ModalMenu20
            triggerLabel={`Launch ${entry.componentName}`}
            onSelectRoute={handleSelect}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 3-Zone Top Bar Contract */}
      <header className="border-b border-stone-200 bg-[#F7F7F5]/95 backdrop-blur-xs sticky top-0 z-30">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 md:gap-8 px-4 sm:px-6 py-3.5 sm:py-4">
          <a
            href="#top"
            className="font-serif text-base sm:text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0"
          >
            Modal Navigation Studio
          </a>

          <nav
            aria-label="Showcase sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600"
          >
            <a
              href="#gallery"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Gallery
            </a>
            <a
              href="#layouts"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Archetypes
            </a>
            <a
              href="#accessibility"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Semantics
            </a>
            <a
              href="#responsive"
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Viewport Specs
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-3 sm:px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            >
              <span>Browse 20 Menus</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Editorial Hero */}
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-16">
            <p className="text-xs font-medium text-stone-500">
              React &amp; Tailwind CSS Components · 480–720px Centered Dialogs ·
              Live Search Inside Every Menu
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 [text-wrap:balance] leading-[1.1]">
              Twenty distinct modal navigation topologies built with live search
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              Each component—named <span className="font-mono text-sm text-stone-900">ModalMenu1</span> through{' '}
              <span className="font-mono text-sm text-stone-900">ModalMenu20</span>—is
              self-contained with its own open/close state, live search bar, dim
              scrim dismissal, close button, Escape handling, and semantic{' '}
              <span className="font-mono text-sm text-stone-900">role=&quot;dialog&quot;</span>{' '}
              markup.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#gallery"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-stone-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                <span>Explore Components</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-sm text-stone-500 tabular-nums">
                6 layout topologies · 4 visual families · 20 searchable overlays
              </span>
            </div>
          </div>
        </section>

        {/* Gallery & Filter Toolbar */}
        <section id="gallery" className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="flex flex-col gap-5 border-b border-stone-200 pb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-900">
                  Interactive Menu Collection
                </h2>
                <p className="mt-1 text-sm text-stone-600">
                  Launch any modal overlay to test search, tabs, hover previews,
                  scrim click, and responsive mobile stacking.
                </p>
              </div>
              <p className="font-mono text-xs text-stone-500 tabular-nums shrink-0">
                Showing {filteredMenus.length} of {MENU_CATALOG.length} menus
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div
                role="group"
                aria-label="Filter by style family"
                className="flex flex-wrap items-center gap-1.5 rounded-lg bg-stone-200/70 p-1.5"
              >
                {STYLE_FAMILIES.map((family) => {
                  const active = styleFilter === family;
                  return (
                    <button
                      key={family}
                      type="button"
                      onClick={() => setStyleFilter(family)}
                      aria-pressed={active}
                      className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 ${
                        active
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {family}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-2 focus-within:border-stone-900">
                  <Search
                    className="h-4 w-4 text-stone-400 shrink-0"
                    aria-hidden="true"
                  />
                  <label htmlFor="catalog-search" className="sr-only">
                    Search menu components
                  </label>
                  <input
                    id="catalog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menus..."
                    className="w-40 sm:w-48 bg-transparent text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="layout-select" className="sr-only">
                    Filter by layout archetype
                  </label>
                  <select
                    id="layout-select"
                    value={layoutFilter}
                    onChange={(e) =>
                      setLayoutFilter(
                        e.target.value as 'All' | LayoutArchetype
                      )
                    }
                    className="min-h-[38px] rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
                  >
                    {LAYOUT_ARCHETYPES.map((arch) => (
                      <option key={arch} value={arch}>
                        {arch === 'All' ? 'All Layouts' : arch}
                      </option>
                    ))}
                  </select>
                </div>

                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 hover:bg-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Live Navigation Feedback Banner (only rendered after clicking a route inside a modal) */}
          <AnimatePresence>
            {lastRoute && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.16 }}
                role="status"
                className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-700 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="truncate">
                    Navigated to{' '}
                    <strong className="font-semibold text-stone-900">
                      {lastRoute.label}
                    </strong>{' '}
                    <span className="font-mono text-xs text-stone-500">
                      ({lastRoute.href})
                    </span>{' '}
                    via{' '}
                    <span className="font-mono text-xs text-stone-700">
                      {lastRoute.componentName}
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setLastRoute(null)}
                  aria-label="Dismiss navigation notice"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 hover:text-stone-900"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 20 Menu Cards */}
          {filteredMenus.length === 0 ? (
            <div className="mt-10 rounded-xl border border-stone-200 bg-white p-12 text-center">
              <p className="font-serif text-xl font-medium text-stone-900">
                No modal menus match your current filters
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Clear the search query or select All styles and layouts to view
                all 20 components.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 transition-colors"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                <span>Show All 20 Menus</span>
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMenus.map((entry) => (
                <motion.article
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  data-testid={`menu-card-${entry.id}`}
                  className="flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-6"
                >
                  <div>
                    {/* Clean unboxed metadata with typographic separators */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 tabular-nums">
                        <span className="font-mono font-semibold text-stone-900">
                          {String(entry.id).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.styleFamily}</span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.layoutArchetype}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{entry.panelWidthPx}px</span>
                      </div>

                      <div
                        className="flex items-center gap-1 shrink-0"
                        aria-label="Color palette swatches"
                      >
                        {entry.swatchColors.map((hex) => (
                          <span
                            key={hex}
                            title={hex}
                            style={{ backgroundColor: hex }}
                            className="h-3.5 w-3.5 rounded-sm border border-stone-300"
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="mt-3 font-serif text-xl font-medium text-stone-900">
                      {entry.componentName} — {entry.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {entry.summary}
                    </p>
                    <p className="mt-2 text-xs text-stone-500">
                      Structure: {entry.headingPattern} · {entry.linkCount}{' '}
                      interactive routes
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-5">
                    <div>{renderMenuComponent(entry)}</div>

                    <button
                      type="button"
                      onClick={() => setInspectedComponent(entry.componentName)}
                      aria-label={`Inspect ${entry.componentName} TSX source`}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 px-3.5 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 whitespace-nowrap shrink-0"
                    >
                      <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Inspect TSX</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* Architecture & Semantic Contract Summary */}
        <section
          id="layouts"
          className="border-t border-stone-200 bg-white py-14"
        >
          <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div id="accessibility">
              <h2 className="font-serif text-xl font-medium text-stone-900">
                Semantic Dialog Markup
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Every overlay renders with{' '}
                <span className="font-mono text-xs text-stone-900">
                  role=&quot;dialog&quot;
                </span>
                ,{' '}
                <span className="font-mono text-xs text-stone-900">
                  aria-modal=&quot;true&quot;
                </span>
                , and{' '}
                <span className="font-mono text-xs text-stone-900">
                  aria-labelledby
                </span>
                . Links sit inside a labelled{' '}
                <span className="font-mono text-xs text-stone-900">&lt;nav&gt;</span>{' '}
                with hierarchical headings and lists.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-stone-900">
                Dual Dismissal &amp; Focus
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                All 20 menus include live search filtering and dismiss cleanly
                via dim scrim click, an explicit close button, or the Escape
                key. Body scroll locks while open and keyboard focus returns to
                the trigger button.
              </p>
            </div>

            <div id="responsive">
              <h2 className="font-serif text-xl font-medium text-stone-900">
                Desktop &amp; Mobile Ergonomics
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Desktop panels span 520px to 720px inside the 480–720px range.
                On mobile viewports, Miller columns, radial spokes, and split
                rails reflow cleanly inside an{' '}
                <span className="font-mono text-xs text-stone-900">
                  85vh
                </span>{' '}
                scrollable frame.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-[#F7F7F5]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-stone-500">
          <span>Modal Navigation Studio · 20 Self-Contained React + Tailwind Menus</span>
          <a
            href="#top"
            className="font-medium text-stone-700 hover:text-stone-900 transition-colors"
          >
            Back to top
          </a>
        </div>
      </footer>

      <SourceViewerModal
        componentName={inspectedComponent}
        sourceCode={
          inspectedComponent ? sources[inspectedComponent] ?? '' : ''
        }
        onClose={() => setInspectedComponent(null)}
      />
    </div>
  );
}
