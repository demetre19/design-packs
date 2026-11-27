/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    {
      quote: "The acoustic isolation and thermal stability of the Veritas Series 01 chassis are unmatched in modern precision engineering.",
      author: "Helena Rostova",
      title: "Head of Infrastructure, Zurich Quantitative Trust"
    },
    {
      quote: "Sub-nanosecond synchronization across our distributed European nodes transformed our audit verification reliability overnight.",
      author: "Marcus Sterling",
      title: "Director of Telemetry, Alpine Financial Reserve"
    },
    {
      quote: "A masterclass in quiet institutional precision. The hardware PUF signing gives us complete cryptographic assurance.",
      author: "Siddharth Nair",
      title: "Chief Architect, Geneva Clearing Corporation"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase">
            Verified Testimonial Feed // 0{current + 1}
          </span>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0a0e12] hover:bg-[#f1f4f8] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0a0e12] hover:bg-[#f1f4f8] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm">
          <blockquote className="text-xl md:text-2xl font-normal text-[#0a0e12] leading-relaxed mb-8">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-semibold text-[#0a0e12] text-sm">{testimonials[current].author}</div>
            <div className="text-xs text-[#5b6b76] mt-0.5">{testimonials[current].title}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
