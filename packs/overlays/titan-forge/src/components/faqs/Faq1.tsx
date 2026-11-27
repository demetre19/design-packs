import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Faq1() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "WHAT IS THE LATENCY OF THE DECENTRALIZED EDGE MESH?", a: "The Titan Forge fiber backbone guarantees sub-0.04ms latency across all connected autonomous heavy excavation units." },
    { q: "HOW DOES ACOUSTIC STRESS AI PREVENT DRILL FAILURES?", a: "Ultrasonic frequency sensors continuously monitor drill bit vibration harmonics, detecting micro-fractures up to 500 milliseconds before structural shear occurs." },
    { q: "ARE ALL EXTRACTION UNITS ISO-9001 COMPLIANT?", a: "Yes. Every deployed Titan Forge unit adheres strictly to international ISO-9001 heavy machinery manufacturing and safety standards." },
    { q: "WHAT IS THE POWER REQUIREMENT FOR MEGASITE SMELTING CELLS?", a: "Smelting Cell-X requires dedicated megawatt-class substations capable of handling continuous high-voltage industrial loads." }
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          FAQ ACCORDION // FAQ 01
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          FREQUENTLY ASKED <span className="text-[#f25c05]">QUESTIONS</span>.
        </h2>

        <div className="space-y-4 font-mono">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-black bg-white overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center font-sans font-black text-lg uppercase tracking-tight bg-white hover:bg-black hover:text-white transition-colors group"
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-[#f25c05]" /> : <ChevronDown className="w-5 h-5 text-black group-hover:text-white" />}
              </button>
              {openIdx === idx && (
                <div className="p-6 border-t-2 border-black bg-[#f5f4f0] text-xs text-neutral-700 uppercase leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
