/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Contact2() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-xl mx-auto bg-white border border-[#e2e8f0] rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="text-center mb-8">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase mb-2 block">
            Direct Access
          </span>
          <h2 className="text-2xl font-medium text-[#0a0e12] mb-2">Request Secure Consultation</h2>
          <p className="text-xs text-[#5b6b76]">Enter your institutional credentials for priority engineering response.</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#0a0e12]">Institutional Email</label>
            <input 
              type="email" 
              placeholder="name@institution.ch" 
              className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#0a0e12]">Inquiry Type</label>
            <select className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]">
              <option>Series 01 Atomic Reference</option>
              <option>Series 02 Transducer</option>
              <option>Custom Engineering</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#0a0e12]">Message</label>
            <textarea 
              rows={3} 
              placeholder="Briefly state your requirements..." 
              className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl p-3 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]" 
            />
          </div>
          <button 
            type="button" 
            className="w-full py-3 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors flex items-center justify-center gap-2 mt-2"
          >
            <span>Initiate Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
