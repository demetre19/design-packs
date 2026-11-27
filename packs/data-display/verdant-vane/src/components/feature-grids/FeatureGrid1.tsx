import React from 'react';
import { Sparkles, Activity, Shield, HeartPulse } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-[#2a7a6d]" />,
      title: "Integrative Diagnostics",
      description: "Comprehensive biomarker analysis and epigenetic profiling paired with human-centric interpretation."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#2a7a6d]" />,
      title: "Boutique Brand Architecture",
      description: "Crafting distinct visual and spatial identities that communicate uncompromising clinical excellence."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#2a7a6d]" />,
      title: "Somatic Patient Journeys",
      description: "Designing tactile, calming clinical touchpoints that reduce cortisol and foster profound patient trust."
    }
  ];

  return (
    <section className="w-full bg-[#faf6f0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold mb-3">
            Core Disciplines
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#122420] tracking-tight">
            Harmonizing science with sensory grace.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-[#e8f0ec] rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#faf6f0] flex items-center justify-center mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-serif text-2xl text-[#122420] mb-3">{f.title}</h3>
                <p className="text-[#122420]/80 font-light leading-relaxed text-sm">{f.description}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#122420]/10 flex items-center text-xs font-semibold uppercase tracking-wider text-[#1d4f47]">
                <span>Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
