import React from 'react';
import { Award } from 'lucide-react';

export function Footer4() {
  return (
    <footer className="w-full bg-[#f4f4f2] border-t border-[#d0d0cc] py-16 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6 bg-white border-2 border-[#232a30] p-8 shadow-sm">
        <Award className="w-8 h-8 text-[#2e5e8e] mx-auto" />
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#232a30] font-semibold">
          ATELIER SEAL OF AUTHENTICITY
        </div>
        <p className="font-mono text-xs text-[#232a30]/70 tracking-wider">
          Certified by the Geneva Horological Testing Institute under reference REF. CERT-8842.
        </p>
        <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em] pt-2">
          VAUCHER & FILS · GENÈVE · SWITZERLAND
        </div>
      </div>
    </footer>
  );
}
