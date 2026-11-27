import React from 'react';

export function Pricing4() {
  const archives = [
    { num: "01", title: "ISSUE 01 // GENESIS", price: "€45", status: "Sold Out Archive" },
    { num: "02", title: "ISSUE 02 // SILHOUETTE", price: "€45", status: "Available" },
    { num: "03", title: "ISSUE 03 // CONCRETE", price: "€50", status: "Available" },
    { num: "04", title: "ISSUE 04 // OBSIDIAN", price: "€55", status: "Low Stock" },
    { num: "05", title: "ISSUE 05 // MONOLITH", price: "€60", status: "Available" }
  ];

  return (
    <section className="w-full border-b border-black py-16 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest font-mono border-b border-black pb-2 mb-12">
          <span>ISSUE ARCHIVE CARDS // PRICING</span>
          <span>BACK CATALOGUE</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {archives.map((a, i) => (
            <div key={i} className="border border-black p-4 flex flex-col justify-between bg-zinc-50">
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono uppercase mb-4 text-zinc-500">
                  <span>{a.num}</span>
                  <span>{a.status}</span>
                </div>
                <div className="border border-black p-1 bg-black mb-3">
                  <img src={`https://picsum.photos/seed/arch${i}/300/400.webp`} alt={a.title} className="w-full h-48 object-cover grayscale" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-tight mb-1">{a.title}</h4>
                <p className="text-xs font-mono font-bold mb-4">{a.price}</p>
              </div>
              <button className="w-full bg-black text-white py-2 text-[10px] uppercase tracking-widest font-mono hover:bg-zinc-800 transition-colors">
                Order Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
