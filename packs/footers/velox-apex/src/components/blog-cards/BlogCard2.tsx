import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// FEATURED STORY COLLISION</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          FRONT-PAGE <span className="text-[#ff2e00]">INVESTIGATION</span>
        </h2>

        {/* Featured story as full-bleed collision + small card rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border-2 border-black bg-black text-white relative overflow-hidden group p-8 flex flex-col justify-end min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80" 
              alt="Featured story"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity filter contrast-125 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <div className="font-mono text-[10px] text-[#ff2e00] font-bold mb-2">// INVESTIGATION // 01</div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
                THE DEATH OF COMBUSTION IN PROFESSIONAL ROAD RACING
              </h3>
              <p className="font-mono text-xs text-neutral-300 mb-6 max-w-lg">
                How solid-state batteries and brushless torque vectoring rendered gasoline obsolete on world circuits.
              </p>
              <div className="inline-flex items-center gap-2 bg-[#ff2e00] text-black font-black px-4 py-2 uppercase text-xs tracking-wider">
                <span>READ DISPATCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-2 border-black p-6 bg-white hover:bg-neutral-50 transition-colors">
              <div className="font-mono text-[10px] text-neutral-500 mb-1">// 02. CHASSIS DYNAMICS</div>
              <h4 className="font-black text-xl uppercase mb-2">CARBON FIBER TENSION</h4>
              <p className="font-mono text-xs text-neutral-600 mb-4">Analyzing torsional flex limits under 64-degree lean angles.</p>
              <div className="font-mono text-xs font-bold text-[#ff2e00] flex items-center gap-1">READ MORE →</div>
            </div>

            <div className="border-2 border-black p-6 bg-white hover:bg-neutral-50 transition-colors">
              <div className="font-mono text-[10px] text-neutral-500 mb-1">// 03. SOFTWARE ECU</div>
              <h4 className="font-black text-xl uppercase mb-2">5KHZ TRACTION MAPPING</h4>
              <p className="font-mono text-xs text-neutral-600 mb-4">Neural networks predicting rear wheel slip before loss of grip.</p>
              <div className="font-mono text-xs font-bold text-[#ff2e00] flex items-center gap-1">READ MORE →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
