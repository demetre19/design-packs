import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export function Hero2() {
  return (
    <section className="bg-[#f5f4f0] text-black border-b-4 border-black font-sans py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Massive black type mass left */}
        <div className="lg:col-span-8 bg-black text-white p-8 md:p-12 flex flex-col justify-between border-4 border-black">
          <div className="inline-flex items-center space-x-2 border border-neutral-700 px-3 py-1 text-[10px] font-mono uppercase w-max bg-neutral-900 text-neutral-300 mb-6">
            <span className="w-2 h-2 bg-[#f25c05] inline-block"></span>
            <span>SPLIT MASS // ARCHITECTURE 02</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] my-6">
            MASSIVE EARTH MOVING <span className="text-[#f25c05]">POWERED</span> BY NEURAL GRID MESH.
          </h1>

          <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4 items-center justify-between font-mono text-xs">
            <span className="text-neutral-400">SERIAL: TF-998-ALPHA</span>
            <button className="bg-[#f25c05] text-black px-6 py-3 font-black uppercase hover:bg-white transition-colors">
              Initialize Protocol
            </button>
          </div>
        </div>

        {/* Thin annotation column right with vast space */}
        <div className="lg:col-span-4 flex flex-col justify-between font-mono text-xs p-4 border-2 border-black bg-white">
          <div className="space-y-6">
            <div className="border-b border-black pb-3">
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">01 // LATENCY</span>
              <span className="font-bold text-sm">0.04ms FIBER BACKBONE</span>
            </div>
            <div className="border-b border-black pb-3">
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">02 // PRESSURE TOLERANCE</span>
              <span className="font-bold text-sm">14,000 PSI HYDRAULIC</span>
            </div>
            <div className="border-b border-black pb-3">
              <span className="text-[10px] text-neutral-500 uppercase block mb-1">03 // CERTIFICATION</span>
              <span className="font-bold text-sm text-[#f25c05]">ISO-9001 COMPLIANT</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-black text-[10px] text-neutral-500">
            TITAN FORGE INDUSTRIAL // 2026 SPECS
          </div>
        </div>
      </div>
    </section>
  );
}
