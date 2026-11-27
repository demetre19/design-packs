import React from 'react';

export const Testimonial2: React.FC = () => {
  const testimonials = [
    {
      quote: 'THE DIAGONAL FAÇADE LOUVERS REDUCED OUR ENERGY CONSUMPTION BEYOND PROJECTIONS. UNCOMPROMISING DESIGN.',
      author: 'KENJI SATO',
      role: 'TOKYO CULTURAL FOUNDATION',
      spec: '420 m² // 2025',
    },
    {
      quote: 'PRECISION CALCULATIONS AND RIGOROUS EXECUTION. KANTILEVER DELIVERED OUR MOUNTAIN PAVILION AHEAD OF SCHEDULE.',
      author: 'ASTRID LINDQVIST',
      role: 'OSLO MARITIME GROUP',
      spec: '1,120 m² // 2026',
    },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// DIAGONAL STAGGERED REVIEWS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            CLIENT TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 bg-[#14161a] text-[#f7f6f3] space-y-6 ${i === 1 ? 'md:translate-y-8' : ''}`}
              style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 100%, 0 94%)' }}
            >
              <span className="font-mono text-xs text-[#ffc72c] uppercase">// REVIEW 0{i + 1}</span>
              <p className="text-lg font-bold uppercase leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-6 border-t border-[#f7f6f3]/15 flex justify-between items-end">
                <div>
                  <div className="font-extrabold uppercase text-sm">{t.author}</div>
                  <div className="font-mono text-[10px] text-[#f7f6f3]/60">{t.role}</div>
                </div>
                <span className="font-mono text-xs text-[#ffc72c]">{t.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
