import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FeatureGrid3() {
  const items = [
    { label: "Longevity Protocols", title: "Advanced Biomarker Tracking", desc: "Precision blood panel analysis paired with actionable lifestyle architecture." },
    { label: "Brand Identity", title: "Editorial Visual Systems", desc: "Sophisticated typography, warm earthy palettes, and bespoke collateral." },
    { label: "Patient Experience", title: "Somatic Intake Journeys", desc: "Frictionless digital check-ins with deeply personal human touchpoints." },
    { label: "Executive Retreats", title: "Immersive Health Sabbaticals", desc: "Curated multi-day wellness immersions for leadership teams." }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Comprehensive Offerings
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Designed for depth, executed with precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-[#e8f0ec] rounded-[24px] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#2a7a6d] font-semibold mb-3">
                  {item.label}
                </div>
                <h3 className="font-serif text-2xl text-[#122420] mb-3">{item.title}</h3>
                <p className="text-[#122420]/80 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#122420]/10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1d4f47]">Inquire</span>
                <div className="w-8 h-8 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47] group-hover:bg-[#1d4f47] group-hover:text-[#faf6f0] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
