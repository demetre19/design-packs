import React from 'react';

export function Faq2() {
  const faqs = [
    { q: 'Calibration Tolerance', a: 'All dyno dynamometers are laser-calibrated daily to within 0.02% accuracy.' },
    { q: 'Fuel & Fluid Specs', a: 'Cell 04 supports racing synthetic fuels, aviation gasoline, and custom methanol blends.' },
    { q: 'Security & Confidentiality', a: 'Facilities feature biometric access control and Faraday-shielded test chambers.' },
    { q: 'Scheduling Lead Time', a: 'Standard program bookings require 5 business days advance calibration notice.' },
  ];

  return (
    <section className="bg-[#0c0d0f] text-white py-24 px-6 border-b border-[#22262f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs text-[#ffd500] tracking-widest uppercase">// 02. DUAL-COLUMN FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter mt-2">
            OPERATIONAL <span className="text-[#ffd500]">PROTOCOLS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#14161a] border border-[#262c36] p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#ffd500] mb-3">{f.q}</h3>
              <p className="text-zinc-400 font-sans text-xs">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
