import React from 'react';

export function Pricing2() {
  const rows = [
    { title: "ATTO I // IL CORPO MECCANICO", date: "28 MAR 2026", time: "21:00", price: "€20", seats: "DISPONIBILI" },
    { title: "ATTO II // L'ABISSO VERTICALE", date: "04 APR 2026", time: "21:00", price: "€22", seats: "ULTIMI POSTI" },
    { title: "ATTO III // STUDI SULLA RABBIA", date: "18 APR 2026", time: "21:00", price: "€18", seats: "DISPONIBILI" },
    { title: "ATTO IV // TRAGEDIA DEL SILENZIO", date: "02 MAG 2026", time: "21:00", price: "€25", seats: "ESAURITO" },
  ];

  return (
    <section className="w-full bg-black text-white border-b-2 border-white max-w-6xl mx-auto p-4">
      <div className="border-b-2 border-white pb-3 mb-4 flex justify-between items-end">
        <h2 className="font-display text-4xl tracking-tighter">TABELLA REPLICHE // HAIRELINE ROWS</h2>
        <span className="font-mono-num text-xs uppercase">MONO STILE</span>
      </div>
      <div className="border border-white overflow-x-auto">
        <table className="w-full text-left font-mono-num text-xs uppercase">
          <thead>
            <tr className="border-b border-white bg-white text-black">
              <th className="p-3 font-display">SPETTACOLO</th>
              <th className="p-3 font-display">DATA</th>
              <th className="p-3 font-display">ORARIO</th>
              <th className="p-3 font-display">PREZZO</th>
              <th className="p-3 font-display text-right">STATO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/40">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-white/10 transition-colors">
                <td className="p-3 font-bold">{r.title}</td>
                <td className="p-3">{r.date}</td>
                <td className="p-3">{r.time}</td>
                <td className="p-3 font-display text-base">{r.price}</td>
                <td className="p-3 text-right">
                  <span className={`px-2 py-0.5 text-[10px] border ${r.seats === 'ESAURITO' ? 'border-zinc-600 text-zinc-500' : 'border-white bg-white text-black'}`}>
                    {r.seats}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
