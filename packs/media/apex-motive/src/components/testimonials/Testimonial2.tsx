import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    { quote: "Thermal management is flawless. Even after 15 consecutive flying laps at Suzuka, stator temps never exceeded 85°C.", author: "ELENA VOSS", role: "CHIEF RACE ENGINEER", index: "01" },
    { quote: "The aerodynamics package generates unbelievable confidence in high-speed sweepers. You can brake 20 meters later.", author: "MARCUS DU PLESSIS", role: "ENDURANCE TEST PILOT", index: "02" },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// PILOT DEBRIEFS</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TRACK FEEDBACK MATRIX</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner relative">
              <div className="absolute top-4 right-4 font-mono-spec text-xs text-[#ff5a1f]">
                //{item.index}
              </div>
              <Quote size={32} className="text-[#ff5a1f] mb-4 opacity-60" />
              <p className="font-mono-spec text-sm text-neutral-300 leading-relaxed mb-6">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-[#272a33]">
                <span className="font-mono-spec text-xs font-bold text-white block">{item.author}</span>
                <span className="font-mono-spec text-[10px] text-[#ff5a1f] block mt-0.5">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
