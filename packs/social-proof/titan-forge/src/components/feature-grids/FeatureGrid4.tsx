import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid4() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          MOSAIC GRID // SYSTEM 04
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          INDUSTRIAL <span className="text-[#f25c05]">MOSAIC</span> SERVICES.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#f25c05] uppercase tracking-widest block mb-2">01 // ORE REFINING</span>
              <h3 className="text-2xl font-black font-sans uppercase mb-4">SMELTING CELL-X</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">High-efficiency induction smelting units delivering 99.9% pure bullion.</p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-500">READY</span>
              <ArrowUpRight className="w-4 h-4 text-[#f25c05]" />
            </div>
          </div>

          <div className="bg-white text-black p-8 border-2 border-black flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">02 // STRATA DRILLING</span>
              <h3 className="text-2xl font-black font-sans uppercase mb-4">DIAMOND CORE DX</h3>
              <p className="text-xs text-neutral-700 leading-relaxed">Penetrates deepest subterranean ore deposits with computerized torque regulation.</p>
            </div>
            <div className="mt-8 pt-4 border-t border-black flex items-center justify-between text-xs">
              <span className="text-neutral-500">SPEC OK</span>
              <ArrowUpRight className="w-4 h-4 text-[#f25c05]" />
            </div>
          </div>

          <div className="bg-black text-white p-8 border-b-4 border-[#f25c05] flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#f25c05] uppercase tracking-widest block mb-2">03 // MESH TELEMETRY</span>
              <h3 className="text-2xl font-black font-sans uppercase mb-4">SATELLITE LINK</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">Encrypted orbital relay ensuring uninterrupted command telemetry in remote deserts.</p>
            </div>
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-500">ACTIVE</span>
              <ArrowUpRight className="w-4 h-4 text-[#f25c05]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
