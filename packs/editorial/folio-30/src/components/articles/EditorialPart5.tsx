import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Minus, Plus } from 'lucide-react';
import { SPECIMEN_IMAGES } from '../../utils/specimenCatalog';
import { FigureFrame } from '../FigureFrame';

/**
 * 25. Tutorial Format
 * Prerequisites box + numbered steps + code.
 */
const EXIF_CODE = `function readIfdTag(view: DataView, offset: number, littleEndian: boolean) {
  const tagId = view.getUint16(offset, littleEndian);
  const type = view.getUint16(offset + 2, littleEndian);
  const count = view.getUint32(offset + 4, littleEndian);
  const valueOffset = view.getUint32(offset + 8, littleEndian);
  return { tagId, type, count, valueOffset };
}`;

export function BlogSingle25() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(EXIF_CODE).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-blue-900 font-semibold">
            Engineering Tutorial · Binary Parsing
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Building a Deterministic EXIF Parser in TypeScript
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Elena Rostova</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-09">November 9, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">10 min read</span>
          </div>
        </header>

        {/* Prerequisites Box */}
        <section className="bg-stone-50 border border-stone-200 p-6 mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest font-semibold text-stone-900 mb-3">
            Prerequisites
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
            <li className="bg-white border border-stone-200 p-3">
              Node.js 22+ or modern browser <code className="font-mono">DataView</code> API
            </li>
            <li className="bg-white border border-stone-200 p-3">
              Familiarity with JPEG APP1 marker bytes (<code className="font-mono">0xFFE1</code>)
            </li>
            <li className="bg-white border border-stone-200 p-3">
              Sample RAW or JPEG negative scan file
            </li>
          </ul>
        </section>

        <div className="space-y-8 text-base leading-[1.78] text-stone-700">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
              Step 1 — Locate the TIFF Endianness Preamble
            </h2>
            <p>
              Every EXIF payload buried inside a JPEG APP1 segment embeds a miniature TIFF header starting immediately after the six-byte ASCII signature. Reading the first two bytes determines whether subsequent 16-bit and 32-bit integers are big-endian (<code className="font-mono text-sm">MM</code>) or little-endian (<code className="font-mono text-sm">II</code>).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
              Step 2 — Walk the 12-Byte Image File Directory Entries
            </h2>
            <p>
              Once endianness is confirmed, jump to the first IFD offset and iterate across each 12-byte directory entry. Keeping offsets relative to the TIFF base pointer prevents off-by-six bugs when extracting shutter speeds or lens focal lengths.
            </p>

            <div className="my-5 border border-stone-200 bg-stone-950 text-stone-100 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-stone-800 bg-stone-900">
                <span className="font-mono text-xs text-stone-400">exif-ifd.ts</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-300 hover:text-white px-2 py-1 border border-stone-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed">
                <code>{EXIF_CODE}</code>
              </pre>
            </div>
          </section>

          <FigureFrame
            src={SPECIMEN_IMAGES.rangefinderDesk}
            alt="Rangefinder camera and exposure notes beside calipers"
            caption="Fig. 1 — Physical lens focal lengths and aperture markings mirrored inside digital negative IFD tags."
            aspectClassName="aspect-[16/9]"
          />

          <section>
            <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-2">
              Step 3 — Validate Rational Fractions Without Floating Drift
            </h2>
            <p>
              Shutter speeds like 1/250 s are encoded as pairs of unsigned 32-bit integers rather than floats. Storing both numerator and denominator preserves exact archival metadata across batch catalog exports.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}

/**
 * 26. Review Format
 * Score card + pros/cons split.
 */
