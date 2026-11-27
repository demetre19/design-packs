import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm3() {
  return (
    <section className="w-full bg-[#0b0d10] py-20 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto bg-[#13171c] border border-white/10 p-12 text-center flex flex-col items-center">
        <span className="text-xs font-mono tracking-widest text-[#d4b06a] uppercase block mb-3">SECURE DISPATCH BAND</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#ece8e1] mb-4">Join the Aetheris Private Register</h2>
        <p className="font-sans text-xs text-[#7a8494] max-w-md mb-8">
          Receive confidential notifications regarding new complications, vault openings, and salon exhibitions.
        </p>

        <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter secure email address..."
            className="bg-[#0b0d10] border border-white/20 px-4 py-3 text-xs font-mono text-[#ece8e1] focus:outline-none focus:border-[#d4b06a] flex-1"
          />
          <button className="px-6 py-3 bg-[#d4b06a] text-[#0b0d10] text-xs font-mono tracking-widest hover:bg-[#ece8e1] transition-all flex items-center justify-center gap-2">
            JOIN <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
