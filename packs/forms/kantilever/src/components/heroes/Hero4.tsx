import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero4: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] pt-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// FLAGSHIP URBAN INTERVENTION</span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
            GENEVA MONOLITH // CONCRETE & GLASS TECTONICS
          </h1>
          <p className="text-base text-[#14161a]/80 font-sans leading-relaxed">
            Suspended over municipal rail corridors with zero intermediate footing. A triumph of cantilevered physics and brutalist refinement.
          </p>
          <a
            href="#explore"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#14161a] text-[#f7f6f3] text-xs font-bold uppercase tracking-wider hover:bg-[#ffc72c] hover:text-[#14161a] transition-colors"
          >
            Access Specification <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom stat strip in angled-edge blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#14161a]/15 border-t border-[#14161a]/15">
          <div className="bg-[#f7f6f3] p-6 transform hover:-translate-y-1 transition-transform">
            <span className="text-[10px] font-mono text-[#14161a]/50 uppercase block">// TOTAL BUILT AREA</span>
            <span className="text-2xl md:text-3xl font-extrabold font-mono mt-1 block">3,450 m²</span>
          </div>
          <div className="bg-[#f7f6f3] p-6 transform hover:-translate-y-1 transition-transform">
            <span className="text-[10px] font-mono text-[#14161a]/50 uppercase block">// STRUCTURAL LEVELS</span>
            <span className="text-2xl md:text-3xl font-extrabold font-mono mt-1 block">6 Levels</span>
          </div>
          <div className="bg-[#f7f6f3] p-6 transform hover:-translate-y-1 transition-transform bg-gradient-to-r from-[#ffc72c]/10 to-transparent">
            <span className="text-[10px] font-mono text-[#14161a]/50 uppercase block">// COMPLETION DATE</span>
            <span className="text-2xl md:text-3xl font-extrabold font-mono mt-1 block">2026 Q3</span>
          </div>
        </div>
      </div>
    </section>
  );
};
