import {useEffect, useMemo, useState, type ReactNode} from 'react';
import {RotateCcw, Search} from 'lucide-react';
import {
  Fx1,
  Fx2,
  Fx3,
  Fx4,
  Fx5,
  Fx6,
  Fx7,
  Fx8,
  Fx9,
  Fx10,
  Fx11,
  Fx12,
  Fx13,
  Fx14,
  Fx15,
  Fx16,
  Fx17,
  Fx18,
  Fx19,
  Fx20,
} from './components/fx';
import {SpecimenCard} from './components/SpecimenCard';
import {CodeInspectorModal} from './components/CodeInspectorModal';
import {SPECIMENS, type SpecimenDefinition} from './data/specimens';
import {calculateScrollProgress, filterSpecimens, type SpecimenCategory} from './utils/fxMath';

const CATEGORIES: SpecimenCategory[] = [
  'All',
  'Scroll & Layout',
  'Typography',
  'Buttons & CTA',
  'Feedback & Cards',
];

const HERO_METRICS = [
  {value: '20', label: 'Self-Contained Specimens'},
  {value: '60 fps', label: 'Compositor Target'},
  {value: '100%', label: 'Interactive Live State'},
  {value: '0', label: 'External Animation Libraries'},
];

const RIBBON_ITEMS = [
  'Scroll Progress',
  'Typewriter Cadence',
  'Magnetic Pull',
  'Specular Sheen',
  'SVG Stroke Draw',
  'Parallax Depth',
  'Conic Gradient Frame',
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<SpecimenCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [replayAllCount, setReplayAllCount] = useState(0);
  const [inspectedSpecimen, setInspectedSpecimen] =
    useState<SpecimenDefinition | null>(null);
  const [heroImgError, setHeroImgError] = useState(false);

  const visibleSpecimens = useMemo(() => {
    return filterSpecimens(SPECIMENS, selectedCategory, searchQuery) as SpecimenDefinition[];
  }, [selectedCategory, searchQuery]);

  const renderSpecimenContent = (id: string): ReactNode => {
    switch (id) {
      case 'Fx1':
        return <Fx1 showTopBar={false} />;
      case 'Fx2':
        return <Fx2 targetId="specimen-grid" />;
      case 'Fx3':
        return <Fx3 replayTrigger={replayAllCount} />;
      case 'Fx4':
        return <Fx4 replayTrigger={replayAllCount} />;
      case 'Fx5':
        return <Fx5 />;
      case 'Fx6':
        return <Fx6 />;
      case 'Fx7':
        return <Fx7 />;
      case 'Fx8':
        return <Fx8 />;
      case 'Fx9':
        return <Fx9 />;
      case 'Fx10':
        return <Fx10 />;
      case 'Fx11':
        return <Fx11 />;
      case 'Fx12':
        return <Fx12 />;
      case 'Fx13':
        return <Fx13 />;
      case 'Fx14':
        return <Fx14 />;
      case 'Fx15':
        return <Fx15 />;
      case 'Fx16':
        return <Fx16 replayTrigger={replayAllCount} />;
      case 'Fx17':
        return <Fx17 replayTrigger={replayAllCount} />;
      case 'Fx18':
        return <Fx18 />;
      case 'Fx19':
        return <Fx19 />;
      case 'Fx20':
        return <Fx20 />;
      default:
        return null;
    }
  };

  const handleNavCategory = (category: SpecimenCategory) => {
    setSelectedCategory(category);
    const grid = document.getElementById('specimen-grid');
    if (grid) {
      grid.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B]">
      {/* Fx1 Top-of-page Scroll Progress Bar rendered globally */}
      <div className="sr-only" aria-hidden="true" />
      <GlobalTopProgressBar />

      {/* 3-Zone Top Bar Contract */}
      <header className="sticky top-[3px] z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-zinc-200/80">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0"
          >
            Kinetic
          </a>

          <nav
            aria-label="Specimen categories"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600"
          >
            <button
              type="button"
              onClick={() => handleNavCategory('All')}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              All Specimens
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Scroll & Layout')}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Scroll
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Typography')}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Typography
            </button>
            <button
              type="button"
              onClick={() => handleNavCategory('Buttons & CTA')}
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Interactive
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setReplayAllCount((c) => c + 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-950 hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Replay Timed
          </button>
        </div>
      </header>

      <main id="top">
        {/* Split-Screen Editorial Hero */}
        <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-8 py-2">
              <div className="space-y-5">
                <p className="text-xs font-medium text-zinc-500">
                  React &amp; Tailwind Motion Library · Fx1 to Fx20
                </p>
                <h1
                  style={{textWrap: 'balance'}}
                  className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-zinc-950"
                >
                  Twenty tactile micro-interactions, live in the browser.
                </h1>
                <p className="text-base leading-relaxed text-zinc-600 max-w-xl">
                  Every component from scroll telemetry to CSS particle bursts is
                  self-contained, compositor-friendly, and driven directly by
                  CSS keyframes or React state hooks.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#specimen-grid"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  Explore All 20 Specimens
                </a>
                <button
                  type="button"
                  onClick={() => setInspectedSpecimen(SPECIMENS[0])}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-800 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Inspect Fx1 Source
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
                {!heroImgError ? (
                  <img
                    src="/src/assets/images/hero_kinetic_sculpture_1795322990982.jpg"
                    alt="Minimalist kinetic brass and charcoal aluminum architectural sculpture in a sunlit gallery"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="w-full h-full lg:h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 p-8">
                    <span className="font-serif text-xl text-zinc-600">
                      Kinetic Motion Study
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Full-width 4-Column Metric Strip below Hero Split */}
          <div className="mt-10 pt-8 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-1">
                <span className="font-mono text-2xl font-semibold tabular-nums text-zinc-950">
                  {metric.value}
                </span>
                <span className="text-xs text-zinc-500">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Subtle Editorial Marquee Divider */}
        <div
          aria-hidden="true"
          className="border-y border-zinc-200 bg-white py-3 overflow-hidden"
        >
          <div className="flex w-max fx-marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center gap-8 pr-8">
                {RIBBON_ITEMS.map((item) => (
                  <span
                    key={`${dup}-${item}`}
                    className="inline-flex items-center gap-8 text-xs font-medium text-zinc-500 whitespace-nowrap"
                  >
                    <span>{item}</span>
                    <span className="text-zinc-300">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Specimen Index & Filter Toolbar */}
        <section
          id="specimen-grid"
          className="max-w-[1200px] mx-auto px-6 py-12 space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-950">
                Component Specimen Grid
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Interact directly with each card below or open its source snippet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Interactive Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter specimens by category"
                className="flex flex-wrap items-center gap-1 p-1 bg-zinc-100 rounded-lg"
              >
                {CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-zinc-950 shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative">
                <label htmlFor="specimen-search" className="sr-only">
                  Filter specimens
                </label>
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="specimen-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Fx1..Fx20"
                  className="w-full sm:w-44 pl-8 pr-3 py-1.5 text-xs bg-white border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#2563EB]"
                />
              </div>
            </div>
          </div>

          {/* 2-Column Editorial Bento Specimen Grid */}
          {visibleSpecimens.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {visibleSpecimens.map((specimen) => (
                <SpecimenCard
                  key={specimen.id}
                  specimen={specimen}
                  onInspect={setInspectedSpecimen}
                >
                  {renderSpecimenContent(specimen.id)}
                </SpecimenCard>
              ))}
            </div>
          ) : (
            <div className="p-12 rounded-2xl bg-white border border-zinc-200 text-center space-y-3">
              <p className="text-sm font-medium text-zinc-900">
                No specimens match &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-zinc-200 bg-white mt-8">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold text-zinc-950">Kinetic</span>
            <p className="mt-1 text-xs text-zinc-500">
              20 self-contained React &amp; Tailwind CSS micro-interaction specimens.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <a href="#top" className="hover:text-zinc-900 transition-colors">
              Back to top
            </a>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setReplayAllCount((c) => c + 1);
              }}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Reset &amp; Replay All
            </button>
          </div>
        </div>
      </footer>

      <CodeInspectorModal
        specimen={inspectedSpecimen}
        onClose={() => setInspectedSpecimen(null)}
      />
    </div>
  );
}

/**
 * Renders Fx1's fixed top-of-page scroll progress bar independently so it stays
 * pinned at the top of the viewport even when the user filters out Fx1 in the grid.
 */
function GlobalTopProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      setProgress(
        calculateScrollProgress(
          window.scrollY,
          document.documentElement.scrollHeight,
          window.innerHeight
        )
      );
    };
    update();
    window.addEventListener('scroll', update, {passive: true});
    window.addEventListener('resize', update, {passive: true});
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Top of page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      data-testid="global-scroll-bar"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-zinc-200/80 pointer-events-none"
    >
      <div
        className="h-full bg-[#2563EB] origin-left transition-transform duration-75 ease-out"
        style={{transform: `scaleX(${progress})`}}
      />
    </div>
  );
}
