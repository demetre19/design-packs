import { useMemo, useState } from 'react';
import { Layers, Menu, Search, X } from 'lucide-react';
import { TABLE_CATALOG, TableCategory, TableCatalogItem } from './components/tables';

type StyleFilter = 'All' | TableCatalogItem['styleTone'];

const CATEGORIES: Array<'All' | TableCategory> = [
  'All',
  'Users & Teams',
  'Invoices & Finance',
  'Orders & Ops',
  'Files & Docs',
];

const STYLES: StyleFilter[] = ['All', 'Minimal', 'Professional', 'Dark', 'Colourful'];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | TableCategory>('All');
  const [selectedStyle, setSelectedStyle] = useState<StyleFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredCatalog = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TABLE_CATALOG.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
      if (selectedStyle !== 'All' && item.styleTone !== selectedStyle) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.exportName.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, selectedStyle, searchQuery]);

  const visibleTables = useMemo(() => {
    if (!focusedId) return filteredCatalog;
    return filteredCatalog.filter((t) => t.id === focusedId);
  }, [filteredCatalog, focusedId]);

  const handleSelectSidebarItem = (id: string) => {
    setMobileNavOpen(false);
    if (focusedId) {
      setFocusedId(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Bar: 3-zone contract */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-15 max-w-[1440px] items-center justify-between gap-8 px-4 sm:px-6">
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              aria-label="Toggle component index"
              onClick={() => setMobileNavOpen((o) => !o)}
              className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setFocusedId(null);
                setSelectedCategory('All');
                setSelectedStyle('All');
                setSearchQuery('');
              }}
              className="text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0"
            >
              Tabular
            </a>
          </div>

          <nav aria-label="Table categories" className="hidden md:flex items-center gap-6 text-sm font-medium">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFocusedId(null);
                  }}
                  className={`whitespace-nowrap shrink-0 py-1 transition-colors cursor-pointer ${
                    active
                      ? 'text-slate-950 underline underline-offset-8 decoration-2 decoration-slate-900'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All Tables' : cat}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setFocusedId((prev) => (prev ? null : visibleTables[0]?.id ?? 'table-1'))}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Layers className="h-3.5 w-3.5" />
              {focusedId ? 'Show All 20' : 'Focus Single'}
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto flex w-full max-w-[1440px] flex-1">
        {/* Sidebar Index */}
        <aside
          className={`${
            mobileNavOpen ? 'fixed inset-y-15 left-0 z-30 block bg-white shadow-xl' : 'hidden'
          } lg:block w-68 shrink-0 border-r border-slate-200 bg-white/70`}
        >
          <div className="sticky top-15 max-h-[calc(100vh-3.75rem)] overflow-y-auto px-4 py-5">
            <div className="px-2 pb-3 text-xs font-semibold text-slate-500">
              Component Index ({filteredCatalog.length})
            </div>
            <ul className="space-y-0.5">
              {filteredCatalog.map((item) => {
                const isFocused = focusedId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectSidebarItem(item.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-xs transition-colors cursor-pointer ${
                        isFocused
                          ? 'bg-slate-900 text-white font-medium'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      <span className="truncate">
                        <span className={`font-mono mr-1.5 ${isFocused ? 'text-slate-300' : 'text-slate-400'}`}>
                          {String(item.number).padStart(2, '0')}.
                        </span>
                        {item.title}
                      </span>
                      <span className={`shrink-0 font-mono text-[10px] ${isFocused ? 'text-slate-300' : 'text-slate-400'}`}>
                        {item.exportName}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Main Showcase Viewport */}
        <main className="min-w-0 flex-1 px-4 py-7 sm:px-8 lg:px-10">
          {/* Editorial Intro + Workspace Filter Toolbar */}
          <div className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-balance">
              20 Production Data Table Components
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 leading-relaxed">
              Self-contained React and Tailwind CSS components (`Table1` through `Table20`) built with semantic table markup, `aria-sort` column states, local `useState` selection and sorting, expandable drawers, nested sub-rows, sticky headers, density controls, totals footers, empty states, and loading skeletons.
            </p>

            {/* Workspace Toolbar */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Visual style filter">
                {STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => {
                      setSelectedStyle(style);
                      setFocusedId(null);
                    }}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedStyle === style
                        ? 'bg-slate-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {style === 'All' ? 'All Styles' : style}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="h-3.5 w-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  aria-label="Search table components"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setFocusedId(null);
                  }}
                  placeholder="Filter by feature or domain..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-8 pr-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Mobile Category Strip */}
            <div className="mt-3 flex md:hidden items-center gap-1.5 overflow-x-auto pb-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFocusedId(null);
                  }}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === cat ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'
                  }`}
                >
                  {cat === 'All' ? 'All Tables' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tables Stack */}
          {visibleTables.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white px-6 py-14 text-center">
              <h2 className="text-sm font-semibold text-slate-900">No table components match those filters</h2>
              <p className="mt-1 text-xs text-slate-500">Reset category, style, or search query to browse all 20 components.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStyle('All');
                  setSearchQuery('');
                  setFocusedId(null);
                }}
                className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {visibleTables.map((item) => {
                const TableComponent = item.Component;
                return (
                  <section key={item.id} id={item.id} className="scroll-mt-20">
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h2 className="text-base font-semibold text-slate-950">
                          {String(item.number).padStart(2, '0')}. {item.exportName} — {item.title}
                        </h2>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.category} · {item.styleTone} · {item.features}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFocusedId((prev) => (prev === item.id ? null : item.id))}
                        className="text-xs font-medium text-slate-600 hover:text-slate-950 underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {focusedId === item.id ? 'Back to All 20' : 'Isolate Table'}
                      </button>
                    </div>
                    <TableComponent />
                  </section>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
