import React from 'react';

export const Cta2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] border-b border-[#a68a64]/30 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 lg:p-24 flex flex-col justify-center space-y-8 bg-[#faf7f2]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">APPEL SPLIT — N° 02</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1512] leading-tight">
            L'Excellence <br /><span className="italic">sans compromis.</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
            Découvrez nos collections exclusives réservées aux membres du cercle Vesper.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-block bg-[#1a1512] text-[#faf7f2] text-xs uppercase tracking-[0.25em] px-8 py-3.5 hover:bg-[#a68a64] transition-colors">
              Prendre Rendez-vous
            </a>
          </div>
        </div>

        <div className="relative min-h-[350px] bg-[#241d18]">
          <img 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" 
            alt="Edge bled cta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
