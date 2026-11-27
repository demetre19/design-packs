import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    { quote: "Uncompromising precision in steel framing calculations.", author: "Marcus Thorne", title: "Chief Structural Engineer", ref: "REF-02A" },
    { quote: "Exquisite spatial hierarchy and facade detailing.", author: "Dr. Aris Thorne", title: "Principal Architect", ref: "REF-02B" },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/75">TESTIMONIAL GRID // 02</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Client Verification Register</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md relative flex flex-col justify-between">
              <div className="absolute top-2 right-2 text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">
                {t.ref}
              </div>
              <div className="space-y-4 my-4">
                <Quote className="w-6 h-6 text-[#1b3a5c]/60" />
                <p className="text-sm font-bold uppercase tracking-tight leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="pt-4 border-t border-[#1b3a5c]/20">
                <div className="font-bold text-xs">{t.author}</div>
                <div className="text-[10px] text-[#1b3a5c]/60">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
