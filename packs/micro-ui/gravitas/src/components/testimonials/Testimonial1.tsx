import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Testimonial 01 // Weight-Matched Quote</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Endorsements from Master Typographers</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">SET IN PRAISED WEIGHT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-800 bg-neutral-950 p-8 space-y-6">
            <Quote className="w-6 h-6 text-neutral-400" />
            <blockquote className="text-2xl font-extralight tracking-tight text-white leading-relaxed">
              "The hairline cut of Gravitas is an absolute masterpiece of digital punch and optical rhythm."
            </blockquote>
            <div className="border-t border-neutral-900 pt-4 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>— ELENA VOSS, TYPE DIRECTOR</span>
              <span className="text-white">HAIRLINE (200)</span>
            </div>
          </div>

          <div className="border border-neutral-800 bg-neutral-950 p-8 space-y-6">
            <Quote className="w-6 h-6 text-neutral-400" />
            <blockquote className="text-2xl font-black tracking-tight text-white leading-relaxed">
              "When you need maximum brutality and unyielding presence, Gravitas Extra Bold stands alone."
            </blockquote>
            <div className="border-t border-neutral-900 pt-4 flex justify-between items-center text-xs font-mono text-neutral-400">
              <span>— MARCUS KAUFMANN, BERLIN</span>
              <span className="text-white">EXTRA BOLD (900)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
