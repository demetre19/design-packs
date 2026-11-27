import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function Media3() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        <div className="flex items-center space-x-2">
          <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">CINEMATIC MONOGRAPH PLATE</span>
        </div>

        <div className="border border-[#e2e0d8] p-3 bg-[#f0efeb] relative group">
          <div className="aspect-[16/9] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80" 
              alt="Cinematic Video Plate" 
              className="w-full h-full object-cover filter saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-[#16171a]/20 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-[#fafaf8] border border-[#e2e0d8] flex items-center justify-center text-[#16171a] hover:bg-[#b5482e] hover:text-[#fafaf8] hover:border-[#b5482e] transition-colors rounded-none"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#e2e0d8] flex justify-between items-center text-xs font-mono text-stone-600">
            <span>VIDEO DOCUMENTARY — THE ENGADIN STONE PAVILION</span>
            <span>DURATION: 04:45</span>
          </div>
        </div>
      </div>
    </section>
  );
}
