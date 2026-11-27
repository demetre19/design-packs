import React from 'react';

export function FeatureGrid4() {
  const steps = [
    { num: "01", title: "Discovery & Clinical Audit", desc: "We evaluate your current practice workflows, patient sentiment, and brand positioning to identify key opportunities for warm luxury elevation." },
    { num: "02", title: "Protocol & Spatial Design", desc: "Our multidisciplinary team crafts bespoke longevity protocols, spatial acoustics, visual identity systems, and patient touchpoint choreography." },
    { num: "03", title: "Implementation & Growth", desc: "We seamlessly integrate new clinical offerings and brand assets, empowering your team to deliver transformative patient experiences." }
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Our Methodology
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            A deliberate three-stage engagement process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#faf6f0] rounded-[24px] p-8 shadow-sm relative flex flex-col justify-between">
              <div>
                <span className="font-serif text-4xl text-[#2a7a6d] font-bold block mb-6">{s.num}</span>
                <h3 className="font-serif text-2xl text-[#122420] mb-3">{s.title}</h3>
                <p className="text-[#122420]/80 font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#122420]/10 text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold">
                Phase {s.num} of 03
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
