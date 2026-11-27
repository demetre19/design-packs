import React from 'react';
import { Terminal } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>[TESTIMONIAL // ARCHIVE ENTRY T-01]</span>
          <span>VERIFIED DRIVER REPORT</span>
        </div>

        <div className="p-8 md:p-16 text-center">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8">
            "THE TORSIONAL RIGIDITY AND DOWNFORCE BALANCE ON THE K-99 SETS AN ENTIRELY NEW BENCHMARK FOR HOMOLOGATED TRACK MACHINES."
          </blockquote>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-[10px] border-t border-[#111] pt-6">
            <div className="border border-[#111] p-2">
              <span className="text-[#666] block text-[8px]">TEST DRIVER</span>
              <span className="font-bold">H. VON STUCK</span>
            </div>
            <div className="border border-[#111] p-2">
              <span className="text-[#666] block text-[8px]">CIRCUIT</span>
              <span className="font-bold">NURBURGRING NORDSCHLEIFE</span>
            </div>
            <div className="border border-[#111] p-2">
              <span className="text-[#666] block text-[8px]">LAP TIME</span>
              <span className="font-bold">6:42.88</span>
            </div>
            <div className="border border-[#111] p-2">
              <span className="text-[#666] block text-[8px]">DATE</span>
              <span className="font-bold">2026.10.14</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
