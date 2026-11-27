import React from 'react';

export function Testimonial1() {
  const testimonials = [
    { quote: "Sterling's rigorous typographic system transformed our museum catalogue from a standard publication into an architectural artifact of lasting cultural significance.", author: "DR. HELENA VOGEL", role: "Director, Kunsthalle Zurich" },
    { quote: "The wayfinding and spatial layout designed by Studio Sterling for our London galleries established an effortless navigational clarity praised by critics internationally.", author: "ALISTAIR CRAIG", role: "Curator, Serpentine Pavilion" },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">PROFESSIONAL REFERENCES & TESTIMONIALS</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">REF 01</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="border border-black p-6 flex flex-col justify-between bg-neutral-50">
              <p className="text-xs uppercase tracking-wider leading-relaxed text-neutral-800 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-black pt-4">
                <div className="font-black text-xs uppercase tracking-tight">{t.author}</div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
