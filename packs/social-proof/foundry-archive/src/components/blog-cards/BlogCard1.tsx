import React from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

export function BlogCard1() {
  const entries = [
    { date: "14.10.1957", ref: "J-01", title: "Notes on the Basel Punchcutting Workshop", excerpt: "An examination of the hand-filed steel punches used in early Swiss sans-serif castings." },
    { date: "02.05.1961", ref: "J-02", title: "The Imprimerie Nationale Vault Discovery", excerpt: "Cataloging the 17th-century copper matrices attributed to Jean Jannon in Paris." },
    { date: "19.11.1983", ref: "J-03", title: "PostScript Conversion Metrics", excerpt: "Translating lead strike physical tolerances into Bézier curves for digital typesetting." }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. JOURNAL ENTRIES AS CATALOG CARDS</h2>
          <span className="text-xs text-neutral-500">ARCHIVE LOGS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {entries.map((e, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase mb-4">
                  <span>{e.date}</span>
                  <span className="border border-neutral-800 px-2 py-0.5">{e.ref}</span>
                </div>
                <h3 className="text-sm font-serif font-bold text-white mb-2">{e.title}</h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">{e.excerpt}</p>
              </div>
              <a href="#read" className="text-xs text-neutral-300 flex items-center space-x-1 hover:text-white pt-4 border-t border-neutral-800">
                <span>READ ARCHIVAL ENTRY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
