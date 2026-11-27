import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Blog2: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// FEATURED MONOGRAPH STORY</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            THE OSLO FJORD CANTILEVER STUDY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <div className="relative w-full h-[400px] bg-[#14161a] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                alt="Oslo Fjord"
                className="w-full h-full object-cover filter saturate-[0.8]"
              />
            </div>
            <p className="text-base text-[#14161a]/80 font-sans leading-relaxed">
              Facing fierce maritime gales and harsh sub-zero conditions, the Oslo Fjord cantilever tower required an entirely novel structural exoskeleton. By anchoring 40 meters into bedrock and extending outward in a 14-degree diagonal sweep, the building minimizes footprint while maximizing panoramic maritime exposure.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 bg-[#14161a] text-[#f7f6f3] p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-mono text-xs text-[#ffc72c] uppercase">// TECHNICAL SPECIFICATION ROWS</span>
              <div className="space-y-4 font-mono text-xs divide-y divide-[#f7f6f3]/15">
                <div className="pt-3 flex justify-between">
                  <span className="opacity-60">STEEL GRADE</span>
                  <span className="font-bold">S690QL</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="opacity-60">WIND LOAD</span>
                  <span className="font-bold">2.4 kN/m²</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="opacity-60">SEISMIC RATING</span>
                  <span className="font-bold">ZONE 4</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="opacity-60">COMPLETION</span>
                  <span className="font-bold">Q4 2026</span>
                </div>
              </div>
            </div>

            <a
              href="#full-spec"
              className="w-full py-3.5 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#f7f6f3] transition-colors"
            >
              Full Technical Brief <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
