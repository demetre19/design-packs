import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero5() {
  return (
    <section className="w-full bg-[#faf6f0] pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-4">
            Boutique Medical & Wellness Advisory
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight leading-[1.1] mb-6">
            Elevating patient care through deliberate design and clinical mastery.
          </h1>

          <p className="text-lg text-[#122420]/80 font-light mb-8 leading-relaxed">
            We partner with visionary physicians, longevity institutes, and holistic sanctuaries to build enduring brands that resonate with discerning clientele.
          </p>

          <div className="space-y-3 mb-8 w-full">
            <div className="flex items-center gap-3 text-sm text-[#122420]">
              <CheckCircle2 className="w-5 h-5 text-[#2a7a6d]" />
              <span>Comprehensive clinical brand identity architecture</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#122420]">
              <CheckCircle2 className="w-5 h-5 text-[#2a7a6d]" />
              <span>Patient journey mapping and sensory spatial design</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#122420]">
              <CheckCircle2 className="w-5 h-5 text-[#2a7a6d]" />
              <span>Evidence-based longevity content and publishing</span>
            </div>
          </div>

          <a
            href="#inquire"
            className="px-7 py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm flex items-center gap-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-[3/4] bg-[#e8f0ec]">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
              alt="Warm boutique clinical environment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Client-count stat strip bottom */}
      <div className="max-w-6xl mx-auto border-t border-[#122420]/15 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="font-serif text-3xl md:text-4xl text-[#122420]">140+</p>
          <p className="text-xs uppercase tracking-wider text-[#2a7a6d] mt-1 font-semibold">Clinics Transformed</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl text-[#122420]">98%</p>
          <p className="text-xs uppercase tracking-wider text-[#2a7a6d] mt-1 font-semibold">Client Retention</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl text-[#122420]">12</p>
          <p className="text-xs uppercase tracking-wider text-[#2a7a6d] mt-1 font-semibold">Global Awards</p>
        </div>
        <div>
          <p className="font-serif text-3xl md:text-4xl text-[#122420]">15 Yrs</p>
          <p className="text-xs uppercase tracking-wider text-[#2a7a6d] mt-1 font-semibold">Clinical Expertise</p>
        </div>
      </div>
    </section>
  );
}
