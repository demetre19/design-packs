import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export function Hero1() {
  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Tiny mono label inside thin hairline box */}
        <div className="inline-flex items-center space-x-2 border border-black px-3 py-1 text-[10px] font-mono uppercase mb-6 bg-white">
          <span className="w-2 h-2 bg-[#f25c05] inline-block"></span>
          <span>SYSTEM SERIES 01 // AUTONOMOUS EXTRACTION MESH</span>
        </div>

        {/* Ultra-heavy uppercase headline spanning full width */}
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          HEAVY ORE EXTRACTION <span className="text-[#f25c05]">ENGINEERED</span> FOR ABSOLUTE SCALE.
        </h1>

        {/* High-contrast machinery image */}
        <div className="relative mb-8 border-4 border-black bg-black overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1600&q=80" 
            alt="Industrial Machinery" 
            className="w-full h-[400px] object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-[10px] border border-neutral-700">
            LOC: SECTOR 7-ALPHA // ISO-9001
          </div>
          <div className="absolute bottom-4 right-4 bg-[#f25c05] text-black px-4 py-2 font-mono text-xs font-black uppercase flex items-center space-x-2">
            <span>LIVE FEED ACTIVE</span>
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Black stat tiles row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
          <div className="bg-black text-white p-6 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">01 // TONNAGE CAPACITY</div>
            <div className="text-3xl font-black font-sans tracking-tight">450,000 T / DAY</div>
          </div>
          <div className="bg-black text-white p-6 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">02 // FLEET DEPLOYED</div>
            <div className="text-3xl font-black font-sans tracking-tight">1,280 UNITS</div>
          </div>
          <div className="bg-black text-white p-6 border-b-4 border-[#f25c05]">
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">03 // UPTIME GUARANTEE</div>
            <div className="text-3xl font-black font-sans tracking-tight text-[#f25c05]">99.98%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
