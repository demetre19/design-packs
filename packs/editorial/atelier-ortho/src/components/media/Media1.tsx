import React from 'react';
import { Camera, Ruler } from 'lucide-react';

export function Media1() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
          <div>
            <span className="text-xs text-cyan-300">MEDIA SECTION // 01</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Framed Architectural Plate</h2>
          </div>
          <span className="text-xs text-cyan-200">SCALE 1:100</span>
        </div>

        {/* Full-width framed photo with dimension caption */}
        <div className="border-2 border-white/40 p-4 bg-[#142d48] relative">
          <div className="absolute top-2 left-6 text-[10px] text-cyan-300">FIG 01. STRUCTURAL STEEL ERECTION</div>
          <div className="aspect-[21/9] border border-white/30 my-4 relative overflow-hidden bg-[#11263d]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18f1f3d?auto=format&fit=crop&w=1600&q=80"
              alt="Structural steel"
              className="w-full h-full object-cover grayscale contrast-125 opacity-80"
            />
            {/* Dimension line caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#1b3a5c]/90 border border-white/30 px-4 py-2 flex justify-between items-center text-xs text-cyan-200">
              <span>|&lt;--- 12000MM MAIN SPAN ---&gt;|</span>
              <span>ELEVATION: +24.0M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
