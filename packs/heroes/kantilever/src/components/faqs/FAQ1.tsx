import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ1: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE MAXIMUM CANTILEVER TOLERANCE WITHOUT VERTICAL COLUMNS?', a: 'Our structural systems achieve up to 18-meter overhangs utilizing high-tensile S690QL steel lattices and post-tensioned concrete.' },
    { q: 'HOW DO DIAGONAL LOUVERS MANAGE THERMAL EFFICIENCY?', a: 'Angular louvers set at 14 degrees dynamically track solar radiation angles, reducing building solar gain by up to 38%.' },
    { q: 'WHAT IS THE TYPICAL TIMELINE FOR FLAGSHIP ARCHITECTURAL BRIEFS?', a: 'Initial massing studies require 4 weeks, while full permit-ready documentation and structural engineering span 6 to 12 months depending on scale.' },
  ];

  return (
    <section className="bg-[#f7f6f3] text-[#14161a] py-24 border-b border-[#14161a]/15">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#14161a]/60 uppercase tracking-widest">// FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
            TECTONIC INQUIRIES
          </h2>
        </div>

        <div className="divide-y divide-[#14161a]/15 border-t border-b border-[#14161a]/15">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-lg font-extrabold uppercase group-hover:text-[#ffc72c] transition-colors">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 bg-[#14161a] text-[#f7f6f3] flex items-center justify-center transform transition-transform ${openIdx === i ? 'rotate-180 bg-[#ffc72c] text-[#14161a]' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {openIdx === i && (
                <div className="mt-4 text-sm text-[#14161a]/80 font-sans leading-relaxed pr-12 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