export function BlogSingle26() {
  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Long-Term Field Review · Optical Instruments
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Field Review: Leica M-A Mechanical Rangefinder After 120 Rolls
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Owen Mercer</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-27">October 27, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-7">
            <FigureFrame
              src={SPECIMEN_IMAGES.rangefinderDesk}
              alt="Brushed silver rangefinder camera resting beside notebook and brass calipers"
              caption="Chrome brass top plate showing minimal patina after fourteen months of coastal assignments."
              aspectClassName="aspect-[4/3]"
            />
          </div>

          {/* Score Card */}
          <aside className="lg:col-span-5 bg-white border border-stone-200 p-6">
            <div className="flex items-baseline justify-between pb-4 border-b border-stone-200">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500">Overall Verdict</p>
                <p className="font-serif text-xl font-semibold text-stone-900 mt-1">
                  Benchmark Mechanical Body
                </p>
              </div>
              <div className="text-right">
                <span className="font-serif text-4xl font-semibold tabular-nums text-stone-900">
                  9.2
                </span>
                <span className="text-xs text-stone-500 font-mono"> / 10</span>
              </div>
            </div>

            <dl className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Viewfinder Optics', score: '9.6' },
                { label: 'Shutter Consistency', score: '9.3' },
                { label: 'Ergonomics & Balance', score: '9.0' },
                { label: 'Value for Money', score: '7.8' },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4">
                  <dt className="text-stone-600">{row.label}</dt>
                  <dd className="font-mono font-semibold tabular-nums text-stone-900">
                    {row.score}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Pros / Cons Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-stone-200 p-6">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-emerald-900 mb-4 flex items-center gap-2">
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>Strengths</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed">
              <li>Zero battery dependency across freezing or humid maritime shoots.</li>
              <li>0.72× brightline finder stays flare-free against direct low sun.</li>
              <li>Solid machined brass winding advance feels crisp after 4,300 frames.</li>
            </ul>
          </div>
          <div className="bg-white border border-stone-200 p-6">
            <h2 className="text-xs uppercase tracking-widest font-semibold text-amber-900 mb-4 flex items-center gap-2">
              <Minus className="w-4 h-4" aria-hidden="true" />
              <span>Trade-Offs</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-stone-700 leading-relaxed">
              <li>No built-in light meter requires incident meter or sunny-sixteen fluency.</li>
              <li>Bottom-plate loading demands patience when changing rolls in rain.</li>
              <li>Substantial retail price places it strictly in heirloom territory.</li>
            </ul>
          </div>
        </section>

        <div className="max-w-3xl space-y-5 text-base leading-[1.8] text-stone-700">
          <p>
            Removing the light meter from a modern rangefinder sounds austere until your second week on the coast. Without an LED bar blinking inside the frame, you meter ambient light once as clouds shift and spend the rest of the walk watching posture and shadow rather than exposure readouts.
          </p>
          <p>
            Across 120 rolls of Tri-X and Portra 400, shutter curtains tracked within a third of a stop from 1/15 s through 1/1000 s. Film flatness held edge-to-edge sharpness even with fast 35mm f/1.4 primes wide open.
          </p>
          <p>
            If you want automation, virtually every other camera on earth serves you better. If you want a quiet, self-contained mechanical instrument built to outlast its first owner, nothing matches it.
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * 27. Opinion Column
 * Author intro card + argument blocks.
 */
const ARGUMENT_BLOCKS = [
  {
    num: 'I.',
    heading: 'Public Space Shouldn’t Require a Transaction',
    body: 'Every covered plaza handed over to commercial coffee kiosks quietly narrows who feels welcome to sit through a rainstorm without buying a four-dollar cup. Raw civic shelters return lingering to the street without a receipt.',
  },
  {
    num: 'II.',
    heading: 'Weatherproof Brutalism Ages Honestly',
    body: 'Painted drywall lobbies scuff inside six months and demand endless janitorial budgets. Board-formed concrete benches and deep cantilevered eaves absorb bicycle tires, salt fog, and chalk drawings without losing dignity.',
  },
  {
    num: 'III.',
    heading: 'Unprogrammed Rooms Invite Civic Improvisation',
    body: 'When a pavilion carries no signage dictating yoga classes or pop-up markets, neighbors turn it into a midday chess alcove, a choir rehearsal shell, or simply a dry porch for reading.',
  },
];

export function BlogSingle27() {
  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Author Intro Card */}
        <header className="bg-stone-50 border border-stone-200 p-6 sm:p-8 mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-amber-900 font-semibold">
                Opinion Column · Civic Urbanism
              </p>
              <p className="text-sm font-semibold text-stone-900 mt-1">
                Hannah Gallagher — Contributing Architecture Critic
              </p>
            </div>
            <div className="text-xs text-stone-500">
              November 7, 2026 · 5 min read
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-stone-900 [text-wrap:balance]">
            Cities Need More Unprogrammed Concrete Shelters
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-serif italic">
            Not every public square needs curated programming, retail kiosks, or turf grass. Sometimes a generous roof and a dry stone bench are enough.
          </p>
        </header>

        <FigureFrame
          src={SPECIMEN_IMAGES.concretePavilion}
          alt="Open concrete coastal pavilion overlooking trees and ocean"
          caption="An open-sided concrete shelter offers wind protection and unobstructed horizon views year-round."
          className="mb-10"
        />

        <div className="space-y-8">
          {ARGUMENT_BLOCKS.map((arg) => (
            <section key={arg.num} className="pt-6 border-t border-stone-200">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-serif italic text-xl text-stone-400">{arg.num}</span>
                <h2 className="font-serif text-2xl font-semibold text-stone-900">
                  {arg.heading}
                </h2>
              </div>
              <p className="text-base leading-[1.8] text-stone-700">{arg.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

/**
 * 28. Round-Up Format
 * Comparison table + mini-cards.
 */
interface NotebookRow {
  name: string;
  paperGsm: number;
  binding: string;
  saltWarp: string;
  priceUsd: number;
  verdict: string;
}

const NOTEBOOK_ROUNDUP: NotebookRow[] = [
  {
    name: 'Maruman Mnemosyne A5',
    paperGsm: 80,
    binding: 'Twin-wire spiral',
    saltWarp: 'Minimal',
    priceUsd: 16,
    verdict: 'Best wet-ink clarity',
  },
  {
    name: 'Midori MD Cotton',
    paperGsm: 95,
    binding: 'Thread-sewn layflat',
    saltWarp: 'Moderate',
    priceUsd: 19,
    verdict: 'Best tactile sketching',
  },
  {
    name: 'Rite in the Rain No. 973',
    paperGsm: 100,
    binding: 'Poly cover sewn',
    saltWarp: 'None',
    priceUsd: 14,
    verdict: 'Best in open squalls',
  },
  {
    name: 'Tsubame Fools Cream',
    paperGsm: 84,
    binding: 'Smyth-sewn',
    saltWarp: 'Low',
    priceUsd: 15,
    verdict: 'Best fountain-pen tooth',
  },
];

export function BlogSingle28() {
  const [sortBy, setSortBy] = useState<'paperGsm' | 'priceUsd'>('paperGsm');
  const sorted = [...NOTEBOOK_ROUNDUP].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <article className="bg-stone-50 text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Gear Round-Up · Field Stationery
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            Four Coastal Field Notebooks Tested in Salt Air
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Liam Fletcher</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-12">October 12, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">7 min read</span>
          </div>
        </header>

        <div className="space-y-4 text-base leading-[1.78] text-stone-700 max-w-3xl mb-10">
          <p>
            Marine humidity turns ordinary office pads into rippled accordions within forty-eight hours. To find pocket journals suited for outdoor coastal surveys, we carried four sewn and spiral contenders across two months of dockside fog.
          </p>
          <p>
            Below, compare paper weight, binding resilience, and pricing—or toggle the sort control to rank by heaviest stock or lowest cost.
          </p>
        </div>

        {/* Interactive Sort Control + Comparison Table */}
        <section className="bg-white border border-stone-200 mb-10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-stone-200 bg-stone-50/60">
            <h2 className="font-serif text-lg font-semibold text-stone-900">
              Specification Comparison
            </h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSortBy('paperGsm')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                  sortBy === 'paperGsm'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Sort by Paper Weight
              </button>
              <button
                type="button"
                onClick={() => setSortBy('priceUsd')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors ${
                  sortBy === 'priceUsd'
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Sort by Price
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500 bg-stone-50">
                <tr>
                  <th className="py-3 px-5 font-semibold">Notebook</th>
                  <th className="py-3 px-4 font-semibold">Weight</th>
                  <th className="py-3 px-4 font-semibold">Binding</th>
                  <th className="py-3 px-4 font-semibold">Humidity Warp</th>
                  <th className="py-3 px-5 font-semibold text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {sorted.map((row) => (
                  <tr key={row.name} className="hover:bg-stone-50/70">
                    <td className="py-3.5 px-5 font-medium text-stone-900">{row.name}</td>
                    <td className="py-3.5 px-4 font-mono tabular-nums text-stone-700">
                      {row.paperGsm} gsm
                    </td>
                    <td className="py-3.5 px-4 text-stone-600">{row.binding}</td>
                    <td className="py-3.5 px-4 text-stone-600">{row.saltWarp}</td>
                    <td className="py-3.5 px-5 font-mono tabular-nums text-stone-900 text-right">
                      ${row.priceUsd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mini-Cards + Figure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {NOTEBOOK_ROUNDUP.map((item) => (
            <div key={item.name} className="bg-white border border-stone-200 p-5">
              <p className="text-xs font-mono text-stone-500 tabular-nums">{item.paperGsm} gsm</p>
              <h3 className="mt-1 font-serif text-lg font-semibold text-stone-900">{item.name}</h3>
              <p className="mt-2 text-xs text-stone-600">{item.verdict}</p>
            </div>
          ))}
        </div>

        <FigureFrame
          src={SPECIMEN_IMAGES.rangefinderDesk}
          alt="Field notebook open beside brass calipers on workbench"
          caption="Smyth-sewn cotton pages drying flat after morning fog exposure tests."
          aspectClassName="aspect-[16/9]"
        />
      </div>
    </article>
  );
}

/**
 * 29. Glossary / Reference Format
 * Definition list + letter jump nav.
 */
const GLOSSARY_TERMS = [
  {
    letter: 'A',
    term: 'Atmosphere (Kiln)',
    definition: 'The chemical balance of oxygen and unburned fuel inside a firing chamber—either oxidizing (clean oxygen surplus) or reducing (oxygen-starved carbon draw).',
  },
  {
    letter: 'B',
    term: 'Bisque Firing',
    definition: 'An initial low-temperature firing around Cone 08–04 that drives off chemically bound water and sinters clay enough to absorb liquid glaze cleanly.',
  },
  {
    letter: 'C',
    term: 'Celadon',
    definition: 'A translucent iron-bearing stoneware glaze that shifts from pale jade to olive-blue when fired in heavy reduction around 1300°C.',
  },
  {
    letter: 'O',
    term: 'Oxidation',
    definition: 'Firing with abundant air supply so metallic oxides such as copper and iron remain in their highest oxygen state throughout the melt.',
  },
  {
    letter: 'R',
    term: 'Reduction',
    definition: 'Restricting secondary air via the flue damper so carbon monoxide strips oxygen molecules from red iron oxide inside clay bodies and glazes.',
  },
  {
    letter: 'V',
    term: 'Vitrification',
    definition: 'The glass-forming maturation point where feldspar fluxes fuse silica grains into a dense, non-porous stoneware matrix.',
  },
];

export function BlogSingle29() {
  const letters = ['All', 'A', 'B', 'C', 'O', 'R', 'V'];
  const [selectedLetter, setSelectedLetter] = useState('All');

  const visibleTerms = GLOSSARY_TERMS.filter(
    (entry) => selectedLetter === 'All' || entry.letter === selectedLetter
  );

  return (
    <article className="bg-white text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500 font-medium">
            Studio Reference Glossary · Ceramics
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            A Field Glossary of Ceramic Firing &amp; Kiln Atmospheres
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Studio Reference Desk</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-09-30">September 30, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">9 min read</span>
          </div>
        </header>

        <div className="space-y-4 text-base leading-[1.78] text-stone-700 mb-8 max-w-3xl">
          <p>
            Kiln logs inherit vocabulary from foundry metallurgy, nineteenth-century silicate chemistry, and regional pottery traditions. Knowing how terms like reduction, vitrification, and bisque interact helps studio apprentices troubleshoot surface defects accurately.
          </p>
          <p>
            Use the alphabetical jump index below to narrow entries by initial letter, or consult the companion firing ramp diagram underneath.
          </p>
        </div>

        {/* Letter Jump Nav */}
        <nav aria-label="Glossary letter filter" className="flex flex-wrap gap-1.5 mb-8">
          {letters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => setSelectedLetter(letter)}
              className={`px-3.5 py-2 text-xs font-mono font-semibold border transition-colors ${
                selectedLetter === letter
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </nav>

        <dl className="divide-y divide-stone-200 border-y border-stone-200 mb-10">
          {visibleTerms.map((entry) => (
            <div
              key={entry.term}
              className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
            >
              <dt className="sm:col-span-4 font-serif text-lg font-semibold text-stone-900">
                <span className="font-mono text-xs text-stone-400 mr-2">{entry.letter}</span>
                {entry.term}
              </dt>
              <dd className="sm:col-span-8 text-sm sm:text-base leading-relaxed text-stone-700">
                {entry.definition}
              </dd>
            </div>
          ))}
        </dl>

        <FigureFrame
          src={SPECIMEN_IMAGES.ceramicStudio}
          alt="Glaze jars and drying stoneware pottery inside workshop"
          caption="Fig. 1 — Raw mineral glaze batches labeled by atmosphere compatibility."
          aspectClassName="aspect-[16/9]"
        />
      </div>
    </article>
  );
}

/**
 * 30. Series-Article Format
 * Prev/next part rail + "Part 3 of 5" chip.
 */
const SERIES_PARTS = [
  { part: 1, title: 'Part 1: Mercury Columns & Early Aneroid Springs' },
  { part: 2, title: 'Part 2: Marine Salt Fouling in Coastal Housings' },
  { part: 3, title: 'Part 3: Calibration Drift in Barometric Pressure Sensors' },
  { part: 4, title: 'Part 4: Zero-Power Temperature Compensation Loops' },
  { part: 5, title: 'Part 5: Long-Term Baseline Archival Verification' },
];

export function BlogSingle30() {
  const [activePart, setActivePart] = useState(3);
  const currentMeta = SERIES_PARTS.find((p) => p.part === activePart) || SERIES_PARTS[2];

  return (
    <article className="bg-[#FBF9F5] text-stone-900 py-14 sm:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="pb-8 border-b border-stone-200 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-semibold bg-stone-900 text-white">
              Part {activePart} of 5
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
              Series: Precision Weather Instrumentation
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-stone-900 [text-wrap:balance]">
            {currentMeta.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-2.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">Dr. Tobias Weber</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-11">November 11, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">8 min read</span>
          </div>
        </header>

        {/* Series Progress / Part Rail */}
        <nav
          aria-label="Article series parts"
          className="bg-white border border-stone-200 p-4 mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {SERIES_PARTS.map((item) => {
              const isCurrent = item.part === activePart;
              return (
                <button
                  key={item.part}
                  type="button"
                  onClick={() => setActivePart(item.part)}
                  className={`text-left p-2.5 border text-xs transition-colors ${
                    isCurrent
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <span className="font-mono block text-[11px] opacity-75 mb-0.5 tabular-nums">
                    Part 0{item.part}
                  </span>
                  <span className="line-clamp-2 font-medium leading-snug">
                    {item.title.replace(/^Part \d:\s*/, '')}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <FigureFrame
          src={SPECIMEN_IMAGES.coastalStation}
          alt="Cliffside meteorological station overlooking North Atlantic horizon"
          caption="Fig. 3.1 — Barometric sensor mast at Station 04 where semi-annual calibration audits occur."
          className="mb-10"
        />

        <div className="space-y-5 font-serif text-[17px] leading-[1.82] text-stone-800 max-w-3xl">
          <p>
            Solid-state MEMS barometers deliver remarkable initial precision out of the factory tray, often resolving pressure changes smaller than a single pascal. Yet mount those same silicon diaphragms inside a damp sea-cliff enclosure for eighteen months, and microscopic epoxy creep begins shifting zero-point readings upward by 0.6 hPa per winter.
          </p>
          <p>
            In synoptic meteorology, an uncorrected two-hectopascal drift silently skews storm-track pressure gradients across coastal forecasting grids. Rather than replacing transducers annually, field engineers install dual-sensor reference manifolds alongside a sealed quarterly check port.
          </p>
          <p>
            Each spring tender visit includes connecting a portable piston deadweight tester to the manifold valve for ten minutes—logging offset curves before updating onboard calibration polynomials without interrupting telemetry uplinks.
          </p>
        </div>

        {/* Prev / Next Part Rail */}
        <footer className="mt-12 pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            disabled={activePart <= 1}
            onClick={() => setActivePart((p) => Math.max(1, p - 1))}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-stone-300 bg-white text-stone-900 hover:bg-stone-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Part</span>
          </button>

          <span className="font-mono text-xs text-stone-500 tabular-nums">
            Series Progress: {activePart} / 5
          </span>

          <button
            type="button"
            disabled={activePart >= 5}
            onClick={() => setActivePart((p) => Math.min(5, p + 1))}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium border border-stone-900 bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <span>Next Part</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </footer>
      </div>
    </article>
  );
}
