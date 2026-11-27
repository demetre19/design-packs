import React from 'react';

export function Content11() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-8 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              TECHNICAL DATASHEET · BODONI ÉPOQUE REVIVAL
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Specimen Grid — Irregular Foundry Metrics Matrix
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400 tabular-nums">DATASHEET #DS-5701</div>
        </div>

        {/* Deliberately irregular 12-column hairline matrix */}
        <div className="border border-neutral-700 bg-neutral-950 grid grid-cols-1 md:grid-cols-12">
          {/* Cell A: Tall 4x2 anatomy glyph specimen */}
          <div className="md:col-span-4 md:row-span-2 border-b md:border-r border-neutral-800 p-6 flex flex-col justify-between">
            <div className="flex justify-between text-[10px] text-neutral-500 tabular-nums">
              <span>CELL [01] · METRICS</span>
              <span>1000 UPM</span>
            </div>
            <div className="my-6 py-4 border-y border-dashed border-neutral-800 text-center">
              <div className="font-serif text-7xl font-bold text-white tracking-tight">
                Égß
              </div>
              <div className="text-[10px] text-neutral-400 mt-3 tabular-nums">
                ASC +742u · CAP +718u · X-HT +468u · DESC −218u
              </div>
            </div>
            <div className="text-[11px] font-sans text-neutral-400 leading-snug">
              Vertical proportions calibrated from 18pt Parma copperplate impressions (1790).
            </div>
          </div>

          {/* Cell B: Wide 8-col kerning & contrast strip */}
          <div className="md:col-span-8 border-b border-neutral-800 p-5">
            <div className="flex justify-between text-[10px] text-neutral-500 mb-3">
              <span>CELL [02] · CRITICAL KERNING PAIRS &amp; OPTICAL PAIRS</span>
              <span className="tabular-nums">2,840 TOTAL PAIRS</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center tabular-nums">
              {[
                { pair: 'AV', val: '−64u' },
                { pair: 'To', val: '−48u' },
                { pair: 'É’', val: '+12u' },
                { pair: 'Qu', val: '+08u' },
                { pair: 'fï', val: 'LIG' },
                { pair: 'VA', val: '−58u' },
              ].map((k) => (
                <div key={k.pair} className="border border-neutral-800 bg-neutral-900 py-2 px-1">
                  <div className="font-serif text-lg text-white">{k.pair}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{k.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cell C: Narrow 2-col unit */}
          <div className="md:col-span-2 border-b md:border-r border-neutral-800 p-4 flex flex-col justify-between">
            <span className="text-[9px] text-neutral-500 uppercase">CELL [03] · ITALIC</span>
            <div className="text-2xl font-serif italic font-bold text-white my-2 tabular-nums">
              11.5°
            </div>
            <span className="text-[10px] text-neutral-400">Sheared axis</span>
          </div>

          {/* Cell D: Narrow 2-col unit */}
          <div className="md:col-span-2 border-b md:border-r border-neutral-800 p-4 flex flex-col justify-between">
            <span className="text-[9px] text-neutral-500 uppercase">CELL [04] · STEM</span>
            <div className="text-2xl font-bold text-white my-2 tabular-nums">11:1</div>
            <span className="text-[10px] text-neutral-400">Contrast ratio</span>
          </div>

          {/* Cell E: Medium 4-col technical micro-note */}
          <div className="md:col-span-4 border-b border-neutral-800 p-4 flex flex-col justify-between">
            <div className="text-[9px] text-neutral-500 uppercase mb-1">
              CELL [05] · PANTOGRAPH RATIO NOTE
            </div>
            <p className="text-[11px] font-sans text-neutral-300 leading-snug">
              Benton engraving master cut at 12:1 scale; zero geometric scaling applied between Display 72pt and Caption 8pt.
            </p>
          </div>

          {/* Cell F: Wide 7-col character set inventory */}
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-neutral-800 p-5">
            <div className="text-[9px] text-neutral-500 uppercase tracking-widest mb-3">
              CELL [06] · GLYPH INVENTORY &amp; OPENTYPE TABLES
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] tabular-nums">
              <div>
                <div className="text-white font-bold">418</div>
                <div className="text-neutral-500">Latin Extended</div>
              </div>
              <div>
                <div className="text-white font-bold">34</div>
                <div className="text-neutral-500">Historical Ligatures</div>
              </div>
              <div>
                <div className="text-white font-bold">10 + 10</div>
                <div className="text-neutral-500">Lining / Oldstyle Figs</div>
              </div>
              <div>
                <div className="text-white font-bold">18</div>
                <div className="text-neutral-500">Foundry Ornaments</div>
              </div>
            </div>
          </div>

          {/* Cell G: Uneven 5-col checksum & classification footer cell */}
          <div className="md:col-span-5 p-5 flex flex-col justify-between bg-neutral-900/50">
            <div className="flex justify-between text-[9px] text-neutral-500 uppercase">
              <span>CELL [07] · CLASSIFICATION</span>
              <span>VOX-ATYPI: DIDONE</span>
            </div>
            <div className="text-xs text-neutral-200 mt-2 tabular-nums">
              WEIGHTS: 300 · 400 · 500 · 600 · 700 · 900
            </div>
            <div className="text-[10px] text-neutral-500 mt-1">
              SHA-256 VAULT RECORD: 5701-883B-PARMA-1957
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
