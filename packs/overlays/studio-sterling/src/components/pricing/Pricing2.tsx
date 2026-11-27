import React from 'react';

export function Pricing2() {
  return (
    <section className="w-full bg-black text-white border-b border-white font-mono py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center border-b border-white pb-4 mb-8 text-xs uppercase tracking-widest text-neutral-400">
          <span>INVERTED PRICING PANEL</span>
          <span>RETAINER MODEL</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              ANNUAL DESIGN DIRECTOR RETAINER
            </h2>
            <p className="text-xs uppercase tracking-wider text-neutral-300 leading-relaxed max-w-xl">
              Dedicated quarterly oversight for architectural practices and cultural foundations requiring continuous brand guardianship, publication curation, and typographic auditing.
            </p>
          </div>
          <div className="lg:col-span-5 border border-white p-6 bg-neutral-900">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">ANNUAL COMMITMENT</div>
            <div className="text-5xl font-black tracking-tighter mb-2">£35,000</div>
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6 pb-4 border-b border-white">BILLED QUARTERLY (£8,750 / QTR)</div>
            <ul className="space-y-2 text-xs uppercase tracking-wider mb-6 text-neutral-200">
              <li className="flex items-center gap-2">✓ Priority studio access (24h response)</li>
              <li className="flex items-center gap-2">✓ Unlimited editorial type audits</li>
              <li className="flex items-center gap-2">✓ Two major exhibition wayfinding sets</li>
            </ul>
            <button className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-neutral-200 transition-colors text-xs">
              Secure Annual Retainer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
