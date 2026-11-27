import React from 'react';
import { Play } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-2">CINEMATIC PLATE</span>
          <h2 className="font-serif text-3xl text-[#ece8e1]">Atelier Documentary Preview</h2>
        </div>

        <div className="w-full h-96 bg-[#13171c] border border-white/10 relative flex items-center justify-center">
          <button className="w-16 h-16 rounded-full border-2 border-[#d4b06a] bg-[#0b0d10]/80 flex items-center justify-center text-[#d4b06a] hover:bg-[#d4b06a] hover:text-[#0b0d10] transition-all">
            <Play className="w-6 h-6 ml-1" />
          </button>
          <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#7a8494]">DURATION: 04:22 // 4K HORLOGERIE</div>
        </div>
      </div>
    </section>
  );
}
