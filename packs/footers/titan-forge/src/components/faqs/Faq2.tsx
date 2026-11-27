import React from 'react';

export function Faq2() {
  const faqs = [
    { num: "01", q: "DEPLOYMENT TIMELINE", a: "Standard tactical node deployment takes 48 hours from initial site survey to full autonomous fleet integration." },
    { num: "02", q: "SATELLITE RELAY BACKUP", a: "In remote desert or sub-zero regions without terrestrial fiber, encrypted orbital relay links ensure zero telemetry drop." },
    { num: "03", q: "MAINTENANCE INTERVALS", a: "Hot-swappable hydraulic manifolds allow scheduled maintenance cycles to be completed in under 20 minutes." }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          TWO-COLUMN FAQ // FAQ 02
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          OPERATIONAL <span className="text-[#f25c05]">INDEX</span> FAQ.
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.num} className="grid grid-cols-1 lg:grid-cols-12 border-4 border-black font-mono">
              {/* Black index column */}
              <div className="lg:col-span-4 bg-black text-white p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-4 border-[#f25c05]">
                <span className="text-xs text-[#f25c05] uppercase tracking-widest block mb-2">INDEX // {faq.num}</span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tight">{faq.q}</h3>
              </div>

              {/* White answer column */}
              <div className="lg:col-span-8 bg-white text-black p-8 flex items-center text-xs text-neutral-800 uppercase leading-relaxed">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
