import React, { useState } from 'react';
import { Play, Pause, Activity } from 'lucide-react';

export function Media3() {
  const [playing, setPlaying] = useState(true);

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto bg-[#14161a] border border-[#262c36] p-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-[#ffd500] uppercase">// 03. CELL 04 VIDEO FEED</span>
          <span className="text-xs text-zinc-400">FPS: 60.0 // LIVE</span>
        </div>
        <div className="bg-[#0c0d0f] border border-[#262c36] h-72 flex flex-col items-center justify-center relative mb-6">
          <Activity className={`w-16 h-16 text-[#ffd500] mb-4 ${playing ? 'animate-pulse' : 'opacity-40'}`} />
          <span className="text-xs text-zinc-400">MACHINERY ROTOR CAM</span>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setPlaying(!playing)}
            className="bg-[#ffd500] text-black font-extrabold text-xs px-6 py-3 uppercase tracking-wider hover:bg-[#ffdf33] transition-colors flex items-center gap-2"
          >
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{playing ? 'PAUSE FEED' : 'RESUME FEED'}</span>
          </button>
          <span className="text-xs text-zinc-500 font-mono">STREAM ID: KD-CAM-04</span>
        </div>
      </div>
    </section>
  );
}
