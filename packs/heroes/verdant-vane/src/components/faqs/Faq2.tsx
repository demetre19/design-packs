import React from 'react';

export function Faq2() {
  const faqs = [
    { q: "What is boutique clinical brand architecture?", a: "We design comprehensive visual, spatial, and strategic ecosystems specifically tailored for high-end longevity clinics." },
    { q: "How long does a typical engagement last?", a: "Engagements range from our 4-week Boutique Audit to 3-month clinical ecosystem transformations." },
    { q: "Do you assist with physical interior design?", a: "Yes. Our somatic spatial architecture practice specializes in acoustic warmth, lighting design, and patient journey choreography." },
    { q: "How do we begin our collaboration?", a: "We begin with a confidential introductory consultation with our founder, Dr. Elena Vance." }
  ];

  return (
    <section className="w-full bg-[#e8f0ec] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Guidance & Answers
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Everything you need to know.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#faf6f0] rounded-[24px] p-8 shadow-sm">
              <h3 className="font-serif text-xl text-[#122420] mb-3">{f.q}</h3>
              <p className="text-[#122420]/80 font-light text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
