import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero4() {
  return (
    <section className="w-full bg-[#e8f0ec] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf6f0] text-[#2a7a6d] text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Holistic Brand & Clinical Architecture</span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight max-w-3xl leading-[1.15] mb-6">
          Transforming clinics into destinations of mindful healing.
        </h1>

        <p className="text-lg text-[#122420]/80 max-w-2xl font-light mb-10 leading-relaxed">
          From spatial design to patient intake protocols, Verdant & Vane crafts cohesive brand ecosystems that inspire enduring loyalty and profound trust.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#audit"
            className="px-7 py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm flex items-center gap-2"
          >
            <span>Request Brand Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Photo Collage Under Headline */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-lg">
            <img src="https://images.unsplash.com/photo-1529653719697-90c9c07169f4?auto=format&fit=crop&w=600&q=80" alt="Collage 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-lg md:translate-y-6">
            <img src="https://images.unsplash.com/photo-1512290900672-8cd3afeb447f?auto=format&fit=crop&w=600&q=80" alt="Collage 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-lg">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80" alt="Collage 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-lg md:translate-y-6">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80" alt="Collage 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
