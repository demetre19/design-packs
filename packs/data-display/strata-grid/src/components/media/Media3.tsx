import React, { useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function Media3() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#f2f3f5] py-16 px-6 font-sans text-[#0d0e10]">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#2743f0]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#0d0e10]/60">TELEMETRY STREAM PLATE // MED-03</span>
          </div>
          <span className="font-mono text-[10px] text-[#0d0e10]/50">[STREAM_ID: 9942]</span>
        </div>

        <div className="bg-white border border-[#0d0e10]/15 p-6 rounded-[2px] flex flex-col gap-6">
          <div className="bg-[#0d0e10] text-white h-72 flex flex-col items-center justify-center gap-4 relative rounded-[2px] overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2743f0 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
            <div className="relative z-10 flex flex-col items-center text-center gap-2">
              <div className={`w-3 h-3 bg-[#2743f0] ${isPlaying ? 'animate-ping' : ''}`} />
              <div className="font-mono text-sm uppercase font-semibold">
                {isPlaying ? 'Streaming Substation Phasor Telemetry...' : 'Stream Paused (Ready to Dispatch)'}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#0d0e10]/10 pt-4 font-mono text-xs">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-[#2743f0] text-white px-4 py-2 uppercase tracking-widest hover:bg-[#1d32c4] flex items-center gap-2 rounded-[2px]"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause Feed' : 'Play Feed'}</span>
              </button>
              <button className="border border-[#0d0e10]/20 p-2 hover:border-[#0d0e10] rounded-[2px]">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            <span className="text-[#0d0e10]/60">[00:42 / 04:20]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
