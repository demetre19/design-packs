import React, { useState } from 'react';
import { Play, Pause, Terminal } from 'lucide-react';

export function Media3() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white p-6 relative">
        <span className="absolute -top-2 -left-2 font-bold">+</span>
        <span className="absolute -top-2 -right-2 font-bold">+</span>
        <span className="absolute -bottom-2 -left-2 font-bold">+</span>
        <span className="absolute -bottom-2 -right-2 font-bold">+</span>

        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-4 text-[10px] uppercase">
          <span className="font-bold">[VIDEO TELEMETRY PLATE // MED-03]</span>
          <span>DURATION: 04:22</span>
        </div>

        <div className="w-full h-80 bg-[#111] relative overflow-hidden border border-[#111] flex items-center justify-center">
          <img src="https://picsum.photos/seed/kraftwerk_video/1200/700" alt="Video cover" className="w-full h-full object-cover grayscale contrast-125 opacity-70" />
          <div className="absolute inset-0 bg-[#111]/30 flex flex-col items-center justify-center">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-6 bg-white text-[#111] rounded-none border-2 border-[#111] hover:bg-[#e8e8e6] transition-colors cursor-pointer flex items-center space-x-2 font-bold text-xs uppercase"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              <span>{isPlaying ? 'PAUSE TELEMETRY FEED' : 'PLAY TELEMETRY FEED'}</span>
            </button>
            <span className="text-[9px] text-[#e8e8e6] mt-3 bg-[#111] px-2 py-0.5">STATUS: {isPlaying ? 'STREAMING ACTIVE' : 'STANDBY'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
