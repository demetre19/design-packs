import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Pricing2() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          FLAGSHIP LICENSE // PRICING 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
          UNIFIED ENTERPRISE <span className="text-[#f25c05]">COMMAND</span>.
        </h2>

        {/* Single centered massive price tile */}
        <div className="border-4 border-black bg-black text-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-800 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono text-[#f25c05] uppercase tracking-widest block mb-2">ALL-INCLUSIVE EXTRACTION GRID</span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">TITAN PRIME OMNI-LICENSE</h3>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <div className="text-5xl md:text-6xl font-black font-mono tracking-tighter text-[#f25c05]">$24,800</div>
              <div className="font-mono text-xs text-neutral-400 uppercase mt-1">PER SITE / MONTHLY BILLING</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs mb-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">Unlimited Autonomous Excavators</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">0.04ms Fiber Backbone Latency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">Real-Time Acoustic Stress AI</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">Dedicated Satellite Relay Feed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">99.99% Uptime Absolute SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#f25c05]" />
                <span className="text-neutral-300">On-Site Titan Master Engineers</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-[#f25c05] text-black py-4 font-mono text-xs font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center space-x-2">
            <span>Deploy Enterprise License Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
