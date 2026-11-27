import React from 'react';

export function Faq3() {
  const faqs = [
    { num: '01', q: 'CAN THE APEX-V12 BE REGISTERED FOR STREET USE?', a: 'Yes. Full homologation for street legality is included in all regional specifications.' },
    { num: '02', q: 'WHAT IS THE ESTIMATED REAL-WORLD RANGE?', a: '280 km combined cycle, or 45 continuous minutes of aggressive track riding at Suzuka.' },
    { num: '03', q: 'ARE CUSTOM GEOMETRY FITTINGS AVAILABLE?', a: 'Factory technicians custom-tailor footpeg and handlebar placement during white-glove delivery.' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// INDEXED FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">OPERATIONAL QUESTIONS</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.num} className="bg-[#16181d] border border-[#272a33] p-8 clip-corner relative overflow-hidden">
              <div className="absolute right-4 bottom-[-10px] font-extrabold text-[100px] text-white/[0.02] select-none pointer-events-none">
                {faq.num}
              </div>
              <div className="relative z-10">
                <span className="font-mono-spec text-xs text-[#ff5a1f] block mb-2">INQUIRY //{faq.num}</span>
                <h3 className="font-display font-extrabold text-xl text-white mb-3">{faq.q}</h3>
                <p className="font-mono-spec text-xs text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
