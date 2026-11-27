import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard3() {
  const archives = [
    { id: 'LOG-019', date: '2026.11.15', title: 'Silicon Carbide Inverter Efficiency Curves', author: 'DR. K. WEBER' },
    { id: 'LOG-018', date: '2026.11.02', title: 'Öhlins TTX36 Semi-Active Damping Calibration', author: 'M. DU PLESSIS' },
    { id: 'LOG-017', date: '2026.10.28', title: 'Titanium Subframe Torsional Load Analysis', author: 'A. SOTO' },
    { id: 'LOG-016', date: '2026.10.14', title: 'Regenerative Braking Power Recovery Audit', author: 'L. CHEN' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// ARCHIVE REGISTER</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL ARCHIVE REGISTRY</h2>
        </div>

        <div className="bg-[#16181d] border border-[#272a33] clip-corner divide-y divide-[#272a33]">
          {archives.map((item) => (
            <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#1c1f26] transition-colors group cursor-pointer">
              <div className="flex items-center gap-6 mb-2 md:mb-0">
                <span className="font-mono-spec text-xs text-[#ff5a1f] font-bold">{item.id}</span>
                <span className="font-mono-spec text-xs text-neutral-500">{item.date}</span>
                <span className="font-display font-bold text-white group-hover:text-[#ff5a1f] transition-colors text-base">{item.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono-spec text-xs text-neutral-400">{item.author}</span>
                <ArrowRight size={16} className="text-neutral-500 group-hover:text-[#ff5a1f] transition-colors hidden md:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
