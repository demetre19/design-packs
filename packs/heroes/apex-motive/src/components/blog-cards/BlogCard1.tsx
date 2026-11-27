import React from 'react';
import { ArrowRight, Calendar, Cpu } from 'lucide-react';

export function BlogCard1() {
  const articles = [
    { date: '2026.11.20', title: 'AXIAL FLUX STATOR EVOLUTION', category: 'ENGINEERING', desc: 'Deep dive into direct-oil cooling thermal dynamics and magnetic flux saturation.' },
    { date: '2026.11.14', title: 'CARBON MONOCOQUE AUTOCLAVE RIGIDITY', category: 'MATERIALS', desc: 'Testing T1000 aerospace composite structures under 4.5G cornering loads.' },
    { date: '2026.11.08', title: 'SUZUKA TEST LOOP TELEMETRY LOGS', category: 'RACING', desc: 'Analyzing lap time delta between traditional internal combustion and 800V electric.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// EDITORIAL & LOGS</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL JOURNALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div key={idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner flex flex-col justify-between group hover:border-[#ff5a1f] transition-all">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono-spec text-[10px] text-[#ff5a1f] bg-[#ff5a1f]/10 px-3 py-1 clip-corner">{item.category}</span>
                  <span className="font-mono-spec text-[10px] text-neutral-500">{item.date}</span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-white mb-3 group-hover:text-[#ff5a1f] transition-colors">{item.title}</h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#272a33] flex items-center justify-between text-xs font-mono-spec text-white group-hover:text-[#ff5a1f] transition-colors">
                <span>READ JOURNAL</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
