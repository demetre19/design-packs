import React from 'react';
import { Play, Radio } from 'lucide-react';

export function Media1() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border-b border-[#2a2d35] pb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">MEDIA // 01</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
              CINEMATIC PLATE <span className="text-[#ff3d00]">HUD</span>
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#ff3d00]">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>LIVE FEED // BAY 4</span>
          </div>
        </div>

        <div className="bg-[#20232a] border border-[#3a3e4c] p-4 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative">
          {/* HUD Corner Brackets */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#ff3d00] z-10" />
          <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#ff3d00] z-10" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#ff3d00] z-10" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#ff3d00] z-10" />

          <div className="h-96 bg-[#16181d] border border-[#2a2d35] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ff3d0015_1px,transparent_1px)] [background-size:16px_16px]" />
            <button className="bg-[#ff3d00] hover:bg-[#e03500] text-white p-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] relative z-20 flex items-center space-x-3">
              <Play className="w-6 h-6 fill-current" />
              <span className="text-xs font-black tracking-widest uppercase">ENGAGE CINEMATIC FEED</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
