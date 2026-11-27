import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: 'Vault Storage Space', basic: 'Up to 5 Boxes', pro: 'Full Strongroom', imperial: 'Custom Wing' },
    { feature: 'Biometric Security', basic: 'Fingerprint', pro: 'Multi-Factor + Iris', imperial: 'Quantum Encrypted' },
    { feature: 'Watch Allocations', basic: 'Standard List', pro: 'Priority List', imperial: 'Guaranteed First' },
    { feature: 'Concierge Support', basic: 'Email Only', pro: '24/7 Dedicated', imperial: 'Private Principal' },
    { feature: 'Global Salon Access', basic: 'London / Geneva', pro: 'All 4 Salons', imperial: 'Unlimited VIP' },
  ];

  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">COMPARISON MATRIX</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1]">Detailed Patronage Specs</h2>
        </div>

        <div className="bg-[#13171c] border border-white/10 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono text-[#d4b06a]">
                <th className="p-4">SPECIFICATION</th>
                <th className="p-4">COLLECTOR</th>
                <th className="p-4">SOVEREIGN</th>
                <th className="p-4">IMPERIAL</th>
              </tr>
            </thead>
            <tbody className="text-xs font-mono">
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-white/10 text-[#ece8e1]">
                  <td className="p-4 text-[#7a8494]">{r.feature}</td>
                  <td className="p-4">{r.basic}</td>
                  <td className="p-4 text-[#d4b06a]">{r.pro}</td>
                  <td className="p-4">{r.imperial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
