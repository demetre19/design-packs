import React from 'react';

export function ContactForm3() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-32 text-center border-t border-black/10">
      <div className="max-w-xl mx-auto space-y-8">
        <span className="text-[9px] tracking-widest uppercase text-black/50">inquiries</span>
        <h2 className="font-light text-4xl tracking-tighter lowercase">
          let&apos;s discuss your vision.
        </h2>
        <div className="flex gap-4">
          <input 
            type="email" 
            placeholder="enter your email to connect..." 
            className="flex-1 bg-transparent border border-black/20 px-4 py-3 text-xs font-light lowercase focus:border-black outline-none placeholder:text-black/40"
          />
          <button className="px-6 py-3 bg-black text-white text-xs font-light lowercase hover:bg-black/80 transition-colors">
            connect
          </button>
        </div>
      </div>
    </section>
  );
}
