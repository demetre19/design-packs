import React from 'react';
import { Layers, Shield, FileText, Compass } from 'lucide-react';

export function FeatureGrid1() {
  const cards = [
    { year: "1957", label: "BASEL FOUNDRY", title: "Monotype Matrix Restoration", desc: "Digital vectors traced directly from microscopic photographs of lead punches cast in Basel." },
    { year: "1961", label: "PARIS ARCHIVES", title: "Imprimerie Nationale Plates", desc: "First-generation copper plate scans yielding authentic ink-spread simulations." },
    { year: "1983", label: "DIGITAL TRANSITION", title: "PostScript Type 1 Encoding", desc: "Pioneering conversion of historical metal metrics into mathematical bezier curves." },
    { year: "2026", label: "FOUNDRY REVISION", title: "Micro-Optical Master Sizing", desc: "Dynamic optical scaling calibrated for high-resolution museum display screens." }
  ];

  return (
    <section className="w-full bg-neutral-900 text-neutral-100 py-16 px-6 font-mono border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-serif text-white tracking-widest uppercase">01. ERA CARDS ARCHIVE</h2>
          <span className="text-xs text-neutral-500">SECTION A // CHRONOLOGY</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{c.year}</div>
                <div className="text-[10px] text-neutral-500 tracking-wider uppercase mb-4">{c.label}</div>
                <h3 className="text-sm font-bold text-neutral-200 mb-2">{c.title}</h3>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-800 text-[10px] text-neutral-500 flex justify-between">
                <span>PLATE #{570 + i}</span>
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
