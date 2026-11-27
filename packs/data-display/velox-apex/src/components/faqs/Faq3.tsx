import React from 'react';

export function Faq3() {
  const faqs = [
    { num: '01', q: 'HOW DO I ACCESS LIVE TELEMETRY?', a: 'Via our secure cloud portal or mobile app connected through the onboard 5G ECU module.' },
    { num: '02', q: 'WHAT BRAKING SYSTEM IS INSTALLED?', a: 'Dual 390mm carbon-ceramic rotors paired with titanium 8-piston monobloc calipers.' },
    { num: '03', q: 'ARE TEST PILOTS AVAILABLE?', a: 'Yes, private test sessions can be scheduled at Suzuka or Nürburgring test docks.' },
  ];

  return (
    <section className="w-full bg-black text-white py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// NUMBERED FAQS WITH MASSIVE FAINT NUMERALS</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          SYSTEM <span className="text-[#ff2e00]">INQUIRY FAQ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-neutral-800 p-8 bg-neutral-900 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-4 -right-4 text-8xl font-black text-neutral-800 select-none pointer-events-none">
                {faq.num}
              </div>
              <div className="relative z-10 mb-8">
                <div className="font-mono text-[10px] text-[#ff2e00] mb-2 font-bold">// Q.0{idx + 1}</div>
                <h3 className="font-black text-xl uppercase mb-4">{faq.q}</h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase">
                [VERIFIED SECURE]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
