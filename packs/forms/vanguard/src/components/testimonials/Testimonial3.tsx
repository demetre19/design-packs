import React from 'react';

export function Testimonial3() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#20232a] border border-[#3a3e4c] p-8 sm:p-12 [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] relative overflow-hidden space-y-6">
          <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.05] font-sans pointer-events-none">
            09
          </div>
          <div className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">FEATURED PROGRAM EVALUATION</div>
          <blockquote className="text-xl sm:text-2xl font-bold font-sans tracking-tight leading-relaxed">
            "The X-99 flight test program represents the absolute pinnacle of hypersonic engineering. Telemetry reliability is second to none."
          </blockquote>
          <div className="flex items-center space-x-4 border-t border-[#3a3e4c] pt-6 text-xs">
            <div className="w-10 h-10 bg-[#16181d] border border-[#3a3e4c] flex items-center justify-center font-bold text-[#ff3d00]">
              VA
            </div>
            <div>
              <div className="font-extrabold uppercase">GENERAL ARTHUR H. HAYES</div>
              <div className="text-zinc-400 text-[10px]">COMMANDER, AIR FORCE FLIGHT TEST CENTER</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
