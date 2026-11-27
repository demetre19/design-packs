import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Media1() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-3 bg-halftone">
          <div className="relative aspect-[16/9] border-2 border-[#111111] overflow-hidden bg-[#ffd92e]">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" alt="Full Width Media" className="w-full h-full object-cover contrast-125 mix-blend-multiply" />
            <div className="absolute top-4 left-4 bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 border-2 border-[#111111] shadow-hard-sm">
              PLATE 01 // ARCHIVE CAPTURE
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-xs font-bold px-2 py-1">
            <span>FIG. 01: BERLIN PRINT LAB FLOOR // 300GSM RISO</span>
            <span className="text-[#ff6b5e] flex items-center gap-1">INSPECT <ArrowUpRight size={14} /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
