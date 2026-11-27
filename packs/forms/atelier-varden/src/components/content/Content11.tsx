import React from 'react';

export function Content11() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e] inline-block" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                DATASHEET 11 — TECTONIC MATERIAL SPECIMENS
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#16171a]">
              Physical Envelope Specification Matrix
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase text-stone-500 tabular-nums">
            LAB VERIFIED · SIA 262 / EN 206
          </span>
        </div>

        {/* Irregular Datasheet Matrix (hairline gap-px over border color) */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-px bg-[#16171a] border border-[#16171a]">
          {/* Cell 1: Wide classification (5 cols) */}
          <div className="sm:col-span-6 lg:col-span-5 bg-[#f0efeb] p-5 flex flex-col justify-between space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#b5482e]">
              SPECIMEN A · PRIMARY STRUCTURAL CAST
            </div>
            <div>
              <div className="text-xl font-medium text-[#16171a]">
                C40/50 Board-Formed Concrete
              </div>
              <div className="text-xs font-mono text-stone-500 mt-1">
                CEM III/A SLAG BINDER · 16 MM BASALT AGGREGATE
              </div>
            </div>
          </div>

          {/* Cell 2: Compact density (2 cols) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-[#fafaf8] p-5 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase text-stone-400">DENSITY</span>
            <div className="pt-4">
              <span className="text-2xl font-mono font-medium text-[#16171a] tabular-nums">2,410</span>
              <span className="block text-[10px] font-mono text-stone-500">KG / M³</span>
            </div>
          </div>

          {/* Cell 3: Tall spanning micro-notes (3 cols, 2 rows on lg) */}
          <div className="sm:col-span-4 lg:col-span-3 lg:row-span-2 bg-[#fafaf8] p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-stone-400 block">
                SURFACE CURING PROTOCOL
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                Unplaned Douglas fir planks (110 mm width) pre-wetted 2 hours prior to pour. Demolding strictly at 72 hours; zero acid wash or synthetic sealer applied.
              </p>
            </div>
            <div className="border-t border-[#e2e0d8] pt-3 space-y-1 text-[10px] font-mono text-stone-500 tabular-nums">
              <div className="flex justify-between">
                <span>WATER/CEMENT RATIO</span>
                <span className="text-[#16171a]">0.42</span>
              </div>
              <div className="flex justify-between">
                <span>FREEZE-THAW CLASS</span>
                <span className="text-[#b5482e]">XF4 ALPINE</span>
              </div>
            </div>
          </div>

          {/* Cell 4: Narrow conductivity (2 cols) */}
          <div className="sm:col-span-2 lg:col-span-2 bg-[#f0efeb] p-5 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase text-stone-400">CONDUCTIVITY λ</span>
            <div className="pt-4">
              <span className="text-2xl font-mono font-medium text-[#16171a] tabular-nums">1.65</span>
              <span className="block text-[10px] font-mono text-stone-500">W / (M·K)</span>
            </div>
          </div>

          {/* Row 2 left: Acoustic note (4 cols) */}
          <div className="sm:col-span-4 lg:col-span-4 bg-[#fafaf8] p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase text-stone-400 block">
              SOUND TRANSMISSION CLASS
            </span>
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-mono font-medium text-[#b5482e] tabular-nums">58 dB</span>
              <span className="text-[11px] font-mono text-stone-500">AT 300 MM SECTION</span>
            </div>
          </div>

          {/* Row 2 middle: Timber specimen (3 cols) */}
          <div className="sm:col-span-3 lg:col-span-3 bg-[#f0efeb] p-5 space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-stone-500 block">
              SPECIMEN B · TIMBER
            </span>
            <div className="text-sm font-medium text-[#16171a]">Heartwood Douglas Fir</div>
            <div className="text-[11px] font-mono text-stone-600 tabular-nums">12% KILN MOISTURE · D24</div>
          </div>

          {/* Row 2 right under Cell 4: Fire rating (2 cols) */}
          <div className="sm:col-span-3 lg:col-span-2 bg-[#fafaf8] p-5 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase text-stone-400">RESISTANCE</span>
            <div className="text-lg font-mono font-medium text-[#16171a] pt-2">REI 90</div>
          </div>

          {/* Row 3 full irregular split: 2 + 6 + 4 */}
          <div className="sm:col-span-2 lg:col-span-2 bg-[#16171a] text-[#fafaf8] p-5 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase text-[#b5482e]">TOLERANCE</span>
            <span className="text-xl font-mono tabular-nums mt-2">± 2.0 mm</span>
          </div>
          <div className="sm:col-span-4 lg:col-span-6 bg-[#fafaf8] p-5 flex flex-col justify-center">
            <div className="text-[10px] font-mono uppercase text-stone-400 mb-1">
              INTERFACING SEALANT POLICY
            </div>
            <p className="text-xs text-stone-700">
              Mechanical EPDM compression gaskets recessed 22 mm behind exposed stone face; replaceable without chiseling structural joints.
            </p>
          </div>
          <div className="sm:col-span-6 lg:col-span-4 bg-[#f0efeb] p-5 flex items-center justify-between font-mono text-[11px] tabular-nums">
            <span className="text-stone-500 uppercase">EMBODIED CARBON CAP</span>
            <span className="text-[#16171a] font-medium">215 KG CO₂E / M²</span>
          </div>
        </div>
      </div>
    </section>
  );
}
