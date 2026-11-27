import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function FeatureGrid3() {
  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 bg-white border-3 border-[#111111] shadow-hard-lg p-3 bg-halftone">
            <div className="aspect-[16/10] border-2 border-[#111111] overflow-hidden bg-[#ffd92e]">
              <img src="https://images.unsplash.com/photo-1542744094-3a31246264d0?auto=format&fit=crop&w=800&q=80" alt="Row 1" className="w-full h-full object-cover contrast-125 mix-blend-multiply" />
            </div>
            <div className="mt-2 font-mono text-xs font-bold flex justify-between">
              <span>PLATE // A-01</span>
              <span className="text-[#ff6b5e]">ANALOG SEPARATION</span>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
              DISCIPLINE 01
            </div>
            <h3 className="font-grotesk font-black text-3xl sm:text-4xl uppercase tracking-tight">
              PRECISION COLOR SEPARATIONS.
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#111111]/80 leading-relaxed">
              Every risograph plate is masterminded by hand to ensure vibrant, overlapping fluorescent ink layers that create unique textures impossible on standard digital printers.
            </p>
            <div className="space-y-2 font-mono text-xs font-bold pt-2">
              <div className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Soy-based fluorescent inks</span></div>
              <div className="flex items-center gap-2"><Check size={14} className="text-[#ff6b5e]" /><span>Heavy archival cardstock (300gsm)</span></div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <div className="inline-block bg-[#ffd92e] text-[#111111] font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
              DISCIPLINE 02
            </div>
            <h3 className="font-grotesk font-black text-3xl sm:text-4xl uppercase tracking-tight">
              KINETIC DIGITAL INTERFACES.
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#111111]/80 leading-relaxed">
              We build lightning-fast web applications that translate the tactile punch of print into smooth, responsive, hard-shadow interactive components.
            </p>
            <div className="space-y-2 font-mono text-xs font-bold pt-2">
              <div className="flex items-center gap-2"><Check size={14} className="text-[#ffd92e]" /><span>React & Tailwind CSS optimized</span></div>
              <div className="flex items-center gap-2"><Check size={14} className="text-[#ffd92e]" /><span>Zero bloat, maximum performance</span></div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 bg-white border-3 border-[#111111] shadow-hard-lg p-3 bg-halftone">
            <div className="aspect-[16/10] border-2 border-[#111111] overflow-hidden bg-[#ff6b5e]">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" alt="Row 2" className="w-full h-full object-cover contrast-125" />
            </div>
            <div className="mt-2 font-mono text-xs font-bold flex justify-between">
              <span>PLATE // B-02</span>
              <span className="text-[#ffd92e]">DIGITAL ENGINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
