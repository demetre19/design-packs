import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonial2() {
  const testimonials = [
    { quote: "The risograph posters they shipped us are museum-grade. Pure engineered joy.", author: "KENJI SATO", role: "CREATIVE DIRECTOR, TOKYO" },
    { quote: "Zero fluff, immaculate grid discipline, and lightning fast React code.", author: "MARCUS WEBER", role: "FOUNDER, BERLIN TECH" },
    { quote: "Our brand identity went from invisible to legendary in under 3 weeks.", author: "SARAH CHEN", role: "VP DESIGN, SYNTH" }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
            SLIDER TESTIMONIALS [0{current + 1}/03]
          </div>
        </div>

        <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-8 sm:p-12 relative">
          <div className="min-h-[140px] flex flex-col justify-between">
            <p className="font-grotesk font-black text-2xl sm:text-3xl uppercase leading-snug mb-6">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center justify-between pt-4 border-t-2 border-[#111111]">
              <div>
                <div className="font-grotesk font-black">{testimonials[current].author}</div>
                <div className="font-mono text-xs text-[#111111]/70">{testimonials[current].role}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="p-2.5 bg-white border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">
                  <ArrowLeft size={16} strokeWidth={3} />
                </button>
                <button onClick={next} className="p-2.5 bg-white border-2 border-[#111111] shadow-hard-sm hover:translate-y-0.5 transition-transform">
                  <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
