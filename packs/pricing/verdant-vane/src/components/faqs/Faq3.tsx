import React from 'react';

export function Faq3() {
  const faqs = [
    { num: "01", q: "What is boutique clinical brand architecture?", a: "We design comprehensive visual, spatial, and strategic ecosystems specifically tailored for high-end longevity clinics and holistic medical practices." },
    { num: "02", q: "How long does a typical engagement last?", a: "Engagements range from our 4-week Boutique Audit to 3-month clinical ecosystem transformations and annual enterprise retainers." },
    { num: "03", q: "Do you assist with physical interior design?", a: "Yes. Our somatic spatial architecture practice specializes in acoustic warmth, lighting design, and patient journey choreography." }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Numbered Inquiries
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Clear answers to core questions.
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#e8f0ec] rounded-[24px] p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <span className="font-serif text-3xl text-[#2a7a6d] font-bold">{f.num}</span>
              <div>
                <h3 className="font-serif text-xl text-[#122420] mb-2">{f.q}</h3>
                <p className="text-[#122420]/80 font-light text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
