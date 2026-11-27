import React from 'react';

export function Testimonial3() {
  const items = [
    { num: '1', quote: "An uncompromising approach to grid structures and typography.", author: "Julian Thorne, Rizzoli Editor" },
    { num: '2', quote: "The definitive voice in contemporary architectural monographs.", author: "Clara Mendelssohn, Vitra Design Museum" },
    { num: '3', quote: "Exemplary precision in every printed page and exhibition panel.", author: "Sven Lindqvist, Architectural Review" },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">INDEXED ENDORSEMENTS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">REF 03</span>
        </div>
        <div className="border border-black divide-y divide-black">
          {items.map((item, idx) => (
            <div key={idx} className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white hover:bg-neutral-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-7 h-7 border border-black rounded-full text-xs font-bold shrink-0">{item.num}</span>
                <p className="text-xs uppercase tracking-wider font-medium">"{item.quote}"</p>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 shrink-0 border-l border-black pl-4 sm:border-l-0 sm:pl-0">
                — {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
