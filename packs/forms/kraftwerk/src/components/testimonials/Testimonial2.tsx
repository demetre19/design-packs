import React from 'react';
import { Terminal } from 'lucide-react';

export function Testimonial2() {
  const quotes = [
    { code: 'DOC-881', author: 'DR. M. WEBER', role: 'CHIEF AERODYNAMICIST', quote: 'The venturi tunnel suction coefficients exceeded our CFD simulation models by 4.2% during high-speed cornering.' },
    { code: 'DOC-882', author: 'K. SCHMIDT', role: 'HEAD OF POWERTRAIN', quote: 'Pneumatic valve springs maintain absolute stability at 9,200 RPM without thermal degradation.' },
  ];

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-[#111] pb-3 mb-6 text-[10px] font-bold uppercase">
          <span>[ENGINEERING DEBRIEF LOGS]</span>
          <span>REF: T-02</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="border-2 border-[#111] bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[9px] text-[#666] border-b border-[#111] pb-2 mb-4">
                  <span>REF: {q.code}</span>
                  <span className="font-bold">{q.role}</span>
                </div>
                <p className="text-xs uppercase leading-relaxed font-bold mb-6">"{q.quote}"</p>
              </div>
              <div className="border-t border-[#111] pt-3 flex justify-between items-center text-[9px]">
                <span className="font-bold">{q.author}</span>
                <span className="text-[#666]">STUTTGART LAB</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
