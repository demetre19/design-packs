import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">BLOG / EDITORIAL // 02</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Featured Journal & Index</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border-2 border-[#1b3a5c] p-6 bg-white shadow-md space-y-4">
            <span className="text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5 inline-block">FEATURED ARTICLE</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">The Orthogonal Grid as Universal Spatial Language</h3>
            <p className="text-xs text-[#1b3a5c]/80 leading-relaxed">
              An exploration into modular coordination, historical dimensioning systems, and how strict orthogonal alignment optimizes both structural safety and spatial clarity.
            </p>
            <div className="pt-4 border-t border-[#1b3a5c]/20 flex justify-between items-center text-xs">
              <span className="text-[#1b3a5c]/60">AUTHOR: K. VANCE | 2026.11.25</span>
              <button className="font-bold hover:underline flex items-center gap-1 cursor-pointer">
                <span>READ FULL ARTICLE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {[
              { idx: "01", title: "Parametric Facade Optimization", date: "2026.11.18" },
              { idx: "02", title: "High-Strength Concrete Mix Design", date: "2026.11.12" },
              { idx: "03", title: "Zoning Code Compliance Masterclass", date: "2026.11.05" },
            ].map((row, i) => (
              <div key={i} className="border-2 border-[#1b3a5c] p-4 bg-white shadow-sm flex justify-between items-center hover:bg-[#1b3a5c]/5 transition-colors cursor-pointer">
                <div>
                  <div className="text-[9px] text-[#1b3a5c]/60">INDEX [{row.idx}]</div>
                  <div className="text-xs font-bold uppercase mt-0.5">{row.title}</div>
                </div>
                <div className="text-[10px] text-[#1b3a5c]/70">{row.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
