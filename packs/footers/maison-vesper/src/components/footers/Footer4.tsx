import React from 'react';

export const Footer4: React.FC = () => {
  return (
    <footer className="w-full bg-[#faf7f2] py-24 px-6 border-t border-[#a68a64]/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">LETTRE CONFIDENTIELLE</span>
          <h3 className="font-serif text-3xl md:text-4xl font-light text-[#1a1512]">Recevez nos Éditions Limitées</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 pt-4">
            <input 
              type="email" 
              placeholder="votre.courriel@domaine.fr" 
              className="flex-1 bg-transparent border-b border-[#1a1512] py-2 text-xs uppercase tracking-[0.2em] focus:outline-none focus:border-[#a68a64] text-[#1a1512] placeholder-[#1a1512]/40"
            />
            <button type="submit" className="text-xs uppercase tracking-[0.25em] bg-[#1a1512] text-[#faf7f2] px-8 py-3 hover:bg-[#a68a64] transition-colors">
              Souscrire
            </button>
          </form>
        </div>

        <div className="border-t border-[#a68a64]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] text-[#1a1512]/60">
          <span>© 2026 MAISON VESPER</span>
          <span>PARIS VII — RUE CAMBON</span>
        </div>
      </div>
    </footer>
  );
};
