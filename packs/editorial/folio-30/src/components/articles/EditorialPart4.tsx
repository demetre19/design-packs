import { useState } from 'react';
import { Check, Copy, Pause, Play, Volume2 } from 'lucide-react';
import { SPECIMEN_IMAGES } from '../../utils/specimenCatalog';
import { FigureFrame } from '../FigureFrame';

/**
 * 19. Quote-Led Feature
 * Giant pull quote hero + body.
 */
export function BlogSingle19() {
  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-24 px-6">
      <header className="max-w-4xl mx-auto pb-12 border-b border-stone-300">
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">
          On Patience &amp; Craft · Ceramics Essay
        </p>
        <blockquote className="font-serif italic text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-stone-900 [text-wrap:balance]">
          “A wood kiln never repeats the same cup twice; it teaches you to recognize luck without trying to counterfeit it.”
        </blockquote>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-sans text-sm font-semibold uppercase tracking-widest text-stone-900">
              On Patience, Clay, and Unrepeatable Firings
            </h1>
            <p className="mt-1 text-xs text-stone-500">
              David Morrissey · October 29, 2026 · 5 min read
            </p>
          </div>
          <span className="font-serif italic text-sm text-stone-500">
            Workshop Reflections
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        <div className="lg:col-span-6 space-y-5 font-serif text-[17px] leading-[1.82] text-stone-800">
          <p>
            After four days of stoking split red pine around the clock, opening an unbricked kiln door feels less like inspecting inventory and more like unearthing a minor archaeological dig. Ash carried on the draft has melted across exposed shoulders in emerald streaks no brush could imitate.
          </p>
          <p>
            Beginners often ask how to lock down a favorite glaze effect so every dinner plate matches a catalog photograph. Veteran potters eventually smile and point toward electric kilns for uniformity, reserving wood and gas reduction for surprise.
          </p>
          <p>
            When variation becomes a feature rather than a manufacturing defect, studio tempo changes immediately. You spend less time fussing over micrometer wall thickness and more time listening to how clay sits naturally in the palm.
          </p>
        </div>

        <div className="lg:col-span-6">
          <FigureFrame
            src={SPECIMEN_IMAGES.ceramicStudio}
            alt="Hand-thrown ceramic cups and bottles drying on weathered wood shelves"
            caption="Unfired stoneware forms resting quietly on cedar planks before a five-day firing cycle."
            aspectClassName="aspect-[4/3]"
          />
        </div>
      </div>
    </article>
  );
}

/**
 * 20. Minimal Typography-Only
 * No photographic images, pure type hierarchy + bespoke typographic proportion figure.
 */
