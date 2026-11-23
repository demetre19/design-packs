import { useState } from 'react';
import { SPECIMEN_IMAGES } from '../../utils/specimenCatalog';
import { FigureFrame } from '../FigureFrame';

/**
 * 13. Interview / Q&A Format
 * Alternating speaker blocks.
 */
const INTERVIEW_TURNS = [
  {
    speaker: 'Rachel Cho',
    role: 'Interviewer',
    isHost: true,
    text: 'You spent thirty years grinding double-Gauss prime lenses in Wetzlar before opening an independent optical repair bench. What breaks first in modern autofocus barrels compared to vintage brass helicoids?',
  },
  {
    speaker: 'Dieter Hoffmann',
    role: 'Optical Engineer',
    isHost: false,
    text: 'Plastic cam followers and ribbon flex cables. On a 1965 rangefinder lens, the focusing ring glides on opposing brass-and-aluminum threads lubricated with mineral grease. Even when grease hardens into wax after forty years, we clean the threads ultrasonically and restore factory torque in an afternoon.',
  },
  {
    speaker: 'Rachel Cho',
    role: 'Interviewer',
    isHost: true,
    text: 'Do photographers overestimate optical element separation, or is alignment still the silent culprit behind soft corners?',
  },
  {
    speaker: 'Dieter Hoffmann',
    role: 'Optical Engineer',
    isHost: false,
    text: 'Almost always decentering after a minor drop. A single brass retaining ring backed out by three hundredths of a millimeter shifts coma across half the frame. Yet people blame the glass coating before ever putting the lens on an autocollimator.',
  },
];

