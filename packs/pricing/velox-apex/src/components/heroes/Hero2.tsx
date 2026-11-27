import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-white text-black py-12 border-b-2 border-black flex flex-col md:flex-row">
      {/* Massive vertical display word along left edge */}
      <div className="bg-black text-white px-4 py-12 font-black text-6xl md:text-8xl tracking-tighter uppercase flex items-center justify-center [writing-mode:vertical-lr] rotate-180 select-none">
        APEX // PREDATOR
      </div>

      <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="font-mono text-[10px] tracking-widest text-[#ff2e00] mb-2 font-bold uppercase">
            // EDITION ZERO // CARBON MONOCOQUE
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
            ELECTRIC KINETIC DOMINANCE
          </h2>
          <p className="font-mono text-xs text-neutral-600 max-w-xl leading-relaxed mb-8">
            Engineered for pure circuit supremacy. Zero latency throttle response paired with aero-dynamic carbon fiber winglets delivering 340kg downforce at terminal velocity.
          </p>
        </div>

        {/* Narrow image column right & micro-text floating */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 border-2 border-black h-[280px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80" 
              alt="Apex detail"
              className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-black text-white p-6 font-mono text-[11px] space-y-4">
            <div className="text-[#ff2e00] font-bold">// TECH SPECS</div>
            <div className="flex justify-between border-b border-neutral-800 pb-1">
              <span>POWER</span>
              <span className="font-bold">215 HP</span>
            </div>
            <div className="flex justify-between border-b border-neutral-800 pb-1">
              <span>TORQUE</span>
              <span className="font-bold">305 NM</span>
            </div>
            <div className="flex justify-between pb-1">
              <span>WEIGHT</span>
              <span className="font-bold">198 KG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
