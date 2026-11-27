import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials2() {
  const quotes = [
    { text: "Cornering speeds on the Velox Apex defy conventional physics. The magnetic suspension is wizardry.", author: "MARCUS VANCE // MOTOGP VETERAN", num: "01" },
    { text: "Solid-state thermal stability means zero power fade during 20 consecutive flying laps.", author: "ELENA ROSTOVA // ENDURANCE TEST LEAD", num: "02" },
    { text: "The brutal acceleration curve hits like a fighter jet catapult. Pure motorsport adrenaline.", author: "KENJI SATO // CHIEF DEVELOPMENT TESTER", num: "03" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full bg-black text-white py-24 border-b-2 border-black overflow-hidden">
      {/* Oversized quotation glyph as background object */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[20rem] sm:text-[32rem] font-black text-neutral-900 select-none pointer-events-none leading-none z-0">
        “
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-8 font-mono text-xs">
          <span className="text-[#ff2e00] font-bold">// PILOT TESTIMONIAL SLIDER</span>
          <span className="text-neutral-500">0{active + 1} / 03</span>
        </div>

        <div className="min-h-[180px]">
          <p className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-snug mb-8">
            "{quotes[active].text}"
          </p>
          <div className="font-mono text-xs text-[#ff2e00] font-bold uppercase">
            // {quotes[active].author}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-neutral-800">
          <button 
            onClick={() => setActive((active - 1 + quotes.length) % quotes.length)}
            className="border border-neutral-700 p-3 hover:bg-[#ff2e00] hover:text-black hover:border-[#ff2e00] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setActive((active + 1) % quotes.length)}
            className="border border-neutral-700 p-3 hover:bg-[#ff2e00] hover:text-black hover:border-[#ff2e00] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
