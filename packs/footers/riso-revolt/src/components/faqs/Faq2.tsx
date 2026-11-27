import React from 'react';

export default function Faq2() {
  const faqs = [
    { q: "What is your pricing model?", a: "We offer fixed project fees for editions and subscription retainers for ongoing sprints." },
    { q: "Where are you located?", a: "Our primary print & digital labs are located in Berlin and Tokyo." },
    { q: "Can we request custom paper stocks?", a: "Yes, we source 300gsm heavyweight archival papers from sustainable mills." },
    { q: "How do we get started?", a: "Submit a project brief through our intake form to schedule an initial audit." }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#ff6b5e] text-white font-mono text-xs font-black px-3 py-1 shadow-hard-sm">
            QUICK ANSWERS
          </div>
          <h2 className="font-grotesk font-black text-4xl uppercase mt-3">STUDIO INQUIRIES.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6">
              <h3 className="font-grotesk font-black text-lg uppercase mb-2">{f.q}</h3>
              <p className="font-mono text-xs text-[#111111]/80 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
