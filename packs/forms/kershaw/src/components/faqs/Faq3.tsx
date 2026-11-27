import React from 'react';

export function Faq3() {
  const faqs = [
    { num: '01', q: 'How do I reserve a dyno test block?', a: 'Submit your powertrain specs through our secure contact terminal to initiate scheduling.' },
    { num: '02', q: 'What is included in the telemetry package?', a: 'Real-time multi-channel oscilloscope feeds, thermal maps, and certified PDF diagnostic reports.' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 03. NUMBERED FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            NUMBERED <span className="text-[#ffd500]">INQUIRIES.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-6 relative overflow-hidden flex gap-6 items-start">
              <span className="text-3xl font-black text-zinc-800">{f.num}</span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-2">{f.q}</h3>
                <p className="text-zinc-400 font-sans text-xs">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
