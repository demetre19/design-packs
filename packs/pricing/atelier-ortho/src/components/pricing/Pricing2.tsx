import React, { useState } from 'react';
import { Check, Sliders } from 'lucide-react';

export function Pricing2() {
  const [revision, setRevision] = useState('REV-A (MONTHLY)');

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#1b3a5c]/30 pb-6 gap-4">
          <div>
            <span className="text-xs text-[#1b3a5c]/70">PRICING MATRIX // 02</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Drawing Revision Selector</h2>
          </div>
          {/* Revision Selector */}
          <div className="flex border-2 border-[#1b3a5c] bg-white p-1">
            <button
              onClick={() => setRevision('REV-A (MONTHLY)')}
              className={`px-4 py-1.5 text-xs font-bold transition-colors cursor-pointer ${revision.includes('MONTHLY') ? 'bg-[#1b3a5c] text-white' : 'hover:bg-[#1b3a5c]/10'}`}
            >
              REV-A: MONTHLY RETAINER
            </button>
            <button
              onClick={() => setRevision('REV-B (YEARLY)')}
              className={`px-4 py-1.5 text-xs font-bold transition-colors cursor-pointer ${revision.includes('YEARLY') ? 'bg-[#1b3a5c] text-white' : 'hover:bg-[#1b3a5c]/10'}`}
            >
              REV-B: ANNUAL CONTRACT (-20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md space-y-4">
            <div className="text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5 inline-block">RETAINER TIER 01</div>
            <h3 className="text-xl font-bold uppercase">Standard Advisory</h3>
            <div className="text-3xl font-bold">
              {revision.includes('MONTHLY') ? '$2,400' : '$1,920'} <span className="text-xs font-normal">/ mo</span>
            </div>
            <p className="text-xs text-[#1b3a5c]/80">Ongoing architectural review, zoning consultations, and preliminary structural checks.</p>
            <button className="w-full bg-[#1b3a5c] text-white py-3 text-xs uppercase font-bold hover:bg-[#254e7a] transition-colors cursor-pointer">
              ACTIVATE {revision}
            </button>
          </div>

          <div className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md space-y-4">
            <div className="text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5 inline-block">RETAINER TIER 02</div>
            <h3 className="text-xl font-bold uppercase">Full Engineering Oversight</h3>
            <div className="text-3xl font-bold">
              {revision.includes('MONTHLY') ? '$6,500' : '$5,200'} <span className="text-xs font-normal">/ mo</span>
            </div>
            <p className="text-xs text-[#1b3a5c]/80">Dedicated structural engineering team, on-site inspections, and full BIM coordination.</p>
            <button className="w-full bg-[#1b3a5c] text-white py-3 text-xs uppercase font-bold hover:bg-[#254e7a] transition-colors cursor-pointer">
              ACTIVATE {revision}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
