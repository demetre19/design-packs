import React from 'react';
import { Activity } from 'lucide-react';

export function Media1() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          DIMENSION-LINE PLATE // MEDIA 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          HEAVY MACHINERY <span className="text-[#f25c05]">BLUEPRINT</span> PLATE.
        </h2>

        {/* Full-width plate with dimension-line frame */}
        <div className="relative border-4 border-black bg-black p-4 md:p-8">
          {/* Dimension ticks / lines representation */}
          <div className="absolute top-2 left-4 right-4 flex justify-between font-mono text-[9px] text-neutral-400 border-b border-neutral-800 pb-1">
            <span>|&lt;--- WIDTH: 14,200 MM ---&gt;|</span>
            <span className="text-[#f25c05]">SCALE: 1:50 // ISO-PLATE-01</span>
          </div>

          <div className="relative mt-4 border-2 border-neutral-800 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80" 
              alt="Machinery Plate" 
              className="w-full h-[420px] object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 font-mono text-[10px] border border-neutral-700">
              UNIT: EXCAVATOR TF-900 // HYDRAULIC BOOM
            </div>
            <div className="absolute bottom-4 right-4 bg-[#f25c05] text-black px-3 py-1 font-mono text-xs font-black uppercase flex items-center space-x-2">
              <span>DIAGNOSTIC OK</span>
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
