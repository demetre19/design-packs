import React from 'react';
import { Check } from 'lucide-react';

export function Pricing1() {
  const tiers = [
    { name: 'SOUVERAIN', price: '$2,500', period: 'ANNUAL', desc: 'Essential private membership and horological curation.', features: ['Access to Annual Collection', 'Quarterly Journal Delivery', 'Standard Vault Storage', 'Salon Privé Invitations'] },
    { name: 'GRAND COMPLICATION', price: '$7,500', period: 'ANNUAL', desc: 'Our most sought-after membership for elite collectors.', popular: true, features: ['Priority Allocation Access', 'Dedicated Concierge', 'Secure Vault Box (Tier 1)', 'Annual Private Dinner in Geneva', 'Custom Engraving Privileges'] },
    { name: 'IMPERIAL VAULT', price: '$25,000', period: 'ANNUAL', desc: 'Absolute custody and bespoke bespoke commissions.', features: ['Bespoke Commission Priority', 'Full Subterranean Strongroom', 'Global Armed Escort Service', 'Private Jet Salon Access', 'Direct Atelier Line'] },
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">MEMBERSHIP TIERS</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Exclusive Patronage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`bg-[#13171c] p-8 flex flex-col justify-between relative ${
                t.popular ? 'border-2 border-[#d4b06a]' : 'border border-white/10'
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4b06a] text-[#0b0d10] text-[10px] font-mono tracking-widest px-3 py-0.5">
                  MOST POPULAR
                </div>
              )}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#d4b06a] block mb-2">{t.period}</span>
                <h3 className="font-serif text-2xl text-[#ece8e1] mb-2">{t.name}</h3>
                <div className="font-serif text-4xl text-[#ece8e1] mb-4">{t.price}</div>
                <p className="font-sans text-xs text-[#7a8494] mb-8 pb-6 border-b border-white/10">{t.desc}</p>
                
                <ul className="flex flex-col gap-3 mb-8">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs text-[#ece8e1]">
                      <Check className="w-4 h-4 text-[#d4b06a] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-full text-xs font-mono tracking-widest transition-all ${
                  t.popular
                    ? 'bg-[#d4b06a] text-[#0b0d10] hover:bg-[#ece8e1]'
                    : 'border border-[#d4b06a] text-[#d4b06a] hover:bg-[#d4b06a] hover:text-[#0b0d10]'
                }`}
              >
                APPLY FOR PATRONAGE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
