import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export function Hero1() {
  return (
    <section className="w-full bg-[#faf6f0] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#e8f0ec] text-[#2a7a6d] text-xs font-semibold uppercase tracking-widest mb-6">
          Clinical Wellness & Aesthetic Agency
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight max-w-3xl leading-[1.15] mb-6">
          Cultivating calm, evidence-based care for modern longevity.
        </h1>

        <p className="text-lg text-[#122420]/80 max-w-2xl font-light mb-10 leading-relaxed">
          Verdant & Vane pairs rigorous medical science with thoughtful boutique branding to design transformative patient journeys and clinical environments.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#explore"
            className="px-7 py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm flex items-center gap-2"
          >
            <span>Explore Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#story"
            className="px-7 py-3.5 rounded-full border border-[#1d4f47]/30 text-[#122420] font-medium text-sm hover:bg-[#e8f0ec] transition-all"
          >
            Read Our Manifesto
          </a>
        </div>

        {/* Team Photo Plate with Rounded Corners */}
        <div className="w-full rounded-[28px] overflow-hidden shadow-2xl bg-[#e8f0ec] relative aspect-[16/9] md:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
            alt="Clinical team in consultation room"
            className="w-full h-full object-cover filter brightness-[0.95]"
          />
          <div className="absolute bottom-6 left-6 bg-[#faf6f0]/90 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 text-[#122420]">
            <ShieldCheck className="w-5 h-5 text-[#2a7a6d]" />
            <div className="text-left text-xs">
              <p className="font-semibold">Accredited Clinical Excellence</p>
              <p className="text-[#122420]/70">Board-certified specialists & brand architects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
