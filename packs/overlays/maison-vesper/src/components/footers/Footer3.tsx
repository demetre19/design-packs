import React from 'react';

export const Footer3: React.FC = () => {
  return (
    <footer className="w-full bg-[#faf7f2] py-20 px-6 border-t border-[#a68a64]/30 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <a href="#" className="font-serif text-3xl tracking-[0.3em] uppercase text-[#1a1512] font-light inline-block">
          MAISON VESPER
        </a>
        <div className="w-12 h-[1px] bg-[#a68a64] mx-auto"></div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#1a1512]/60">
          Paris • Rue Cambon • Édition 2026
        </p>
      </div>
    </footer>
  );
};
