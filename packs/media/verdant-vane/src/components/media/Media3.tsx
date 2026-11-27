import React from 'react';
import { Play } from 'lucide-react';

export function Media3() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Immersive Film
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            The Philosophy of Verdant & Vane.
          </h2>
        </div>

        <div className="w-full rounded-[32px] overflow-hidden shadow-2xl aspect-[16/9] relative bg-[#e8f0ec] group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
            alt="Video poster"
            className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#122420]/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47] shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-[#faf6f0]">
            <p className="font-serif text-xl">Watch Founder Address (12:45)</p>
            <p className="text-xs text-[#faf6f0]/80 uppercase tracking-widest mt-0.5">Dr. Elena Vance on Clinical Warmth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
