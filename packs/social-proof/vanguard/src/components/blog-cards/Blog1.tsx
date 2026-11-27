import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Blog1() {
  const articles = [
    { id: '01', date: '2026.11.12', title: 'MACH 4.8 RAMJET STABILITY ANALYSIS', excerpt: 'Deep dive into supersonic combustion pressure fluctuations and thermal boundary protection.' },
    { id: '02', date: '2026.11.08', title: 'FIBER-OPTIC GYROSCOPE CALIBRATION', excerpt: 'Achieving sub-arcsecond navigation precision without reliance on orbital GPS constellations.' },
    { id: '03', date: '2026.11.02', title: 'TITANIUM-MATRIX HEAT DISSIPATION', excerpt: 'Active internal coolant flow modeling for leading-edge structures during high-enthalpy cruise.' },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FLIGHT LOGS // 01</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
              TECHNICAL <span className="text-[#ff3d00]">REPORTS</span>
            </h2>
          </div>
          <div className="text-xs text-zinc-400">ARCHIVE S-01 TO S-12</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="text-[#ff3d00] font-bold">{art.id} // LOG</span>
                  <span>{art.date}</span>
                </div>
                <div className="h-36 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:12px_12px]" />
                  <span className="text-xs font-bold text-zinc-400">TELEMETRY PLATE</span>
                </div>
                <h3 className="text-base font-extrabold uppercase font-sans tracking-wide">{art.title}</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">{art.excerpt}</p>
              </div>

              <div className="pt-4 border-t border-[#3a3e4c]">
                <button className="text-xs font-bold text-[#ff3d00] hover:text-white flex items-center space-x-1 uppercase tracking-widest">
                  <span>READ FLIGHT REPORT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
