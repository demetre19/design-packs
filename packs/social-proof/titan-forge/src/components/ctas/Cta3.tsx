import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Cta3() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t-4 border-b-4 border-black py-12 flex flex-col md:flex-row items-center justify-between bg-white px-8">
          <div className="mb-6 md:mb-0">
            <span className="font-mono text-[10px] text-[#f25c05] uppercase tracking-widest block mb-1">MINIMAL ACTION // CTA 03</span>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
              READY FOR SITE SURVEY?
            </h3>
          </div>
          <button className="bg-black text-white px-8 py-4 font-mono text-xs font-black uppercase tracking-wider hover:bg-[#f25c05] hover:text-black transition-colors flex items-center space-x-2">
            <span>Request Dispatch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
