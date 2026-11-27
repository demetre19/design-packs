import React from 'react';

export function Faq3() {
  const faqs = [
    { num: "01", q: "How do I activate my gift card?", a: "Enter your gift code at checkout to apply full credit." },
    { num: "02", q: "Can I customize kit themes?", a: "Yes, you can swap themes anytime in your profile settings." },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-black text-[#3d2530] text-center mb-8">Numbered FAQ</h2>
        {faqs.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-lg border-2 border-[#3d2530]/10 flex items-start gap-4">
            <span className="w-12 h-12 rounded-2xl bg-[#ff8c42] text-white flex items-center justify-center font-black flex-shrink-0">{f.num}</span>
            <div>
              <h4 className="text-xl font-black text-[#3d2530] mb-2">{f.q}</h4>
              <p className="text-[#3d2530]/70 font-medium">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
