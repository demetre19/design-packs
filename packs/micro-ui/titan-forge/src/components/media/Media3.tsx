import React from 'react';
import { Play, Activity } from 'lucide-react';

export function Media3() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          VIDEO PLATE HOUSING // MEDIA 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          LIVE TELEMETRY <span className="text-[#f25c05]">STREAM</span> HOUSING.
        </h2>

        {/* Video plate in heavy black housing */}
        <div className="border-4 border-black bg-black p-4 md:p-8">
          <div className="flex justify-between items-center font-mono text-xs text-neutral-400 border-b border-neutral-800 pb-4 mb-4">
            <span className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-[#f25c05] animate-pulse"></span>
              <span className="text-white uppercase font-bold">STREAM: SECTOR-9_AUTONOMOUS_FEED.mp4</span>
            </span>
            <span className="text-[#f25c05]">FRAME RATE: 60 FPS</span>
          </div>

          <div className="relative border-2 border-neutral-800 overflow-hidden h-[400px] flex items-center justify-center group">
            <img 
              src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80" 
              alt="Video Feed" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Play button overlay */}
            <div className="relative z-10 w-20 h-20 bg-[#f25c05] text-black flex items-center justify-center rounded-none font-bold hover:bg-white transition-colors cursor-pointer">
              <Play className="w-8 h-8 fill-black ml-1" />
            </div>

            <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 font-mono text-[10px] border border-neutral-700">
              BITRATE: 14.2 MBPS // ENCRYPTION: AES-256
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
