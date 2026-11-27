import React from 'react';
import { Compass, Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto border-2 border-white/40 p-8 bg-[#142d48] relative">
        <div className="absolute -top-3 left-6 bg-cyan-400 text-[#1b3a5c] px-3 py-0.5 text-[10px] font-bold">
          TESTIMONIAL // DWG REF: REF-01
        </div>

        <div className="space-y-6 text-center my-6">
          <Quote className="w-10 h-10 text-cyan-300 mx-auto opacity-70" />
          <blockquote className="text-base md:text-xl font-bold uppercase tracking-tight leading-relaxed max-w-2xl mx-auto">
            "Atelier Orthogonal's adherence to precise structural tolerances and orthogonal spatial logic transformed our civic project into a masterpiece of engineering."
          </blockquote>
          
          {/* Leader line attribution */}
          <div className="pt-6 border-t border-white/20 flex flex-col items-center justify-center">
            <div className="w-16 h-px bg-cyan-300 my-2 relative">
              <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-cyan-300" />
              <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-cyan-300" />
            </div>
            <div className="font-bold tracking-widest text-sm text-cyan-300">ELENA VANCE, AIA</div>
            <div className="text-[10px] text-cyan-100">DIRECTOR OF URBAN DEVELOPMENT, METROPOLIS CORP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
