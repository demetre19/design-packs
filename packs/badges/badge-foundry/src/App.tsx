import { useEffect, useMemo, useState } from 'react';
import { Moon, Search, Sun, X } from 'lucide-react';
import {
  Badge1,
  Badge2,
  Badge3,
  Badge4,
  Badge5,
  Badge6,
  Badge7,
  Badge8,
  Badge9,
  Badge10,
  Badge11,
  Badge12,
  Badge13,
  Badge14,
  Badge15,
  Badge16,
  Badge17,
  Badge18,
  Badge19,
  Badge20,
} from './components/badges';
import { BadgeSpecimenCard } from './components/BadgeSpecimenCard';
import { BadgeInspectorModal } from './components/BadgeInspectorModal';
import {
  BADGE_CATALOG,
  BADGE_CATEGORY_LABELS,
  filterBadges,
  getCategoryCounts,
  type BadgeCategory,
  type BadgeMeta,
} from './utils/badgeCatalog';

function renderBadgeById(id: number): React.ReactNode {
  switch (id) {
    case 1:
      return <Badge1 />;
    case 2:
      return <Badge2 />;
    case 3:
      return <Badge3 />;
    case 4:
      return <Badge4 />;
    case 5:
      return <Badge5 />;
    case 6:
      return <Badge6 />;
    case 7:
      return <Badge7 />;
    case 8:
      return <Badge8 />;
    case 9:
      return <Badge9 />;
    case 10:
      return <Badge10 />;
    case 11:
      return <Badge11 />;
    case 12:
      return <Badge12 />;
    case 13:
      return <Badge13 />;
    case 14:
      return <Badge14 />;
    case 15:
      return <Badge15 />;
    case 16:
      return <Badge16 />;
    case 17:
      return <Badge17 />;
    case 18:
      return <Badge18 />;
    case 19:
      return <Badge19 />;
    case 20:
      return <Badge20 />;
    default:
      return null;
  }
}

const CATEGORY_ORDER: BadgeCategory[] = [
  'all',
  'status',
  'ribbons',
  'stickers',
  'seals',
  'chips',
];

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [category, setCategory] = useState<BadgeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedBadge, setInspectedBadge] = useState<BadgeMeta | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const categoryCounts = useMemo(() => getCategoryCounts(BADGE_CATALOG), []);
  const filteredBadges = useMemo(
    () => filterBadges(BADGE_CATALOG, category, searchQuery),
    [category, searchQuery]
  );

  const resetFilters = () => {
    setCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      {/* Sticky Top Bar following 3-zone contract */}
      <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="font-display-serif text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 dark:text-white"
          >
            Badge Foundry
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <a
              href="#gallery"
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 dark:hover:text-white"
            >
              Specimens
            </a>
            <a
              href="#dual-theme"
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 dark:hover:text-white"
            >
              Dual-Theme
            </a>
            <a
              href="#architecture"
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 dark:hover:text-white"
            >
              Architecture
            </a>
            <a
              href="#gallery"
              onClick={() => setCategory('seals')}
              className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 dark:hover:text-white"
            >
              Award Seals
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white whitespace-nowrap shrink-0"
            >
              {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Compact Editorial Hero */}
        <section className="max-w-3xl pb-8">
          <p className="text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400">
            React · Tailwind CSS · Inline SVG Geometry
          </p>
          <h1
            className="font-display-serif mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white"
            style={{ textWrap: 'balance' }}
          >
            Twenty self-contained badges, ribbons, stickers, and seals.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Each specimen from <span className="font-mono text-sm">Badge1</span> to{' '}
            <span className="font-mono text-sm">Badge20</span> mounts onto a realistic card
            corner, icon button, or inline text row with precision SVG edges and full light/dark
            parity.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>20 Self-Contained Components</span>
            <span aria-hidden="true">·</span>
            <span>Zero External Icon Dependencies</span>
            <span aria-hidden="true">·</span>
            <span>Light &amp; Dark Tested</span>
          </div>
        </section>

        {/* Interactive Filter & Search Controls */}
        <section
          aria-label="Filter and search badges"
          className="mb-8 flex flex-col gap-4 border-y border-slate-200 py-4 lg:flex-row lg:items-center lg:justify-between dark:border-slate-800"
        >
          <div
            className="flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-200/70 p-1 dark:bg-slate-900"
            role="group"
            aria-label="Filter by badge category"
          >
            {CATEGORY_ORDER.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {BADGE_CATEGORY_LABELS[cat]}{' '}
                  <span className="font-mono text-[11px] opacity-70 tabular-nums">
                    ({categoryCounts[cat]})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <label htmlFor="badge-search" className="sr-only">
              Search badge specimens
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              id="badge-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search SVG edge, host, or name..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pr-9 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </section>

        {/* Specimen Grid */}
        <section id="gallery" aria-label="Badge specimen gallery">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Specimen Matrix
            </h2>
            <p
              data-testid="visible-count"
              className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400"
            >
              Showing {filteredBadges.length} of {BADGE_CATALOG.length}
            </p>
          </div>

          {filteredBadges.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredBadges.map((meta) => (
                <BadgeSpecimenCard
                  key={meta.id}
                  meta={meta}
                  onInspect={(item) => setInspectedBadge(item)}
                >
                  {renderBadgeById(meta.id)}
                </BadgeSpecimenCard>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                No badge specimens match “{searchQuery}”
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Try clearing your search or switching back to all 20 components.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Dual-Theme Side-by-Side Parity Showcase */}
        <section
          id="dual-theme"
          className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-800"
        >
          <div className="max-w-2xl">
            <h2 className="font-display-serif text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Simultaneous Light &amp; Dark Verification
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Contrast-paired surfaces ensure die-cut rings, 3D ribbon folds, and punched
              perforations maintain clean edge separation on both bright paper and dark slate.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Light Surface Column */}
            <div className="light rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="mb-6 text-xs font-semibold text-slate-500">
                Light Surface · Alabaster Canvas
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
                <Badge2 />
                <Badge4 />
                <Badge10 />
                <Badge16 />
              </div>
            </div>

            {/* Dark Surface Column */}
            <div className="dark rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="mb-6 text-xs font-semibold text-slate-400">
                Dark Surface · Obsidian Slate
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
                <Badge2 />
                <Badge4 />
                <Badge10 />
                <Badge16 />
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Notes */}
        <section
          id="architecture"
          className="mt-16 border-t border-slate-200 pt-10 dark:border-slate-800"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                01. Self-Contained Files
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Each of Badge1 through Badge20 lives in its own module without external icon packs
                or shared helper dependencies.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                02. True SVG Edge Geometry
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Scalloped stickers, sawtooth price tags, guilloché award seals, and punched ticket
                notches are rendered as crisp vector paths.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                03. Accessible &amp; Reduced-Motion Safe
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                Interactive counters and removable chips use native buttons, tabular numerals, and
                reduced-motion pulse safeguards.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs text-slate-500 sm:px-6 lg:px-8 dark:text-slate-400">
          <span>Badge Foundry · 20 Self-Contained Specimen Components</span>
          <a
            href="#top"
            className="font-medium hover:text-slate-900 hover:underline underline-offset-4 dark:hover:text-white"
          >
            Back to top
          </a>
        </div>
      </footer>

      <BadgeInspectorModal
        badge={inspectedBadge}
        renderBadge={renderBadgeById}
        onClose={() => setInspectedBadge(null)}
      />
    </div>
  );
}
