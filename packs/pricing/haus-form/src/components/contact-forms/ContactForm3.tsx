/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const ContactForm3 = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">CONTACT 03 // NEWSLETTER STRIP</span>
        </div>

        <div className="border border-[#0a0a0a] p-8 md:p-12 bg-[#0a0a0a] text-[#ffffff] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#e30613]"></span>
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#e30613]">BULLETIN 03</span>
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">SUBSCRIBE TO THE TYPOGRAPHIC GAZETTE</h3>
            <p className="text-xs font-mono uppercase text-[#ffffff]/70">Monthly dispatches on grid theory and Swiss modernism.</p>
          </div>

          {subscribed ? (
            <div className="px-6 py-4 bg-[#e30613] text-[#ffffff] font-mono text-xs uppercase flex items-center space-x-2">
              <Check className="w-4 h-4" />
              <span>Subscribed to Gazette</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex w-full md:w-auto">
              <input 
                type="email" 
                required 
                placeholder="ENTER EMAIL ADDRESS" 
                className="p-4 bg-[#ffffff] text-[#0a0a0a] font-mono text-xs uppercase border-none rounded-none focus:outline-none w-full md:w-72"
              />
              <button type="submit" className="px-6 bg-[#e30613] text-[#ffffff] font-mono text-xs uppercase tracking-widest hover:bg-[#ffffff] hover:text-[#0a0a0a] transition-colors flex items-center justify-center">
                <span className="w-2 h-2 bg-[#ffffff] inline-block mr-2 group-hover:bg-[#0a0a0a]"></span>
                <span>Join</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
