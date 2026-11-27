import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard2() {
  const rows = [
    { date: "2026.11.20", title: "ISO-9001 CERTIFICATION ACHIEVED FOR OMNI-MESH V4", category: "COMPLIANCE" },
    { date: "2026.11.14", title: "NEW HYDRAULIC MANIFOLD REDUCES MAINTENANCE DOWNTIME BY 45%", category: "HARDWARE" },
    { date: "2026.11.02", title: "SATELLITE RELAY EXPANSION ACROSS PACIFIC EXTRACTION BASINS", category: "INFRASTRUCTURE" },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          FEATURED DISPATCH // BLOG 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          OPERATIONAL <span className="text-[#f25c05]">BULLETINS</span>.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Heavy black panel */}
          <div className="lg:col-span-6 bg-black text-white p-8 border-4 border-black flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#f25c05] uppercase tracking-widest block mb-4">FEATURED DISPATCH // 2026.11.24</span>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 leading-tight">
                TITAN FORGE DEPLOYS NEXT-GEN AI STRESS MAPPING ACROSS GLOBAL HUBS
              </h3>
              <p className="font-mono text-xs text-neutral-400 leading-relaxed mb-6">
                Real-time ultrasonic frequency analysis now standard across all 8,500 active autonomous earth-moving units.
              </p>
            </div>
            <button className="bg-[#f25c05] text-black px-6 py-3 font-mono text-xs font-black uppercase hover:bg-white transition-colors w-max flex items-center space-x-2">
              <span>Read Full Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Thin article rows */}
          <div className="lg:col-span-6 space-y-4">
            {rows.map((r, idx) => (
              <div key={idx} className="border-2 border-black bg-white p-6 flex flex-col justify-between hover:border-[#f25c05] transition-colors cursor-pointer">
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 mb-2">
                  <span>{r.date}</span>
                  <span className="bg-black text-white px-2 py-0.5">{r.category}</span>
                </div>
                <h4 className="font-black text-lg uppercase tracking-tight">{r.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
