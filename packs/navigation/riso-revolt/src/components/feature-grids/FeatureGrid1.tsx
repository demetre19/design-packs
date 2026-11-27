import React from 'react';
import { Layers, Zap, Shield, Sparkles } from 'lucide-react';

export default function FeatureGrid1() {
  const features = [
    {
      icon: <Layers size={24} className="text-[#ffd92e]" />,
      title: "01. TACTILE RISO PRINT",
      desc: "Soy-based inks, custom color separations, and heavyweight archival papers for unforgettable print editions."
    },
    {
      icon: <Zap size={24} className="text-[#ff6b5e]" />,
      title: "02. BRUTALIST WEB UX",
      desc: "Lightning-fast React architectures wrapped in high-contrast, mathematically precise neo-brutalist layouts."
    },
    {
      icon: <Shield size={24} className="text-[#ffd92e]" />,
      title: "03. IDENTITY SYSTEMS",
      desc: "Complete visual identity toolkits including bespoke condensed grotesque typography and tokenized design systems."
    }
  ];

  return (
    <section className="w-full bg-[#fffdf5] py-16 px-6 border-b-3 border-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block bg-[#ffd92e] border-2 border-[#111111] font-mono text-xs font-black px-3 py-1 mb-3 shadow-hard-sm">
            CORE CAPABILITIES
          </div>
          <h2 className="font-grotesk font-black text-4xl sm:text-5xl uppercase tracking-tighter">
            DISCIPLINE & PRECISION.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
              <div>
                <div className="w-12 h-12 bg-[#111111] border-2 border-[#111111] flex items-center justify-center mb-6 shadow-hard-sm">
                  {f.icon}
                </div>
                <h3 className="font-grotesk font-black text-xl uppercase mb-3">{f.title}</h3>
                <p className="font-mono text-xs sm:text-sm text-[#111111]/80 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-[#111111] flex items-center justify-between font-mono text-xs font-bold">
                <span>SPEC // 0{i+1}</span>
                <span className="text-[#ff6b5e]">ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
