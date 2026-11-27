import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export function BlogCard1() {
  const posts = [
    { fig: "FIG. 01", title: "Seismic Damping in High-Rise Structures", date: "2026.11.10", read: "4 MIN READ" },
    { fig: "FIG. 02", title: "Thermal Performance of Double-Skin Glass", date: "2026.11.15", read: "6 MIN READ" },
    { fig: "FIG. 03", title: "Zero-Tolerance Foundation Caisson Design", date: "2026.11.20", read: "5 MIN READ" },
  ];

  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="border-b border-white/20 pb-4">
          <span className="text-xs text-cyan-300">BLOG / EDITORIAL // 01</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-1">Technical Journal Plates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="border-2 border-white/40 p-6 bg-[#142d48] flex flex-col justify-between hover:border-cyan-300 transition-colors">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] text-cyan-300 border-b border-white/20 pb-2">
                  <span>{post.fig}</span>
                  <span>{post.read}</span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide leading-snug">{post.title}</h3>
                <p className="text-xs text-cyan-100">Peer-reviewed architectural analysis and engineering methodology breakdown.</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/20 flex justify-between items-center text-xs">
                <span className="text-[10px] text-cyan-200">{post.date}</span>
                <button className="text-cyan-300 hover:underline flex items-center gap-1 cursor-pointer font-bold">
                  <span>READ PLATE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
