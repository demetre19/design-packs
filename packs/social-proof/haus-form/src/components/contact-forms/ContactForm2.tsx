/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ContactForm2 = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">CONTACT 02 // CENTERED NARROW FORM</span>
        </div>

        <div className="max-w-xl mx-auto border border-[#0a0a0a] p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.3em] block mb-2">02. ACCESS REQUEST</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight">SPECIMEN REGISTRATION</h3>
          </div>

          {sent ? (
            <div className="p-4 bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase text-center flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-[#e30613]" />
              <span>Registration Confirmed</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6 font-mono text-xs uppercase">
              <div>
                <label className="block text-[10px] text-[#0a0a0a]/70 mb-2">01. Applicant Name</label>
                <input type="text" required className="w-full p-3 border border-[#0a0a0a] rounded-none focus:outline-none focus:border-[#e30613]" placeholder="HANS MÜLLER" />
              </div>
              <div>
                <label className="block text-[10px] text-[#0a0a0a]/70 mb-2">02. Institutional Email</label>
                <input type="email" required className="w-full p-3 border border-[#0a0a0a] rounded-none focus:outline-none focus:border-[#e30613]" placeholder="MÜLLER@ZURICH.CH" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center justify-center space-x-2">
                <span>Submit Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
