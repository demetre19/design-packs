import React from 'react';

export function Testimonial2() {
  const reviews = [
    { quote: "Scramjet ignition at Mach 3.1 was instantaneous. Zero compressor stall during transition.", author: "DR. ELENA ROSTOVA", role: "PROPULSION LEAD", sortie: "S-02" },
    { quote: "Inertial guidance held sub-arcsecond drift across 4 hours of stratospheric testing.", author: "MAJ. KEVIN SULLIVAN", role: "AVIONICS CHIEF", sortie: "S-07" },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-[#16181d] text-white font-mono border-b border-[#2a2d35]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="border-b border-[#2a2d35] pb-6">
          <span className="text-xs font-bold text-[#ff3d00] tracking-widest uppercase">TESTIMONIALS // 02</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-sans mt-1">
            PILOT ATTRIBUTION <span className="text-[#ff3d00]">READOUTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#20232a] border border-[#3a3e4c] p-8 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-black text-[#ff3d00] block">SORTIE // {r.sortie}</span>
                <p className="text-sm font-bold font-sans leading-relaxed">"{r.quote}"</p>
              </div>
              <div className="border-t border-[#3a3e4c] pt-4 flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold uppercase">{r.author}</div>
                  <div className="text-zinc-400 text-[10px]">{r.role}</div>
                </div>
                <div className="text-[#ff3d00] font-mono font-bold">VERIFIED</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
