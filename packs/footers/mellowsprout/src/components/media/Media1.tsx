import React from 'react';
import { Sparkles } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-5xl mx-auto relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#3d2530]">
        <img 
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80" 
          alt="Children playing" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-[#3d2530] flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-[#ff8c42]" />
          <span className="font-black text-lg text-[#3d2530]">Sensory Workshop in San Francisco</span>
        </div>
      </div>
    </section>
  );
}
