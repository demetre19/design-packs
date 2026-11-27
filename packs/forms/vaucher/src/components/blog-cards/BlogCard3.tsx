import React from 'react';
import { Compass } from 'lucide-react';

export function BlogCard3() {
  const archives = [
    { num: "01", title: "Atelier Bulletin: Spring 2026 Caliber Release", ref: "REF. 2026-A" },
    { num: "02", title: "Micro-Mechanics of Perpetual Calendars", ref: "REF. 2026-B" },
    { num: "03", title: "The Geneva Seal: 140 Years of Strict Fidelity", ref: "REF. 2026-C" },
    { num: "04", title: "Titanium Case Hardening and Satin Finishes", ref: "REF. 2026-D" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">BLOG CARD 03 · ARCHIVE INDEX WITH TICK DIVIDERS</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Technical Index Archives</h2>
      </div>

      <div className="divide-y divide-[#d0d0cc] border-y border-[#d0d0cc] bg-white">
        {archives.map((arc, idx) => (
          <div key={idx} className="p-6 flex items-center justify-between hover:bg-[#f4f4f2] transition-colors">
            <div className="flex items-center space-x-6">
              <span className="font-mono text-xs text-[#2e5e8e] tracking-widest">{arc.num}</span>
              <span className="text-lg font-light tracking-wide text-[#232a30]">{arc.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-mono text-[10px] text-[#232a30]/50 tracking-widest hidden sm:inline">{arc.ref}</span>
              <a href="#read" className="font-mono text-xs text-[#2e5e8e] tracking-[0.2em] hover:text-[#232a30]">READ →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
