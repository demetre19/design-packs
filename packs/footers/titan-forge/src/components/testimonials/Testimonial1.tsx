import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          TESTIMONIAL // SYSTEM 01
        </div>

        <div className="border-4 border-black bg-white p-8 md:p-16 relative">
          <Quote className="w-16 h-16 text-[#f25c05] mb-6 opacity-40" />

          <blockquote className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-8">
            "Titan Forge automated excavator grids increased our copper extraction tonnage by 340% within forty-eight hours of deployment. Absolute industrial reliability."
          </blockquote>

          {/* Thin attribution layer */}
          <div className="pt-6 border-t-2 border-black flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs">
            <div>
              <span className="font-bold uppercase block text-sm">MARCUS VANCE</span>
              <span className="text-neutral-500">CHIEF OPERATIONS OFFICER // ATLAS EXTRACTION CORP</span>
            </div>
            <div className="mt-4 md:mt-0 text-[10px] text-[#f25c05] font-bold uppercase border border-black px-3 py-1 bg-black text-white">
              VERIFIED DEPLOYMENT // SITE #409
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
