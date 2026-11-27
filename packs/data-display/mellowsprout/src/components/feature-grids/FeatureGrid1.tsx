import React from 'react';
import { Palette, Sparkles, Heart, Compass } from 'lucide-react';

export function FeatureGrid1() {
  const features = [
    { title: "Sensory Play Boxes", desc: "Handcrafted tactile kits designed to stimulate curiosity and imagination.", color: "bg-[#ff8c42]", icon: Palette },
    { title: "Expert Guided", desc: "Developed in collaboration with leading early childhood educators.", color: "bg-[#5ba8e8]", icon: Compass },
    { title: "Safe & Sustainable", desc: "Non-toxic organic materials and eco-friendly packaging in every box.", color: "bg-[#f975a3]", icon: Heart },
  ];

  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#ff8c42]/20 text-[#ff8c42] font-black text-sm uppercase tracking-wider">
            ✨ magical features
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3d2530]">
            Why families love MellowSprout
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-xl border-4 border-[#3d2530] flex flex-col items-center text-center transform hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 rounded-2xl ${f.color} text-white flex items-center justify-center mb-6 shadow-lg transform rotate-3`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#3d2530] mb-3">{f.title}</h3>
                <p className="text-[#3d2530]/70 font-medium leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
