import React from 'react';

export const Content13: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-20 border-b border-[#14161a]/20">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Colophon Top Rule */}
        <div className="border-t-2 border-[#14161a] pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span>MONOGRAPH COLOPHON // EDITION IV</span>
          <span>PRINTED & BOUND IN ZURICH, SWITZERLAND</span>
          <span>ISBN 978-3-907420-44-0</span>
        </div>

        {/* Multi-column dense credits artifact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#14161a]/20 text-xs">
          {/* Col 1: Practice Principals */}
          <div className="space-y-4 pt-4 sm:pt-0 sm:pr-6">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] bg-[#14161a] text-[#ffc72c] px-2 py-1 inline-block">
              01. PRACTICE PRINCIPALS
            </h3>
            <dl className="space-y-2.5 font-mono text-[11px]">
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">LEAD PARTNER</dt>
                <dd className="font-bold text-right">H. VANCE</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">DESIGN DIRECTOR</dt>
                <dd className="font-bold text-right">E. MERZ</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">TOKYO PARTNER</dt>
                <dd className="font-bold text-right">K. SATO</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#14161a]/55">ARCHIVIST</dt>
                <dd className="font-bold text-right">L. KRAUSE</dd>
              </div>
            </dl>
          </div>

          {/* Col 2: Engineering Consultants */}
          <div className="space-y-4 pt-4 sm:pt-0 sm:px-6">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] bg-[#ffc72c] text-[#14161a] px-2 py-1 inline-block">
              02. ENGINEERING
            </h3>
            <dl className="space-y-2.5 font-mono text-[11px]">
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">STRUCTURAL</dt>
                <dd className="font-bold text-right">BAUER & PARTNER</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">GEOTECHNICAL</dt>
                <dd className="font-bold text-right">ALPINE CORE AG</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">STEEL FABRICATION</dt>
                <dd className="font-bold text-right">STAHLBAU BASEL</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#14161a]/55">WIND TUNNEL</dt>
                <dd className="font-bold text-right">ETH AERO LAB</dd>
              </div>
            </dl>
          </div>

          {/* Col 3: Monograph Specifications */}
          <div className="space-y-4 pt-4 lg:pt-0 lg:px-6">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] border border-[#14161a] px-2 py-1 inline-block">
              03. EDITION SPECS
            </h3>
            <dl className="space-y-2.5 font-mono text-[11px]">
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">DISPLAY FACE</dt>
                <dd className="font-bold text-right">GEOMETRIC 800</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">DATA FACE</dt>
                <dd className="font-bold text-right">TABULAR MONO</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[#14161a]/10 pb-1.5">
                <dt className="text-[#14161a]/55">PAPER STOCK</dt>
                <dd className="font-bold text-right">MUNKEN POLAR 150G</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#14161a]/55">INK PALETTE</dt>
                <dd className="font-bold text-right">#14161A / #FFC72C</dd>
              </div>
            </dl>
          </div>

          {/* Col 4: Archival Seal & Registry */}
          <div className="space-y-4 pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] border border-[#14161a] px-2 py-1 inline-block mb-3">
                04. REGISTRY
              </h3>
              <p className="font-sans text-[11px] text-[#14161a]/75 leading-relaxed">
                All structural plates, CAD schedules, and field telemetry logs are archived under KANTILEVER Practice Registry #2026-CH.
              </p>
            </div>

            <div className="border border-[#14161a] p-3 flex items-center justify-between bg-[#14161a] text-[#f7f6f3]">
              <div className="font-mono text-[10px]">
                <div className="text-[#ffc72c] font-bold">SIA 102 COMPLIANT</div>
                <div className="text-[#f7f6f3]/60">ZURICH · TOKYO</div>
              </div>
              <div className="w-6 h-6 bg-[#ffc72c] transform skew-x-[-14deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
