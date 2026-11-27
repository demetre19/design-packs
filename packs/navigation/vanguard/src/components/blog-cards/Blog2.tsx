import React from 'react';

export function Blog2() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FLIGHT LOGS // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            FEATURED TEST REPORT + <span className="text-[#ff3d00]">TECHNICAL ROWS</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 h-64 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
            <span className="text-xs font-bold text-[#ff3d00]">SORTIE S-09 REPORT PLATE</span>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3 text-xs">
              <span className="bg-[#ff3d00] text-black font-extrabold px-2 py-0.5">FEATURED</span>
              <span className="text-zinc-400">2026.11.20 // BAY 4</span>
            </div>
            <h3 className="text-2xl font-black uppercase font-sans">X-99 SPECTRE REACHES MACH 4.8 SUSTAINED CRUISE</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              During sortie S-09, the X-99 test vehicle achieved sustained Mach 4.8 cruise for 14 minutes at FL650. Scramjet combustion stability remained flawless throughout the envelope expansion.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#3a3e4c] text-xs">
              <div>
                <div className="text-zinc-400 text-[10px]">SPEED</div>
                <div className="font-bold text-[#ff3d00]">MACH 4.8</div>
              </div>
              <div>
                <div className="text-zinc-400 text-[10px]">ALTITUDE</div>
                <div className="font-bold text-white">FL650</div>
              </div>
              <div>
                <div className="text-zinc-400 text-[10px]">STATUS</div>
                <div className="font-bold text-emerald-400">SUCCESS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
