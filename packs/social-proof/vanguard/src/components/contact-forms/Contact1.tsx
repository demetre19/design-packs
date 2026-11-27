import React from 'react';
import { ChevronRight, Radio } from 'lucide-react';

export function Contact1() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Spec panel left */}
        <div className="lg:col-span-5 bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] space-y-6">
          <div className="flex items-center space-x-2 text-xs text-[#ff3d00] font-bold">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>SECURE PROGRAM DISPATCH</span>
          </div>
          <h2 className="text-2xl font-black uppercase font-sans">PROGRAM OFFICE CONTACT</h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Submit flight test contract inquiries or telemetry bay reservation requests directly to Vanguard Hypersonics command.
          </p>
          <div className="space-y-3 text-xs border-t border-[#3a3e4c] pt-6 text-zinc-400">
            <div>FACILITY: AREA 51 // BAY 4</div>
            <div>FREQUENCY: 409.2 MHz SECURE</div>
            <div>CLEARANCE: LEVEL-4 REQUIRED</div>
          </div>
        </div>

        {/* Form right */}
        <div className="lg:col-span-7 bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] space-y-6">
          <div className="space-y-4 text-xs">
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">OPERATOR / CALLSIGN</label>
              <input
                type="text"
                placeholder="COL. M. VANCE"
                className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none"
              />
            </div>
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">SECURE FREQ / EMAIL</label>
              <input
                type="email"
                placeholder="vance@vanguard-hypersonics.mil"
                className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none"
              />
            </div>
            <div>
              <label className="text-zinc-400 uppercase tracking-widest block mb-2">MISSION INQUIRY / TELEMETRY BRIEF</label>
              <textarea
                rows={4}
                placeholder="Requesting wind tunnel bay 4 reservation for Mach 4.2 ramjet testing..."
                className="w-full bg-[#16181d] border border-[#3a3e4c] px-4 py-3 text-white focus:border-[#ff3d00] outline-none resize-none"
              />
            </div>
          </div>
          <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white font-black text-xs tracking-widest px-8 py-3.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] flex items-center space-x-2">
            <span>TRANSMIT DISPATCH</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
