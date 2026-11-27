import React from 'react';

export const ContactForm2: React.FC = () => {
  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 border-b border-[#a68a64]/30">
      <div className="max-w-2xl mx-auto border border-[#a68a64]/30 p-10 md:p-16 bg-[#faf7f2] space-y-8">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">FORMULAIRE ÉTROIT</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">Correspondance Privée</h2>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <input type="text" placeholder="NOM COMPLET" className="w-full bg-transparent border-b border-[#1a1512] py-3 text-xs uppercase tracking-[0.2em] placeholder-[#1a1512]/40 focus:outline-none focus:border-[#a68a64]" />
          </div>
          <div>
            <input type="email" placeholder="COURRIEL PERSONNEL" className="w-full bg-transparent border-b border-[#1a1512] py-3 text-xs uppercase tracking-[0.2em] placeholder-[#1a1512]/40 focus:outline-none focus:border-[#a68a64]" />
          </div>
          <div>
            <textarea rows={4} placeholder="VOTRE MESSAGE À L'ATELIER" className="w-full bg-transparent border-b border-[#1a1512] py-3 text-xs uppercase tracking-[0.2em] placeholder-[#1a1512]/40 focus:outline-none focus:border-[#a68a64]"></textarea>
          </div>
          <div className="pt-2 text-center">
            <button type="submit" className="text-xs uppercase tracking-[0.25em] border border-[#1a1512] px-10 py-3.5 hover:bg-[#1a1512] hover:text-[#faf7f2] transition-all">
              Envoyer à l'Atelier
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
