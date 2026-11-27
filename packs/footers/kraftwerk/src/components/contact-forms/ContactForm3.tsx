import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function ContactForm3() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="p-4 bg-[#111] text-[#e8e8e6] flex justify-between items-center text-[10px] uppercase tracking-widest">
          <span className="font-bold flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>[SECURE NEWSLETTER STRIP // BULLETIN 03]</span>
          </span>
          <span>ENCRYPTED RSS</span>
        </div>

        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-1">SUBSCRIBE TO HOMOLOGATION BULLETINS</h3>
            <p className="text-[10px] text-[#666] uppercase">Receive weekly engineering change notices and telemetry updates directly.</p>
          </div>

          {subscribed ? (
            <div className="px-6 py-3 bg-[#e8e8e6] border border-[#111] text-[10px] font-bold uppercase">
              [SUBSCRIBED TO SECURE BULLETINS]
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex w-full md:w-auto items-stretch">
              <input 
                type="email" 
                required 
                placeholder="ENTER EMAIL ADDRESS..." 
                className="p-3 border border-[#111] bg-[#fcfcfc] text-[10px] uppercase focus:outline-none w-full md:w-72" 
              />
              <button 
                type="submit" 
                className="px-6 bg-[#111] text-[#e8e8e6] font-bold text-[10px] uppercase tracking-widest hover:bg-[#333] transition-colors cursor-pointer flex items-center space-x-1"
              >
                <span>JOIN</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
