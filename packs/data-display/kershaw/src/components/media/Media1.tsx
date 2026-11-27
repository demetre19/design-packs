import React from 'react';
import { Activity } from 'lucide-react';

export function Media1() {
  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto bg-[#14161a] border border-[#262c36] p-8 relative">
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#ffd500]" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#ffd500]" />
        
        <div className="text-center mb-8">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 01. CELL STAGE PLATE</span>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter mt-2">DYNAMOMETER CELL 04 STAGE VIEW</h2>
        </div>

        <div className="bg-[#0c0d0f] border border-[#262c36] h-72 flex flex-col items-center justify-center relative overflow-hidden">
          <Activity className="w-16 h-16 text-[#ffd500] mb-4 animate-pulse" />
          <span className="text-xs text-zinc-400">MACHINERY STAGE // LIVE OSCILLOSCOPE FEED</span>
          <span className="text-xs text-[#ffd500] mt-1">8,400 RPM // 612 NM</span>
        </div>
      </div>
    </section>
  );
}
