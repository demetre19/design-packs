import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-2xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">DIRECT INQUIRY</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-[#16171a]">Confidential Commission Desk</h2>
          <p className="text-stone-600 text-sm">Please submit your inquiry for direct review by the senior partners.</p>
        </div>

        <form className="space-y-8 bg-[#f0efeb] border border-[#e2e0d8] p-8 lg:p-12" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-stone-500">Your Full Name</label>
            <input 
              type="text" 
              placeholder="Enter full name" 
              className="w-full bg-transparent border-b border-[#16171a] py-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e]" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-stone-500">Electronic Mail</label>
            <input 
              type="email" 
              placeholder="name@domain.com" 
              className="w-full bg-transparent border-b border-[#16171a] py-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e]" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-stone-500">Project Location & Program</label>
            <input 
              type="text" 
              placeholder="e.g. Alpine Residence, St. Moritz" 
              className="w-full bg-transparent border-b border-[#16171a] py-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e]" 
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono uppercase text-stone-500">Project Outline & Notes</label>
            <textarea 
              rows={3} 
              placeholder="Describe your site and architectural expectations..." 
              className="w-full bg-transparent border-b border-[#16171a] py-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#b5482e] text-[#fafaf8] py-4 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Transmit Commission Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
