import React, { useMemo, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Layers, LayoutGrid } from 'lucide-react';
import {
  SHOP_SCREENS,
  type FlowCategory,
  type ScreenTopology,
  type VisualStyle,
} from './components/shops';

const FLOW_CATEGORIES: Array<'All' | FlowCategory> = [
  'All',
  'Multi-Step Checkout',
  'Single-Page Checkout',
  'Shopping Cart',
  'Payment Screen',
  'Order Confirmation',
  'Product Detail',
  'Product Archive',
];

const STYLES: Array<'All' | VisualStyle> = [
  'All',
  'Minimal / Professional',
  'Light-Warm',
  'Dark',
  'Bold / Colourful',
  'Luxury-Editorial',
];

const TOPOLOGIES: Array<'All' | ScreenTopology> = [
  'All',
  'Split-Pane',
  'Centered Single Column',
];

export default function App() {
  const [viewMode, setViewMode] = useState<'stage' | 'all'>('stage');
  const [flowFilter, setFlowFilter] = useState<'All' | FlowCategory>('All');
  const [styleFilter, setStyleFilter] = useState<'All' | VisualStyle>('All');
  const [topologyFilter, setTopologyFilter] = useState<'All' | ScreenTopology>('All');
  const [activeId, setActiveId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('shop');
      if (param && SHOP_SCREENS.some((s) => s.id.toLowerCase() === param.toLowerCase())) {
        return SHOP_SCREENS.find((s) => s.id.toLowerCase() === param.toLowerCase())!.id;
      }
    }
    return 'Shop1';
  });

  const filteredScreens = useMemo(() => {
    return SHOP_SCREENS.filter((s) => {
      if (flowFilter !== 'All' && s.category !== flowFilter) return false;
      if (styleFilter !== 'All' && s.style !== styleFilter) return false;
      if (topologyFilter !== 'All' && s.topology !== topologyFilter) return false;
      return true;
    });
  }, [flowFilter, styleFilter, topologyFilter]);

  useEffect(() => {
    if (filteredScreens.length > 0 && !filteredScreens.some((s) => s.id === activeId)) {
      setActiveId(filteredScreens[0].id);
    }
  }, [filteredScreens, activeId]);

  const activeIndex = filteredScreens.findIndex((s) => s.id === activeId);
  const currentScreen = filteredScreens[activeIndex] ?? SHOP_SCREENS[0];

  const goPrev = () => {
    if (filteredScreens.length === 0) return;
    const prevIdx = (activeIndex - 1 + filteredScreens.length) % filteredScreens.length;
    setActiveId(filteredScreens[prevIdx].id);
  };

  const goNext = () => {
    if (filteredScreens.length === 0) return;
    const nextIdx = (activeIndex + 1) % filteredScreens.length;
    setActiveId(filteredScreens[nextIdx].id);
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="/"
            className="font-display text-lg font-bold tracking-tight text-stone-950 whitespace-nowrap shrink-0"
          >
            Commerce Kit 20
          </a>

          <nav aria-label="Quick flow navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            <button
              type="button"
              onClick={() => {
                setFlowFilter('Multi-Step Checkout');
                setViewMode('stage');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Checkouts
            </button>
            <button
              type="button"
              onClick={() => {
                setFlowFilter('Shopping Cart');
                setViewMode('stage');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Carts
            </button>
            <button
              type="button"
              onClick={() => {
                setFlowFilter('Payment Screen');
                setViewMode('stage');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Payments
            </button>
            <button
              type="button"
              onClick={() => {
                setFlowFilter('Order Confirmation');
                setViewMode('stage');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              Receipts
            </button>
            <button
              type="button"
              onClick={() => {
                setFlowFilter('Product Detail');
                setViewMode('stage');
              }}
              className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
            >
              PDPs & Archives
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'stage' ? 'all' : 'stage')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
          >
            {viewMode === 'stage' ? (
              <>
                <LayoutGrid className="w-3.5 h-3.5" />
                View All Stacked
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5" />
                Focused Stage
              </>
            )}
          </button>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-5 space-y-5">
        <div className="bg-white border border-stone-200 rounded-xl p-3.5 sm:px-5 sm:py-3.5 flex flex-col xl:flex-row xl:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by flow category">
            {FLOW_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFlowFilter(cat)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  flowFilter === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <label htmlFor="filter-style" className="text-xs font-medium text-stone-500 whitespace-nowrap">
                Style
              </label>
              <select
                id="filter-style"
                value={styleFilter}
                onChange={(e) => setStyleFilter(e.target.value as 'All' | VisualStyle)}
                className="px-2.5 py-1.5 text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              >
                {STYLES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="filter-topology" className="text-xs font-medium text-stone-500 whitespace-nowrap">
                Topology
              </label>
              <select
                id="filter-topology"
                value={topologyFilter}
                onChange={(e) => setTopologyFilter(e.target.value as 'All' | ScreenTopology)}
                className="px-2.5 py-1.5 text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg text-stone-800"
              >
                {TOPOLOGIES.map((tp) => (
                  <option key={tp} value={tp}>
                    {tp}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredScreens.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-xl p-12 text-center space-y-3">
            <p className="text-base font-medium text-stone-900">
              No commerce screens match that combination of filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setFlowFilter('All');
                setStyleFilter('All');
                setTopologyFilter('All');
              }}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg"
            >
              Reset all filters
            </button>
          </div>
        ) : viewMode === 'stage' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-5 bg-white border border-stone-200 rounded-xl p-3 space-y-1 max-h-[calc(100vh-2.5rem)] overflow-y-auto">
              <div className="px-2.5 py-2 flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 mb-1">
                <span className="font-semibold text-stone-800">Screens</span>
                <span className="font-mono-num">{filteredScreens.length} / 20</span>
              </div>
              {filteredScreens.map((screen) => {
                const isActive = screen.id === currentScreen.id;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveId(screen.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-stone-900 text-white'
                        : 'text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold truncate">{screen.name}</span>
                      <span
                        className={`font-mono-num text-xs shrink-0 ${
                          isActive ? 'text-stone-300' : 'text-stone-400'
                        }`}
                      >
                        {screen.id}
                      </span>
                    </div>
                    <p
                      className={`text-xs truncate mt-0.5 ${
                        isActive ? 'text-stone-300' : 'text-stone-500'
                      }`}
                    >
                      {screen.category} · {screen.style}
                    </p>
                  </button>
                );
              })}
            </aside>

            <main className="lg:col-span-9 space-y-4">
              <div className="bg-white border border-stone-200 rounded-xl px-4 sm:px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-500">
                    <span className="font-mono-num font-semibold text-stone-900">{currentScreen.id}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentScreen.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentScreen.topology}</span>
                    <span aria-hidden="true">·</span>
                    <span>{currentScreen.style}</span>
                  </div>
                  <h1 className="font-display text-base sm:text-lg font-semibold text-stone-950 mt-0.5 truncate">
                    {currentScreen.name} — {currentScreen.brand}
                  </h1>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="lg:hidden flex-1 sm:flex-initial">
                    <label htmlFor="mobile-screen-select" className="sr-only">
                      Select screen
                    </label>
                    <select
                      id="mobile-screen-select"
                      value={currentScreen.id}
                      onChange={(e) => setActiveId(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg text-stone-900"
                    >
                      {filteredScreens.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.id}: {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      aria-label="Previous screen"
                      onClick={goPrev}
                      className="p-2 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-100"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono-num text-xs text-stone-600 px-1">
                      {activeIndex + 1} / {filteredScreens.length}
                    </span>
                    <button
                      type="button"
                      aria-label="Next screen"
                      onClick={goNext}
                      className="p-2 border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-100"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div data-testid="active-shop-stage">
                <currentScreen.Component />
              </div>
            </main>
          </div>
        ) : (
          <main className="space-y-10" data-testid="all-shops-stack">
            {filteredScreens.map(({ id, name, brand, category, style, topology, Component }) => (
              <div key={id} className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
                    <span className="font-mono-num font-bold text-stone-950">{id}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-stone-900">{name}</span>
                    <span aria-hidden="true">·</span>
                    <span>{brand}</span>
                    <span aria-hidden="true">·</span>
                    <span>{category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{topology}</span>
                    <span aria-hidden="true">·</span>
                    <span>{style}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveId(id);
                      setViewMode('stage');
                    }}
                    className="text-xs font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
                  >
                    Focus {id}
                  </button>
                </div>
                <Component />
              </div>
            ))}
          </main>
        )}
      </div>
    </div>
  );
}
