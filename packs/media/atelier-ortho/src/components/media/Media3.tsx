import React from 'react';
import { Play, Camera } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">MEDIA SECTION // 03</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Technical Video Plate</h2>
        </div>

        <div className="border-2 border-white/40 p-4 bg-[#142d48] relative">
          <div className="absolute top-2 left-6 text-[10px] text-cyan-300">VIDEO PLATE: 3D BIM SIMULATION // VID-03</div>
          <div className="aspect-[16/9] border border-white/30 my-4 relative overflow-hidden bg-[#11263d] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="BIM Simulation"
              className="w-full h-full object-cover grayscale contrast-125 opacity-60"
            />
            {/* Technical play marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 border-2 border-cyan-300 bg-[#1b3a5c]/90 text-cyan-300 flex items-center justify-center hover:bg-cyan-400 hover:text-[#1b3a5c] transition-colors cursor-pointer">
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#1b3a5c]/90 border border-white/30 px-4 py-2 flex justify-between items-center text-xs text-cyan-200">
              <span>DURATION: 03:45 MIN</span>
              <span>CODE: SIM-BIM-04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
