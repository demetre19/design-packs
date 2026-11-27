import React from 'react';

export function Pricing4() {
  const specs = [
    { feature: 'TOP SPEED', street: '240 KM/H', track: '310 KM/H', factory: '340+ KM/H' },
    { feature: 'BATTERY CAPACITY', street: '18 kWh', track: '24 kWh', factory: '30 kWh Solid' },
    { feature: 'DOWNFORCE', street: '45 kg', track: '180 kg', factory: '340 kg Active' },
    { feature: 'TELEMETRY', street: 'Standard App', track: 'Advanced ECU', factory: 'Live Pit Feed' },
    { feature: 'PRICE ALLOCATION', street: '$34,500', track: '$48,900', factory: '$72,000' },
  ];

  return (
    <section className="w-full bg-white text-black py-16 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="font-mono text-xs text-[#ff2e00] font-bold mb-2 uppercase">// COMPARISON MATRIX</div>
        <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
          SCALE <span className="text-[#ff2e00]">MATRIX</span>
        </h2>

        {/* Comparison as scale-contrast table */}
        <div className="border-2 border-black overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="bg-black text-white border-b-2 border-black">
                <th className="p-4 font-bold">// FEATURE SPEC</th>
                <th className="p-4 font-bold">STREET SPEC</th>
                <th className="p-4 font-bold text-[#ff2e00]">TRACK PREDATOR</th>
                <th className="p-4 font-bold">FACTORY RACE</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, idx) => (
                <tr key={idx} className="border-b border-black hover:bg-neutral-50">
                  <td className="p-4 font-bold text-neutral-900">{row.feature}</td>
                  <td className="p-4 text-neutral-600">{row.street}</td>
                  <td className="p-4 font-bold text-[#ff2e00] bg-neutral-100">{row.track}</td>
                  <td className="p-4 text-black font-bold">{row.factory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
