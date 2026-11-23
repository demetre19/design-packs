import { useState } from 'react';
import { SPECIMEN_IMAGES } from '../../utils/specimenCatalog';
import { FigureFrame } from '../FigureFrame';

/**
 * 1. Classic Editorial Column
 * Narrow 65ch body, opening drop cap, wide serif pull quotes.
 */
export function BlogSingle1() {
  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <header className="max-w-[65ch] mx-auto text-center pb-10 border-b border-stone-200">
        <p className="text-xs uppercase tracking-[0.18em] text-stone-500 mb-4">
          Architecture &amp; Materiality
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
          The Quiet Endurance of Board-Formed Concrete
        </h1>
        <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed font-serif italic">
          How rough-sawn Douglas fir formwork leaves an unmistakable geological memory in coastal stone.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-stone-500">
          <span className="font-medium text-stone-800">Clara Lindqvist</span>
          <span aria-hidden="true">·</span>
          <time dateTime="2026-10-14">October 14, 2026</time>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">6 min read</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto my-10">
        <FigureFrame
          src={SPECIMEN_IMAGES.concretePavilion}
          alt="Board-formed concrete pavilion overlooking misty coastal pines at dawn"
          caption="Fig. 1 — West elevation of the Salt Point Pavilion at first light, showing horizontal Douglas fir grain transferred into poured concrete."
        />
      </div>

      <div className="max-w-[65ch] mx-auto space-y-6 font-serif text-[17px] leading-[1.8] text-stone-800">
        <p className="editorial-drop-cap">
          When architects speak of permanence, they rarely mention the timber that vanishes before the building ever opens. Yet every board-formed wall carries the negative impression of a forest. Rough-sawn planks, nailed edge to edge in temporary shuttering, absorb moisture from the wet aggregate while transferring their medullary rays, knots, and saw marks directly into the curing paste.
        </p>
        <p>
          Along the Mendocino headlands, salt fog tests every exterior surface within five winters. Painted stucco blisters, and milled cedar silvers rapidly unless oiled twice a year. Unsealed architectural concrete, by contrast, settles into the bluff as though quarried in place. Lichen catches first along the horizontal lift seams, softening the geometry without compromising the structural core.
        </p>

        <blockquote className="my-10 py-7 border-y border-stone-300 text-center px-4">
          <p className="font-serif italic text-2xl sm:text-3xl leading-snug text-stone-900 [text-wrap:balance]">
            “Timber gives concrete its grain; fog gives it its calendar. Neither material works alone.”
          </p>
          <footer className="mt-3 text-xs font-sans uppercase tracking-widest text-stone-500">
            Field Notebook, North Coast Survey
          </footer>
        </blockquote>

        <p>
          The craft lies in restraint during the pour. Over-vibrating the mix erases the subtle wood relief and drives paste to the surface in glossy patches; under-vibrating leaves honeycombed voids around the rebar cages. Crews who still build shuttering by hand select narrow four-inch boards of uneven moisture content so the wall reads as an honest assembly of planks rather than a stamped veneer.
        </p>
        <p>
          Standing inside the pavilion an hour after sunrise, the thermal mass holds the chill of the Pacific night while the upper soffit reflects warm amber light off the slate floor. Nothing announces itself loudly. The room simply waits for weather to pass across its surfaces.
        </p>
      </div>
    </article>
  );
}

/**
 * 2. Magazine Feature
 * Full-bleed hero image + overlapping title card.
 */
