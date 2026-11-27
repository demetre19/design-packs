import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial1() {
  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#e8f0ec] flex items-center justify-center text-[#2a7a6d] mb-8 shadow-sm">
          <Quote className="w-6 h-6" />
        </div>

        <blockquote className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight leading-[1.2] mb-10">
          "Verdant & Vane redefined our longevity institute. Patients immediately remark on the profound sense of calm and clinical precision the moment they walk through our doors."
        </blockquote>

        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
            alt="Dr. Aris Thorne"
            className="w-14 h-14 rounded-full object-cover shadow-md"
          />
          <div className="text-left">
            <p className="font-serif text-lg text-[#122420]">Dr. Aris Thorne</p>
            <p className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mt-0.5">Founder, Apex Longevity Center</p>
          </div>
        </div>
      </div>
    </section>
  );
}
