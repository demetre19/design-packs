import React, { useMemo, useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Smartphone,
  RotateCcw,
  LayoutGrid,
  PanelLeft,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { ScreenRenderer } from './components/ScreenRenderer';
import {
  SCREEN_CATALOG,
  CatalogFilter,
  filterScreens,
  resolveScreenFromQuery,
  getAdjacentScreenId,
} from './utils/screenCatalog';

export default function App() {
  const [activeId, setActiveId] = useState<string>(() =>
    typeof window !== 'undefined' ? resolveScreenFromQuery(window.location.search) : 'Auth1'
  );
  const [category, setCategory] = useState<CatalogFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'studio' | 'grid'>('studio');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [resetKey, setResetKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredScreens = useMemo(
    () => filterScreens(SCREEN_CATALOG, category, searchQuery),
    [category, searchQuery]
  );

  const activeScreen = useMemo(
    () => SCREEN_CATALOG.find((s) => s.id === activeId) ?? SCREEN_CATALOG[0],
    [activeId]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('screen', activeId);
    window.history.replaceState({}, '', url.toString());
  }, [activeId]);

  const selectScreen = (id: string) => {
    setActiveId(id);
    setViewMode('studio');
    setMobileMenuOpen(false);
  };

  const handleCategoryChange = (nextCategory: CatalogFilter) => {
    setCategory(nextCategory);
    const matching = filterScreens(SCREEN_CATALOG, nextCategory, searchQuery);
    if (matching.length > 0 && !matching.some((s) => s.id === activeId)) {
      setActiveId(matching[0].id);
    }
  };

  const handleStep = (direction: 'prev' | 'next') => {
    const pool = filteredScreens.length > 0 ? filteredScreens : SCREEN_CATALOG;
    setActiveId(getAdjacentScreenId(activeId, direction, pool));
  };

  const authScreens = filteredScreens.filter((s) => s.category === 'auth');
  const errorScreens = filteredScreens.filter((s) => s.category === 'error');

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-slate-900 flex flex-col">
      {/* Three-Zone Top Bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-6 h-14 flex items-center justify-between gap-4 sm:gap-8">
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close screen index' : 'Open screen index'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
          <a
            href="?screen=Auth1"
            onClick={(e) => {
              e.preventDefault();
              setCategory('all');
              setSearchQuery('');
              selectScreen('Auth1');
            }}
            className="font-serif text-xl font-semibold tracking-tight text-slate-950 whitespace-nowrap shrink-0"
          >
            Patternfolio
          </a>
        </div>

        <nav aria-label="Screen categories" className="hidden md:flex items-center gap-7">
          {(
            [
              { id: 'all', label: 'All (20)' },
              { id: 'auth', label: 'Auth (10)' },
              { id: 'error', label: 'Error & Empty (10)' },
            ] as const
          ).map((tab) => {
            const active = category === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleCategoryChange(tab.id)}
                aria-current={active ? 'page' : undefined}
                className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                  active
                    ? 'border-slate-950 text-slate-950'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => setViewMode((m) => (m === 'studio' ? 'grid' : 'studio'))}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
          >
            {viewMode === 'studio' ? (
              <>
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Grid Overview</span>
              </>
            ) : (
              <>
                <PanelLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Studio Inspector</span>
              </>
            )}
          </button>
        </div>
      </header>

      {viewMode === 'grid' ? (
        <div className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
                Component Gallery
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Showing {filteredScreens.length} self-contained React + Tailwind screens. Select any card to test interactively.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <div className="flex md:hidden items-center gap-1 p-1 bg-white border border-slate-200 rounded-lg">
                {(
                  [
                    { id: 'all', label: 'All (20)' },
                    { id: 'auth', label: 'Auth (10)' },
                    { id: 'error', label: 'Error (10)' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      category === tab.id ? 'bg-slate-950 text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  type="search"
                  aria-label="Filter screen gallery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or style..."
                  className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:border-slate-900"
                />
              </div>
            </div>
          </div>

          {filteredScreens.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
              <p className="text-base font-medium text-slate-900">No screens match &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCategory('all');
                }}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredScreens.map((screen) => (
                <article
                  key={screen.id}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full bg-slate-100 border-b border-slate-200 overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="origin-top-left scale-[0.31] w-[322.58%] h-[322.58%] pointer-events-none select-none flex items-stretch [&>main]:min-h-full"
                    >
                      <ScreenRenderer screenId={screen.id} />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono font-medium text-slate-700">{screen.code}</span>
                        <span aria-hidden="true">·</span>
                        <span>{screen.archetype}</span>
                      </div>
                      <h2 className="mt-1.5 text-base font-semibold text-slate-950">{screen.title}</h2>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{screen.summary}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => selectScreen(screen.id)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    >
                      Inspect {screen.id}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex relative">
          {/* Sidebar Index */}
          <aside
            aria-label="Screen navigation"
            className={`${
              mobileMenuOpen ? 'fixed inset-y-14 left-0 z-20 flex' : 'hidden'
            } lg:static lg:flex w-72 shrink-0 flex-col bg-white border-r border-slate-200`}
          >
            <div className="p-4 border-b border-slate-200 space-y-3">
              <div className="flex md:hidden items-center gap-1 p-1 bg-slate-100 rounded-lg">
                {(
                  [
                    { id: 'all', label: 'All' },
                    { id: 'auth', label: 'Auth' },
                    { id: 'error', label: 'Error' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`flex-1 px-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      category === tab.id ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  type="search"
                  aria-label="Filter screens"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter 20 screens..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-8 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-900/15 focus:border-slate-900"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-5">
              {authScreens.length > 0 && (
                <div>
                  <h2 className="px-2.5 pb-1.5 text-xs font-semibold text-slate-500">
                    Auth Screens ({authScreens.length})
                  </h2>
                  <ul className="space-y-0.5">
                    {authScreens.map((screen) => {
                      const isActive = screen.id === activeId;
                      return (
                        <li key={screen.id}>
                          <button
                            type="button"
                            onClick={() => selectScreen(screen.id)}
                            aria-current={isActive ? 'true' : undefined}
                            className={`w-full text-left px-2.5 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                              isActive
                                ? 'bg-slate-950 text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="font-semibold truncate">{screen.title}</span>
                              <span
                                className={`font-mono text-[11px] shrink-0 ${
                                  isActive ? 'text-slate-300' : 'text-slate-400'
                                }`}
                              >
                                {screen.id}
                              </span>
                            </div>
                            <div
                              className={`mt-0.5 text-[11px] ${
                                isActive ? 'text-slate-300' : 'text-slate-500'
                              }`}
                            >
                              {screen.archetype}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {errorScreens.length > 0 && (
                <div>
                  <h2 className="px-2.5 pb-1.5 text-xs font-semibold text-slate-500">
                    Error &amp; Empty ({errorScreens.length})
                  </h2>
                  <ul className="space-y-0.5">
                    {errorScreens.map((screen) => {
                      const isActive = screen.id === activeId;
                      return (
                        <li key={screen.id}>
                          <button
                            type="button"
                            onClick={() => selectScreen(screen.id)}
                            aria-current={isActive ? 'true' : undefined}
                            className={`w-full text-left px-2.5 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 ${
                              isActive
                                ? 'bg-slate-950 text-white'
                                : 'text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 text-xs">
                              <span className="font-semibold truncate">{screen.title}</span>
                              <span
                                className={`font-mono text-[11px] shrink-0 ${
                                  isActive ? 'text-slate-300' : 'text-slate-400'
                                }`}
                              >
                                {screen.id}
                              </span>
                            </div>
                            <div
                              className={`mt-0.5 text-[11px] ${
                                isActive ? 'text-slate-300' : 'text-slate-500'
                              }`}
                            >
                              {screen.archetype}
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {filteredScreens.length === 0 && (
                <p className="px-2.5 py-4 text-xs text-slate-500">No matching screens found.</p>
              )}
            </div>
          </aside>

          {/* Main Studio Canvas */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Inspector Toolbar */}
            <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-slate-800">{activeScreen.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeScreen.archetype}</span>
                  <span aria-hidden="true" className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline truncate">{activeScreen.highlights.join(' / ')}</span>
                </div>
                <h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-950 truncate">
                  {activeScreen.title}
                </h1>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="hidden sm:flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setViewportMode('desktop')}
                    aria-label="Desktop preview width"
                    aria-pressed={viewportMode === 'desktop'}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      viewportMode === 'desktop'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Desktop</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewportMode('mobile')}
                    aria-label="Mobile preview width"
                    aria-pressed={viewportMode === 'mobile'}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                      viewportMode === 'mobile'
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Mobile</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setResetKey((k) => k + 1)}
                  aria-label="Reset component state"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden md:inline">Reset</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleStep('prev')}
                    aria-label="Previous screen"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStep('next')}
                    aria-label="Next screen"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Component Stage */}
            <div className="flex-1 p-4 sm:p-6 lg:p-8 flex justify-center items-start overflow-x-hidden">
              <div
                data-testid="preview-stage"
                className={`border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white transition-all duration-200 ${
                  viewportMode === 'mobile' ? 'w-full max-w-[390px]' : 'w-full max-w-[1180px]'
                }`}
              >
                <ScreenRenderer key={`${activeId}-${resetKey}`} screenId={activeId} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
