import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto bg-white border border-[#0d0e10]/15 p-10 flex flex-col gap-8 rounded-[2px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#0d0e10]/10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">UNIVERSAL MESH LICENSE</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight uppercase">Strata Enterprise Core</h2>
          </div>
          <div className="text-right">
            <div className="text-4xl font-semibold font-mono tracking-tight">$8,900</div>
            <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60 mt-1">Per cluster / monthly dispatch</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Check className="w-4 h-4 text-[#2743f0]" />
            <span className="font-sans text-xs text-[#0d0e10]/80">Unlimited substation nodes</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-4 h-4 text-[#2743f0]" />
            <span className="font-sans text-xs text-[#0d0e10]/80">10,000 Hz real-time telemetry</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-4 h-4 text-[#2743f0]" />
            <span className="font-sans text-xs text-[#0d0e10]/80">Post-quantum lattice encryption</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-4 h-4 text-[#2743f0]" />
            <span className="font-sans text-xs text-[#0d0e10]/80">99.999% SLA uptime guarantee</span>
          </div>
        </div>

        <div className="pt-6 border-t border-[#0d0e10]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-mono text-[10px] text-[#0d0e10]/50 uppercase">[REGISTER ID: PRC-03-UNIV]</span>
          <a 
            href="#deploy" 
            className="w-full sm:w-auto bg-[#2743f0] text-white px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center justify-center gap-2 rounded-[2px]"
          >
            <span>Initialize License</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
