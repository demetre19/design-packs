import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function Media3() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-3 border-[#111111] shadow-hard-xl p-3 bg-halftone">
          <div className="relative aspect-[16/9] border-2 border-[#111111] overflow-hidden bg-[#111111]">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80" alt="Video Plate" className={`w-full h-full object-cover transition-opacity ${isPlaying ? 'opacity-80' : 'opacity-40'}`} />
            
            {/* Chunky play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause size={32} fill="#111111" /> : <Play size={32} fill="#111111" className="ml-1" />}
              </button>
            </div>

            <div className="absolute top-3 left-3 bg-[#ff6b5e] text-white font-mono text-xs font-black px-2.5 py-1 border-2 border-[#111111] shadow-hard-sm">
              {isPlaying ? '● PLAYING STREAM' : '⏸ VIDEO PLATE 03'}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-xs font-bold px-2">
            <span>DOCUMENTARY: THE ART OF RISO INK</span>
            <span>02:45 / 10:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
