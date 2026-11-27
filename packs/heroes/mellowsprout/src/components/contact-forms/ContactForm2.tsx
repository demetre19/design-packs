import React from 'react';
import { Send } from 'lucide-react';

export function ContactForm2() {
  return (
    <section className="w-full bg-[#5ba8e8] py-20 px-6 text-white shadow-xl">
      <div className="max-w-xl mx-auto bg-white text-[#3d2530] p-10 rounded-[40px] shadow-2xl border-4 border-[#3d2530] space-y-6 text-center">
        <h2 className="text-3xl font-black">Quick Inquiry</h2>
        <p className="text-sm font-medium opacity-80">Send us a quick note and we'll reply within 24 hours.</p>
        <div className="space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold" />
          <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold" />
          <textarea rows={3} placeholder="Your Message" className="w-full px-5 py-3 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold"></textarea>
          <button className="w-full py-4 rounded-full bg-[#ff8c42] text-white font-black shadow-lg">Submit Inquiry ✨</button>
        </div>
      </div>
    </section>
  );
}

export function ContactForm3() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] text-center space-y-6">
        <span className="px-4 py-1.5 rounded-full bg-[#6dbf67]/20 text-[#438a3d] font-black text-sm uppercase">💌 stay updated</span>
        <h2 className="text-4xl font-black text-[#3d2530]">Join the MellowSprout Newsletter</h2>
        <div className="flex gap-3 max-w-md mx-auto pt-4">
          <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold focus:outline-none" />
          <button className="px-8 py-4 rounded-full bg-[#ff8c42] text-white font-black shadow-lg hover:bg-[#e07733]">Join</button>
        </div>
      </div>
    </section>
  );
}
