import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

export function Pricing2() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="w-full bg-white py-16 px-6 font-sans text-[#0d0e10] border-b border-[#0d0e10]/10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">FLEXIBLE BILLING MATRIX</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight uppercase">Predictable pricing for critical systems.</h2>
          
          <div className="flex items-center gap-4 bg-[#f2f3f5] p-1.5 border border-[#0d0e10]/10 rounded-[2px] mt-4 font-mono text-xs uppercase">
            <button 
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 transition-colors ${!annual ? 'bg-[#2743f0] text-white' : 'text-[#0d0e10]/70 hover:text-[#0d0e10]'}`}
            >
              Monthly Dispatch
            </button>
            <button 
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 transition-colors flex items-center gap-2 ${annual ? 'bg-[#2743f0] text-white' : 'text-[#0d0e10]/70 hover:text-[#0d0e10]'}`}
            >
              <span>Annual Dispatch</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-[2px] ${annual ? 'bg-white text-[#2743f0]' : 'bg-[#2743f0] text-white'}`}>SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          <div className="bg-[#f2f3f5] p-8 border border-[#0d0e10]/10 flex flex-col justify-between gap-8 rounded-[2px]">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">Substation Node Tier</span>
                <span className="font-mono text-xs text-[#0d0e10]/40">[01]</span>
              </div>
              <div>
                <div className="text-4xl font-semibold font-mono tracking-tight">{annual ? "$1,920" : "$2,400"}</div>
                <div className="font-mono text-[10px] text-[#0d0e10]/60 uppercase tracking-wider mt-1">per node / {annual ? 'billed annually' : 'billed monthly'}</div>
              </div>
              <p className="text-[#0d0e10]/70 text-xs leading-relaxed">Essential telemetry and microgrid balancing for regional substations.</p>
              <div className="space-y-3 font-mono text-xs pt-4 border-t border-[#0d0e10]/10">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">10 Active Substation Nodes</span></div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">10,000 Hz Logging Pipeline</span></div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">99.9% SLA Guarantee</span></div>
              </div>
            </div>
            <a href="#subscribe" className="bg-[#0d0e10] text-white hover:bg-[#2743f0] transition-colors py-3 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-[2px]">
              <span>Deploy Node Tier</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white p-8 border border-[#2743f0] flex flex-col justify-between gap-8 rounded-[2px] shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#2743f0]">Enterprise Grid OS</span>
                <span className="font-mono text-xs text-[#0d0e10]/40">[02]</span>
              </div>
              <div>
                <div className="text-4xl font-semibold font-mono tracking-tight">{annual ? "$7,120" : "$8,900"}</div>
                <div className="font-mono text-[10px] text-[#0d0e10]/60 uppercase tracking-wider mt-1">per cluster / {annual ? 'billed annually' : 'billed monthly'}</div>
              </div>
              <p className="text-[#0d0e10]/70 text-xs leading-relaxed">Full autonomous control suite and post-quantum encryption for utilities.</p>
              <div className="space-y-3 font-mono text-xs pt-4 border-t border-[#0d0e10]/10">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">Unlimited Substation Nodes</span></div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">Sub-Millisecond Phasor Sync</span></div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-[#2743f0]" /><span className="font-sans text-xs">99.999% Uptime SLA</span></div>
              </div>
            </div>
            <a href="#subscribe" className="bg-[#2743f0] text-white hover:bg-[#1d32c4] transition-colors py-3 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-[2px]">
              <span>Initialize Enterprise</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
