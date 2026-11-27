import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonial2() {
  const testimonials = [
    {
      quote: "The brand architecture created by Verdant & Vane helped us position our functional medicine practice as the premier destination for discerning executives.",
      name: "Dr. Serena Lin",
      role: "Medical Director, Geneva Health",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "Their grasp of somatic spatial design transformed our clinical rooms into true healing sanctuaries. Patient satisfaction scores rose by 42% within months.",
      name: "Marcus Sterling",
      role: "Managing Partner, Vibe Wellness",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Client Perspectives
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Trusted by visionary clinicians.
          </h2>
        </div>

        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#faf6f0] rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <img src={t.image} alt={t.name} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-md flex-shrink-0" />
            <div className="flex-1 text-center md:text-left">
              <Quote className="w-8 h-8 text-[#2a7a6d] mb-3 mx-auto md:mx-0 opacity-40" />
              <p className="font-serif text-xl md:text-2xl text-[#122420] mb-6 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-serif text-lg text-[#122420]">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
