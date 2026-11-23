import { useState } from 'react';
import { Check, ArrowUpRight, Mail } from 'lucide-react';
import { SPECIMEN_IMAGES } from '../../utils/specimenCatalog';
import { FigureFrame } from '../FigureFrame';

/**
 * 7. Annotated Margin Notes
 * Side annotations beside body.
 */
const ANNOTATED_PARAGRAPHS = [
  {
    id: 1,
    text: 'Victorian horticulturalists quickly discovered that glass thickness alone could not sustain tropical epiphytes through January frosts. Iron ribs acted as thermal bridges, shedding heat twice as rapidly as oak mullions unless insulated with cork-filled putty.',
    noteTitle: 'Thermal Bridging (1851)',
    noteText: 'Joseph Paxton’s ridge-and-furrow glazing cut winter coal consumption by nearly 22% at Chatsworth.',
  },
  {
    id: 2,
    text: 'Ventilation mattered even more than heat. Without roof louvers linked by brass worm gears, midday sun inside a closed glasshouse could spike canopy temperatures above 44°C in under twenty minutes, scorching delicate fern fronds.',
    noteTitle: 'Brass Gear Louvers',
    noteText: 'Hand-cranked rack-and-pinion shafts along the lantern crest remain operational in surviving 1870s houses.',
  },
  {
    id: 3,
    text: 'Beneath the limestone walkways ran cast-iron four-inch water pipes fed by gravity boilers sunk into masonry cellars. Air rising off warm iron circulated naturally toward the cold glass perimeter, creating a continuous convective curtain.',
    noteTitle: 'Convective Curtain',
    noteText: 'This gentle loop prevented stagnant condensation pockets where fungal blight typically takes hold.',
  },
];

