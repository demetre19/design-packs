/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export function Contact1() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-medium tracking-[0.2em] text-[#5b6b76] uppercase block">
            Institutional Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0a0e12]">
            Commission a sovereign specification.
          </h2>
          <p className="text-sm text-[#5b6b76] leading-relaxed">
            Connect with our Zurich engineering desk to discuss tailored atomic synchronization and acoustic dampening installations for your central facility.
          </p>
          <div className="pt-6 border-t border-[#e2e8f0] space-y-4 text-xs text-[#5b6b76]">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-[#0f4c45]" />
              <span>PGP Encrypted Correspondence Required</span>
            </div>
            <div>Gotthardstrasse 42, 8002 Zurich, Switzerland</div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#0a0e12]">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Dr. Alistair Vance" 
                  className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#0a0e12]">Institutional Domain</label>
                <input 
                  type="email" 
                  placeholder="alistair@centralbank.gov" 
                  className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#0a0e12]">Specification Tier</label>
              <select className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]">
                <option>Sovereign Vault Tier ($38,000 / yr)</option>
                <option>Institutional Node ($12,500 / yr)</option>
                <option>Global Network Custom Tier</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#0a0e12]">Project Parameters & Requirements</label>
              <textarea 
                rows={4} 
                placeholder="Describe your facility's acoustic and timing constraints..." 
                className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl p-4 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45]" 
              />
            </div>
            <button 
              type="button" 
              className="w-full py-3.5 rounded-full bg-[#0f4c45] text-white text-xs font-medium tracking-wide hover:bg-[#0c3d37] transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit Secure Commission Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
