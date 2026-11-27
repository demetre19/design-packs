/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export function Modal1() {
  return (
    <section className="bg-[#f6f8fa] py-20 px-6 border-b border-[#e2e8f0]">
      <div className="max-w-xl mx-auto">
        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-sm relative">
          <button className="absolute top-6 right-6 text-[#5b6b76] hover:text-[#0a0e12]">
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-xs font-mono tracking-widest text-[#0f4c45] uppercase block mb-2">DIALOG_01 // SECURE COMMission</span>
          <h3 className="text-xl font-medium text-[#0a0e12] mb-2">Request Specification Handshake</h3>
          <p className="text-xs text-[#5b6b76] mb-6">Verify institutional parameters before transmitting encryption keys.</p>

          <div className="space-y-4 mb-6">
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#0a0e12]">Institutional Identifier</label>
              <input type="text" defaultValue="ZURICH_VAULT_NODE_04" className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs text-[#0a0e12]" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#0a0e12]">PGP Fingerprint</label>
              <input type="text" defaultValue="8F2A 4C9E B192 783D" className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-xl px-4 py-2.5 text-xs font-mono text-[#0a0e12]" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#f1f4f8]">
            <button className="px-4 py-2 rounded-full border border-[#e2e8f0] text-xs font-medium text-[#5b6b76] hover:bg-[#f1f4f8]">
              Cancel
            </button>
            <button className="px-5 py-2 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37] flex items-center gap-1.5">
              <span>Authorize Handshake</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
