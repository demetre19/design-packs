import React from 'react';
import { Check, X } from 'lucide-react';

export function Pricing4() {
  const rows = [
    { feature: "Autonomous Excavators", t1: "1 Unit", t2: "Up to 25 Units", t3: "Unlimited" },
    { feature: "Backbone Latency", t1: "10.0 ms", t2: "0.04 ms Fiber", t3: "Dedicated Core" },
    { feature: "Acoustic Stress AI", t1: false, t2: true, t3: true },
    { feature: "Satellite Relay Feed", t1: false, t2: false, t3: true },
    { feature: "Uptime SLA", t1: "99.5%", t2: "99.98%", t3: "99.99% Absolute" },
    { feature: "On-Site Titan Engineers", t1: false, t2: "On Demand", t3: "Permanent Team" },
  ];

  return (
    <section className="bg-[#f5f4f0] text-black py-16 border-b-4 border-black font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border border-black bg-white p-3 inline-block font-mono text-[10px] uppercase mb-6">
          HEAVY COMPARISON TABLE // PRICING 04
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          SPECIFICATION <span className="text-[#f25c05]">MATRIX</span> COMPARISON.
        </h2>

        <div className="border-4 border-black bg-white overflow-x-auto font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-white border-b-4 border-[#f25c05]">
                <th className="p-4 uppercase font-black">Specification Feature</th>
                <th className="p-4 uppercase font-black border-l border-neutral-800">Tactical Node</th>
                <th className="p-4 uppercase font-black border-l border-neutral-800 text-[#f25c05]">Flagship Grid</th>
                <th className="p-4 uppercase font-black border-l border-neutral-800">Mega Extraction</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx} className="border-b border-black hover:bg-neutral-100 transition-colors">
                  <td className="p-4 font-bold uppercase">{r.feature}</td>
                  <td className="p-4 border-l border-black text-neutral-700">
                    {typeof r.t1 === 'boolean' ? (r.t1 ? <Check className="w-4 h-4 text-[#f25c05]" /> : <X className="w-4 h-4 text-neutral-400" />) : r.t1}
                  </td>
                  <td className="p-4 border-l border-black font-bold text-[#f25c05] bg-neutral-50">
                    {typeof r.t2 === 'boolean' ? (r.t2 ? <Check className="w-4 h-4 text-[#f25c05]" /> : <X className="w-4 h-4 text-neutral-400" />) : r.t2}
                  </td>
                  <td className="p-4 border-l border-black text-neutral-700">
                    {typeof r.t3 === 'boolean' ? (r.t3 ? <Check className="w-4 h-4 text-[#f25c05]" /> : <X className="w-4 h-4 text-neutral-400" />) : r.t3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
