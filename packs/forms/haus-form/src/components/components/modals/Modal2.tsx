/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-[#ffffff] border-b border-[#0a0a0a] font-sans text-[#0a0a0a]">
      <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
        <div className="flex items-center space-x-2 mb-8">
          <span className="w-2 h-2 bg-[#e30613]"></span>
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">MODAL 02 // CONFIRM DIALOG WITH RED ACTION</span>
        </div>

        <button 
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#e30613] hover:text-[#ffffff] hover:border-[#e30613] transition-colors"
        >
          Initialize Reset Action →
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-[#0a0a0a]/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#ffffff] border-2 border-[#0a0a0a] w-full max-w-md p-8">
              <div className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.3em] mb-2">WARNING // DESTRUCTIVE ACTION</div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">PURGE SYSTEM CACHE?</h3>
              <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 mb-8">
                This will remove all locally stored grid configurations and specimen preferences. Action cannot be undone.
              </p>

              <div className="flex space-x-4">
                <button onClick={() => setIsOpen(false)} className="flex-1 py-3 bg-[#e30613] text-[#ffffff] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] transition-colors">
                  Confirm Purge
                </button>
                <button onClick={() => setIsOpen(false)} className="flex-1 py-3 border border-[#0a0a0a] text-xs font-mono uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#ffffff] transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
