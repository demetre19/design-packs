import React from 'react';

export const ContactForm1: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">SALON PRIVÉ — CONTACT</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#1a1512]">Prendre Rendez-vous</h2>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 leading-relaxed font-light">
            Nos salons de la rue Cambon vous accueillent pour une consultation privée sur rendez-vous. Veuillez renseigner vos coordonnées ci-contre.
          </p>
          <div className="pt-6 font-mono text-xs text-[#1a1512]/85 space-y-2 border-t border-[#a68a64]/20">
            <div>MESURE HAUTEUR: 180 CM (REF)</div>
            <div>TÉL: +33 1 42 68 00 00</div>
          </div>
        </div>

        <div className="lg:col-span-7 border border-[#a68a64]/30 p-8 md:p-12 bg-[#faf7f2]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#a68a64] mb-2">Nom & Prénom</label>
                <input type="text" className="w-full bg-transparent border-b border-[#1a1512]/30 py-2 text-xs uppercase tracking-[0.1em] focus:outline-none focus:border-[#1a1512]" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#a68a64] mb-2">Courriel</label>
                <input type="email" className="w-full bg-transparent border-b border-[#1a1512]/30 py-2 text-xs uppercase tracking-[0.1em] focus:outline-none focus:border-[#1a1512]" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#a68a64] mb-2">Prestation Souhaitée</label>
              <select className="w-full bg-transparent border-b border-[#1a1512]/30 py-2 text-xs uppercase tracking-[0.1em] focus:outline-none focus:border-[#1a1512] text-[#1a1512]">
                <option>Haute Couture Sur-Mesure</option>
                <option>Demi-Mesure Atelier</option>
                <option>Prêt-à-Porteur Édition</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#a68a64] mb-2">Notes Particulières / Mensurations</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-[#1a1512]/30 py-2 text-xs uppercase tracking-[0.1em] focus:outline-none focus:border-[#1a1512]"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1a1512] text-[#faf7f2] py-4 text-xs uppercase tracking-[0.25em] hover:bg-[#a68a64] transition-colors">
              Soumettre la Demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