export function BlogSingle13() {
  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-10 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Q&amp;A Conversation · Optical Engineering
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
            In Conversation with Optical Engineer Dieter Hoffmann
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
            Why brass helicoids age gracefully, how autocollimators reveal hidden frame tilt, and why repairable mechanics outlive firmware.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Interview by Rachel Cho</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-25">October 25, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">9 min read</span>
          </div>
        </header>

        <FigureFrame
          src={SPECIMEN_IMAGES.rangefinderDesk}
          alt="Mechanical camera, calipers, and linen notebook on optical workbench"
          caption="Dieter Hoffmann’s bench calipers beside a freshly collimated 50mm f/2 prime."
          className="mb-12"
        />

        <div className="space-y-6">
          {INTERVIEW_TURNS.map((turn, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 border ${
                turn.isHost
                  ? 'bg-stone-50 border-stone-200'
                  : 'bg-white border-stone-300'
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-900">
                  {turn.speaker}
                </span>
                <span className="text-xs text-stone-500">{turn.role}</span>
              </div>
              <p
                className={
                  turn.isHost
                    ? 'font-sans text-base font-medium leading-relaxed text-stone-900'
                    : 'font-serif text-[17px] leading-[1.8] text-stone-700'
                }
              >
                {turn.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * 14. Case-Study Format
 * Challenge/approach/results blocks + stat callouts.
 */
export function BlogSingle14() {
  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="pb-10 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.16em] text-emerald-900 font-semibold">
            Conservation Case Study · Structural Glazing
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-stone-900 max-w-3xl [text-wrap:balance]">
            Restoring the 1894 Kew Palm House Glazing Grid
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Arthur Pendelton</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-03">October 3, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>

        {/* Stat Callouts */}
        <section
          aria-label="Key project outcomes"
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-12"
        >
          <div className="bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-stone-500">Winter Heat Loss</p>
            <p className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tabular-nums text-stone-900">
              -34%
            </p>
            <p className="mt-1 text-xs text-stone-600">Measured over 2 heating seasons</p>
          </div>
          <div className="bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-stone-500">Original Iron Retained</p>
            <p className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tabular-nums text-stone-900">
              96.4%
            </p>
            <p className="mt-1 text-xs text-stone-600">Non-destructive ultrasonic splice repairs</p>
          </div>
          <div className="bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-stone-500">Hand-Bent Panes</p>
            <p className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tabular-nums text-stone-900">
              4,180
            </p>
            <p className="mt-1 text-xs text-stone-600">Matched to 1894 crown thickness</p>
          </div>
        </section>

        <FigureFrame
          src={SPECIMEN_IMAGES.botanicalGlasshouse}
          alt="Restored Victorian cast-iron glasshouse dome over tropical ferns"
          caption="Completed east nave glazing bays after linseed putty curing and cast-iron primer restoration."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white border border-stone-200 p-6">
            <p className="font-mono text-xs text-stone-400 mb-2">01 / CHALLENGE</p>
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-3">
              Galvanic Corrosion &amp; Putty Failure
            </h2>
            <p className="text-sm leading-relaxed text-stone-600">
              Decades of high-humidity misting fractured brittle 1970s cement repairs, allowing condensation to pool along wrought-iron glazing purlins and crack over 600 curved panes each winter.
            </p>
          </section>

          <section className="bg-white border border-stone-200 p-6">
            <p className="font-mono text-xs text-stone-400 mb-2">02 / APPROACH</p>
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-3">
              Flexible Linseed &amp; Brass Sprigs
            </h2>
            <p className="text-sm leading-relaxed text-stone-600">
              Craftsmen stripped oxidized flanges by dry-ice blasting, forged matching malleable iron splices where needed, and bedded curved crown glass into traditional raw-linseed putty pinned with brass sprigs.
            </p>
          </section>

          <section className="bg-white border border-stone-200 p-6">
            <p className="font-mono text-xs text-stone-400 mb-2">03 / RESULTS</p>
            <h2 className="font-serif text-xl font-semibold text-stone-900 mb-3">
              Sealed Envelope, Living Canopy
            </h2>
            <p className="text-sm leading-relaxed text-stone-600">
              Boiler fuel consumption fell by a third without relocating a single heritage tree fern, and roof vent actuators now modulate interior humidity within a tight 4% tolerance band.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}

/**
 * 15. Changelog / Release-Notes Format
 * Version blocks, filterable tag chips.
 */
type ChangeType = 'Added' | 'Changed' | 'Fixed';

interface ChangelogEntry {
  version: string;
  date: string;
  summary: string;
  items: { type: ChangeType; text: string }[];
}

const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    version: 'v4.2.0',
    date: '2026-11-12',
    summary: 'Optical kerning tables, SVG figure export, and deterministic hyphenation across CJK-Latin mixed paragraphs.',
    items: [
      { type: 'Added', text: 'Automatic optical margin alignment for hanging quotation marks in Fraunces and Source Serif.' },
      { type: 'Added', text: 'Vector-preserving PDF/A export pipeline for academic footnotes and vector diagrams.' },
      { type: 'Changed', text: 'Reduced baseline grid rounding drift on fractional 1.75x line-height calculations.' },
      { type: 'Fixed', text: 'Resolved overlapping superscript indices when two citations share the final word of a line.' },
    ],
  },
  {
    version: 'v4.1.4',
    date: '2026-10-28',
    summary: 'Maintenance release stabilizing print stylesheet page breaks and figure caption orphan prevention.',
    items: [
      { type: 'Changed', text: 'Widened default print margins from 18mm to 22mm on A4 academic templates.' },
      { type: 'Fixed', text: 'Prevented figcaption elements from splitting across page boundaries during longform PDF renders.' },
    ],
  },
];

export function BlogSingle15() {
  const [filterType, setFilterType] = useState<'All' | ChangeType>('All');

  const tagStyle = (t: ChangeType) => {
    if (t === 'Added') return 'bg-emerald-50 text-emerald-900 border-emerald-200';
    if (t === 'Changed') return 'bg-amber-50 text-amber-900 border-amber-200';
    return 'bg-sky-50 text-sky-900 border-sky-200';
  };

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500">
            Release Notes · Editorial Typesetting Engine
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Folio Engine 4.2: Optical Kerning &amp; Export Overhaul
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Release Engineering Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-12">November 12, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">4 min read</span>
          </div>
        </header>

        <div className="space-y-4 text-base leading-[1.75] text-stone-700 mb-8">
          <p>
            Version 4.2 introduces a rewritten line-breaking pass tuned specifically for mixed serif prose and technical inline annotations. Rather than snapping every glyph to integer pixel boundaries on high-DPI displays, sub-pixel optical kerning preserves classic book proportions across screen sizes.
          </p>
          <p>
            This release also marks the graduation of our standalone SVG figure serializer, allowing numbered charts and architectural plates to embed cleanly inside archival exports without raster compression artifacts.
          </p>
        </div>

        {/* Interactive Filter Chips */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Filter Release Entries
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Added', 'Changed', 'Fixed'] as const).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setFilterType(tag)}
                className={`px-3 py-1.5 text-xs font-mono border transition-colors whitespace-nowrap shrink-0 ${
                  filterType === tag
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {CHANGELOG_DATA.map((release) => {
            const visibleItems = release.items.filter(
              (item) => filterType === 'All' || item.type === filterType
            );
            return (
              <section key={release.version} className="border border-stone-200 bg-stone-50/40 p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-stone-200 mb-5">
                  <h2 className="font-mono text-xl font-semibold text-stone-900 tabular-nums">
                    {release.version}
                  </h2>
                  <time className="font-mono text-xs text-stone-500 tabular-nums">
                    {release.date}
                  </time>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed mb-5">{release.summary}</p>
                <ul className="space-y-3">
                  {visibleItems.map((entry, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                      <span
                        className={`font-mono text-[11px] font-medium px-2 py-0.5 border shrink-0 mt-0.5 ${tagStyle(
                          entry.type
                        )}`}
                      >
                        {entry.type}
                      </span>
                      <span className="leading-relaxed">{entry.text}</span>
                    </li>
                  ))}
                  {visibleItems.length === 0 && (
                    <li className="text-xs text-stone-500 italic">
                      No entries match the selected filter in {release.version}.
                    </li>
                  )}
                </ul>
              </section>
            );
          })}
        </div>

        {/* SVG Figure */}
        <figure className="mt-10 p-5 bg-stone-50 border border-stone-200">
          <svg
            viewBox="0 0 640 120"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram showing optical margin alignment kerning delta before and after v4.2"
          >
            <rect x="20" y="18" width="275" height="84" fill="#ffffff" stroke="#d6d3d1" />
            <text x="36" y="42" fontSize="11" fill="#78716c" fontFamily="monospace">
              v4.1 Legacy Grid
            </text>
            <line x1="56" y1="54" x2="56" y2="88" stroke="#e11d48" strokeDasharray="3 2" />
            <text x="58" y="74" fontSize="18" fill="#1c1917" fontFamily="serif">
              “Typography aligns”
            </text>

            <rect x="345" y="18" width="275" height="84" fill="#ffffff" stroke="#1c1917" />
            <text x="361" y="42" fontSize="11" fill="#1c1917" fontFamily="monospace">
              v4.2 Optical Hanging Punctuation
            </text>
            <line x1="381" y1="54" x2="381" y2="88" stroke="#059669" strokeDasharray="3 2" />
            <text x="373" y="74" fontSize="18" fill="#1c1917" fontFamily="serif">
              “Typography aligns”
            </text>
          </svg>
          <figcaption className="mt-2.5 text-xs text-stone-500">
            Fig. 1 — Sub-pixel hanging quote offset introduced in Folio Engine 4.2.
          </figcaption>
        </figure>
      </div>
    </article>
  );
}

/**
 * 16. Photojournalism Spread
 * Caption-led, image-dominant.
 */
export function BlogSingle16() {
  return (
    <article className="bg-stone-100 text-stone-900 py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-stone-300 mb-8 items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-600 font-medium">
              Photojournalism Spread · North Atlantic
            </p>
            <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
              Six Winters on the Faroe Sea Clifftop
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right text-xs text-stone-600 space-y-1">
            <p className="font-semibold text-stone-900">Photographs by Freja Lind</p>
            <p>October 6, 2026 · 6 min read</p>
          </div>
        </header>

        {/* Dominant Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-9">
            <FigureFrame
              src={SPECIMEN_IMAGES.coastalStation}
              alt="Monochrome documentary photograph of observer standing at edge of basalt cliff weather station"
              aspectClassName="aspect-[16/10]"
            />
          </div>
          <aside className="lg:col-span-3 space-y-4 pt-2 border-t lg:border-t-0 lg:border-l border-stone-300 lg:pl-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-stone-500">
              Plate 01 · Exposure Notes
            </p>
            <p className="font-serif italic text-base leading-relaxed text-stone-800">
              “Chief observer Henrik Olsen checks horizontal sea-visibility markers before the 08:00 synoptic radio broadcast.”
            </p>
            <dl className="text-xs text-stone-600 space-y-1.5 pt-3 border-t border-stone-200 font-mono tabular-nums">
              <div className="flex justify-between">
                <dt>Lens</dt>
                <dd className="text-stone-900">35mm f/2</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shutter</dt>
                <dd className="text-stone-900">1/250 s</dd>
              </div>
              <div className="flex justify-between">
                <dt>Film</dt>
                <dd className="text-stone-900">Tri-X 400</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-stone-300 text-sm sm:text-[15.5px] leading-[1.78] text-stone-700">
          <p>
            For six consecutive winters, Freja Lind boarded the fortnightly supply tender out of Torshavn with four bricks of monochrome film and a mechanical rangefinder sealed against salt spray.
          </p>
          <p>
            Up on the basalt ridge, wooden boardwalks link the bunkhouse to the anemometer tower. Gales routinely push horizontal sleet across the plateau at forty knots, making tripod legs vibrate unless weighed down with canvas sandbags.
          </p>
          <p>
            What emerges across sixty contact sheets is not drama, but quiet choreography—coffee thermos refills at midnight, inked barometer charts, and two figures watching the horizon line clear after squalls.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 17. Tabbed Long-Article
 * Sections in interactive tabs.
 */
const TABBED_SECTIONS = [
  {
    id: 'rangefinder',
    label: '01. Optical Coupling',
    heading: 'Coincident Prism & Brass Cam',
    paragraphs: [
      'Inside the top deck of a classic 35mm rangefinder sits a miniature surveyor’s transit. As the lens helicoid turns, a beveled brass cam roller pushes a spring-loaded arm that rotates a front-surface mirror across a fixed optical baseline.',
      'In the viewfinder, two split images converge into one sharp silhouette the instant focus locks on the film plane. Unlike ground-glass SLR viewing, accuracy never depends on lens aperture brightness.',
    ],
  },
  {
    id: 'shutter',
    label: '02. Cloth Curtain Timing',
    heading: 'Two Silk Curtains Across 36 Millimeters',
    paragraphs: [
      'A horizontal focal-plane shutter never exposes the entire negative simultaneously at fast speeds. Instead, an opening rubberized silk curtain sprints across the gate followed milliseconds later by a closing curtain.',
      'Higher shutter speeds simply narrow the moving slit between curtains—requiring meticulously matched drum spring tensions so exposure remains uniform from left edge to right edge.',
    ],
  },
  {
    id: 'calibration',
    label: '03. Field Calibration',
    heading: 'Infinity Alignment on Distant Horizons',
    paragraphs: [
      'Even modest luggage impacts can knock the horizontal coincidence prism out of square. Technicians verify infinity alignment against an astronomical target or a distant radio mast at least one kilometer away.',
      'A half-turn on the eccentric screw hidden beneath the logo medallion restores sub-millimeter rangefinder coupling without disassembling the upper chassis.',
    ],
  },
];

export function BlogSingle17() {
  const [activeTab, setActiveTab] = useState(TABBED_SECTIONS[0].id);
  const current = TABBED_SECTIONS.find((t) => t.id === activeTab) || TABBED_SECTIONS[0];

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500 font-medium">
            Technical Teardown · Interactive Sections
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Anatomy of a 35mm Rangefinder Assembly
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Martin Castellanos</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">9 min read</span>
          </div>
        </header>

        <FigureFrame
          src={SPECIMEN_IMAGES.rangefinderDesk}
          alt="Mechanical rangefinder camera laid out on wooden bench with calipers"
          caption="Top plate view showing viewfinder, brightline illuminator window, and accessory shoe."
          aspectClassName="aspect-[16/9]"
          className="mb-8"
        />

        {/* Interactive Tabs */}
        <div
          role="tablist"
          aria-label="Article sections"
          className="flex flex-wrap gap-1 p-1 bg-stone-100 border border-stone-200 mb-8"
        >
          {TABBED_SECTIONS.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  selected
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <section
          role="tabpanel"
          className="bg-stone-50/70 border border-stone-200 p-7 sm:p-10 space-y-5"
        >
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
            {current.heading}
          </h2>
          {current.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-[1.8] text-stone-700">
              {p}
            </p>
          ))}
          <p className="text-xs text-stone-500 pt-4 border-t border-stone-200">
            Select the tabs above to inspect each mechanical subsystem of the assembly.
          </p>
        </section>
      </div>
    </article>
  );
}

/**
 * 18. Timeline Article
 * Events on vertical line.
 */
const TIMELINE_EVENTS = [
  {
    year: '1924',
    title: 'First Timber-Shuttered Sea Breakwaters',
    body: 'Municipal harbor engineers along western Norway adopt interlocking spruce planking as sacrificial formwork against tidal surge during curing.',
  },
  {
    year: '1958',
    title: 'Pozzolanic Marine Cement Blends',
    body: 'Fly-ash and volcanic pozzolan additives cut chloride ion penetration by half, extending steel rebar lifespan inside exposed coastal piers.',
  },
  {
    year: '1979',
    title: 'Board-Formed Headland Shelters',
    body: 'Coastal trail architects stop plastering structural concrete, celebrating rough pine relief as an intentional dialogue with wind-swept cliffs.',
  },
  {
    year: '2026',
    title: 'Low-Carbon Geopolymer Trials',
    body: 'Contemporary coastal pavilions pair reclaimed basalt aggregate with zero-clinker binders cured under natural mist.',
  },
];

export function BlogSingle18() {
  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-10 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Chronology · Structural History
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            One Hundred Years of Coastal Concrete Engineering
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Dr. Ingrid Solberg</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-09-21">September 21, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>

        <FigureFrame
          src={SPECIMEN_IMAGES.concretePavilion}
          alt="Board-formed concrete pavilion overlooking misty pines and sea"
          caption="Modern headland pavilion incorporating century-old board-forming lessons."
          className="mb-12"
        />

        <div className="relative pl-8 sm:pl-10 space-y-10 before:content-[''] before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-stone-300">
          {TIMELINE_EVENTS.map((ev) => (
            <section key={ev.year} className="relative">
              <span
                className="absolute -left-[27px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-stone-900 ring-4 ring-[#FBF9F5]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs font-semibold tabular-nums text-amber-900 tracking-wider">
                {ev.year}
              </span>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-stone-900">
                {ev.title}
              </h2>
              <p className="mt-2 text-base leading-[1.78] text-stone-700 max-w-2xl">
                {ev.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
