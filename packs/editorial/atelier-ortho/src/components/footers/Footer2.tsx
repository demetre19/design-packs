import React from 'react';
import { FileText } from 'lucide-react';

export function Footer2() {
  return (
    <footer className="w-full paper-bg text-[#1b3a5c] py-12 px-6 border-t border-[#1b3a5c]/30 font-mono text-xs uppercase tracking-wider paper-grid-bg">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border-2 border-[#1b3a5c] p-6 bg-white shadow-md grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] text-[#1b3a5c]/60">PRACTICE</span>
            <div className="font-bold text-sm mt-1">ATELIER ORTHOGONAL</div>
          </div>
          <div>
            <span className="text-[10px] text-[#1b3a5c]/60">LOCATION</span>
            <div className="font-bold text-sm mt-1">SAN FRANCISCO // TOKYO</div>
          </div>
          <div>
            <span className="text-[10px] text-[#1b3a5c]/60">DWG REF</span>
            <div className="font-bold text-sm mt-1">FT-02-REG</div>
          </div>
          <div>
            <span className="text-[10px] text-[#1b3a5c]/60">APPROVAL</span>
            <div className="font-bold text-sm mt-1 text-emerald-700">CHECKED & APPROVED</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-[#1b3a5c]/70 border-t border-[#1b3a5c]/30 pt-6">
          <div>DRAWING REGISTER REGISTERED UNDER ISO 9001</div>
          <div>SHEET FT-02 // ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </footer>
  );
}
