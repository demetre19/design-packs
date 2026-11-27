import React from 'react';
import { Terminal } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        {/* Barcode Accent Strip */}
        <div className="h-3 w-full bg-[repeating-linear-gradient(90deg,#111,#111_3px,#e8e8e6_3px,#e8e8e6_6px)] border-b border-[#111]" />

        <div className="p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="text-[9px] uppercase tracking-widest text-[#666] block mb-2">[CHIEF TEST DRIVER EVALUATION]</span>
            <blockquote className="text-xl sm:text-3xl font-black uppercase tracking-tight leading-snug">
              "WHEN YOU PUSH INTO 9,200 RPM ON THE DOT, THE ACOUSTIC RESONANCE AND CHASSIS FEEDBACK CONVERGE INTO AN UNRIVALED SENSORY DOSSIER."
            </blockquote>
          </div>

          <div className="lg:col-span-4 border-l lg:border-l-2 border-[#111] lg:pl-6 space-y-4 text-[10px]">
            <div>
              <span className="text-[#666] block text-[8px]">TESTER</span>
              <span className="font-bold text-base">KLAUS BECKER</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">TITLE</span>
              <span className="font-bold">CHIEF DEVELOPMENT DRIVER</span>
            </div>
            <div>
              <span className="text-[#666] block text-[8px]">VERIFICATION CODE</span>
              <span className="font-bold">VGH-99-REV4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
