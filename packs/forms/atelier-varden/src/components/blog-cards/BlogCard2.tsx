import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function BlogCard2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">FEATURED MONOGRAPH STORY</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">The Making of Villa Varden Nord</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#f0efeb] border border-[#e2e0d8] p-8 lg:p-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono text-stone-500 uppercase">ESSAY NO. 42 · ZÜRICHBERG</div>
            <h3 className="text-2xl lg:text-3xl font-medium text-[#16171a] leading-snug">
              Balancing absolute structural mass with floating glass diaphragms.
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Situated atop the forested ridge overlooking Lake Zürich, Villa Varden Nord explores the duality of protection and exposure. Heavy board-formed concrete retaining walls secure the home into the slope, while cantilevered oak pavilions extend outward toward the water.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#e2e0d8] font-mono text-xs">
              <div>
                <span className="text-stone-500 uppercase block">Area</span>
                <span className="text-[#16171a] font-medium">380 m²</span>
              </div>
              <div>
                <span className="text-stone-500 uppercase block">Completion</span>
                <span className="text-[#16171a] font-medium">Summer 2025</span>
              </div>
            </div>
            <div className="pt-2">
              <a href="#read" className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#b5482e]">
                <span>Read Full Monograph</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 border border-[#e2e0d8] p-2 bg-[#fafaf8]">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80" 
                alt="Villa Varden Nord" 
                className="w-full h-full object-cover filter saturate-[0.85]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
