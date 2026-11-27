import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    { code: 'ART-01', date: '2026.11.20', title: 'WIND TUNNEL CORRELATION STUDIES', excerpt: 'Comparing CFD pressure coefficients with live g-force wind tunnel telemetry.' },
    { code: 'ART-02', date: '2026.11.15', title: 'FORGED TITANIUM METALLURGY', excerpt: 'Thermal stress limits of connecting rods under sustained 9,200 RPM loads.' },
    { code: 'ART-03', date: '2026.11.10', title: 'PUSHROD SUSPENSION GEOMETRY', excerpt: 'Kinematic analysis of inboard damper placement and anti-dive characteristics.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6 text-[10px] uppercase font-bold">
          <span>[EDITORIAL & TECHNICAL ARCHIVE // 3-COL]</span>
          <span>REF: BC-01</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="border-2 border-[#111] bg-white flex flex-col justify-between">
              <div>
                <div className="h-48 bg-[#111] border-b border-[#111] relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/kraftwerk_blog${i}/600/400`} alt="Article plate" className="w-full h-full object-cover grayscale contrast-125" />
                  <span className="absolute top-2 left-2 bg-[#111] text-[#e8e8e6] text-[8px] px-1">{p.code}</span>
                </div>
                <div className="p-6">
                  <div className="text-[9px] text-[#666] mb-2">{p.date} // ARCHIVE LOG</div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-3">{p.title}</h3>
                  <p className="text-[10px] text-[#555] leading-relaxed">{p.excerpt}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button 
                  onClick={() => alert(`Reading article ${p.code}...`)}
                  className="w-full py-2 border border-[#111] font-bold text-[9px] uppercase tracking-widest hover:bg-[#111] hover:text-[#e8e8e6] transition-colors cursor-pointer flex items-center justify-center space-x-1"
                >
                  <span>READ DOSSIER</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
