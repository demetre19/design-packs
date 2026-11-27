import React from 'react';

export const ContactForm3: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-3xl mx-auto border-2 border-[#a68a64]/40 p-10 bg-[#faf7f2] relative space-y-6">
        <div className="absolute inset-2 border border-[#a68a64]/20 pointer-events-none"></div>
        <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#a68a64] border-b border-[#a68a64]/20 pb-4">
          <span>CARTE DE CORRESPONDANCE</span>
          <span>N° 03</span>
        </div>

        <div className="text-center space-y-3">
          <h3 className="font-serif text-3xl font-light text-[#1a1512]">Bulletin de la Gazette</h3>
          <p className="text-xs uppercase tracking-[0.15em] text-[#1a1512]/70 font-light">
            Recevez chaque trimestre notre recueil imprimé en édition limitée.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 pt-4">
          <input type="email" placeholder="ENTREZ VOTRE COURRIEL" className="flex-1 bg-transparent border-b border-[#1a1512] py-2 text-xs uppercase tracking-[0.2em] focus:outline-none" />
          <button type="submit" className="bg-[#1a1512] text-[#faf7f2] text-xs uppercase tracking-[0.25em] px-8 py-3 hover:bg-[#a68a64] transition-colors">
            Adhérer
          </button>
        </form>
      </div>
    </section>
  );
};
