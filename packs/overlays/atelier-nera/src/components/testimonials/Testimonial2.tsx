import React from 'react';

export function Testimonial2() {
  const quotes = [
    { text: "Uncompromising discipline and rare aesthetic integrity.", author: "julian kross", role: "editor, minimal press" },
    { text: "The website feels like an immaculate physical monograph.", author: "soren lund", role: "architect" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="text-[9px] tracking-widest uppercase text-black/50 mb-12">endorsements</div>
      <div className="divide-y divide-black/10">
        {quotes.map((q, idx) => (
          <div key={idx} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <p className="font-light text-xl md:text-2xl lowercase tracking-tight">
                &ldquo;{q.text}&rdquo;
              </p>
            </div>
            <div className="md:col-span-4 text-left md:text-right">
              <span className="text-xs font-light lowercase block text-black">{q.author}</span>
              <span className="text-[10px] uppercase tracking-wider text-black/50">{q.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
