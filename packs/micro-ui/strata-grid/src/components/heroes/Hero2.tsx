import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">REGISTER SPECIFICATION // H-02</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1]">
            Deterministic control for critical infrastructure.
          </h1>
          <p className="text-[#0d0e10]/70 text-sm leading-relaxed">
            Eliminate brownouts and energy loss with decentralized neural dispatch algorithms operating directly at the substation edge.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="#trial" 
              className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
            >
              <span>Deploy Sandbox</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#f2f3f5] border border-[#0d0e10]/10 p-6 rounded-[2px]">
          <div className="flex items-center justify-between pb-4 border-b border-[#0d0e10]/10 font-mono text-[11px] uppercase tracking-wider font-semibold">
            <span>Parameter Register</span>
            <span className="text-[#2743f0]">Status: Nominal</span>
          </div>
          <div className="divide-y divide-[#0d0e10]/10 font-mono text-xs">
            <div className="py-3 flex justify-between items-center">
              <span className="text-[#0d0e10]/60 uppercase text-[10px]">Architecture</span>
              <span className="font-medium">Distributed Microkernel</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-[#0d0e10]/60 uppercase text-[10px]">Switching Speed</span>
              <span className="font-medium text-[#2743f0]">120 microsecond</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-[#0d0e10]/60 uppercase text-[10px]">Fault Tolerance</span>
              <span className="font-medium">N+2 Redundant Mesh</span>
            </div>
            <div className="py-3 flex justify-between items-center">
              <span className="text-[#0d0e10]/60 uppercase text-[10px]">Encryption Standard</span>
              <span className="font-medium">Post-Quantum Lattice</span>
            </div>
          </div>
          <div className="pt-4 flex justify-between items-center font-mono text-[10px] text-[#0d0e10]/50 border-t border-[#0d0e10]/10">
            <span>CERTIFIED ISO-27001</span>
            <span>[REG_ID: 9942-X]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
