import React from 'react';

export default function Faq3() {
  const faqs = [
    { num: "01", q: "WHAT FILE FORMATS ARE DELIVERED?", a: "Figma design systems, React source code repositories, and high-res vector/PDF separations for print." },
    { num: "02", q: "CAN YOU SHIP PRINTS INTERNATIONALLY?", a: "Yes, all physical print editions are carefully packed in reinforced flat boxes and shipped worldwide from Berlin and Tokyo." },
    { num: "03", q: "HOW DO RETENTION SLOTS WORK?", a: "We limit our active client roster to 4 brands per month to ensure uncompromised attention." }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
            INDEXED FAQs
          </div>
          <h2 className="font-grotesk font-black text-4xl uppercase mt-3">TECHNICAL FAQ.</h2>
        </div>

        {faqs.map((f, i) => (
          <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="bg-[#111111] text-[#ffd92e] font-mono text-xs font-black px-3 py-1.5 shadow-hard-sm shrink-0">
              [{f.num}]
            </div>
            <div>
              <h3 className="font-grotesk font-black text-xl uppercase mb-2">{f.q}</h3>
              <p className="font-mono text-xs sm:text-sm text-[#111111]/80 leading-relaxed">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
