import React from 'react';
import { ArrowRight, Cpu, Activity } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// FEATURED RESEARCH</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">ENGINEERING BREAKTHROUGHS</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Story */}
          <div className="lg:col-span-7 bg-[#16181d] border border-[#272a33] p-8 clip-corner-lg flex flex-col justify-between group hover:border-[#ff5a1f] transition-all">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono-spec text-[10px] text-[#ff5a1f] bg-[#ff5a1f]/10 px-3 py-1 clip-corner">COVER STORY</span>
                <span className="font-mono-spec text-[10px] text-neutral-500">2026.11.24</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl text-white mb-4 group-hover:text-[#ff5a1f] transition-colors">
                SOLID-STATE BATTERY CELL INTEGRATION IN 800V ARCHITECTURES
              </h3>
              <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed mb-8">
                Achieving 500 Wh/kg volumetric energy density without thermal runaway risk. Flight testing and dyno durability metrics from our Munich R&D facility.
              </p>
            </div>
            <button className="bg-transparent border border-[#ff5a1f] text-[#ff5a1f] font-extrabold text-xs px-6 py-3 clip-corner hover:bg-[#ff5a1f] hover:text-black transition-colors flex items-center gap-2 w-max cursor-pointer">
              <span>READ FULL WHITEPAPER</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Technical Rows */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { date: '2026.11.18', title: 'Torque Vectoring Algorithm v4.2', cat: 'SOFTWARE' },
              { date: '2026.11.12', title: 'Aero Downforce Wind Tunnel Report', cat: 'AERODYNAMICS' },
              { date: '2026.11.05', title: 'Brembo Carbon-Ceramic Wear Metrics', cat: 'BRAKING' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#16181d] border border-[#272a33] p-6 clip-corner hover:border-[#ff5a1f] transition-all group cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono-spec text-[10px] text-[#ff5a1f]">{item.cat}</span>
                  <span className="font-mono-spec text-[10px] text-neutral-500">{item.date}</span>
                </div>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#ff5a1f] transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
