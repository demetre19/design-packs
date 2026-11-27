import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: 'Peak Power Output', p1: '110 kW', p2: '117 kW', p3: '135 kW' },
    { feature: 'Battery Capacity', p1: '18.2 kWh', p2: '21.4 kWh', p3: '24.0 kWh' },
    { feature: 'Brake Calipers', p1: 'Brembo Standard', p2: 'Brembo GP4-RR', p3: 'Carbon Monobloc Pro' },
    { feature: 'Active Aero Winglets', p1: false, p2: true, p3: true },
    { feature: 'Telemetry Pro Stream', p1: false, p2: false, p3: true },
    { feature: 'Starting Price', p1: '$38,500', p2: '$48,500', p3: '$62,000' },
  ];

  return (
    <section className="py-20 bg-[#101114] border-b border-[#272a33]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block">// MATRIX COMPARISON</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mt-2">TECHNICAL SPEC COMPARISON</h2>
        </div>

        <div className="bg-[#16181d] border border-[#272a33] clip-corner overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#272a33] font-mono-spec text-xs text-[#ff5a1f]">
                <th className="p-6">SPECIFICATION MATRIX</th>
                <th className="p-6">APEX V12 PURE</th>
                <th className="p-6 text-white bg-[#ff5a1f]/10">APEX V12 R</th>
                <th className="p-6">APEX X TRACK</th>
              </tr>
            </thead>
            <tbody className="font-mono-spec text-xs text-neutral-300 divide-y divide-[#272a33]">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#1c1f26] transition-colors">
                  <td className="p-6 font-bold text-white">{row.feature}</td>
                  <td className="p-6 text-neutral-400">{typeof row.p1 === 'boolean' ? (row.p1 ? <Check className="text-[#ff5a1f]" size={16} /> : <X size={16} className="text-neutral-600" />) : row.p1}</td>
                  <td className="p-6 text-white bg-[#ff5a1f]/5 font-bold">{typeof row.p2 === 'boolean' ? (row.p2 ? <Check className="text-[#ff5a1f]" size={16} /> : <X size={16} className="text-neutral-600" />) : row.p2}</td>
                  <td className="p-6 text-neutral-400">{typeof row.p3 === 'boolean' ? (row.p3 ? <Check className="text-[#ff5a1f]" size={16} /> : <X size={16} className="text-neutral-600" />) : row.p3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
