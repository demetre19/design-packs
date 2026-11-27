import React from 'react';
import { Terminal } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 border-b border-[#111] bg-[#e8e8e6] text-[10px] font-bold uppercase tracking-widest flex justify-between">
          <span>[ALTERNATING PLATE / CELL REGISTER]</span>
          <span>SYSTEM 03</span>
        </div>

        {/* Row 1: Plate left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111] border-b border-[#111]">
          <div className="p-4 bg-[#f4f4f0] relative">
            <div className="absolute top-2 left-2 z-10 bg-[#111] text-[#e8e8e6] text-[8px] px-1">PLATE A-1</div>
            <div className="h-48 bg-[#111] border border-[#111] overflow-hidden">
              <img src="https://picsum.photos/seed/kraftwerk4/600/400" alt="Part" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <span className="text-[9px] text-[#666] mb-1">REF: 001-SUSPENSION</span>
            <h3 className="text-2xl font-black uppercase mb-3">PUSHROD SUSPENSION</h3>
            <p className="text-[10px] text-[#555] leading-relaxed">
              Inboard dampers actuated via titanium pushrods, transferring vertical wheel loads directly to adjustable torsion springs.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, plate right */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          <div className="p-6 flex flex-col justify-center order-2 md:order-1">
            <span className="text-[9px] text-[#666] mb-1">REF: 002-BRAKING</span>
            <h3 className="text-2xl font-black uppercase mb-3">CERAMIC VENTILATION</h3>
            <p className="text-[10px] text-[#555] leading-relaxed">
              Dual-duct forced cooling channels direct laminar airflow straight into internal rotor vanes to prevent thermal fade.
            </p>
          </div>
          <div className="p-4 bg-[#f4f4f0] relative order-1 md:order-2">
            <div className="absolute top-2 left-2 z-10 bg-[#111] text-[#e8e8e6] text-[8px] px-1">PLATE A-2</div>
            <div className="h-48 bg-[#111] border border-[#111] overflow-hidden">
              <img src="https://picsum.photos/seed/kraftwerk5/600/400" alt="Brakes" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
