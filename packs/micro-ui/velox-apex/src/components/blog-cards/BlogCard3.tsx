import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard3() {
  const items = [
    { num: '01', title: 'SOLID STATE DENSITY BREAKTHROUGH', date: '2026.11.12' },
    { num: '02', title: 'SUZUKA CIRCUIT RECORD LAP ANALYSIS', date: '2026.10.28' },
    { num: '03', title: 'AERO WINGLET FLUID MECHANICS', date: '2026.10.14' },
    { num: '04', title: 'TITANIUM MONOCOQUE STRESS TEST', date: '2026.09.30' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// ARCHIVE NUMERAL REGISTER</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          CHRONOLOGICAL <span className="text-[#ff2e00]">ARCHIVE</span>
        </h2>

        {/* Archive as oversized-numeral register */}
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="border-2 border-black p-6 bg-white hover:bg-neutral-50 flex items-center justify-between group">
              <div className="flex items-center gap-6">
                <span className="text-4xl sm:text-6xl font-black text-neutral-300 group-hover:text-[#ff2e00] transition-colors">
                  {item.num}
                </span>
                <div>
                  <div className="font-mono text-[10px] text-neutral-500 mb-1">// PUBLISHED: {item.date}</div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>
              <div className="bg-black text-white p-3 group-hover:bg-[#ff2e00] group-hover:text-black transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
