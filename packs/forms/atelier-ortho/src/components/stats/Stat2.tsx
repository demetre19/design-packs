import React from 'react';
import { FileText } from 'lucide-react';

export function Stat2() {
  const stats = [
    { title: "COMMERCIAL TOWERS", val: "42", ref: "TB-01" },
    { title: "CIVIC STRUCTURES", val: "18", ref: "TB-02" },
    { title: "RESIDENTIAL MASTERWORKS", val: "96", ref: "TB-03" },
    { title: "PATENTED DETAILS", val: "14", ref: "TB-04" },
  ];

  return (
    <section className="w-full paper-bg text-[#1b3a5c] py-16 px-6 border-b border-[#1b3a5c]/30 font-mono paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-[#1b3a5c]/30 pb-4">
          <span className="text-xs text-[#1b3a5c]/70">STATS SECTION // 02</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Title Block Statistics Register</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md relative">
              <div className="absolute top-2 right-2 text-[10px] bg-[#1b3a5c] text-white px-2 py-0.5">
                {s.ref}
              </div>
              <div className="text-3xl font-bold my-3">{s.val}</div>
              <div className="text-xs uppercase font-bold tracking-wide">{s.title}</div>
              <div className="text-[9px] text-[#1b3a5c]/60 mt-4 pt-2 border-t border-[#1b3a5c]/20">
                STATUS: VERIFIED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
