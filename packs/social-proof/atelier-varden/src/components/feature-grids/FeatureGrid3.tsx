import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid3() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">ARCHITECTURAL STUDIES</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Materiality in Context</h2>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 border border-[#e2e0d8] p-2 bg-[#f0efeb]">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" 
                alt="Concrete texture" 
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-stone-400">01 / TEXTURE</span>
            <h3 className="text-2xl font-medium text-[#16171a]">Exposed Board-Formed Concrete</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Casting against rough-sawn Douglas fir grain transfers organic tactile memory directly into structural walls, anchoring the dwelling firmly to earth.
            </p>
            <div className="pt-2">
              <a href="#more" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#b5482e]">
                <span>View Specification</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
            <span className="text-xs font-mono text-stone-400">02 / LIGHT</span>
            <h3 className="text-2xl font-medium text-[#16171a]">Calibrated Apertures & Shadows</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Windows are treated as strategic lenses rather than transparent walls, framing specific horizons and casting shifting shadow registers through the day.
            </p>
            <div className="pt-2">
              <a href="#more" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#b5482e]">
                <span>View Specification</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 lg:order-2 order-1 border border-[#e2e0d8] p-2 bg-[#f0efeb]">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" 
                alt="Light study" 
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
