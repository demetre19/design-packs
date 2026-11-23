import React, { useMemo, useState } from 'react';
import { List, RotateCcw, Search, X } from 'lucide-react';
import {
  FORM_SPECS,
  filterFormSpecs,
  FormGroup,
  FormLayout,
  FormStyle,
} from './data/formCatalog';
import {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Form7,
  Form8,
  Form9,
  Form10,
  Form11,
  Form12,
  Form13,
  Form14,
  Form15,
  Form16,
  Form17,
  Form18,
  Form19,
  Form20,
} from './components/forms';

const FORM_COMPONENTS: Record<string, React.ComponentType> = {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Form7,
  Form8,
  Form9,
  Form10,
  Form11,
  Form12,
  Form13,
  Form14,
  Form15,
  Form16,
  Form17,
  Form18,
  Form19,
  Form20,
};

const STYLES: Array<FormStyle | 'All'> = ['All', 'Minimal', 'Professional', 'Dark', 'Warm'];
const LAYOUTS: Array<FormLayout | 'All'> = [
  'All',
  'Single Column',
  'Two-Column',
  'Inline-Compact',
  'Carded Sections',
];
const GROUPS: FormGroup[] = ['All', 'Contact & Apps', 'Search & Filter', 'Inputs & Files', 'Settings & Data'];

export default function App() {
  const [query, setQuery] = useState('');
  const [styleFilter, setStyleFilter] = useState<FormStyle | 'All'>('All');
  const [layoutFilter, setLayoutFilter] = useState<FormLayout | 'All'>('All');
  const [groupFilter, setGroupFilter] = useState<FormGroup>('All');
  const [indexOpen, setIndexOpen] = useState(false);

  const visibleForms = useMemo(
    () =>
      filterFormSpecs(FORM_SPECS, {
        query,
        style: styleFilter,
        layout: layoutFilter,
        group: groupFilter,
      }),
    [query, styleFilter, layoutFilter, groupFilter]
  );

  const hasActiveFilters =
    query.trim() !== '' || styleFilter !== 'All' || layoutFilter !== 'All' || groupFilter !== 'All';

  const resetAllFilters = () => {
    setQuery('');
    setStyleFilter('All');
    setLayoutFilter('All');
    setGroupFilter('All');
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              resetAllFilters();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap shrink-0"
          >
            FormSpecimen
          </a>

          <nav aria-label="Form categories" className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
            {GROUPS.slice(1).map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setGroupFilter((prev) => (prev === group ? 'All' : group))}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded ${
                  groupFilter === group ? 'text-neutral-900 underline underline-offset-4' : ''
                }`}
              >
                {group}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIndexOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <List className="w-3.5 h-3.5" aria-hidden="true" />
            Specimen Index
          </button>
        </div>
      </header>

      <main id="top" className="max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-12 space-y-10">
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2.5">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 text-balance">
              Twenty Interactive Form Components
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed">
              Self-contained React and Tailwind CSS form specimens spanning contact, application, search, filter,
              scheduling, upload, settings, address, survey, and inline-edit workflows.
            </p>
          </div>

          <div
            aria-label="Filter form specimens"
            className="bg-white border border-neutral-200 rounded-xl p-4 sm:p-5 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="md:col-span-5 space-y-1">
                <label htmlFor="catalog-search" className="block text-xs font-medium text-neutral-700">
                  Search Specimens
                </label>
                <div className="relative">
                  <Search
                    className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="catalog-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter by name, category, or behavior..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
              </div>

              <div className="md:col-span-4 space-y-1">
                <label htmlFor="catalog-layout" className="block text-xs font-medium text-neutral-700">
                  Layout Structure
                </label>
                <select
                  id="catalog-layout"
                  value={layoutFilter}
                  onChange={(e) => setLayoutFilter(e.target.value as FormLayout | 'All')}
                  className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200"
                >
                  {LAYOUTS.map((layout) => (
                    <option key={layout} value={layout}>
                      {layout === 'All' ? 'All Layouts' : layout}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 h-[38px]">
                <span className="text-xs font-mono tabular-nums text-neutral-600">
                  Showing {visibleForms.length} of {FORM_SPECS.length}
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <RotateCcw className="w-3 h-3" aria-hidden="true" />
                    Reset
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-100">
              <div
                className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg overflow-x-auto max-w-full"
                role="group"
                aria-label="Style filter"
              >
                {STYLES.map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setStyleFilter(style)}
                    aria-pressed={styleFilter === style}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                      styleFilter === style
                        ? 'bg-white text-neutral-900 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {style === 'All' ? 'All' : style}
                  </button>
                ))}
              </div>

              <div className="w-full md:hidden space-y-1">
                <label htmlFor="catalog-group-mobile" className="block text-xs font-medium text-neutral-700">
                  Category Group
                </label>
                <select
                  id="catalog-group-mobile"
                  value={groupFilter}
                  onChange={(e) => setGroupFilter(e.target.value as FormGroup)}
                  className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-200"
                >
                  {GROUPS.map((grp) => (
                    <option key={grp} value={grp}>
                      {grp === 'All' ? 'All Categories' : grp}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {visibleForms.length === 0 ? (
          <section className="py-16 text-center space-y-3 border-t border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">No form specimens match these filters</h2>
            <p className="text-sm text-neutral-600">Try clearing your search query or switching style/layout filters.</p>
            <div>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Clear All Filters
              </button>
            </div>
          </section>
        ) : (
          <div className="divide-y divide-neutral-200">
            {visibleForms.map((spec) => {
              const Component = FORM_COMPONENTS[spec.componentName];
              const padded = String(spec.number).padStart(2, '0');
              return (
                <section
                  key={spec.id}
                  id={spec.id}
                  aria-labelledby={`${spec.id}-heading`}
                  className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-20"
                >
                  <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                      <span className="font-mono tabular-nums font-semibold text-neutral-800">{padded}</span>
                      <span aria-hidden="true">·</span>
                      <span className="whitespace-nowrap">{spec.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="whitespace-nowrap">{spec.layout}</span>
                      <span aria-hidden="true">·</span>
                      <span className="whitespace-nowrap">{spec.style}</span>
                    </div>
                    <h2 id={`${spec.id}-heading`} className="text-xl font-semibold text-neutral-900">
                      {spec.title}
                    </h2>
                    <p className="text-sm text-neutral-600 leading-relaxed">{spec.summary}</p>
                    <p className="text-xs font-mono text-neutral-500 pt-1">&lt;{spec.componentName} /&gt;</p>
                  </div>

                  <div className="lg:col-span-8">
                    <Component />
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      {indexOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-neutral-950/40" role="dialog" aria-modal="true" aria-label="Specimen directory">
          <div className="w-full max-w-md bg-white h-full border-l border-neutral-200 flex flex-col">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-base font-semibold text-neutral-900">All 20 Specimens</h2>
              <button
                type="button"
                aria-label="Close specimen index"
                onClick={() => setIndexOpen(false)}
                className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto divide-y divide-neutral-100 flex-1">
              {FORM_SPECS.map((spec) => (
                <a
                  key={spec.id}
                  href={`#${spec.id}`}
                  onClick={() => {
                    resetAllFilters();
                    setIndexOpen(false);
                  }}
                  className="block px-6 py-3 hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-medium text-neutral-900">
                      <span className="font-mono tabular-nums text-neutral-500 mr-2">
                        {String(spec.number).padStart(2, '0')}.
                      </span>
                      {spec.title}
                    </span>
                    <span className="text-xs text-neutral-500 shrink-0">{spec.style}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {spec.category} · {spec.layout}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
