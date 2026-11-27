import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogCard3() {
  const archives = [
    { num: "01", date: "FEB 2026", title: "Risograph Ink Chemistry & Environmental Impact", cat: "PRINT" },
    { num: "02", date: "FEB 2026", title: "Building High-Performance React Design Systems", cat: "WEB" },
    { num: "03", date: "JAN 2026", title: "The Death of Corporate Rounded Corners", cat: "MANIFESTO" },
    { num: "04", date: "JAN 2026", title: "Berlin Studio Tour & Print Edition #08", cat: "STUDIO" }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
            ARCHIVE INDEX
          </div>
          <h2 className="font-grotesk font-black text-4xl uppercase mt-3">COMPLETE INDEX.</h2>
        </div>

        <div className="bg-white border-3 border-[#111111] shadow-hard-lg divide-y-2 divide-[#111111]">
          {archives.map((item, i) => (
            <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#ffd92e]/10 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-black bg-[#ffd92e] px-2.5 py-1 border border-[#111111]">{item.num}</span>
                <div>
                  <div className="font-mono text-[10px] text-[#111111]/60 mb-1">{item.date} // {item.cat}</div>
                  <h3 className="font-grotesk font-black text-lg sm:text-xl uppercase">{item.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#ff6b5e]">
                <span>READ</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
