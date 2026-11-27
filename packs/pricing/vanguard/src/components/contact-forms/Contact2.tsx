import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Contact2() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">CONTACT // 02</span>
          <h2 className="text-3xl font-black tracking-tighter uppercase font-sans">
            CENTERED DARK <span className="text-[#ff3d00]">FORM</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] space-y-6">
          <div className="space-y-4 text-xs">
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">CALLSIGN</label>
              <input type="text" placeholder="SPECTRE-01" className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none" />
            </div>
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">SECURE CHANNEL</label>
              <input type="text" placeholder="SEC-409.2" className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none" />
            </div>
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">DISPATCH MESSAGE</label>
              <textarea rows={3} placeholder="Telemetry stream verified..." className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none resize-none" />
            </div>
          </div>
          <button className="w-full bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest py-3.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center justify-center space-x-2">
            <span>TRANSMIT DISPATCH</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
