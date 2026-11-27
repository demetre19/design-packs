import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111111] bg-white relative">
        {/* Hazard Stripe Top Bar */}
        <div className="h-4 w-full bg-[repeating-linear-gradient(45deg,#111,#111_6px,#e8e8e6_6px,#e8e8e6_12px)] border-b border-[#111111]" />

        <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#111] text-[#e8e8e6] text-[9px] px-2 py-1 uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" />
              <span>HOMOLOGATION REGISTRATION 04</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              UNCOMPROMISING PERFORMANCE
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#555] leading-relaxed mb-8">
              Every component is subjected to severe thermal and structural stress analysis before receiving official KRAFTWERK certification.
            </p>

            <div className="grid grid-cols-2 gap-4 text-[10px] mb-8">
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">TEST CYCLE</span>
                <span className="font-bold text-sm">24H NURBURGRING</span>
              </div>
              <div className="border border-[#111] p-3">
                <span className="text-[#666] block text-[8px]">CERTIFICATION</span>
                <span className="font-bold text-sm">FIA GT3 CLASS</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Initiating verification sequence...')}
              className="px-6 py-4 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer"
            >
              <span>VERIFY CERTIFICATE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Crosshair-marked photo plate */}
          <div className="relative p-4 border border-[#111] bg-[#f0f0ee]">
            {/* Crosshair marks */}
            <span className="absolute top-2 left-2 text-xs font-bold z-20">+</span>
            <span className="absolute top-2 right-2 text-xs font-bold z-20">+</span>
            <span className="absolute bottom-2 left-2 text-xs font-bold z-20">+</span>
            <span className="absolute bottom-2 right-2 text-xs font-bold z-20">+</span>

            <div className="w-full h-72 sm:h-96 bg-[#111] relative overflow-hidden border border-[#111]">
              <img 
                src="https://picsum.photos/seed/kraftwerk3/800/800" 
                alt="Test track" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />
            </div>
            <div className="mt-3 flex justify-between text-[9px] text-[#666]">
              <span>TEST CELL: STUTTGART-WEST</span>
              <span>PLATE: H-994</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
