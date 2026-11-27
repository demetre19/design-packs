import React from 'react';

export function Testimonial2() {
  const testimonials = [
    {
      quote: "The concrete formwork and timber integration set a new benchmark for minimalist residential architecture in the Swiss Alps.",
      author: "Prof. Alain Mermod",
      role: "Architectural Review Board, Zürich"
    },
    {
      quote: "Working with Atelier Varden was a masterclass in precision. Every sightline was considered against the changing tides of Kamakura.",
      author: "Kenjiro & Aoi Takahashi",
      role: "Private Residence Owners, Tokyo"
    }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">CRITICAL RECEPTION</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Client & Critic Testimonies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#f0efeb] border border-[#e2e0d8] p-8 flex flex-col justify-between space-y-8">
              <p className="text-[#16171a] text-base leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-6 border-t border-[#e2e0d8] flex items-center space-x-4">
                <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
                <div>
                  <div className="text-xs font-medium text-[#16171a]">{t.author}</div>
                  <div className="text-[10px] font-mono text-stone-500 uppercase">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
