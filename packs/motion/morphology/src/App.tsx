import { useMemo, useState, type ComponentType } from 'react';
import { MotionConfig } from 'motion/react';
import { Search, X } from 'lucide-react';
import {
  Morph1,
  Morph2,
  Morph3,
  Morph4,
  Morph5,
  Morph6,
  Morph7,
  Morph8,
  Morph9,
  Morph10,
  Morph11,
  Morph12,
  Morph13,
  Morph14,
  Morph15,
  Morph16,
  Morph17,
  Morph18,
  Morph19,
  Morph20,
  type MorphComponentProps,
} from './components/morphs';
import { SpecimenCard } from './components/SpecimenCard';
import {
  CATEGORY_LABELS,
  MORPH_SPECS,
  countMorphedStates,
  createInitialMorphMap,
  filterMorphSpecs,
  setAllMorphStates,
  type MorphCategory,
  type MorphId,
  type MorphStateMap,
} from './utils/morphCatalog';

const MORPH_COMPONENTS: Record<MorphId, ComponentType<MorphComponentProps>> = {
  morph1: Morph1,
  morph2: Morph2,
  morph3: Morph3,
  morph4: Morph4,
  morph5: Morph5,
  morph6: Morph6,
  morph7: Morph7,
  morph8: Morph8,
  morph9: Morph9,
  morph10: Morph10,
  morph11: Morph11,
  morph12: Morph12,
  morph13: Morph13,
  morph14: Morph14,
  morph15: Morph15,
  morph16: Morph16,
  morph17: Morph17,
  morph18: Morph18,
  morph19: Morph19,
  morph20: Morph20,
};

const CATEGORIES: MorphCategory[] = ['all', 'surfaces', 'icons', 'controls', 'feedback'];

export default function App() {
  const [morphStates, setMorphStates] = useState<MorphStateMap>(() => createInitialMorphMap());
  const [activeCategory, setActiveCategory] = useState<MorphCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const morphedCount = useMemo(() => countMorphedStates(morphStates), [morphStates]);
  const filteredSpecs = useMemo(
    () => filterMorphSpecs(MORPH_SPECS, activeCategory, searchQuery),
    [activeCategory, searchQuery]
  );

  const anyMorphed = morphedCount > 0;

  const handleGlobalToggle = () => {
    setMorphStates((prev) => setAllMorphStates(prev, !anyMorphed));
  };

  const handleSingleChange = (id: MorphId, next: boolean) => {
    setMorphStates((prev) => ({
      ...prev,
      [id]: next,
    }));
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111110]">
        <header className="sticky top-0 z-30 bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E5E5E0]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-lg font-bold tracking-tight text-[#111110] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            >
              Morphology
            </a>

            <nav aria-label="Study categories" className="hidden md:flex items-center gap-6">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded ${
                      isActive ? 'text-[#111110]' : 'text-[#6E6E68] hover:text-[#111110]'
                    }`}
                  >
                    <span>{CATEGORY_LABELS[category]}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#2563EB] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="shrink-0">
              <button
                type="button"
                onClick={handleGlobalToggle}
                className="px-4 py-2 text-xs font-medium text-white bg-[#111110] hover:bg-[#272725] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
              >
                {anyMorphed ? 'Reset All' : 'Morph All'}
              </button>
            </div>
          </div>
        </header>

        <main id="top" className="flex-1 max-w-[1360px] w-full mx-auto px-4 sm:px-8 py-10">
          <section className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-[#E5E5E0]">
            <div className="max-w-2xl">
              <p className="text-xs font-medium text-[#2563EB] mb-2">
                20 Self-Contained React + Tailwind Studies
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111110] text-balance">
                Interactive Morphing Element Library
              </h1>
              <p className="mt-2.5 text-sm sm:text-base text-[#52524E] leading-relaxed">
                Every component mounts in its morphed end state—menus open, icons transformed, and
                indicators mid-slide. Toggle any element directly or compare resting states globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#6E6E68] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter 20 studies..."
                  aria-label="Filter morph studies"
                  className="w-full sm:w-56 pl-9 pr-8 py-2 text-xs bg-white border border-[#E5E5E0] rounded-lg text-[#111110] placeholder:text-[#8E8E87] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear filter query"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#6E6E68] hover:text-[#111110] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="text-xs text-[#52524E] font-mono tabular-nums whitespace-nowrap px-1">
                {morphedCount} / 20 morphed
              </div>
            </div>
          </section>

          <div className="md:hidden mb-6 flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#111110] text-white'
                      : 'bg-white border border-[#E5E5E0] text-[#52524E]'
                  }`}
                >
                  {CATEGORY_LABELS[category]}
                </button>
              );
            })}
          </div>

          {filteredSpecs.length === 0 ? (
            <div className="bg-white border border-[#E5E5E0] rounded-2xl p-12 text-center">
              <p className="text-sm font-medium text-[#111110]">
                No morph studies match "{searchQuery}"
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-2 text-xs font-medium text-white bg-[#111110] rounded-lg hover:bg-[#272725] transition-colors cursor-pointer"
              >
                Show All 20 Studies
              </button>
            </div>
          ) : (
            <section
              aria-label="Morphing element specimens"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredSpecs.map((spec) => {
                const MorphComponent = MORPH_COMPONENTS[spec.id];
                const isMorphed = morphStates[spec.id];
                return (
                  <SpecimenCard
                    key={spec.id}
                    spec={spec}
                    morphed={isMorphed}
                    onToggle={() => handleSingleChange(spec.id, !isMorphed)}
                  >
                    <MorphComponent
                      morphed={isMorphed}
                      onMorphedChange={(next) => handleSingleChange(spec.id, next)}
                    />
                  </SpecimenCard>
                );
              })}
            </section>
          )}
        </main>

        <footer className="border-t border-[#E5E5E0] py-6 px-4 sm:px-8">
          <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6E6E68]">
            <span>Morphology Specimen Gallery · Components Morph1–Morph20</span>
            <button
              type="button"
              onClick={() => setMorphStates(createInitialMorphMap(MORPH_SPECS, true))}
              className="hover:text-[#111110] underline underline-offset-4 cursor-pointer"
            >
              Restore all 20 morphed end states
            </button>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
