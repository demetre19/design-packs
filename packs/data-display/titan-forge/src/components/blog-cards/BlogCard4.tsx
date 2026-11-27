import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard4() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          EDITORIAL WALL // BLOG 04
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          WEIGHT-STAGGERED <span className="text-[#f25c05]">WALL</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Staggered item 1 (heavy black) */}
          <div className="md:col-span-7 bg-black text-white p-8 border-4 border-black flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#f25c05] uppercase tracking-widest block mb-4">2026.11.24 // LEAD ARTICLE</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 leading-none">
                THE FUTURE OF FULLY AUTONOMOUS EXTRACTION HUBS IN EXTREME TERRAINS
              </h3>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                Analyzing zero-latency mesh networks and high-tensile alloy stress thresholds across global mining sites.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800 flex justify-between items-center font-mono text-xs">
              <span className="text-neutral-500">TITAN FORGE RESEARCH</span>
              <ArrowUpRight className="w-5 h-5 text-[#f25c05]" />
            </div>
          </div>

          {/* Staggered item 2 (white) */}
          <div className="md:col-span-5 border-2 border-black bg-white p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">2026.11.19 // BRIEF</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                SMELTING EFFICIENCY UP 34%
              </h3>
              <p className="font-mono text-xs text-neutral-600 leading-relaxed">
                Induction smelting Cell-X updates roll out globally to all enterprise license holders.
              </p>
            </div>
            <div className="pt-6 border-t border-black flex justify-between items-center font-mono text-xs">
              <span className="text-neutral-500">HARDWARE LOG</span>
              <ArrowUpRight className="w-5 h-5 text-[#f25c05]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
