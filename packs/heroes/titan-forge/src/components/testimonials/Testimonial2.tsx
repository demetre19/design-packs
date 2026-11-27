import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          BLACK MASS TESTIMONIAL // SYSTEM 02
        </div>

        <div className="bg-black text-white p-8 md:p-16 border-4 border-black">
          <Quote className="w-12 h-12 text-[#f25c05] mb-6" />

          <blockquote className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
            "THE THERMAL TOLERANCE AND ACOUSTIC TELEMETRY HAVE ELIMINATED CATASTROPHIC DRILL FAILURES ACROSS OUR SUB-ZERO SITES."
          </blockquote>

          <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs">
            <div>
              <span className="font-bold text-white uppercase block text-sm">ELENA ROSTOVA</span>
              <span className="text-neutral-400 text-[10px] uppercase">DIRECTOR OF INFRASTRUCTURE // SIBERIAN ORE MESH</span>
            </div>
            <div className="mt-4 md:mt-0 text-[10px] text-black bg-[#f25c05] px-3 py-1 font-bold uppercase">
              SECTOR 9 // DEPLOYED 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
