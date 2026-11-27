import React from 'react';
import { ArrowUpRight, Shield, Zap, Activity } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#2743f0]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">AUTONOMOUS GRID OS // H-05</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight uppercase leading-[1.1]">
              Engineered for absolute grid resilience.
            </h1>
            <p className="text-[#0d0e10]/70 text-sm leading-relaxed">
              Strata Grid replaces legacy SCADA with high-frequency telemetry and autonomous self-healing substations.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="#start" 
                className="bg-[#2743f0] text-white px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#1d32c4] transition-colors flex items-center gap-2 rounded-[2px]"
              >
                <span>Deploy Engine</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#0d0e10]/15 p-8 rounded-[2px] relative">
            <div className="flex justify-between items-center pb-4 border-b border-[#0d0e10]/10 font-mono text-xs">
              <span className="font-semibold uppercase">Substation Telemetry Feed</span>
              <span className="text-[#2743f0]">LIVE STREAM</span>
            </div>
            <div className="py-8 flex flex-col gap-6">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#0d0e10]/60">Substation Alpha-1</span>
                <span className="font-semibold text-[#2743f0]">1,240 MW // 99.9% Efficiency</span>
              </div>
              <div className="w-full bg-[#f2f3f5] h-2 rounded-[2px] overflow-hidden">
                <div className="bg-[#2743f0] h-full w-[88%]" />
              </div>
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#0d0e10]/60">Substation Beta-4</span>
                <span className="font-semibold text-[#0d0e10]">980 MW // 99.4% Efficiency</span>
              </div>
              <div className="w-full bg-[#f2f3f5] h-2 rounded-[2px] overflow-hidden">
                <div className="bg-[#0d0e10] h-full w-[72%]" />
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-[#0d0e10]/10 font-mono text-[10px] text-[#0d0e10]/40">
              <span>LATENCY: 0.38MS</span>
              <span>[05]</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#0d0e10]/10 pt-8">
          <div className="bg-white p-4 border border-[#0d0e10]/10 flex items-center gap-4 rounded-[2px]">
            <Zap className="w-5 h-5 text-[#2743f0]" />
            <div>
              <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60">Uptime Guarantee</div>
              <div className="font-mono text-sm font-semibold mt-0.5">99.999% SLA</div>
            </div>
          </div>
          <div className="bg-white p-4 border border-[#0d0e10]/10 flex items-center gap-4 rounded-[2px]">
            <Shield className="w-5 h-5 text-[#2743f0]" />
            <div>
              <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60">Security Clearance</div>
              <div className="font-mono text-sm font-semibold mt-0.5">NIST SP 800-53</div>
            </div>
          </div>
          <div className="bg-white p-4 border border-[#0d0e10]/10 flex items-center gap-4 rounded-[2px]">
            <Activity className="w-5 h-5 text-[#2743f0]" />
            <div>
              <div className="font-mono text-[10px] uppercase text-[#0d0e10]/60">Global Nodes</div>
              <div className="font-mono text-sm font-semibold mt-0.5">14,800+ Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
