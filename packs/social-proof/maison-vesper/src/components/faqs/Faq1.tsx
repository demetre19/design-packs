import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Faq1: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Quels sont les délais pour une création sur-mesure ?", a: "Il faut compter entre six et huit semaines, incluant les trois essayages indispensables dans notre salon de la rue Cambon." },
    { q: "Où les étoffes sont-elles tissées ?", a: "Exclusivement dans des ateliers partenaires historiques à Lyon et dans le Piémont italien." },
    { q: "Proposez-vous un service d'entretien à vie ?", a: "Oui, chaque création Vesper bénéficie d'une garantie et d'un rafraîchissement annuel offert dans nos ateliers." }
  ];

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">QUESTIONS FRÉQUENTES — FAQ N° 01</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Précisions & Usages</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="border border-[#a68a64]/30 bg-[#faf7f2] p-6 relative">
              <div className="absolute top-4 right-4 text-[#a68a64] font-mono text-xs">×</div>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left pr-8"
              >
                <span className="font-serif text-2xl font-light text-[#1a1512]">{f.q}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 text-[#a68a64] ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="mt-4 pt-4 border-t border-[#a68a64]/20 text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light animate-fade-in">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
