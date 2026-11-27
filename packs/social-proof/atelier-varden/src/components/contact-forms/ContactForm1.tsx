import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-[#fafaf8] py-16 lg:py-24 border-b border-[#e2e0d8] font-sans">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-[5px] h-[5px] bg-[#b5482e]"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">DIRECT COMMISSION</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#16171a]">Initiate a Project Discussion</h2>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed">
            We accept a strictly limited number of residential and cultural commissions per annum to ensure uncompromising design rigor.
          </p>
          <div className="space-y-6 pt-4 border-t border-[#e2e0d8] font-mono text-xs">
            <div>
              <span className="text-stone-400 uppercase block mb-1">Zürich Studio</span>
              <span className="text-[#16171a]">Zürichbergstrasse 44, 8044 Zürich</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase block mb-1">Tokyo Studio</span>
              <span className="text-[#16171a]">Minami-Aoyama 3-chome, Minato-ku</span>
            </div>
            <div>
              <span className="text-stone-400 uppercase block mb-1">Electronic Mail</span>
              <span className="text-[#b5482e]">atelier@varden.arch</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#f0efeb] border border-[#e2e0d8] p-8 lg:p-10 space-y-6">
          <div className="text-xs font-mono uppercase tracking-widest text-stone-500 pb-3 border-b border-[#e2e0d8]">
            Commission Application Form
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Dr. / Mr. / Ms." 
                  className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">Electronic Mail</label>
                <input 
                  type="email" 
                  placeholder="client@domain.com" 
                  className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] rounded-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">Project Location</label>
                <input 
                  type="text" 
                  placeholder="City, Country / Site Region" 
                  className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">Estimated Budget Range</label>
                <select className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] rounded-none">
                  <option>$1.5M — $3.0M</option>
                  <option>$3.0M — $6.0M</option>
                  <option>$6.0M+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-600">Project Scope & Topography Notes</label>
              <textarea 
                rows={4} 
                placeholder="Describe site conditions, spatial requirements, and anticipated timeline..." 
                className="w-full bg-[#fafaf8] border border-[#e2e0d8] p-3 text-sm text-[#16171a] focus:outline-none focus:border-[#b5482e] rounded-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#b5482e] text-[#fafaf8] py-3.5 px-6 text-xs font-mono uppercase tracking-widest hover:bg-[#9a3c25] transition-colors flex items-center justify-center space-x-2 rounded-none"
            >
              <span>Submit Commission Application</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
