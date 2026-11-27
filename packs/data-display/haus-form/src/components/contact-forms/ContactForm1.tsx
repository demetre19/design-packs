/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ContactForm1 = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">CONTACT 01 // SPLIT RULED FORM & TABULAR DETAILS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border border-[#0a0a0a]">
          {/* Form */}
          <div className="md:col-span-7 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#0a0a0a]">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">INQUIRE ABOUT LICENSING</h3>
            {submitted ? (
              <div className="p-6 bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase flex items-center space-x-3">
                <Check className="w-4 h-4 text-[#e30613]" />
                <span>Inquiry transmitted successfully. We will respond within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 font-mono text-xs uppercase">
                <div>
                  <label className="block text-[10px] text-[#0a0a0a]/70 mb-2">01. Full Name / Institution</label>
                  <input type="text" required className="w-full p-3 border border-[#0a0a0a] rounded-none focus:outline-none focus:border-[#e30613]" placeholder="ZÜRICH DESIGN LAB" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#0a0a0a]/70 mb-2">02. Electronic Mail</label>
                  <input type="email" required className="w-full p-3 border border-[#0a0a0a] rounded-none focus:outline-none focus:border-[#e30613]" placeholder="INQUIRY@HAUSDERFORM.CH" />
                </div>
                <div>
                  <label className="block text-[10px] text-[#0a0a0a]/70 mb-2">03. Project Specifications</label>
                  <textarea rows={4} required className="w-full p-3 border border-[#0a0a0a] rounded-none focus:outline-none focus:border-[#e30613]" placeholder="ENTER DETAILS..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#0a0a0a] text-[#ffffff] font-mono text-xs uppercase tracking-widest hover:bg-[#e30613] transition-colors flex items-center justify-center space-x-2">
                  <span>Transmit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="md:col-span-5 p-8 md:p-12 bg-[#0a0a0a] text-[#ffffff] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.3em] block">+ INSTITUTIONAL DESK</span>
              <h4 className="text-xl font-bold uppercase">DIRECT CHANNELS</h4>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#ffffff]/80">
                All inquiries are processed according to strict Swiss confidentiality standards.
              </p>
            </div>
            <div className="space-y-4 font-mono text-xs uppercase border-t border-[#ffffff]/20 pt-6">
              <div><span className="text-[#e30613] mr-2">TEL:</span> +41 44 210 58 00</div>
              <div><span className="text-[#e30613] mr-2">LOC:</span> ZÜRICH, SWITZERLAND</div>
              <div><span className="text-[#e30613] mr-2">HRS:</span> 09:00 - 17:00 CET</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
