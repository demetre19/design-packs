import React from 'react';

export function Testimonials1() {
  return (
    <section className="w-full bg-white text-black py-20 border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-4 uppercase">// PILOT DEBRIEF</div>
        
        {/* One huge cropped quote word */}
        <div className="text-6xl sm:text-9xl font-black uppercase tracking-tighter leading-none mb-8 text-black select-none">
          "UNREAL <br />
          <span className="text-[#ff2e00]">FORCE"</span>
        </div>

        {/* Small attribution block */}
        <div className="max-w-xl border-l-4 border-[#ff2e00] pl-6 py-2">
          <p className="font-mono text-sm text-neutral-800 leading-relaxed mb-4">
            "The instant torque delivery out of hairpin turns is unlike anything in combustion or electric motorsport. The carbon monocoque inspires absolute confidence at 300km/h."
          </p>
          <div className="font-mono text-xs font-bold uppercase">
            HIROSHI TANAKA // ISLE OF MAN TT FACTORY PILOT
          </div>
        </div>
      </div>
    </section>
  );
}
