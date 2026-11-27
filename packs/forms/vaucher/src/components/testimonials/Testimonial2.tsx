import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    { quote: "Absolute precision in daily wear. Tested to -1/+1 second deviation over three months of continuous monitoring.", author: "DR. H. MÜLLER", title: "ASTROPHYSICIST & COLLECTOR" },
    { quote: "The sapphire exhibition caseback reveals Geneva striping executed with breathtaking perfection.", author: "ELENA ROSTOVA", title: "HOROLOGY CRITIC" }
  ];
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-b border-[#d0d0cc]">
      <div className="flex justify-between items-center mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">TESTIMONIAL 02 · QUOTE SLIDER</div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="p-2 border border-[#d0d0cc] hover:border-[#2e5e8e] transition-colors bg-white"
          >
            <ChevronLeft className="w-4 h-4 text-[#232a30]" />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="p-2 border border-[#d0d0cc] hover:border-[#2e5e8e] transition-colors bg-white"
          >
            <ChevronRight className="w-4 h-4 text-[#232a30]" />
          </button>
        </div>
      </div>

      <div className="bg-[#1c2128] text-white p-8 md:p-16 border border-[#2e5e8e]/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-geneva-stripe opacity-30" />
        <div className="relative z-15 max-w-2xl space-y-6">
          <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">EXPERT TESTIMONIAL 0{current + 1}</div>
          <blockquote className="text-xl md:text-2xl font-light tracking-wide leading-relaxed">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <div className="pt-4">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-white font-semibold">{testimonials[current].author}</div>
            <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.2em] mt-1">{testimonials[current].title}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
