import React from 'react';
import { Play } from 'lucide-react';

export function Media3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">MEDIA // 03</span>
          <h2 className="text-3xl font-black tracking-tighter uppercase font-sans">
            VIDEO PLATE WITH <span className="text-[#ff3d00]">ANGULAR PLAY CONTROL</span>
          </h2>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-6 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] space-y-4">
          <div className="h-72 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:16px_16px]" />
            <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white p-4 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] relative z-10 flex items-center space-x-2">
              <Play className="w-5 h-5 fill-current" />
              <span className="text-xs font-black uppercase tracking-widest">PLAY TELEMETRY REEL</span>
            </button>
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>SORTIE S-04 // FLIGHT DEBRIEF</span>
            <span className="text-[#ff3d00] font-bold">04:12 / 12:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
