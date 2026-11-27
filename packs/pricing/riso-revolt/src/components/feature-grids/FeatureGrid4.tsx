import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FeatureGrid4() {
  const cards = [
    { label: "01 // PRINT", title: "Risograph Editions", desc: "Limited run posters and art books." },
    { label: "02 // WEB", title: "Brutalist Web Apps", desc: "High-performance React frontends." },
    { label: "03 // BRAND", title: "Identity Systems", desc: "Condensed grotesque typography." },
    { label: "04 // LAB", title: "Experimental UX", desc: "Kinetic typography and WebGL." }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#111111] text-[#fffdf5] font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            MODULE MATRIX
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            EXPLORE MODULES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-8 flex flex-col justify-between hover:bg-[#ffd92e]/10 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#ff6b5e]">{c.label}</span>
                  <div className="w-8 h-8 bg-[#111111] text-white flex items-center justify-center shadow-hard-sm">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <h3 className="font-grotesk font-black text-2xl uppercase mb-2">{c.title}</h3>
                <p className="font-mono text-xs sm:text-sm text-[#111111]/80">{c.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-[#111111] flex items-center justify-between font-mono text-xs font-bold">
                <span>STATUS: ACTIVE</span>
                <span className="underline cursor-pointer">ACCESS MODULE →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
