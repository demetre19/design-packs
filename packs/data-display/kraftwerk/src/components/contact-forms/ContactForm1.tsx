import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export function ContactForm1() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#e8e8e6] border-b border-[#111111] font-mono select-none p-6 md:p-12">
      <div className="max-w-6xl mx-auto border-2 border-[#111] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#111]">
          {/* Left Data Cells */}
          <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-[#f4f4f0]">
            <div>
              <div className="flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#666] mb-4">
                <Terminal className="w-3 h-3" />
                <span>DOSSIER INQUIRY</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4">
                REQUEST CHASSIS ALLOCATION
              </h3>
              <p className="text-[10px] text-[#555] uppercase leading-relaxed mb-6">
                Submit your credentials for official verification and allocation placement in the Stuttgart production schedule.
              </p>
            </div>

            <div className="space-y-3 text-[10px] border-t border-[#111] pt-6">
              <div className="flex justify-between">
                <span className="text-[#666]">SECURE DESK</span>
                <span className="font-bold">+49 711 9904</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">EMAIL DOSSIER</span>
                <span className="font-bold">ALLOCATION@KRAFTWERK.SYS</span>
              </div>
            </div>
          </div>

          {/* Right Compartmented Form */}
          <div className="lg:col-span-7 p-8">
            {submitted ? (
              <div className="p-8 bg-[#f8f8f6] border border-[#111] text-center space-y-4">
                <div className="text-xs font-bold uppercase">[DOSSIER SUBMITTED SUCCESSFULLY]</div>
                <p className="text-[10px] text-[#555]">Your allocation request has been logged under ref #KW-9942. Our engineering desk will review your credentials within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#111] text-[#e8e8e6] text-[9px] uppercase font-bold cursor-pointer"
                >
                  SUBMIT ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-[10px]">
                <div>
                  <label className="block text-[#666] mb-1 font-bold">01 / APPLICANT FULL NAME</label>
                  <input type="text" required placeholder="E.G. H. VON STUCK" className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none focus:bg-white" />
                </div>
                <div>
                  <label className="block text-[#666] mb-1 font-bold">02 / SECURE EMAIL ADDRESS</label>
                  <input type="email" required placeholder="APPLICANT@DOMAIN.SYS" className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none focus:bg-white" />
                </div>
                <div>
                  <label className="block text-[#666] mb-1 font-bold">03 / ALLOCATION TIER PREFERENCE</label>
                  <select className="w-full p-3 border border-[#111] bg-[#fcfcfc] uppercase focus:outline-none focus:bg-white">
                    <option>TIER 01 - STANDARD TRACK SPEC ($245K)</option>
                    <option>TIER 02 - HOMOLOGATION CLUB ($385K)</option>
                    <option>TIER 03 - WORKS FACTORY EDITION ($590K)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#111] text-[#e8e8e6] font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-[#333] transition-colors cursor-pointer mt-6"
                >
                  <span>TRANSMIT ALLOCATION DOSSIER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