export function BlogSingle2() {
  return (
    <article className="bg-white text-stone-900 pb-20">
      <div className="relative w-full h-[380px] sm:h-[480px] bg-stone-900 overflow-hidden">
        <img
          src={SPECIMEN_IMAGES.botanicalGlasshouse}
          alt="Victorian cast-iron botanical conservatory bathed in afternoon sunlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 -mt-20 sm:-mt-28 z-10">
        <header className="bg-white border border-stone-200 p-7 sm:p-11 shadow-sm">
          <div className="flex flex-wrap items-center gap-x-2 text-xs uppercase tracking-[0.16em] text-amber-800 font-semibold">
            <span>Feature Essay</span>
            <span aria-hidden="true">/</span>
            <span>Botanical Architecture</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-stone-900 [text-wrap:balance]">
            Glasshouses of the Late Victorian Fringe
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Before municipal parks standardized steel trusses, foundrymen bent cast iron into delicate ribs engineered purely for winter light.
          </p>
          <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-stone-900">Julian Vance</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-10-19">October 19, 2026</time>
            </div>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>
      </div>

      <div className="max-w-2xl mx-auto px-6 mt-12 space-y-6 text-base sm:text-[17px] leading-[1.78] text-stone-700">
        <p>
          Walking beneath the curvilinear dome of an 1880s conservatory feels closer to stepping inside a musical instrument than a building. Every slender purlin and glazing bar is calculated to minimize shadow at the winter solstice, when low-angle northern light must penetrate forty feet of damp air to reach the tree ferns below.
        </p>
        <p>
          The breakthrough came when Scottish and English ironfounders stopped imitating masonry arches and began casting hollow columns that doubled as rainwater downspouts. Condensation running down the interior glass was collected in cast gutter rings, routed down the structural piers, and stored in subterranean brick cisterns beneath the limestone path.
        </p>

        <FigureFrame
          src={SPECIMEN_IMAGES.ceramicStudio}
          alt="Clay vessels and potting benches arranged along sunlit wooden shelving"
          caption="Plate II — Hand-thrown terracotta propagation pots curing alongside glazed mineral washes used in conservatory bench displays."
          aspectClassName="aspect-[4/3]"
          className="my-10"
        />

        <p>
          Today, preservationists face a delicate thermodynamic paradox. Modern laminated safety glass blocks ultraviolet wavelengths that historical fern cultivars evolved to expect, while rigid silicone sealants trap moisture against brittle cast flanges. True restoration requires re-learning putty recipes made from linseed oil and whiting.
        </p>
        <p>
          When the afternoon sun drops below the ridge crest, shadows of cast scrollwork slide across the damp flagstone floor like sundial markings—an unbroken civic machine still keeping nineteenth-century botanical time.
        </p>
      </div>
    </article>
  );
}

/**
 * 3. Longform Scroll
 * Chapter markers, sticky progress rail.
 */
const LONGFORM_CHAPTERS = [
  {
    id: 'ch-1',
    num: '01',
    label: 'The Basalt Shelf',
    body: 'Sixty miles northwest of the nearest ferry slip, the North Atlantic drops abruptly onto a shelf of fractured columnar basalt. Every winter gale drives spray straight up the 140-foot cliff face, coating anemometer cups in rime ice before dawn.',
  },
  {
    id: 'ch-2',
    num: '02',
    label: 'Acoustic Instruments',
    body: 'Between 1962 and 1994, station keepers logged barometric pressure twice an hour using mercury syphons and brass clockwork drums. Even after automated satellite uplinks arrived, the ink-trace paper rolls remained the gold standard for calibrating pressure spikes.',
  },
  {
    id: 'ch-3',
    num: '03',
    label: 'Midnight Watch',
    body: 'During December equinox tides, the timber plank walkway between the main house and generator shed requires storm lines strung at chest height. Inside, the radio room stays warm with cedar kindling and the low hum of shortwave weather faxes.',
  },
  {
    id: 'ch-4',
    num: '04',
    label: 'Archival Horizon',
    body: 'Climate modelers now treat these uninterrupted sixty-year cliff records as irreplaceable baseline anchors. Every handwritten margin note about fog density or gull migration turns out to corroborate sea-surface temperature shifts measured decades later.',
  },
];

