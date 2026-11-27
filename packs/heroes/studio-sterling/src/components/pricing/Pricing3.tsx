import React from 'react';

export function Pricing3() {
  return (
    <section className="w-full bg-white text-black border-b border-black font-mono py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">SINGLE ENGAGEMENT SPOTLIGHT</h2>
          <span className="text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">PRICING 03</span>
        </div>
        <div className="border border-black p-8 bg-neutral-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest font-bold border border-black px-2 py-0.5 inline-block mb-3">EXCLUSIVE COMMISSIONS</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-3">BESPKE TYPEFACE & LOGOTYPE</h3>
            <p className="text-xs uppercase tracking-wider text-neutral-700 leading-relaxed">
              Commission a custom proprietary typeface family (Display + Text weights) tailored precisely to your institution's architectural vernacular and publication requirements. Includes full licensing.
            </p>
          </div>
          <div className="border border-black p-6 bg-white w-full md:w-80 shrink-0 text-center">
            <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">FIXED FEE</div>
            <div className="text-4xl font-black tracking-tighter mb-2">£9,500</div>
            <div className="text-[10px] uppercase tracking-widest mb-4">4 WEEKS DELIVERY</div>
            <button className="w-full bg-black text-white font-bold uppercase tracking-widest py-2.5 text-xs hover:bg-neutral-800 transition-colors">
              Request Commission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
