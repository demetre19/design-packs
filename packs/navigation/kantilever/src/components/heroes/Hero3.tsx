import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero3: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] bg-[#14161a] overflow-hidden flex items-end">
      {/* Full-bleed image with diagonal gradient scrim */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
          alt="Full Bleed Architecture"
          className="w-full h-full object-cover filter saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-[#14161a]/60 to-transparent" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 pb-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8 space-y-4">
          <div className="inline-block bg-[#ffc72c] text-[#14161a] px-3 py-1 font-mono text-xs uppercase font-bold transform skew-x-[-12deg]">
            FEATURED MONOGRAPH // 2026
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-[#f7f6f3] tracking-tight">
            THE OSLO FJORD CANTILEVER TOWER
          </h1>
          <p className="text-sm text-[#f7f6f3]/80 font-sans max-w-lg">
            Structural steel lattices arranged at 14-degree angles resisting arctic shear winds while framing panoramic maritime vistas.
          </p>
        </div>

        <div className="md:col-span-4 flex justify-start md:justify-end">
          <a
            href="#case-study"
            className="px-6 py-4 bg-[#ffc72c] text-[#14161a] text-xs font-bold uppercase tracking-wider hover:bg-[#f7f6f3] transition-colors flex items-center gap-2"
          >
            View Monograph <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
