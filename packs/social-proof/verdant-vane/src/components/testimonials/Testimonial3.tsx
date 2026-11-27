import React from 'react';
import { Star } from 'lucide-react';

export function Testimonial3() {
  const reviews = [
    {
      quote: "Absolute masters of warmth and medical precision. Our clinic branding is now a work of art.",
      author: "Dr. Julian Vance",
      title: "Holistic Cardiologist"
    },
    {
      quote: "The patient journey mapping completely eliminated waiting room anxiety for our clientele.",
      author: "Clara Dupont",
      title: "Clinic Operations Lead"
    },
    {
      quote: "Refined, professional, and deeply intuitive. Verdant & Vane understands luxury wellness.",
      author: "Julian Thorne",
      title: "Longevity Institute Founder"
    }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Peer Endorsements
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Praised by leaders in health.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#e8f0ec] rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#1d4f47] mb-6">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-serif text-lg text-[#122420] mb-6 leading-relaxed">"{r.quote}"</p>
              </div>
              <div className="pt-4 border-t border-[#122420]/10">
                <p className="font-semibold text-sm text-[#122420]">{r.author}</p>
                <p className="text-xs uppercase tracking-wider text-[#2a7a6d] mt-0.5">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