export function BlogSingle20() {
  return (
    <article className="bg-white text-stone-900 py-16 sm:py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="pb-10 border-b border-stone-900">
          <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-6">
            <span>ESSAY NO. 20</span>
            <span>PURE TYPOGRAPHY</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.06] text-stone-900 [text-wrap:balance]">
            Against Ornamental Noise in Digital Reading
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Beatrice Vance</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-10">November 10, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">5 min read</span>
          </div>
        </header>

        <div className="mt-10 space-y-6 font-serif text-[18px] leading-[1.84] text-stone-800">
          <p>
            For five centuries, printers solved reader fatigue with three quiet tools: generous margins, consistent measure, and deliberate contrast between display and book faces. No sidebar widgets or floating badges were required to hold a reader’s attention across three hundred pages.
          </p>
          <p>
            On screens, designers frequently mistake decoration for clarity. When every paragraph competes against tinted callout boxes, sticky banners, and oversized thumbnails, the eye loses its horizontal anchor and skips diagonally down the page instead of reading sequentially.
          </p>

          {/* Pure Typographic Specimen Diagram Figure (Zero Photographs) */}
          <figure className="my-10 py-6 border-y border-stone-200">
            <svg
              viewBox="0 0 600 160"
              className="w-full h-auto"
              role="img"
              aria-label="Typographic proportion diagram illustrating 65-character reading measure and 1.8x line height ratio"
            >
              <rect x="20" y="16" width="560" height="128" fill="#fafaf9" stroke="#e7e5e4" />
              <line x1="110" y1="16" x2="110" y2="144" stroke="#d6d3d1" strokeDasharray="3 3" />
              <line x1="490" y1="16" x2="490" y2="144" stroke="#d6d3d1" strokeDasharray="3 3" />
              <text x="128" y="54" fontSize="22" fontFamily="serif" fill="#1c1917">
                Measure = 65 characters
              </text>
              <line x1="128" y1="68" x2="472" y2="68" stroke="#1c1917" strokeWidth="1" />
              <text x="128" y="96" fontSize="14" fontFamily="serif" fill="#57534e">
                Leading 1.80× keeps saccadic eye returns effortless across lines.
              </text>
              <text x="32" y="84" fontSize="10" fontFamily="monospace" fill="#78716c">
                Margin
              </text>
              <text x="506" y="84" fontSize="10" fontFamily="monospace" fill="#78716c">
                Margin
              </text>
            </svg>
            <figcaption className="mt-3 font-sans text-xs text-stone-500">
              Fig. 1 — Classic book-block proportion ratio: 65ch column flanked by equal breathing margins.
            </figcaption>
          </figure>

          <p>
            Stripping away photography forces every typographic decision into the open. Weight, tracking, line spacing, and paragraph cadence carry the entire visual hierarchy on their own shoulders.
          </p>
          <p>
            When text feels calm, readers linger. Simplicity is rarely empty; it is simply space cleared for thought.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 21. Dark-Mode Feature
 * Inverse obsidian band, syntax code block with working copy button.
 */
const PARSER_SNIPPET = `export function decodeBuoyFrame(buf: Uint8Array) {
  if (buf.byteLength < 12) throw new RangeError('Frame truncated');
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  return {
    stationId: view.getUint16(0, false),
    pressureHpa: view.getUint16(2, false) / 10,
    waveHeightCm: view.getUint16(4, false),
    tempCelsius: view.getInt16(6, false) / 100,
  };
}`;

export function BlogSingle21() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(PARSER_SNIPPET).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="bg-stone-950 text-stone-100 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-10 border-b border-stone-800 mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-400">
            Systems Engineering · Embedded Telemetry
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-white [text-wrap:balance]">
            Zero-Allocation Telemetry Parsers for Weather Buoys
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-400">
            <span className="font-semibold text-stone-200">Kieran O’Connor</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-06">November 6, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">7 min read</span>
          </div>
        </header>

        <div className="space-y-6 text-base leading-[1.82] tracking-[0.005em] text-stone-300 max-w-3xl">
          <p>
            Offshore weather buoys transmit compact binary payloads over satellite links metered by the byte. Parsing millions of incoming 12-byte packets inside an ingestion worker can quickly saturate garbage collection if each frame allocates temporary slices or intermediate JSON strings.
          </p>
          <p>
            By wrapping incoming UDP datagrams directly in a reusable <code className="font-mono text-amber-300 text-sm">DataView</code> cursor, our ingestion node decodes big-endian pressure and swell telemetry without allocating heap buffers per frame.
          </p>
        </div>

        {/* Code Block */}
        <div className="my-9 border border-stone-800 bg-[#181816] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-800 bg-stone-900/70">
            <span className="font-mono text-xs text-stone-400">src/telemetry/decodeBuoyFrame.ts</span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-300 hover:text-white px-2.5 py-1 border border-stone-700 bg-stone-900 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-stone-200">
            <code>{PARSER_SNIPPET}</code>
          </pre>
        </div>

        <FigureFrame
          src={SPECIMEN_IMAGES.coastalStation}
          alt="Coastal weather monitoring station above North Atlantic swells"
          caption="Fig. 1 — Shore receiving station collecting 12-byte satellite frames from offshore buoys."
          dark
          className="my-10"
        />

        <div className="space-y-6 text-base leading-[1.82] tracking-[0.005em] text-stone-300 max-w-3xl">
          <p>
            During November winter gales, packet burst rates triple across North Sea stations. Eliminating heap churn shaved p99 ingestion latency from 14 milliseconds down to 0.4 milliseconds on a single worker core.
          </p>
          <p>
            Strict offset bounds checks at the entry of every decoder keep malformed transmissions isolated without crashing neighboring station streams.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 22. Podcast Show-Notes Format
 * Interactive audio card + clickable timestamp links.
 */
const PODCAST_CHAPTERS = [
  { time: '00:00', seconds: 0, title: 'Inside the 19th-century herbarium vaults' },
  { time: '08:45', seconds: 525, title: 'Pressed fern fronds as pre-industrial climate logs' },
  { time: '21:10', seconds: 1270, title: 'Why cast-iron conservatories preserve living cultivars' },
  { time: '34:20', seconds: 2060, title: 'Digitizing 140,000 handwritten botanical labels' },
];

export function BlogSingle22() {
  const [playing, setPlaying] = useState(false);
  const [currentSec, setCurrentSec] = useState(525);
  const totalSec = 2520; // 42:00

  const formatSec = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <article className="bg-stone-50 text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500 font-medium">
            Audio Dispatch &amp; Show Notes · Fieldwork Podcast
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Ep. 48: Why Botanical Archives Matter for Climate Baselines
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Hosted by Priya Nair</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-03">November 3, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">42 min listen · 5 min notes</span>
          </div>
        </header>

        {/* Interactive Audio Card */}
        <section
          aria-label="Podcast episode player"
          className="bg-stone-900 text-white p-6 sm:p-8 mb-10 border border-stone-800"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Pause episode' : 'Play episode'}
                className="w-12 h-12 flex items-center justify-center bg-white text-stone-900 hover:bg-stone-200 transition-colors shrink-0"
              >
                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div>
                <p className="font-mono text-xs text-stone-400">
                  EPISODE 48 · {playing ? 'PLAYING' : 'PAUSED'}
                </p>
                <p className="font-serif text-lg font-medium text-white mt-0.5">
                  Botanical Archives &amp; Climate Baselines
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs tabular-nums text-stone-300">
              <Volume2 className="w-4 h-4 text-stone-400" aria-hidden="true" />
              <span>
                {formatSec(currentSec)} / {formatSec(totalSec)}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <input
              type="range"
              aria-label="Episode playback scrubber"
              min={0}
              max={totalSec}
              value={currentSec}
              onChange={(e) => setCurrentSec(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          <div className="mt-5 pt-5 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PODCAST_CHAPTERS.map((ch) => {
              const active = Math.abs(currentSec - ch.seconds) < 120;
              return (
                <button
                  key={ch.time}
                  type="button"
                  onClick={() => {
                    setCurrentSec(ch.seconds);
                    setPlaying(true);
                  }}
                  className={`text-left px-3 py-2 text-xs flex items-center gap-3 border transition-colors ${
                    active
                      ? 'border-amber-400/60 bg-stone-800 text-white'
                      : 'border-stone-800 bg-stone-950/50 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-mono tabular-nums text-amber-300 shrink-0">
                    {ch.time}
                  </span>
                  <span className="truncate">{ch.title}</span>
                </button>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5 text-base leading-[1.8] text-stone-700">
            <p>
              In this episode, curator Dr. Eleanor Finch walks us past cedar herbarium cabinets holding pressed alpine specimens gathered in 1848. Stomatal pore density on century-old leaves gives atmospheric chemists a direct physical proxy for pre-industrial carbon levels.
            </p>
            <p>
              We also tour the restored palm conservatory to understand how living botanical collections complement dried archives. Maintaining living rootstocks preserves genetic resilience across seasons.
            </p>
            <p>
              Full reading list and specimen catalog references are linked in the timestamped chapter notes above.
            </p>
          </div>
          <div className="lg:col-span-5">
            <FigureFrame
              src={SPECIMEN_IMAGES.botanicalGlasshouse}
              alt="Sunlight streaming across ferns inside historic conservatory"
              caption="Recorded on location inside the North Conservatory fern wing."
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * 23. Report / Whitepaper Format
 * Abstract, key findings box, figure captions.
 */
export function BlogSingle23() {
  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b-2 border-stone-900 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-4">
            <span>Technical Whitepaper · NMI-2026-09</span>
            <span>Coastal Infrastructure Series</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-stone-900 [text-wrap:balance]">
            2026 Coastal Concrete Salt-Ingress Durability Assessment
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Nordic Materials Institute</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-01">October 1, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">12 min read</span>
          </div>
        </header>

        {/* Executive Abstract + Key Findings Box */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-6 bg-stone-50 border border-stone-200 p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-semibold text-stone-900 mb-3">
              Executive Abstract
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">
              Core samples drilled from 18 board-formed coastal structures built between 1974 and 2020 demonstrate that slag-blended Portland mixes maintain passivated reinforcement cover beyond fifty years when surface water-cement ratios remain below 0.42.
            </p>
          </div>
          <div className="lg:col-span-6 bg-stone-900 text-stone-100 p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest font-semibold text-amber-300 mb-3">
              Key Findings
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li className="flex justify-between gap-4 border-b border-stone-800 pb-1.5">
                <span className="text-stone-300">Mean chloride depth (50 yr)</span>
                <span className="font-mono tabular-nums text-white">28.4 mm</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-stone-800 pb-1.5">
                <span className="text-stone-300">Recommended clear cover</span>
                <span className="font-mono tabular-nums text-white">65.0 mm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-stone-300">Slag blend spall reduction</span>
                <span className="font-mono tabular-nums text-white">58%</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Chart Figure */}
        <figure className="mb-10 p-6 bg-stone-50 border border-stone-200">
          <svg
            viewBox="0 0 640 180"
            className="w-full h-auto"
            role="img"
            aria-label="Bar chart showing chloride penetration depth across three concrete binder formulations"
          >
            <text x="20" y="34" fontSize="12" fill="#1c1917" fontFamily="sans-serif" fontWeight="600">
              Chloride Ingress Depth at 30 Years (mm — Lower is Better)
            </text>
            <text x="20" y="74" fontSize="11" fill="#57534e" fontFamily="monospace">
              OPC Standard (0.50 w/c)
            </text>
            <rect x="210" y="60" width="340" height="18" fill="#a8a29e" />
            <text x="558" y="74" fontSize="11" fill="#1c1917" fontFamily="monospace">
              44.2 mm
            </text>

            <text x="20" y="112" fontSize="11" fill="#57534e" fontFamily="monospace">
              Fly-Ash 25% (0.44 w/c)
            </text>
            <rect x="210" y="98" width="230" height="18" fill="#57534e" />
            <text x="448" y="112" fontSize="11" fill="#1c1917" fontFamily="monospace">
              29.8 mm
            </text>

            <text x="20" y="150" fontSize="11" fill="#1c1917" fontFamily="monospace" fontWeight="600">
              Slag Blend 40% (0.40 w/c)
            </text>
            <rect x="210" y="136" width="145" height="18" fill="#1c1917" />
            <text x="363" y="150" fontSize="11" fill="#1c1917" fontFamily="monospace" fontWeight="600">
              18.6 mm
            </text>
          </svg>
          <figcaption className="mt-3 text-xs text-stone-600">
            <strong className="text-stone-900">Fig. 2 — Laboratory Core Profile.</strong> Chloride titration profiles sampled 4 meters above mean high tide.
          </figcaption>
        </figure>

        <div className="space-y-5 text-base leading-[1.8] text-stone-700">
          <p>
            Early coastal concrete specifications treated board-formed surface relief purely as an aesthetic finish, overlooking how rough Douglas fir grain alters near-surface curing moisture. When planks are pre-wetted before placement, capillary suction drops sharply and the outer 5 mm hydrates into a dense skin.
          </p>
          <p>
            Conversely, dry formwork draws water out of the fresh paste, producing microscopic surface crazing that accelerates salt crystallization cycles during winter freeze-thaw weeks.
          </p>
          <p>
            Municipalities commissioning marine shelters through 2035 should mandate 40% ground granulated blast-furnace slag substitution coupled with wet-cured timber shuttering for minimum lifecycle maintenance.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 24. Listicle Format
 * Numbered item blocks with images.
 */
const WORKSHOP_ITEMS = [
  {
    num: '01',
    name: 'Japanese Oak Throwing Ribs',
    summary: 'Unvarnished hardwood ribs absorb slip moisture on the wheel while compressing clay platelets along interior bowl curves, preventing S-cracks during drying.',
    image: SPECIMEN_IMAGES.ceramicStudio,
    alt: 'Wooden pottery ribs beside unglazed stoneware vessels',
  },
  {
    num: '02',
    name: 'Analog Brass Vernier Calipers',
    summary: 'Zero batteries, crisp tenth-millimeter vernier etching, and enough heft to measure clay wall thickness or camera lens helicoid shims reliably.',
    image: SPECIMEN_IMAGES.rangefinderDesk,
    alt: 'Brass calipers resting on walnut bench next to camera',
  },
  {
    num: '03',
    name: 'Thread-Bound Heavyweight Field Logs',
    summary: '120gsm toothy cotton stock opens completely flat beside glaze buckets and survives damp workshop air without pages curling.',
    image: SPECIMEN_IMAGES.botanicalGlasshouse,
    alt: 'Botanical glasshouse interior inspiring field documentation',
  },
];

export function BlogSingle24() {
  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-10 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500 font-medium">
            Curated Listicle · Studio Essentials
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Five Workshop Tools That Earn Their Bench Space Every Day
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Samuel Brooks</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-17">October 17, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">6 min read</span>
          </div>
          <p className="mt-6 text-base leading-[1.78] text-stone-700 max-w-2xl">
            Most studio drawers fill slowly with single-purpose gadgets bought in a burst of optimism. After ten years at a shared bench, only a handful of unassuming hand tools remain within arm’s reach every morning.
          </p>
        </header>

        <div className="space-y-12">
          {WORKSHOP_ITEMS.map((item) => (
            <section
              key={item.num}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center pb-10 border-b border-stone-200 last:border-b-0"
            >
              <div className="md:col-span-5">
                <FigureFrame
                  src={item.image}
                  alt={item.alt}
                  aspectClassName="aspect-[4/3]"
                />
              </div>
              <div className="md:col-span-7">
                <span className="font-mono text-2xl font-semibold tabular-nums text-stone-300">
                  {item.num}
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-stone-900">
                  {item.name}
                </h2>
                <p className="mt-3 text-base leading-[1.78] text-stone-700">
                  {item.summary}
                </p>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-6 text-sm text-stone-500 italic">
          Note: Remaining items 04 and 05 cover spring-loaded trimming chucks and natural sea sponges, documented in the companion studio index.
        </p>
      </div>
    </article>
  );
}
