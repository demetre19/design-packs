import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export function Media2() {
  const gallery = [
    { idx: '01', title: 'WIND TUNNEL AERO TEST', spec: '0.24 Cd' },
    { idx: '02', title: 'CARBON MONOCOQUE FRAME', spec: '7.2 KG' },
    { idx: '03', title: 'AXIAL FLUX MOTOR ASSEMBLY', spec: '18,500 RPM' },
    { idx: '04', title: 'BREMBO GP4-RR CALIPERS', spec: '330 MM' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// MEDIA GALLERY</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">ASSET REGISTRY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item) => (
            <div key={item.idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner relative group hover:border-[#ff5a1f] transition-all">
              <div className="flex justify-between items-center mb-12">
                <span className="font-mono-spec text-xs font-bold text-[#ff5a1f]">//{item.idx}</span>
                <span className="font-mono-spec text-[10px] text-neutral-500">{item.spec}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-2 group-hover:text-[#ff5a1f] transition-colors">{item.title}</h3>
              <div className="mt-6 pt-4 border-t border-[#272a33] flex items-center justify-between text-xs font-mono-spec text-neutral-400 group-hover:text-white">
                <span>VIEW HIGH-RES PLATE</span>
                <ArrowRight size={14} className="text-[#ff5a1f]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
