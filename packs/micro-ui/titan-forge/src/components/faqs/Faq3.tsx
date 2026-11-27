import React from 'react';

export function Faq3() {
  const faqs = [
    { num: "01", q: "WHAT IS THE MAXIMUM TONNAGE CAPACITY PER EXCAVATING UNIT?", a: "Each TF-900 heavy excavator unit delivers up to 450,000 tons of extracted ore per daily operational cycle." },
    { num: "02", q: "HOW ARE SOFTWARE OVERRIDES HANDLED SECURELY?", a: "All mesh software updates are cryptographically signed and require dual-operator authorization keys." },
    { num: "03", q: "CAN TITAN FORGE HARDWARE INTEGRATE WITH EXISTING LEGACY SCADA?", a: "Yes. Our universal API gateway bridges legacy industrial SCADA networks directly into the decentralized edge mesh." }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          NUMBERED FAQ // FAQ 03
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          TECHNICAL <span className="text-[#f25c05]">SPECIFICATION</span> FAQ.
        </h2>

        <div className="space-y-4 font-mono">
          {faqs.map((faq) => (
            <div key={faq.num} className="border-2 border-black bg-white p-8 flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-start md:items-center space-x-6 mb-4 md:mb-0 max-w-3xl">
                <span className="text-4xl font-black text-neutral-400 font-sans">{faq.num}</span>
                <div>
                  <h3 className="font-sans font-black text-lg uppercase tracking-tight mb-2">{faq.q}</h3>
                  <p className="text-xs text-neutral-600 uppercase leading-relaxed">{faq.a}</p>
                </div>
              </div>
              <div className="text-[10px] bg-black text-white px-3 py-1 font-bold uppercase">
                ISO-9001
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
