import React from 'react';

export function Testimonial3() {
  const testimonials = [
    {
      quote: "Zero downtime across 1,200 autonomous units in the Atacama desert. Exceptional build quality.",
      author: "HECTOR SALAZAR",
      role: "VP ENGINEERING // ANDEAN EXTRACTION",
      isDark: true
    },
    {
      quote: "The 0.04ms fiber mesh backbone gives us absolute control over multi-ton hydraulic breakers.",
      author: "DR. ARIS THORNE",
      role: "CHIEF METALLURGIST // HELIOS METALS",
      isDark: false
    }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          ALTERNATING ZONES // TESTIMONIAL 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          CLIENT <span className="text-[#f25c05]">VERIFICATION</span> LOG.
        </h2>

        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`border-4 border-black p-8 md:p-12 flex flex-col justify-between ${t.isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              <blockquote className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-8">
                "{t.quote}"
              </blockquote>
              <div className={`pt-6 border-t ${t.isDark ? 'border-neutral-800' : 'border-neutral-200'} flex flex-col md:flex-row justify-between items-start md:items-center font-mono text-xs`}>
                <div>
                  <span className="font-bold uppercase block text-sm">{t.author}</span>
                  <span className={t.isDark ? 'text-neutral-400' : 'text-neutral-600'}>{t.role}</span>
                </div>
                <div className={`mt-4 md:mt-0 text-[10px] uppercase px-3 py-1 font-bold ${t.isDark ? 'bg-[#f25c05] text-black' : 'bg-black text-white'}`}>
                  ISO-9001 VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
