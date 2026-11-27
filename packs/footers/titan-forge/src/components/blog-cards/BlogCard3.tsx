import React from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogCard3() {
  const archives = [
    { num: "01", title: "AUTONOMOUS MESH TOPOLOGY & LATENCY OPTIMIZATION", date: "NOV 2026", cat: "SYSTEMS" },
    { num: "02", title: "HIGH-TENSILE ALLOY METALLURGY FOR EXTREME PRESSURE", date: "OCT 2026", cat: "HARDWARE" },
    { num: "03", title: "GEOTHERMAL POWER HARVESTING IN DESERT EXTRACTION", date: "SEP 2026", cat: "ENERGY" },
    { num: "04", title: "PREDICTIVE MAINTENANCE PROTOCOLS FOR HEAVY DIESEL UNITS", date: "AUG 2026", cat: "MAINTENANCE" }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          ARCHIVE REGISTER // BLOG 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          ARCHIVE <span className="text-[#f25c05]">REGISTER</span>.
        </h2>

        <div className="space-y-4 font-mono">
          {archives.map((item) => (
            <div key={item.num} className="border-2 border-black bg-white p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-black hover:text-white transition-colors group cursor-pointer">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="text-3xl font-black text-neutral-400 group-hover:text-[#f25c05]">{item.num}</span>
                <div>
                  <h3 className="font-sans font-black text-xl uppercase tracking-tight">{item.title}</h3>
                  <span className="text-[10px] text-neutral-500 uppercase">{item.date} // {item.cat}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase text-[#f25c05]">
                <span>Access Record</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
