import React from 'react';

export const FAQ3: React.FC = () => {
  const faqs = [
    { num: '01', q: 'WHAT IS THE MINIMUM PLOT SIZE FOR A CANTILEVER RESIDENCE?', a: 'We design for plots starting at 300 m² with steep or challenging topography.' },
    { num: '02', q: 'DO YOU PROVIDE TURNKEY CONSTRUCTION MANAGEMENT?', a: 'Yes, from initial conceptual sketches through to final concrete pouring and interior joinery.' },
    { num: '03', q: 'HOW ARE FEES STRUCTURED FOR INTERNATIONAL PROJECTS?', a: 'Fees are calculated based on built area (m²) and structural complexity tiers.' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// NUMBERED FAQS WITH WATERMARK</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            INQUIRY REGSTER
          </h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="relative bg-[#14161a] text-[#f7f6f3] p-8 overflow-hidden">
              <div className="absolute right-[-2%] bottom-[-20%] text-[140px] font-extrabold text-[#f7f6f3] opacity-[0.04] font-mono select-none">
                {faq.num}
              </div>
              <div className="relative z-10 space-y-3">
                <span className="font-mono text-xs text-[#ffc72c] uppercase">FAQ // {faq.num}</span>
                <h3 className="text-xl font-extrabold uppercase">{faq.q}</h3>
                <p className="text-xs text-[#f7f6f3]/70 font-sans leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
