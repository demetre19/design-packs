import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export function Hero2() {
  return (
    <section className="w-full bg-[#e8f0ec] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-4">
            Founder-Led Clinical Strategy
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight leading-[1.1] mb-6">
            Where biological science meets bespoke editorial warmth.
          </h1>

          <p className="text-lg text-[#122420]/80 font-light mb-8 leading-relaxed">
            Founded by Dr. Elena Vance, our practice integrates advanced longevity diagnostics with immaculate brand positioning for clinics that value discretion and depth.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#consult"
              className="px-7 py-3.5 rounded-full bg-[#1d4f47] text-[#faf6f0] font-medium text-sm hover:bg-[#153b34] transition-all shadow-sm flex items-center gap-2"
            >
              <span>Schedule Initial Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-full bg-[#faf6f0] text-[#122420] font-medium text-sm hover:bg-[#faf6f0]/80 transition-all border border-[#122420]/10"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-[#122420]/70">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-[#e8f0ec] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-[#e8f0ec] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Client" />
              <img className="w-8 h-8 rounded-full border-2 border-[#e8f0ec] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="Client" />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#1d4f47]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs mt-0.5">Trusted by 140+ elite clinics worldwide</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/5] bg-[#faf6f0]">
            <img
              src="https://images.unsplash.com/photo-1594824813563-718f26df8f73?auto=format&fit=crop&w=1000&q=80"
              alt="Dr. Elena Vance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#122420]/60 via-transparent to-transparent flex items-end p-8">
              <div className="text-[#faf6f0]">
                <p className="font-serif text-xl">Dr. Elena Vance</p>
                <p className="text-xs text-[#faf6f0]/80 uppercase tracking-widest mt-1">Founder & Chief Clinical Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
