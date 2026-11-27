import React from 'react';
import { Sparkles, Send } from 'lucide-react';

export function ContactForm1() {
  return (
    <section className="w-full bg-[#fdf3e7] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-[#3d2530] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-[#f975a3]/20 text-[#f975a3] font-black text-sm uppercase">💬 get in touch</span>
          <h2 className="text-4xl font-black text-[#3d2530]">We'd love to hear from you!</h2>
          <p className="text-[#3d2530]/80 font-medium">Have a question about our play kits or workshops? Drop us a line and our friendly team will get back to you promptly.</p>
          <div className="space-y-2 font-bold text-[#3d2530]">
            <div>📍 123 Carnival Way, San Francisco</div>
            <div>📧 support@mellowsprout.com</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-black text-sm mb-2 text-[#3d2530]">Your Name</label>
            <input type="text" placeholder="Jane Doe" className="w-full px-6 py-4 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold focus:outline-none focus:border-[#ff8c42]" />
          </div>
          <div>
            <label className="block font-black text-sm mb-2 text-[#3d2530]">Email Address</label>
            <input type="email" placeholder="jane@example.com" className="w-full px-6 py-4 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold focus:outline-none focus:border-[#ff8c42]" />
          </div>
          <div>
            <label className="block font-black text-sm mb-2 text-[#3d2530]">Message</label>
            <textarea rows={3} placeholder="How can we help?" className="w-full px-6 py-4 rounded-2xl bg-[#fdf3e7] border-2 border-[#3d2530]/20 font-bold focus:outline-none focus:border-[#ff8c42]"></textarea>
          </div>
          <button className="w-full py-4 rounded-full bg-[#ff8c42] text-white font-black shadow-lg hover:bg-[#e07733] transition-all flex items-center justify-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
