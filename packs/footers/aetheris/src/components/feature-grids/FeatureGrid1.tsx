import React from 'react';
import { Watch, Shield, Compass, Award } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { icon: Watch, title: 'Tourbillon Precision', desc: 'Gravitational compensation engineered to within 0.2 seconds per diurnal rotation.' },
    { icon: Shield, title: 'Quantum Custody', desc: 'Military-grade physical vault storage with biometric multi-sig authorization.' },
    { icon: Compass, title: 'Bespoke Complications', desc: 'Custom astronomical charts, perpetual calendars, and split-second chronographs.' },
    { icon: Award, title: 'Lifetime Provenance', desc: 'Immutable digital passport registered on secure ledger with certified pedigree.' },
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4b06a] uppercase block mb-3">PILLARS OF EXCELLENCE</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Designed Without Compromise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-[#13171c] border border-white/10 p-6 flex flex-col justify-between hover:border-[#d4b06a]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-full border border-[#d4b06a]/30 flex items-center justify-center text-[#d4b06a] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#ece8e1] mb-3">{f.title}</h3>
                  <p className="font-sans text-xs text-[#7a8494] leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-mono text-[#d4b06a]">
                  INDEX // 0{i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
