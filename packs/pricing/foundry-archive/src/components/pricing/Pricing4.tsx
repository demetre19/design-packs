import React from 'react';
import { Shield, Check, FileText } from 'lucide-react';

export function Pricing4() {
  const cards = [
    { title: "DRAFTING LICENSE", price: "$30", desc: "Editorial and proofing use." },
    { title: "COMMERCIAL LICENSE", price: "$150", desc: "Client branding and web use." },
    { title: "BROADCAST LICENSE", price: "$400", desc: "Television and film credits." },
    { title: "FOUNDRY MASTER", price: "$900", desc: "All current and future revivals." }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">04. HORIZONTAL ERA-SCROLL LICENSES</h2>
          <span className="text-xs text-neutral-500">CATALOG 1983</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase block mb-2">LICENSE #{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-sm font-bold text-white mb-2">{c.title}</h3>
                <div className="text-2xl font-bold text-neutral-200 mb-3">{c.price}</div>
                <p className="text-xs text-neutral-400 font-sans mb-6">{c.desc}</p>
              </div>
              <button className="border border-neutral-700 text-xs py-2 hover:bg-neutral-800 transition-colors text-neutral-300">
                SELECT LICENSE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
