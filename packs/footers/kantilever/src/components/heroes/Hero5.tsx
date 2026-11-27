import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero5: React.FC = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-20 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Narrow text column left */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-block bg-[#14161a] text-[#ffc72c] px-3 py-1 font-mono text-xs uppercase font-bold">
            05 // DIAGONAL MASTERY
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            THE TOKYO ANGULAR RESIDENCE
          </h1>
          <p className="text-sm text-[#14161a]/80 font-sans leading-relaxed">
            Nestled in hillside topography with cantilevered viewing platforms angled precisely at 12 degrees toward Mount Fuji.
          </p>
          <div className="pt-2">
            <a
              href="#view"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#14161a] hover:text-[#f7f6f3] transition-colors"
            >
              Inspect Blueprint <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Tall trapezoid image mask right */}
        <div className="lg:col-span-7 relative">
          <div className="relative w-full h-[450px] bg-[#14161a] overflow-hidden" style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Tokyo Angular Residence"
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
          </div>
          <div className="absolute bottom-[-15px] left-10 bg-[#14161a] text-[#f7f6f3] px-4 py-2 font-mono text-xs uppercase">
            AREA: 420 m² // LEVELS: 3 // YEAR: 2025
          </div>
        </div>
      </div>
    </section>
  );
};
