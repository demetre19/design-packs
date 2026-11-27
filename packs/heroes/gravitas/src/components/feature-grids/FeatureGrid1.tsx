import React from 'react';
import { Type, Grid, Sliders, Layers } from 'lucide-react';

export function FeatureGrid1() {
  const cards = [
    { weight: 'Hairline (200)', text: 'Aa', desc: 'Delicate hairline masters for editorial titles at 48pt+.' },
    { weight: 'Light (300)', text: 'Aa', desc: 'Refined subheadings with exceptional clarity on retina screens.' },
    { weight: 'Regular (400)', text: 'Aa', desc: 'The benchmark text weight for extended body reading.' },
    { weight: 'Medium (500)', text: 'Aa', desc: 'Balanced emphasis for interactive UI and button labels.' },
    { weight: 'Bold (700)', text: 'Aa', desc: 'Strong structural hierarchy for primary headings.' },
    { weight: 'Extra Bold (900)', text: 'Aa', desc: 'Maximum visual impact for brutalist poster design.' },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Grid 01 // Weight Comparison Cards</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 text-white">Six Discrete Optical Weights</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">HAIRLINE TO EXTRA BOLD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-800">
          {cards.map((card, idx) => (
            <div key={idx} className="border-r border-b border-neutral-800 p-8 bg-neutral-950 flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-6">
                  <span>[{idx + 1}] SPECIMEN</span>
                  <span>{card.weight}</span>
                </div>
                <div className={`text-7xl font-sans tracking-tighter mb-6 text-white ${
                  idx === 0 ? 'font-extralight' :
                  idx === 1 ? 'font-light' :
                  idx === 2 ? 'font-normal' :
                  idx === 3 ? 'font-medium' :
                  idx === 4 ? 'font-bold' : 'font-black'
                }`}>
                  {card.text}
                </div>
              </div>
              <div>
                <p className="text-sm font-light text-neutral-400 leading-relaxed border-t border-neutral-900 pt-4">
                  {card.desc}
                </p>
                <div className="mt-4 text-[10px] font-mono text-neutral-400">
                  KERN: AUTO / TRACK: -0.03EM
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
