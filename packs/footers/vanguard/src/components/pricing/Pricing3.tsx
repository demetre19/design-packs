import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Pricing3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">PRICING // 03</span>
          <h2 className="text-3xl font-black tracking-tighter uppercase font-sans">
            SINGLE READOUT <span className="text-[#ff3d00]">PANEL</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] text-center space-y-6">
          <div className="inline-block bg-[#ff3d00]/10 border border-[#ff3d00]/40 px-3 py-1 text-xs font-bold text-[#ff3d00]">
            STANDARD RESEARCH PASS
          </div>
          <div className="text-5xl font-black font-sans">$24,000</div>
          <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
            Full 24-hour wind tunnel telemetry bay reservation with automated data logging and encrypted downlink.
          </p>
          <div className="pt-4">
            <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-3.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2 mx-auto">
              <span>SECURE RESERVATION</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
