import React from 'react';

export function Content12() {
  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-800 pb-4 mb-10 gap-2">
          <div>
            <div className="text-[10px] tracking-[0.22em] text-neutral-500 uppercase">
              THREE-ACT PROVENANCE · CONTINUOUS CONDUIT
            </div>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              The Threaded Narrative — One Matrix Through Three Centuries
            </h2>
          </div>
          <div className="text-[11px] text-neutral-400">LINKED ACTS I → II → III</div>
        </div>

        {/* Continuous vertical thread running along left conduit, branching into 3 structurally distinct acts */}
        <div className="relative pl-8 sm:pl-14">
          {/* Continuous Thread Line */}
          <div
            aria-hidden="true"
            className="absolute left-3 sm:left-5 top-3 bottom-3 w-0.5 bg-neutral-600"
          />

          {/* ACT I: Asymmetric Horizontal Quote Banner */}
          <div className="relative pb-12">
            {/* Thread Node I */}
            <div className="absolute -left-8 sm:-left-14 top-1 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-neutral-950 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-10">
              I
            </div>
            {/* Branch horizontal connector */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -left-4 top-5 w-4 h-px bg-white"
            />

            <div className="border-t border-b border-neutral-700 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="text-[10px] tracking-widest text-neutral-500 uppercase">
                  ACT I · PARMA
                </div>
                <div className="text-4xl font-bold text-white tabular-nums mt-1">1790</div>
                <div className="text-[11px] text-neutral-400 mt-1">Stamperia Reale</div>
              </div>
              <div className="lg:col-span-9 lg:border-l lg:border-neutral-800 lg:pl-8">
                <blockquote className="font-serif italic text-xl text-neutral-100 leading-snug mb-2">
                  “Giambattista Bodoni strikes the 18pt Romain punches in Parma, sealing twenty-four steel matrices in oiled cedar.”
                </blockquote>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  DOCUMENTED IN PALATINA ARCHIVE FOLIO 04 · LEAD-ANTIMONY CAST #14
                </div>
              </div>
            </div>
          </div>

          {/* ACT II: Dense Three-Column Essay Layout */}
          <div className="relative pb-12">
            {/* Thread Node II */}
            <div className="absolute -left-8 sm:-left-14 top-1 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-neutral-950 border-2 border-white flex items-center justify-center text-xs font-bold text-white z-10">
              II
            </div>
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -left-4 top-5 w-4 h-px bg-white"
            />

            <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between border-b border-neutral-800 pb-3 mb-5 gap-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                    ACT II · BASEL &amp; PARIS
                  </span>
                  <span className="text-2xl font-bold text-white tabular-nums">1957–1961</span>
                </div>
                <span className="text-[10px] text-neutral-400 uppercase">
                  PHOTOMECHANICAL RESCUE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans text-neutral-400 leading-relaxed">
                <p>
                  <strong className="font-mono text-white text-[10px] uppercase block mb-1">
                    01. CRATE ARRIVAL
                  </strong>
                  Transported by rail from Parma to Basel in November 1957, the original brass matrices underwent ultrasonic tallow cleaning before optical bench mounting.
                </p>
                <p>
                  <strong className="font-mono text-white text-[10px] uppercase block mb-1">
                    02. TSCHICHOLD REVIEW
                  </strong>
                  Jan Tschichold annotated 140 enlarged glass-plate negatives in 1961, flagging fragile serif brackets requiring micro-fillet preservation.
                </p>
                <p>
                  <strong className="font-mono text-white text-[10px] uppercase block mb-1">
                    03. CABINET 12 SEAL
                  </strong>
                  Once proofed on damp cotton rag at Haas Foundry, the physical strikes were permanently archived inside temperature-controlled Cabinet 12.
                </p>
              </div>
            </div>
          </div>

          {/* ACT III: Tabular Technical Milestone Ledger */}
          <div className="relative">
            {/* Thread Node III */}
            <div className="absolute -left-8 sm:-left-14 top-1 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-xs font-bold text-neutral-950 z-10">
              III
            </div>
            <div
              aria-hidden="true"
              className="hidden sm:block absolute -left-4 top-5 w-4 h-px bg-white"
            />

            <div className="border-t border-neutral-700 pt-5">
              <div className="flex flex-wrap items-baseline justify-between mb-4 gap-2">
                <div>
                  <span className="text-[10px] tracking-widest text-neutral-500 uppercase">
                    ACT III · ZÜRICH TO ARCHIVE CLOUD
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                    1983–2026 Digital Permanence
                  </h3>
                </div>
                <span className="text-[10px] text-neutral-400 tabular-nums">THREAD TERMINUS</span>
              </div>

              <div className="divide-y divide-neutral-800 border-y border-neutral-800 text-xs tabular-nums">
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-neutral-300 font-bold">1983 · POSTSCRIPT TYPE 1</span>
                  <span className="text-neutral-500 font-sans">
                    First cubic spline conversion completed at Zürich vector laboratory
                  </span>
                  <span className="text-white">842 GLYPHS</span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-neutral-300 font-bold">2026 · OPTICAL MASTERS</span>
                  <span className="text-neutral-500 font-sans">
                    Six optical sizes unified with WOFF2 archival delivery checksum
                  </span>
                  <span className="text-white">1,420 GLYPHS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
