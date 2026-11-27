import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export function Media3() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="space-y-4 mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">MEDIA 03 · VIDEO PLATE WITH THIN PLAY INDICATOR</div>
        <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30]">Atelier Documentary</h2>
      </div>

      <div className="border border-[#d0d0cc] bg-[#1c2128] text-white p-12 md:p-24 relative overflow-hidden text-center space-y-6">
        <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
        <div className="relative z-10 max-w-xl mx-auto space-y-4">
          <button
            onClick={() => setPlaying(!playing)}
            className="w-16 h-16 rounded-full bg-[#2e5e8e] text-white flex items-center justify-center mx-auto hover:bg-white hover:text-[#232a30] transition-colors shadow-lg"
          >
            {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
          </button>
          <h3 className="text-xl font-light tracking-wide">
            {playing ? "Playing Atelier Documentary..." : "The Art of Haute Horlogerie (14:20)"}
          </h3>
          <p className="font-mono text-[10px] text-white/50 tracking-[0.3em]">
            REF. VID-5711 · GENEVA WORKSHOPS
          </p>
        </div>
      </div>
    </section>
  );
}
