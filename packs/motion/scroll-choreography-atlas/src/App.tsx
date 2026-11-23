import { useMemo, useState, type ComponentType } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  CATEGORY_TABS,
  IMAGES,
  SPECIMENS,
  filterSpecimens,
  type SpecimenCategory,
} from './data/specimens';
import { MediaFrame } from './components/MediaFrame';
import {
  Scroll1,
  Scroll2,
  Scroll3,
  Scroll4,
  Scroll5,
  Scroll6,
  Scroll7,
  Scroll8,
  Scroll9,
  Scroll10,
  Scroll11,
  Scroll12,
  Scroll13,
  Scroll14,
  Scroll15,
  Scroll16,
  Scroll17,
  Scroll18,
  Scroll19,
  Scroll20,
} from './components/scroll';

const COMPONENT_MAP: Record<number, ComponentType> = {
  1: Scroll1,
  2: Scroll2,
  3: Scroll3,
  4: Scroll4,
  5: Scroll5,
  6: Scroll6,
  7: Scroll7,
  8: Scroll8,
  9: Scroll9,
  10: Scroll10,
  11: Scroll11,
  12: Scroll12,
  13: Scroll13,
  14: Scroll14,
  15: Scroll15,
  16: Scroll16,
  17: Scroll17,
  18: Scroll18,
  19: Scroll19,
  20: Scroll20,
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<SpecimenCategory>('all');

  const visibleSpecimens = useMemo(
    () => filterSpecimens(SPECIMENS, activeCategory),
    [activeCategory],
  );

  const handleJump = (id: number) => {
    const el = document.getElementById(`scroll-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111110]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 border-b border-[#E2E2DE] bg-[#F7F7F5]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 md:gap-8">
          <a
            href="#top"
            className="font-display text-base font-bold tracking-tight text-[#111110] sm:text-lg whitespace-nowrap shrink-0"
          >
            Scroll Choreography Atlas
          </a>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-[#575752]">
            <a href="#overview" className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0">
              Overview
            </a>
            <a href="#specimen-index" className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0">
              Index
            </a>
            <a href="#scroll-1" className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0">
              Specimens
            </a>
            <a href="#scroll-12" className="hover:text-[#111110] transition-colors whitespace-nowrap shrink-0">
              Typography
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => handleJump(visibleSpecimens[0]?.id ?? 1)}
              className="inline-flex items-center gap-1.5 rounded-md bg-[#111110] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#2A2A28] transition-colors sm:px-4 sm:py-2 whitespace-nowrap shrink-0"
            >
              <span>Start Exhibition</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Split + Full-Width 4-Column Metric Strip Below */}
        <section id="overview" className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-6">
              <div>
                <p className="text-xs font-medium tracking-wide text-[#575752]">
                  Exhibition Monograph · Twenty Self-Contained Scroll Specimens
                </p>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#111110] sm:text-5xl text-wrap:balance">
                  Architectural Rhythm Across Twenty Scroll Choreographies
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#575752]">
                  Each module from Scroll1 through Scroll20 demonstrates a distinct motion grammar—CSS scroll-driven view timelines, sticky runways, horizontal axis translation, radial SVG meters, and compositor-safe typography sweeps.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#specimen-index"
                  className="rounded-md bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1E40AF] transition-colors whitespace-nowrap shrink-0"
                >
                  Browse Index (20)
                </a>
                <button
                  type="button"
                  onClick={() => handleJump(5)}
                  className="rounded-md border border-[#E2E2DE] bg-white px-5 py-2.5 text-sm font-medium text-[#111110] hover:bg-[#EEEEEC] transition-colors whitespace-nowrap shrink-0"
                >
                  Jump to Horizontal Track
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <MediaFrame
                src={IMAGES.heroAtrium}
                alt="Sunlit minimalist travertine museum atrium"
                aspectClass="aspect-[16/10] lg:h-full lg:aspect-auto"
                className="rounded-xl border border-[#E2E2DE]"
              />
            </div>
          </div>

          {/* 4-column metric strip in full-width row below hero split */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#E2E2DE] pt-8 md:grid-cols-4">
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#111110]">20</p>
              <p className="mt-1 text-xs text-[#575752]">Distinct components (Scroll1–20)</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#111110]">CSS view()</p>
              <p className="mt-1 text-xs text-[#575752]">Native scroll-driven timelines</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#111110]">rAF + IO</p>
              <p className="mt-1 text-xs text-[#575752]">Universal fallback choreography</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#111110]">Transform</p>
              <p className="mt-1 text-xs text-[#575752]">Compositor-only property budget</p>
            </div>
          </div>
        </section>

        {/* Specimen Filter Tabs & Jump Index */}
        <section id="specimen-index" aria-labelledby="index-heading" className="border-t border-[#E2E2DE] bg-white py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 id="index-heading" className="font-display text-xl font-semibold text-[#111110]">
                  Curated Specimen Index
                </h2>
                <p className="mt-1 text-xs text-[#575752]">
                  Filter by mechanism or select any numbered plate to inspect it in position.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#EEEEEC] p-1" role="tablist" aria-label="Filter scroll specimens">
                {CATEGORY_TABS.map((tab) => {
                  const selected = activeCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveCategory(tab.id)}
                      className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                        selected
                          ? 'bg-white text-[#111110] shadow-xs'
                          : 'text-[#575752] hover:text-[#111110]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {visibleSpecimens.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleJump(item.id)}
                  className="group rounded-lg border border-[#E2E2DE] bg-[#F7F7F5] p-4 text-left hover:border-[#1D4ED8] hover:bg-white transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-[#575752]">
                    <span className="font-mono tabular-nums text-[#1D4ED8]">{item.code}</span>
                    <span>{item.categoryLabel}</span>
                  </div>
                  <p className="mt-1.5 font-display text-sm font-semibold text-[#111110] group-hover:text-[#1D4ED8] transition-colors">
                    {String(item.id).padStart(2, '0')}. {item.title}
                  </p>
                  <p className="mt-1 text-xs text-[#575752] line-clamp-1">{item.mechanism}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Scroll1..Scroll20 Exhibition Sections */}
        <div>
          {visibleSpecimens.map((item) => {
            const SpecimenComponent = COMPONENT_MAP[item.id];
            return SpecimenComponent ? <SpecimenComponent key={item.id} /> : null;
          })}
        </div>
      </main>

      <footer className="border-t border-[#E2E2DE] bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-[#575752]">
          <p>Scroll Choreography Atlas · Twenty self-contained React & Tailwind motion studies</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-medium text-[#111110] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
          >
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}
