import React from 'react';
import { Cpu, Zap, Shield } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          ASYMMETRIC GRID // SYSTEM 03
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Dense black column left */}
          <div className="lg:col-span-5 bg-black text-white p-8 border-4 border-black flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-[#f25c05] uppercase tracking-widest">FLAGSHIP MODULE</span>
                <Cpu className="w-6 h-6 text-[#f25c05]" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                CENTRAL MESH <span className="text-[#f25c05]">COMMANDER</span>
              </h3>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-6">
                The absolute nerve center of Titan Forge operations. Manages up to 10,000 autonomous extraction units concurrently with zero downtime risk.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 font-mono text-[10px] text-neutral-500 flex justify-between">
              <span>STATUS: SECURE</span>
              <span className="text-[#f25c05]">REV 4.2</span>
            </div>
          </div>

          {/* Sparse white columns right */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-black text-[#f25c05] flex items-center justify-center font-mono mb-4 font-bold text-xs">
                  01
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-2">THERMAL SHIELDING</h4>
                <p className="font-mono text-xs text-neutral-600">Advanced ceramic lining withstands extreme geothermal heat.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 font-mono text-[10px] text-neutral-500">
                SPEC: 1,450°C
              </div>
            </div>

            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-black text-[#f25c05] flex items-center justify-center font-mono mb-4 font-bold text-xs">
                  02
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight mb-2">HYDRAULIC PRESSURE</h4>
                <p className="font-mono text-xs text-neutral-600">Ultra-high pressure manifolds for impenetrable rock strata.</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-200 font-mono text-[10px] text-neutral-500">
                SPEC: 14,000 PSI
              </div>
            </div>

            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between md:col-span-2">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-black text-lg uppercase tracking-tight">ACOUSTIC STRESS MAPPING</h4>
                <span className="font-mono text-xs text-[#f25c05] font-bold">ACTIVE</span>
              </div>
              <p className="font-mono text-xs text-neutral-600">Continuous ultrasonic frequency analysis detects micro-fractures in drill bits milliseconds before failure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
