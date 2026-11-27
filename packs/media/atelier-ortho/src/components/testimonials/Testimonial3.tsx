import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export function Testimonial3() {
  return (
    <section className="w-full bg-[#1b3a5c] text-white py-16 px-6 border-b border-white/25 font-mono">
      <div className="max-w-4xl mx-auto border-2 border-white/40 p-8 bg-[#142d48] relative shadow-2xl">
        <div className="absolute top-3 right-6 flex items-center gap-2 text-[10px] text-cyan-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>OFFICIAL REFERENCE LETTER // REF-03</span>
        </div>

        <div className="space-y-6 my-4">
          <div className="text-xs text-cyan-300">TO WHOM IT MAY CONCERN:</div>
          <p className="text-xs md:text-sm text-cyan-100 leading-relaxed">
            "Atelier Orthogonal delivered complete structural and architectural drawing packages for our 40-story commercial tower. Their adherence to tolerance specifications, seismic engineering standards, and rigorous coordination was exemplary across every milestone."
          </p>
          <div className="pt-6 border-t border-white/20 flex justify-between items-center text-xs">
            <div>
              <div className="font-bold text-white">DR. SEAN CALLAHAN</div>
              <div className="text-[10px] text-cyan-200">CHIEF STRUCTURAL CONSULTANT, PACIFIC ENGINEERS</div>
            </div>
            <div className="text-right text-[10px] text-cyan-300">
              <div>DATE: 2026.11.25</div>
              <div>SEAL: VERIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
