import React from 'react';
import { Grid, FileText, CheckSquare } from 'lucide-react';

export function FeatureGrid2() {
  const details = [
    { num: "01", name: "FOUNDATION SLAB REBAR MATRIX", scale: "1:20" },
    { num: "02", name: "COLUMN-TO-BEAM MOMENT WELD", scale: "1:10" },
    { num: "03", name: "CURTAIN WALL MULLION ANCHOR", scale: "1:15" },
    { num: "04", name: "ROOF PARAPET WATERPROOFING", scale: "1:25" },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex justify-between items-center border-b border-[#1b3a5c]/30 pb-4">
          <div>
            <span className="text-xs text-[#1b3a5c]/70">FEATURE GRID // 02</span>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Numbered Technical Details</h2>
          </div>
          <span className="text-xs font-bold border border-[#1b3a5c] px-3 py-1 bg-white">DWG INDEX GRID</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-5 bg-white shadow-md relative">
              <div className="absolute top-2 left-2 font-bold text-xs bg-[#1b3a5c] text-white px-2 py-0.5">
                DETAIL {item.num}
              </div>
              <div className="h-32 border border-dashed border-[#1b3a5c]/40 my-6 flex items-center justify-center paper-hatch">
                <span className="text-[10px] text-[#1b3a5c]/70">SCALE {item.scale}</span>
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wide mb-2">{item.name}</h3>
              <div className="text-[9px] text-[#1b3a5c]/60 flex justify-between pt-2 border-t border-[#1b3a5c]/20">
                <span>SHEET: D-{item.num}</span>
                <span>APPROVED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
