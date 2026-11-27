import React from 'react';
import { Plus } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// FULL-WIDTH MEDIA PLATE</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
          AERO <span className="text-[#ff2e00]">WIND TUNNEL</span>
        </h2>

        {/* Full-width plate with tiny corner captions */}
        <div className="relative border-2 border-black bg-neutral-900 h-[450px] overflow-hidden">
          <Plus className="absolute top-2 left-2 w-4 h-4 text-white z-10" />
          <Plus className="absolute top-2 right-2 w-4 h-4 text-white z-10" />
          <Plus className="absolute bottom-2 left-2 w-4 h-4 text-white z-10" />
          <Plus className="absolute bottom-2 right-2 w-4 h-4 text-white z-10" />

          <img 
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80" 
            alt="Wind tunnel test"
            className="w-full h-full object-cover filter contrast-125 opacity-85"
          />

          <div className="absolute top-4 left-6 font-mono text-[10px] text-white tracking-widest uppercase bg-black px-2 py-1">
            // CAM: SUZUKA DOCK 01
          </div>
          <div className="absolute bottom-4 right-6 font-mono text-[10px] text-white tracking-widest uppercase bg-black px-2 py-1">
            VELOCITY: 280 KM/H // DOWNFORCE: 340KG
          </div>
        </div>
      </div>
    </section>
  );
}
