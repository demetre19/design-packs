import React from 'react';

export const FeatureGrid2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/3] bg-[#241d18] border border-[#a68a64]/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" 
                alt="Atelier detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 text-[#a68a64] font-mono text-sm">×</div>
          </div>
          <div className="md:col-span-6 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">SECTION I — LA MATIÈRE</span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">Sourcing d'Exception</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
              Nos fils de soie et de cachemire sont sourcés directement auprès de producteurs partenaires en Mongolie et dans le Piémont, garantissant une pureté absolue et un respect total des traditions.
            </p>
          </div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">SECTION II — LA STRUCTURE</span>
            <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">Le Sur-Mesure Parisien</h3>
            <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
              Chaque client bénéficie de trois essayages privés dans notre salon particulier, où les ajustements millimétriques sont réalisés au fil de soie par nos maîtres tailleurs.
            </p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 relative">
            <div className="aspect-[4/3] bg-[#241d18] border border-[#a68a64]/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" 
                alt="Atelier detail 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-3 -left-3 text-[#a68a64] font-mono text-sm">×</div>
          </div>
        </div>
      </div>
    </section>
  );
};
