import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#111]">
          <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-[#f4f4f0]">
            <div>
              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#666] mb-4">
                <Terminal className="w-3 h-3" />
                <span>ASYMMETRIC DATASHEET</span>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">
                WORKS ALLOCATION
              </h3>
              <p className="text-[10px] text-[#555] uppercase leading-relaxed">
                Tailored engineering packages designed for private collectors and professional race teams demanding uncompromising specification integrity.
              </p>
            </div>
            <div className="mt-8">
              <span className="text-3xl font-black block mb-2">$495,000</span>
              <span className="text-[9px] text-[#666] block">ALL-INCLUSIVE FACTORY RELEASE</span>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4 text-[10px]">
              <div className="flex justify-between border-b border-[#111] pb-3">
                <span className="text-[#666]">CHASSIS NUMBER ALLOCATION</span>
                <span className="font-bold">PRE-ASSIGNED K-044</span>
              </div>
              <div className="flex justify-between border-b border-[#111] pb-3">
                <span className="text-[#666]">ENGINE TUNING MAP</span>
                <span className="font-bold">UNRESTRICTED 9,200 RPM</span>
              </div>
              <div className="flex justify-between border-b border-[#111] pb-3">
                <span className="text-[#666]">TELEMETRY SUBSCRIPTION</span>
                <span className="font-bold">LIFETIME CLOUD ACCESS</span>
              </div>
              <div className="flex justify-between border-b border-[#111] pb-3">
                <span className="text-[#666]">TRACK SUPPORT ENGINEERS</span>
                <span className="font-bold">2 DEDICATED SPECIALISTS</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Submitting allocation request...')}
              className="mt-8 w-full py-4 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
            >
              <span>SUBMIT ALLOCATION REQUEST</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
