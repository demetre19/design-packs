import React from 'react';

export function Pricing4() {
  const packages = [
    { code: 'PKG-01', name: 'AUDIT & CRITIQUE', price: '£1,800', scope: 'Single publication typographic review + 20-page report' },
    { code: 'PKG-02', name: 'BRAND REFRESH', price: '£6,500', scope: 'Logo tuning, stationary system, and digital guidelines' },
    { code: 'PKG-03', name: 'EXHIBITION SET', price: '£14,000', scope: 'Complete spatial wayfinding + wall text layout manuals' },
    { code: 'PKG-04', name: 'MONOGRAPH DIR', price: '£18,500', scope: 'Full art direction, typesetting, and press inspection' },
  ];

  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">PACKAGE BLOCK MATRIX</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">PRICING 04</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((pkg, idx) => (
            <div key={idx} className="border border-black p-5 flex flex-col justify-between bg-white">
              <div>
                <div className="flex justify-between items-center mb-3 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">
                  <span>{pkg.code}</span>
                  <span>FIXED</span>
                </div>
                <h3 className="font-black text-sm uppercase tracking-tight mb-2">{pkg.name}</h3>
                <div className="text-2xl font-black tracking-tighter mb-4">{pkg.price}</div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-700 leading-tight mb-6">{pkg.scope}</p>
              </div>
              <button className="w-full border border-black py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
