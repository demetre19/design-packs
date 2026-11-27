import React from 'react';
import { ArrowUpRight, Cpu } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">STRATA GRID OS // PLATFORM 04</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1]">
            Precision infrastructure engineered for the energy transition.
          </h1>
          <p className="text-[#0d0e10]/70 text-sm leading-relaxed">
            Unifying high-speed telemetry, distributed control nodes, and predictive load balancing into a singular coherent architecture.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="#explore" 
              className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#f2f3f5] border border-[#0d0e10]/15 p-8 relative rounded-[2px] overflow-hidden">
          {/* Dot grid background texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0d0e10 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-between items-center pb-4 border-b border-[#0d0e10]/10">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#2743f0]" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Matrix</span>
              </div>
              <span className="font-mono text-[10px] text-[#2743f0] bg-white px-2 py-1 border border-[#2743f0]/30 rounded-[2px]">ONLINE</span>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs">
              <div className="bg-white p-4 border border-[#0d0e10]/10 rounded-[2px]">
                <div className="text-[10px] text-[#0d0e10]/50 uppercase">Grid Topology</div>
                <div className="font-semibold mt-1">Mesh-Distributed</div>
              </div>
              <div className="bg-white p-4 border border-[#0d0e10]/10 rounded-[2px]">
                <div className="text-[10px] text-[#0d0e10]/50 uppercase">Dispatch Cycle</div>
                <div className="font-semibold mt-1 text-[#2743f0]">250 Hz Real-Time</div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 font-mono text-[10px] text-[#0d0e10]/40">
              <span>SYS_INIT_OK</span>
              <span>[04]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