export function BlogSingle7() {
  const [activeNote, setActiveNote] = useState<number>(1);

  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="max-w-2xl pb-10 border-b border-stone-200 mb-12">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
            Annotated Monograph
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
            The Botany of Cast-Iron Microclimates
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Dr. Eleanor Finch</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-22">October 22, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>

        <div className="mb-12">
          <FigureFrame
            src={SPECIMEN_IMAGES.botanicalGlasshouse}
            alt="Cast-iron conservatory roof ribs and fern understory"
            caption="Fig. 1 — Cast-iron column piers and upper lantern ventilation framing inside the Palm Conservatory."
          />
        </div>

        <div className="space-y-10">
          {ANNOTATED_PARAGRAPHS.map((item) => {
            const isActive = activeNote === item.id;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                <div className="lg:col-span-8">
                  <p className="font-serif text-[17px] leading-[1.82] text-stone-800">
                    {item.text}{' '}
                    <button
                      type="button"
                      onClick={() => setActiveNote(item.id)}
                      aria-label={`Highlight margin note ${item.id}: ${item.noteTitle}`}
                      className={`inline-flex items-center justify-center align-super text-[11px] font-mono font-semibold px-1.5 py-0.5 transition-colors ${
                        isActive
                          ? 'bg-stone-900 text-white'
                          : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                      }`}
                    >
                      [{item.id}]
                    </button>
                  </p>
                </div>

                <aside
                  onClick={() => setActiveNote(item.id)}
                  className={`lg:col-span-4 p-4 border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white border-stone-900 text-stone-900'
                      : 'bg-stone-100/70 border-stone-200 text-stone-600'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-1.5">
                    <span>Note {item.id}</span>
                    <span>Margin</span>
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-1">{item.noteTitle}</h3>
                  <p className="text-xs leading-relaxed text-stone-600">{item.noteText}</p>
                </aside>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

/**
 * 8. Academic Paper
 * Serif, footnote refs, numbered figures.
 */
const ACADEMIC_FOOTNOTES = [
  {
    id: 1,
    citation: 'Nystrom, H., & Lindqvist, C. (2024). Hygrothermal buffering in coastal concrete enclosures. Nordic Journal of Building Physics, 18(2), 114–129.',
  },
  {
    id: 2,
    citation: 'Osei, L. K. (2025). Salt aerosol deposition curves along North Sea architectural surfaces. Coastal Materials Review, 9(4), 42–58.',
  },
  {
    id: 3,
    citation: 'ISO 13788:2012. Hygrothermal performance of building components and building elements — Internal surface temperature to avoid critical surface humidity.',
  },
];

export function BlogSingle8() {
  const [highlightedFootnote, setHighlightedFootnote] = useState<number | null>(null);

  const jumpToFootnote = (num: number) => {
    setHighlightedFootnote(num);
    document.getElementById(`academic-fn-${num}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6 font-serif">
      <div className="max-w-3xl mx-auto">
        <header className="text-center pb-8 border-b border-stone-300">
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-stone-500">
            Journal of Coastal Architectural Physics · Vol. 22, No. 3
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-stone-900 [text-wrap:balance]">
            Thermal Inertia in Timber-Shuttered Coastal Pavilions
          </h1>
          <div className="mt-5 font-sans text-xs text-stone-600 space-y-1">
            <p className="font-semibold text-stone-900">
              Prof. Henrik Nystrom &amp; L. K. Osei
            </p>
            <p className="text-stone-500">
              Department of Structural Tectonics, Bergen Institute · September 15, 2026 · 14 min read
            </p>
          </div>
        </header>

        <section className="my-8 p-6 bg-stone-50 border border-stone-200">
          <h2 className="font-sans text-xs uppercase tracking-widest font-semibold text-stone-700 mb-2">
            Abstract
          </h2>
          <p className="text-sm leading-relaxed text-stone-700">
            Uninsulated cast-in-place coastal shelters exhibit pronounced diurnal phase lag when wall thickness exceeds 280 mm. Empirical sensor logs recorded across four tidal quarters demonstrate a 6.4-hour thermal peak shift and a 61% attenuation in interior temperature swing relative to ambient marine air.
          </p>
        </section>

        <div className="space-y-5 text-[16.5px] leading-[1.82] text-stone-800">
          <p>
            Monolithic coastal walls operate as low-pass thermal filters rather than static barriers. During clear autumn afternoons, solar radiation warms the rough board-formed exterior face, initiating a slow conductive wave inward across the aggregate matrix
            <button
              type="button"
              onClick={() => jumpToFootnote(1)}
              className="font-sans text-xs font-semibold text-blue-800 hover:underline align-super ml-0.5"
            >
              [1]
            </button>
            .
          </p>
          <p>
            Surface micro-roughness imprinted by Douglas fir shuttering increases convective boundary turbulence slightly, yet simultaneous salt aerosol crystallization inside microscopic pores alters vapor permeability over the first eighteen months of exposure
            <button
              type="button"
              onClick={() => jumpToFootnote(2)}
              className="font-sans text-xs font-semibold text-blue-800 hover:underline align-super ml-0.5"
            >
              [2]
            </button>
            .
          </p>

          {/* Numbered Vector Figure */}
          <figure className="my-9 p-6 bg-stone-50 border border-stone-200">
            <svg
              viewBox="0 0 640 210"
              className="w-full h-auto"
              role="img"
              aria-label="Line graph comparing ambient coastal air temperature to interior concrete wall phase lag over 24 hours"
            >
              <line x1="50" y1="20" x2="50" y2="175" stroke="#a8a29e" strokeWidth="1" />
              <line x1="50" y1="175" x2="610" y2="175" stroke="#a8a29e" strokeWidth="1" />
              <line x1="50" y1="95" x2="610" y2="95" stroke="#e7e5e4" strokeDasharray="4 4" />
              <path
                d="M 50 140 C 140 160, 210 35, 310 42 C 410 50, 500 150, 610 138"
                fill="none"
                stroke="#78716c"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
              <path
                d="M 50 112 C 160 124, 290 120, 410 78 C 495 66, 550 104, 610 110"
                fill="none"
                stroke="#1c1917"
                strokeWidth="2.5"
              />
              <text x="58" y="34" fontSize="11" fill="#57534e" fontFamily="monospace">
                Ambient Air (Peak 14:00)
              </text>
              <text x="395" y="64" fontSize="11" fill="#1c1917" fontFamily="monospace" fontWeight="600">
                Interior Core (Peak 20:24)
              </text>
              <text x="50" y="196" fontSize="11" fill="#78716c" fontFamily="monospace">
                00:00
              </text>
              <text x="310" y="196" fontSize="11" fill="#78716c" fontFamily="monospace">
                12:00
              </text>
              <text x="572" y="196" fontSize="11" fill="#78716c" fontFamily="monospace">
                24:00
              </text>
            </svg>
            <figcaption className="mt-3 font-sans text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900">Figure 1.</strong> Measured 24-hour thermal wave attenuation and 6.4-hour phase lag inside a 300 mm board-formed concrete wall section.
            </figcaption>
          </figure>

          <p>
            Standard steady-state U-value calculations consistently underestimate occupant comfort in unheated coastal pavilions because they ignore interior radiant stability and dew-point buffering governed by capillary pore geometry
            <button
              type="button"
              onClick={() => jumpToFootnote(3)}
              className="font-sans text-xs font-semibold text-blue-800 hover:underline align-super ml-0.5"
            >
              [3]
            </button>
            .
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-stone-300 font-sans">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-stone-500 mb-4">
            References &amp; Footnotes
          </h2>
          <ol className="space-y-2.5 text-xs text-stone-600 leading-relaxed">
            {ACADEMIC_FOOTNOTES.map((fn) => (
              <li
                key={fn.id}
                id={`academic-fn-${fn.id}`}
                className={`p-2 transition-colors ${
                  highlightedFootnote === fn.id ? 'bg-amber-50 text-stone-900' : ''
                }`}
              >
                <span className="font-mono font-semibold text-stone-900 mr-2">[{fn.id}]</span>
                {fn.citation}
              </li>
            ))}
          </ol>
        </footer>
      </div>
    </article>
  );
}

/**
 * 9. Newsletter-Style Single
 * Author card top, compact body.
 */
export function BlogSingle9() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <article className="bg-stone-100 py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-xl mx-auto bg-white border border-stone-200 p-7 sm:p-10">
        {/* Author Masthead Card Top */}
        <header className="pb-6 border-b border-stone-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                Paperweight Weekly · Issue 142
              </p>
              <p className="text-xs text-stone-500 mt-0.5">
                Nadia Benali · November 8, 2026 · 4 min read
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSubscribed((v) => !v)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                subscribed
                  ? 'bg-emerald-900 text-white'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              {subscribed ? <Check className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
            </button>
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-semibold tracking-tight leading-tight text-stone-900 [text-wrap:balance]">
            Sunday Dispatch: Three Notebooks Worth Finishing
          </h1>
        </header>

        <div className="py-7 space-y-5 text-[15.5px] leading-[1.75] text-stone-700">
          <p>
            Good morning from Lisbon. Every autumn I empty the bottom drawer of my desk and lay out every half-filled pocket notebook from the past twelve months. Most stall around page forty—right after the initial burst of enthusiasm meets a wet Tuesday.
          </p>
          <p>
            The three notebooks that actually reached their back covers this year shared one quiet trait: lay-flat thread binding and paper tooth heavy enough for fountain pen ink without feathering. When a spine fights your wrist, you naturally write shorter notes.
          </p>

          <FigureFrame
            src={SPECIMEN_IMAGES.rangefinderDesk}
            alt="Linen-bound field notebook open next to rangefinder camera on walnut desk"
            caption="Page 88 of my coastal exposure log—smudged coffee rings and all."
            aspectClassName="aspect-[4/3]"
            className="my-6"
          />

          <p>
            If you are starting a fresh field journal this winter, pick a smaller format than you think you need. An A6 book fits inside a coat pocket and travels to train platforms where an A4 hardcover stays home on the shelf.
          </p>
          <p className="text-stone-900 font-medium">
            Until next Sunday, keep one pen clipped and leave the margins messy.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 10. Blog-with-Sidebar
 * Article + related/author sidebar.
 */
const RELATED_READS = [
  {
    title: 'Reduction Cooling Curves in Wood-Fired Anagama Kilns',
    meta: 'Kenji Watanabe · 5 min read',
  },
  {
    title: 'Wild Feldspar Prospecting Along Granite Riverbeds',
    meta: 'Mina Takahashi · 7 min read',
  },
  {
    title: 'Why Stoneware Ring Pitch Reveals Vitrification',
    meta: 'Haruki Sato · 4 min read',
  },
];

export function BlogSingle10() {
  const [activeRelated, setActiveRelated] = useState<number>(0);

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Main Article Column */}
        <div className="lg:col-span-8">
          <header className="pb-8 border-b border-stone-200 mb-8">
            <p className="text-xs uppercase tracking-[0.16em] text-stone-500 font-medium">
              Material Studies · Ceramics
            </p>
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
              Clay Mineralogy and the Ash Glaze Revival
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
              <span className="font-semibold text-stone-900">Kenji Watanabe</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-10-30">October 30, 2026</time>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">6 min read</span>
            </div>
          </header>

          <FigureFrame
            src={SPECIMEN_IMAGES.ceramicStudio}
            alt="Ceramic stoneware vessels and glaze jars in sunlit studio"
            caption="Washed oak ash and local iron-bearing clay slip waiting to be sieved through 80-mesh brass screen."
            className="mb-8"
          />

          <div className="space-y-5 text-base sm:text-[17px] leading-[1.8] text-stone-700">
            <p>
              Long before commercial mineral houses shipped bagged silica and whiting across continents, potters mixed glazes out of whatever burned in the firebox and whatever washed down the hillside behind the workshop. Hardwood ash—rich in calcium carbonate and trace phosphorus—acts as a natural high-temperature flux.
            </p>
            <p>
              Sieved straight from a hearth without washing, wood ash retains soluble potassium salts that make buckets mildly caustic and delightfully unpredictable. Once washed three times in rainwater, the remaining insoluble calcium reacts cleanly with ball clay at 1280°C to yield translucent olive-amber pools.
            </p>
            <p>
              Modern studio ceramicists returning to unwashed orchard prunings or rice-husk ash are not chasing nostalgia. Subtle trace metals—manganese from beech bark, magnesium from pine needles—produce depth that pure synthetic oxides never quite imitate.
            </p>
            <p>
              Every regional forest leaves a distinct chemical signature on the shoulder of a tea bowl. When you hold a finished vessel, you are holding the mineral biography of a single watershed.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <div className="bg-stone-50 border border-stone-200 p-6">
            <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
              About the Author
            </p>
            <h2 className="font-serif text-xl font-semibold text-stone-900">Kenji Watanabe</h2>
            <p className="text-xs text-stone-500 mt-0.5 mb-3">Ceramicist &amp; Kiln Builder, Mashiko</p>
            <p className="text-sm leading-relaxed text-stone-600">
              Builds wood-fired cross-draft kilns and documents regional clay bodies and wild wood-ash glaze chemistry.
            </p>
          </div>

          <div className="border border-stone-200 p-6">
            <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-4">
              Related Essays
            </p>
            <div className="divide-y divide-stone-200">
              {RELATED_READS.map((rel, idx) => (
                <button
                  key={rel.title}
                  type="button"
                  onClick={() => setActiveRelated(idx)}
                  className={`w-full text-left py-3.5 first:pt-0 last:pb-0 group flex items-start justify-between gap-3 ${
                    activeRelated === idx ? 'text-stone-900' : 'text-stone-700'
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium group-hover:underline leading-snug">
                      {rel.title}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">{rel.meta}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-stone-400 group-hover:text-stone-900 mt-0.5" />
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

/**
 * 11. Image-Essay
 * Full-width figures breaking text rhythm.
 */
export function BlogSingle11() {
  return (
    <article className="bg-stone-950 text-stone-100 py-16 sm:py-24">
      <header className="max-w-4xl mx-auto px-6 text-center mb-14">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-400">
          Visual Essay · Pacific Coast
        </p>
        <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white [text-wrap:balance]">
          Pacific Fog Lines: Architecture at the Edge of Timber
        </h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 text-xs text-stone-400">
          <span className="font-medium text-stone-200">Tomasz Kowalski</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-10-11">October 11, 2026</time>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">7 min read</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-14">
        <FigureFrame
          src={SPECIMEN_IMAGES.concretePavilion}
          alt="Concrete pavilion cantilevered toward misty coastal spruce canopy"
          caption="Plate 01 — Cantilevered concrete soffit meeting the morning marine layer at 6:20 AM."
          dark
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 space-y-6 font-serif text-lg leading-[1.8] text-stone-300 mb-14">
        <p>
          Where coastal redwoods drop down to basalt cliffs, sunlight arrives horizontally or not at all. Buildings along this shelf are less about enclosure than about framing thresholds between wet stone and drifting cloud.
        </p>
        <p>
          At dawn, mist slips sideways through Sitka spruce needles and pools inside sheltered concrete courtyards before the first thermal updraft clears the ridge.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-14">
        <FigureFrame
          src={SPECIMEN_IMAGES.coastalStation}
          alt="Basalt sea cliffs and distant marine horizon"
          caption="Plate 02 — Exposed headland anemometer masts silhouetted against incoming low-pressure swell."
          dark
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 space-y-6 font-serif text-lg leading-[1.8] text-stone-300">
        <p>
          By noon, water condenses off the roof eaves in steady drops, feeding mosses tucked into mortar joints. Nothing stays dry for long; materials survive by welcoming saturation rather than fighting it.
        </p>
        <p>
          Photographs taken an hour apart along the same parapet never share the same horizon line. The architecture remains fixed while the ocean redraws the room.
        </p>
      </div>
    </article>
  );
}

/**
 * 12. Recipe / How-To Format
 * Stepper sections with checkmarks.
 */
const GLAZE_STEPS = [
  {
    step: 1,
    title: 'Weigh dry feldspar and ball clay',
    detail: 'Combine 720g Custer feldspar, 180g OM4 ball clay, and 100g EPK kaolin in a dry five-gallon bucket while wearing a P100 particulate respirator.',
    duration: '10 min',
  },
  {
    step: 2,
    title: 'Hydrate slowly with warm water',
    detail: 'Pour 950 ml of warm water over the dry batch and allow the clay platelets to slake undisturbed for twenty minutes before mechanical mixing.',
    duration: '20 min',
  },
  {
    step: 3,
    title: 'Screen twice through 60-mesh sieve',
    detail: 'Force the slurry through a 60-mesh bronze sieve into a clean glaze tub, leaving coarse mineral speckles intact for classic Shino crawling texture.',
    duration: '15 min',
  },
  {
    step: 4,
    title: 'Dip bisque ware to 1.48 specific gravity',
    detail: 'Submerge bone-dry Cone 08 bisque cups for four full seconds so a thick, buttery coat clings evenly to foot rings and carved facets.',
    duration: '25 min',
  },
];

export function BlogSingle12() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);

  const toggleStep = (stepNum: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((s) => s !== stepNum) : [...prev, stepNum]
    );
  };

  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.16em] text-amber-800 font-semibold">
            Studio How-To Guide
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            How to Mix and Apply a Traditional Shino Reduction Glaze
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Mina Takahashi</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-01">November 1, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">10 min read</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-10">
          <div className="lg:col-span-7 space-y-4 text-base leading-[1.78] text-stone-700">
            <p>
              High-alumina Shino glazes thrive on carbon trapping during early body reduction. Unlike fluid celadons that melt mirror-smooth, Shino stays viscous at Cone 10, blushing warm persimmon orange wherever the coat thins along thrown ridges.
            </p>
            <p>
              Getting consistent results starts at the scale. Small hydration errors swing specific gravity wildly because soluble soda ash thickens the slurry over the first forty-eight hours of aging.
            </p>
            <p>
              Follow the four bench steps below in sequence, checking off each stage as your batch settles in the studio bucket.
            </p>
          </div>

          <div className="lg:col-span-5">
            <FigureFrame
              src={SPECIMEN_IMAGES.ceramicStudio}
              alt="Shino glaze jars and stoneware bowls on wooden shelf"
              caption="Labeled Shino and Tenmoku batch jars ready for testing."
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>

        <section className="bg-white border border-stone-200 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200 mb-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Preparation Stepper
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Click any step to mark it complete on your studio bench.
              </p>
            </div>
            <span className="font-mono text-xs tabular-nums font-semibold text-stone-900 bg-stone-100 px-3 py-1.5 border border-stone-200">
              {completedSteps.length} / {GLAZE_STEPS.length} Done
            </span>
          </div>

          <div className="space-y-4">
            {GLAZE_STEPS.map((item) => {
              const done = completedSteps.includes(item.step);
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => toggleStep(item.step)}
                  className={`w-full text-left p-5 border transition-colors flex items-start gap-4 ${
                    done
                      ? 'bg-emerald-50/60 border-emerald-300'
                      : 'bg-white border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span
                    className={`w-7 h-7 shrink-0 flex items-center justify-center border text-xs font-mono font-semibold mt-0.5 ${
                      done
                        ? 'bg-emerald-800 border-emerald-800 text-white'
                        : 'bg-white border-stone-300 text-stone-700'
                    }`}
                  >
                    {done ? <Check className="w-4 h-4" /> : item.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3
                        className={`font-semibold text-base ${
                          done ? 'text-stone-600 line-through' : 'text-stone-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs tabular-nums text-stone-500">
                        {item.duration}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                      {item.detail}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}
