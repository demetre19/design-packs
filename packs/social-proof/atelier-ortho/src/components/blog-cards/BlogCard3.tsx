import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export function BlogCard3() {
  const register = [
    { sheet: "S-101", title: "Foundation & Subgrade Plan", date: "2026.11.20", rev: "REV 04" },
    { sheet: "S-102", title: "Second Floor Framing Matrix", date: "2026.11.22", rev: "REV 02" },
    { sheet: "A-201", title: "East & West Elevation Studies", date: "2026.11.24", rev: "REV 05" },
    { sheet: "M-301", title: "HVAC Risers & Duct Routing", date: "2026.11.25", rev: "REV 01" },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">BLOG / EDITORIAL // 03</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Drawing Register Archive</h2>
        </div>

        <div className="border-2 border-white/40 bg-[#142d48] overflow-x-auto shadow-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/30 bg-[#11263d] text-cyan-300">
                <th className="p-4 uppercase">Sheet Number</th>
                <th className="p-4 uppercase">Drawing Title</th>
                <th className="p-4 uppercase">Date Issued</th>
                <th className="p-4 uppercase">Revision Status</th>
                <th className="p-4 uppercase text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              {register.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="p-4 font-bold text-cyan-300">{row.sheet}</td>
                  <td className="p-4 uppercase">{row.title}</td>
                  <td className="p-4 text-cyan-100">{row.date}</td>
                  <td className="p-4"><span className="border border-cyan-300 px-2 py-0.5 text-[10px] text-cyan-300">{row.rev}</span></td>
                  <td className="p-4 text-right">
                    <button className="text-cyan-300 hover:underline flex items-center gap-1 ml-auto cursor-pointer">
                      <span>VIEW</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
