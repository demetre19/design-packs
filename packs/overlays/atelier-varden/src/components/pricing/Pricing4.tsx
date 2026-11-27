import React from 'react';

export function Pricing4() {
  const rows = [
    { feature: "Site Topography Analysis", standard: true, flagship: true, turnkey: true },
    { feature: "Volumetric Massing Studies", standard: true, flagship: true, turnkey: true },
    { feature: "Full Construction Blueprints", standard: false, flagship: true, turnkey: true },
    { feature: "Bespoke Millwork & Joinery", standard: false, flagship: true, turnkey: true },
    { feature: "Bi-Weekly Site Supervision", standard: false, flagship: true, turnkey: true },
    { feature: "General Contracting & Build", standard: false, flagship: false, turnkey: true }
  ];

  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">MATRIX COMPARISON</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Commission Scope Comparison</h2>
        </div>

        <div className="border border-[#e2e0d8] bg-[#f0efeb] overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e2e0d8] text-xs font-mono uppercase text-stone-500">
                <th className="p-4 border-r border-[#e2e0d8]">Service Deliverable</th>
                <th className="p-4 border-r border-[#e2e0d8] text-center">Preliminary Study</th>
                <th className="p-4 border-r border-[#e2e0d8] text-center text-[#b5482e]">Flagship Design</th>
                <th className="p-4 text-center">Turnkey Build</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e0d8] text-xs font-mono">
              {rows.map((r, i) => (
                <tr key={i} className="hover:bg-[#fafaf8]">
                  <td className="p-4 border-r border-[#e2e0d8] text-[#16171a] font-medium">{r.feature}</td>
                  <td className="p-4 border-r border-[#e2e0d8] text-center">{r.standard ? "✓" : "—"}</td>
                  <td className="p-4 border-r border-[#e2e0d8] text-center text-[#b5482e] font-bold">{r.flagship ? "✓" : "—"}</td>
                  <td className="p-4 text-center">{r.turnkey ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
