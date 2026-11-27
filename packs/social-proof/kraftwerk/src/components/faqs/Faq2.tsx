import React from 'react';
import { Terminal } from 'lucide-react';

export function Faq2() {
  const faqs = [
    { q: 'TELEMETRY ACCESS', a: 'Live cloud streams are accessible via encrypted API endpoints or the onboard telemetry display.' },
    { q: 'MAINTENANCE INTERVALS', a: 'Comprehensive inspection required every 5,000 kilometers at certified Stuttgart service hubs.' },
    { q: 'SPARE PARTS AVAILABILITY', a: 'Critical titanium and carbon components maintained in Stuttgart warehouse for 48-hour dispatch.' },
    { q: 'WARRANTY COVERAGE', a: 'Full 3-year track and road structural warranty backed by Kraftwerk Engineering GmbH.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6 text-[10px] uppercase font-bold">
          <span>[TWO-COLUMN FAQ DATASHEET // FAQ-02]</span>
          <span>REF: FAQ-02</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="border-2 border-[#111] bg-white p-6">
              <div className="text-[9px] text-[#666] border-b border-[#111] pb-2 mb-3 font-bold">QUERY CODE: Q-0{i + 1}</div>
              <h3 className="text-base font-black uppercase mb-2">{f.q}</h3>
              <p className="text-[10px] text-[#555] uppercase leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