export function BlogSingle3() {
  const [activeChapter, setActiveChapter] = useState(0);
  const progressPct = Math.round(((activeChapter + 1) / LONGFORM_CHAPTERS.length) * 100);

  return (
    <article className="bg-stone-50 text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Longform Dispatch · North Atlantic
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-stone-900 [text-wrap:balance]">
            Listening Posts Along the North Atlantic Ridge
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Soren Halvorsen</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-09-28">September 28, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">11 min read</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Progress Rail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 bg-white border border-stone-200 p-6">
            <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-stone-700">
                Reading Progress
              </span>
              <span className="font-mono tabular-nums text-stone-900">{progressPct}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 overflow-hidden mb-6">
              <div
                className="h-full bg-stone-900 transition-transform duration-200 origin-left"
                style={{ transform: `scaleX(${progressPct / 100})` }}
              />
            </div>

            <nav aria-label="Article chapters" className="space-y-1">
              {LONGFORM_CHAPTERS.map((ch, idx) => {
                const isActive = idx === activeChapter;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setActiveChapter(idx);
                      document.getElementById(`ls-${ch.id}`)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                      });
                    }}
                    className={`w-full text-left px-3 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                      isActive
                        ? 'bg-stone-900 text-white font-medium'
                        : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                  >
                    <span className="font-mono text-xs tabular-nums opacity-75">{ch.num}</span>
                    <span className="truncate">{ch.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Body Column */}
          <div className="lg:col-span-8 space-y-10">
            <FigureFrame
              src={SPECIMEN_IMAGES.coastalStation}
              alt="Nordic coastal meteorological station perched on black basalt sea cliffs"
              caption="Station 04 above the Faroe shelf. Wind masts are guyed directly into volcanic bedrock."
            />

            <div className="space-y-10">
              {LONGFORM_CHAPTERS.map((ch, idx) => (
                <section
                  key={ch.id}
                  id={`ls-${ch.id}`}
                  onMouseEnter={() => setActiveChapter(idx)}
                  className="pt-8 border-t border-stone-200"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-xs tabular-nums text-stone-400">
                      Chapter {ch.num}
                    </span>
                    <h2 className="font-serif text-2xl font-semibold text-stone-900">
                      {ch.label}
                    </h2>
                  </div>
                  <p className="text-base sm:text-[17px] leading-[1.8] text-stone-700">
                    {ch.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * 4. Two-Column Split
 * Sticky TOC left, body right.
 */
const SPLIT_SECTIONS = [
  {
    id: 'kiln-geometry',
    title: '1. Chamber Geometry & Draft',
    text: 'A cross-draft catenary arch kiln pulls flame horizontally across stacked saggars before dropping into the flue bag wall. Because hot gases naturally hug the crown, tight arch curvature prevents cold dead zones near the front spyhole.',
  },
  {
    id: 'refractory-brick',
    title: '2. Insulating Firebrick Mass',
    text: 'Soft K26 insulating brick stores a fraction of the thermal energy required by dense hardbrick. For a studio firing twice a month to Cone 10 reduction, lighter walls shave four hours off the climb and protect delicate celadon shoulders.',
  },
  {
    id: 'damper-discipline',
    title: '3. Damper & Atmosphere Control',
    text: 'Sliding a cordierite damper slab by three millimeters alters back-pressure across the entire stacking chamber. Potters read flame lick at the upper peephole rather than relying solely on digital thermocouples.',
  },
  {
    id: 'cooling-curves',
    title: '4. Controlled Slow Cooling',
    text: 'Between 1050°C and 800°C, iron-saturated glazes grow micro-crystals if held on a gentle ramp. Clamping every air port with clay wadding turns a chaotic wood-ash firing into a repeatable satin finish.',
  },
];

export function BlogSingle4() {
  const [selectedSection, setSelectedSection] = useState(SPLIT_SECTIONS[0].id);

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="pb-10 border-b border-stone-200 mb-12">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
            Craft Engineering · Workshop Notes
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 max-w-3xl [text-wrap:balance]">
            Designing Kilns for Small-Batch Stoneware
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Haruki Sato</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-02">November 2, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">7 min read</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky TOC */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-xs uppercase tracking-[0.16em] font-semibold text-stone-500 mb-4">
              Table of Contents
            </h2>
            <nav aria-label="Kiln design sections" className="border-t border-stone-200">
              {SPLIT_SECTIONS.map((sec) => {
                const active = selectedSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => {
                      setSelectedSection(sec.id);
                      document.getElementById(`split-${sec.id}`)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                      });
                    }}
                    className={`w-full text-left py-3.5 px-3 border-b border-stone-200 text-sm transition-colors flex items-center justify-between gap-2 ${
                      active
                        ? 'font-semibold text-stone-900 bg-stone-50'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50/50'
                    }`}
                  >
                    <span>{sec.title}</span>
                    {active && (
                      <span className="text-xs font-mono text-stone-500 shrink-0">Active</span>
                    )}
                  </button>
                );
              })}
            </nav>
            <div className="mt-6 p-4 bg-stone-50 border border-stone-200 text-xs text-stone-600 leading-relaxed">
              <strong className="block text-stone-900 mb-1">Workshop Spec</strong>
              Target firing cone: Cone 10 (1305°C) · Chamber volume: 18 cu ft · Fuel: Propane Venturi.
            </div>
          </aside>

          {/* Right Body */}
          <div className="lg:col-span-8 space-y-8">
            <FigureFrame
              src={SPECIMEN_IMAGES.ceramicStudio}
              alt="Stoneware vessels drying on cedar shelves inside a ceramic studio"
              caption="Greenware bowls awaiting bisque loading beside raw Shino and Tenmoku glaze buckets."
              aspectClassName="aspect-[16/10]"
            />

            <div className="space-y-8">
              {SPLIT_SECTIONS.map((sec) => (
                <section
                  key={sec.id}
                  id={`split-${sec.id}`}
                  onMouseEnter={() => setSelectedSection(sec.id)}
                  className="space-y-3"
                >
                  <h2 className="font-serif text-2xl font-semibold text-stone-900">
                    {sec.title}
                  </h2>
                  <p className="text-base leading-[1.8] text-stone-700">{sec.text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * 5. Centered Hero-Header Article
 * Title/meta/lede over soft gradient.
 */
export function BlogSingle5() {
  return (
    <article className="bg-white text-stone-900 pb-20">
      <header className="bg-gradient-to-b from-stone-200/80 via-stone-100/70 to-white py-16 sm:py-24 px-6 border-b border-stone-200/70">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-600 font-medium">
            Optics &amp; Field Craft
          </p>
          <h1 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
            Why Mechanical Shutters Still Outlast Their Batteries
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A brass escapement spring stored in a drawer for forty years wakes up on the first wind. Few silicon boards can make the same promise.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Miriam Al-Khatib</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-08">October 8, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">5 min read</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 -mt-6">
        <FigureFrame
          src={SPECIMEN_IMAGES.rangefinderDesk}
          alt="Mechanical rangefinder camera beside field notebook and brass calipers"
          caption="A 1968 cloth-curtain rangefinder resting beside hand-written exposure logs and brass calipers."
          aspectClassName="aspect-[16/10]"
          className="mb-12"
        />

        <div className="max-w-[65ch] mx-auto space-y-6 text-base sm:text-[17px] leading-[1.8] text-stone-700">
          <p>
            Open the top plate of a purely mechanical rangefinder and you are looking at watchmaking scaled up for brass thumbs. Tiny ruby bearings, hairsprings, and stepped gear trains govern speeds from one full second down to a thousandth—entirely without voltage.
          </p>
          <p>
            When cold weather drains lithium cells on high-altitude assignments, electronic shutters lock cleanly to preserve their circuits. A spring-driven focal-plane shutter may drift by fifteen percent at minus twenty Celsius, yet it still opens, exposes the frame, and winds cleanly to the next perforation.
          </p>
          <p>
            Repairability follows from visibility. A trained technician with a jeweler’s loupe, watch oil, and a collimator can diagnose sluggish slow speeds in ten minutes. Every fault announces itself acoustically before it ever ruins a roll.
          </p>
          <p>
            We rarely ask tools to remain serviceable across three generations anymore. Keeping one camera that asks nothing more than dry air and an occasional turn of the wind lever quietly resets what durability means.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 6. Cover-Story
 * Fullscreen image + bottom-anchored headline.
 */
export function BlogSingle6() {
  return (
    <article className="bg-stone-950 text-stone-100">
      <div className="relative w-full min-h-[540px] sm:min-h-[640px] flex items-end overflow-hidden">
        <img
          src={SPECIMEN_IMAGES.coastalStation}
          alt="Weather station perched high on dark cliff above the sea"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/20"
          aria-hidden="true"
        />
        <header className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16 pt-28">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-300 font-medium">
            Cover Story · Maritime Dispatches
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.06] text-white max-w-3xl [text-wrap:balance]">
            Storm Watch at Cape Wrath Observatory
          </h1>
          <p className="mt-4 text-base sm:text-xl text-stone-200 max-w-2xl leading-relaxed">
            Three weeks inside Britain’s most isolated headland station as autumn low-pressure systems sweep off the Hebridean shelf.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-300">
            <span className="font-semibold text-white">Alistair MacLeod</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-05">November 5, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">9 min read</span>
          </div>
        </header>
      </div>

      <div className="bg-[#FBF9F5] text-stone-900 py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6 font-serif text-[17px] leading-[1.82] text-stone-800">
          <p>
            The supply track across the peat bog takes ninety minutes on foot when the wind stays below Force 6. Above Force 8, even the tracked hill vehicle stays parked behind the turf wall, and observers communicate with the mainland solely by VHF relay.
          </p>
          <p>
            Every three hours on the synoptic clock, someone steps out past the storm porch with a notebook clipped beneath a waterproof hood. Visibility is judged against familiar sea stacks four and seven miles offshore; cloud base is read against the headland lighthouse lantern.
          </p>
          <p>
            Inside the timber annex, brass barographs scratch purple ink along weekly drums. The building shudders slightly when gusts cross sixty knots, then settles back into the rhythm of boiling kettles and Morse weather beacons.
          </p>
          <p>
            By the end of November, daylight shrinks to five slate-gray hours. Yet the view from the observation cupola remains oddly theatrical—a ring of white water meeting unbroken sky at every compass bearing.
          </p>
        </div>
      </div>
    </article>
  );
}
