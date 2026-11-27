import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] uppercase font-bold flex justify-between">
          <span>[SINGLE ALLOCATION PRICE DATASHEET]</span>
          <span>REF: PR-02</span>
        </div>

        <div className="p-8 md:p-16 text-center border-b border-[#111]">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#666] block mb-4">BASE HOMOLOGATION PACKAGE</span>
          <div className="text-6xl sm:text-8xl font-black uppercase tracking-tighter">
            $385,000
          </div>
          <p className="text-xs uppercase tracking-widest text-[#555] mt-4">Includes chassis allocation, factory track delivery, and telemetry setup.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#111] text-[10px] bg-[#f8f8f6]">
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">DEPOSIT REQUIRED</span>
            <span className="font-bold text-sm">$50,000 USD</span>
          </div>
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">PRODUCTION LEAD TIME</span>
            <span className="font-bold text-sm">180 WORKING DAYS</span>
          </div>
          <div className="p-4">
            <span className="text-[#666] block text-[8px]">FACTORY DELIVERY</span>
            <span className="font-bold text-sm">STUTTGART, GERMANY</span>
          </div>
          <div className="p-4 bg-[#111] text-[#e8e8e6] flex flex-col justify-between">
            <span className="text-[8px] text-[#aaa]">ACTION</span>
            <button 
              onClick={() => alert('Allocating production slot...')}
              className="w-full py-2 bg-[#e8e8e6] text-[#111111] font-bold text-[9px] uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
            >
              SECURE SLOT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
