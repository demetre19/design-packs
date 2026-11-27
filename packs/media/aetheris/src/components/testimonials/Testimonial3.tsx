import React from 'react';

export function Testimonial3() {
  const reviews = [
    { quote: "Absolute discretion and peerless craftsmanship.", author: "Marcus Vance", role: "Family Office Director" },
    { quote: "The vault security infrastructure exceeds central bank standards.", author: "Helena Rostova", role: "Private Collector" },
    { quote: "A masterclass in modern horological engineering.", author: "Julian Thorne", role: "Horology Historian" }
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">PATRON GRID</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Endorsements of Record</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#13171c] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[#d4b06a] text-sm font-serif block mb-4">◆ ◆ ◆</span>
                <p className="font-serif text-base italic text-[#ece8e1] mb-6">"{r.quote}"</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <span className="font-serif text-sm text-[#ece8e1] block">{r.author}</span>
                <span className="text-[10px] font-mono text-[#7a8494]">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
